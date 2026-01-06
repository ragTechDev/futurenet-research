import fs from "fs";
import path from "path";
import Link from "next/link";

import styles from "./analytics.module.css";

import { QUESTIONS } from "../quizQuestions";

type RawSubmission = {
  timestamp: string;
  persona_id: string;
  participant_id: string;
  quiz_version?: string | null;
  question_set_hash?: string | null;
  respondent_type?: string | null;
  research_opt_in?: boolean | null;
  birth_year?: number | null;
  gender?: string | null;
  kids_ages?: string[] | null;
  answers?: Array<{
    question_id: string;
    selected_option: string;
    chapter?: string;
  }> | null;
};

function parseRawJsonl(filePath: string): RawSubmission[] {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const out: RawSubmission[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) continue;

    try {
      const obj = JSON.parse(line) as RawSubmission;
      if (!obj || typeof obj !== "object") continue;
      out.push(obj);
    } catch {
      continue;
    }
  }

  return out;
}

function inc(map: Map<string, number>, key: string, n = 1) {
  map.set(key, (map.get(key) ?? 0) + n);
}

function toSortedEntries(map: Map<string, number>) {
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function formatHumanDateTime(ts: string | null) {
  if (!ts) return "—";
  const d = new Date(ts);
  if (!Number.isFinite(d.getTime())) return ts;
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }).format(d);
  } catch {
    return d.toLocaleString();
  }
}

function ageBucketFromBirthYear(birthYear: number | null | undefined) {
  if (!birthYear || !Number.isFinite(birthYear)) return "unknown";
  const y = Number(birthYear);
  const now = new Date().getFullYear();
  const age = now - y;
  if (!Number.isFinite(age) || age < 0 || age > 120) return "unknown";

  if (age < 18) return "<18";
  if (age <= 24) return "18-24";
  if (age <= 34) return "25-34";
  if (age <= 44) return "35-44";
  if (age <= 54) return "45-54";
  if (age <= 64) return "55-64";
  return "65+";
}

function BarChart({ title, entries }: { title: string; entries: Array<[string, number]> }) {
  const max = entries.reduce((m, [, v]) => Math.max(m, v), 0) || 1;

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.chart}>
        {entries.length === 0 ? <div className={styles.muted}>No data</div> : null}
        {entries.map(([k, v]) => (
          <div key={k} className={styles.row}>
            <div className={styles.label}>{k}</div>
            <div className={styles.barWrap}>
              <div className={styles.bar} style={{ width: `${Math.round((v / max) * 1000) / 10}%` }} />
            </div>
            <div className={styles.value}>{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getOptionLabel(questionId: string, optionId: string) {
  const q = QUESTIONS.find((qq) => qq.id === questionId);
  if (!q) return optionId;
  const opt = q.options.find((o) => o.id === optionId);
  return opt?.label ?? optionId;
}

function optionColor(index: number) {
  const palette = [
    "rgba(20, 20, 20, 0.82)",
    "rgba(20, 20, 20, 0.55)",
    "rgba(20, 20, 20, 0.38)",
    "rgba(20, 20, 20, 0.25)",
  ];
  return palette[index % palette.length];
}

function OptionStackedBars({
  questionId,
  respondentTypes,
  countsByType,
}: {
  questionId: string;
  respondentTypes: string[];
  countsByType: Map<string, Map<string, number>>;
}) {
  const q = QUESTIONS.find((qq) => qq.id === questionId) ?? null;
  const optionIds = q
    ? q.options.map((o) => o.id)
    : [...new Set([...countsByType.values()].flatMap((m) => [...m.keys()]))];

  const optionIndex = new Map<string, number>();
  for (let i = 0; i < optionIds.length; i += 1) optionIndex.set(optionIds[i], i);

  return (
    <div className={styles.answerViz}>
      <div className={styles.legend}>
        {optionIds.map((optId) => (
          <div key={optId} className={styles.legendItem}>
            <span
              className={styles.legendSwatch}
              style={{ background: optionColor(optionIndex.get(optId) ?? 0) }}
              aria-hidden="true"
            />
            <span className={styles.legendLabel}>{getOptionLabel(questionId, optId)}</span>
          </div>
        ))}
      </div>

      <div className={styles.stackList}>
        {respondentTypes.map((t) => {
          const byOption = countsByType.get(t) ?? new Map<string, number>();
          const total = [...byOption.values()].reduce((s, v) => s + v, 0);

          return (
            <div key={t} className={styles.stackRow}>
              <div className={styles.stackLabel}>{t}</div>
              <div className={styles.stackBar} aria-label={`Answer distribution for ${t}`}>
                {optionIds.map((optId) => {
                  const count = byOption.get(optId) ?? 0;
                  const pct = total > 0 ? count / total : 0;
                  const idx = optionIndex.get(optId) ?? 0;
                  return (
                    <div
                      key={optId}
                      className={styles.stackSeg}
                      style={{ width: `${Math.round(pct * 1000) / 10}%`, background: optionColor(idx) }}
                      title={`${t} — ${getOptionLabel(questionId, optId)}: ${count} (${Math.round(pct * 1000) / 10}%)`}
                    />
                  );
                })}
              </div>
              <div className={styles.stackTotal} title={`Total answers for ${t}`}>{total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DigitalParentQuizAnalyticsPage() {
  const filePath = path.join(process.cwd(), "app", "digital-parent-quiz", "submissions.raw.jsonl");

  const submissions = fs.existsSync(filePath) ? parseRawJsonl(filePath) : [];

  const respondentTypeCounts = new Map<string, number>();
  const personaIdCounts = new Map<string, number>();
  const ageBucketCounts = new Map<string, number>();
  const genderCounts = new Map<string, number>();
  const parentKidsAgesCounts = new Map<string, number>();
  const researchOptInCounts = new Map<string, number>();

  const answerCountsByQuestion = new Map<string, Map<string, Map<string, number>>>();
  const respondentTypesSeen = new Set<string>();

  let latestTs: string | null = null;
  let latestMs = -Infinity;

  for (const s of submissions) {
    const type = (s.respondent_type ?? "unknown") || "unknown";
    const persona = (s.persona_id ?? "unknown") || "unknown";
    const gender = (s.gender ?? "unknown") || "unknown";

    const optInKey = s.research_opt_in === true ? "opted_in" : s.research_opt_in === false ? "not_opted_in" : "unknown";

    inc(respondentTypeCounts, type);
    inc(personaIdCounts, persona);
    inc(ageBucketCounts, ageBucketFromBirthYear(s.birth_year));
    inc(genderCounts, gender);
    inc(researchOptInCounts, optInKey);

    respondentTypesSeen.add(type);

    const t = new Date(s.timestamp).getTime();
    if (Number.isFinite(t) && t > latestMs) {
      latestMs = t;
      latestTs = s.timestamp;
    }

    if (type === "parent" && Array.isArray(s.kids_ages)) {
      for (const band of s.kids_ages) {
        if (!band) continue;
        inc(parentKidsAgesCounts, band);
      }
    }

    if (Array.isArray(s.answers)) {
      for (const a of s.answers) {
        if (!a || typeof a.question_id !== "string" || typeof a.selected_option !== "string") continue;
        const qid = a.question_id;
        const optId = a.selected_option;

        const byType = answerCountsByQuestion.get(qid) ?? new Map<string, Map<string, number>>();
        answerCountsByQuestion.set(qid, byType);

        const byOption = byType.get(type) ?? new Map<string, number>();
        byType.set(type, byOption);

        inc(byOption, optId);
      }
    }
  }

  const totalRespondents = submissions.length;
  const respondentTypes = [...respondentTypesSeen].sort((a, b) => a.localeCompare(b));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Digital Parent Quiz — Analytics</h1>
          <div className={styles.headerActions}>
            <Link href="/digital-parent-quiz" className={styles.button}>
              Back to quiz
            </Link>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Participant data</h2>

          <section className={styles.metrics}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Number of respondents</div>
              <div className={styles.metricValue}>{totalRespondents}</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Latest submission</div>
              <div className={styles.metricValue} style={{ fontSize: 16, fontWeight: 650 }}>
                {formatHumanDateTime(latestTs)}
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <div className={styles.cardTitle}>Opt-in questions</div>
            <div className={styles.muted} style={{ marginTop: 8 }}>
              These fields are only meaningful when <code>research_opt_in</code> is true.
            </div>
            <div className={styles.optInGrid}>
              <div className={styles.optInItem}>
                <code>birth_year</code>
              </div>
              <div className={styles.optInItem}>
                <code>gender</code>
              </div>
              <div className={styles.optInItem}>
                <code>nationality</code>
              </div>
              <div className={styles.optInItem}>
                <code>ethnicity</code>
              </div>
              <div className={styles.optInItem}>
                <code>kids_ages</code> (parents only)
              </div>
            </div>
          </section>

          <div className={styles.grid}>
            <BarChart title="Breakdown: research opt-in" entries={toSortedEntries(researchOptInCounts)} />
            <BarChart title="Breakdown: respondent type" entries={toSortedEntries(respondentTypeCounts)} />
            <BarChart title="Breakdown: persona id" entries={toSortedEntries(personaIdCounts)} />
            <BarChart title="Breakdown: ages of respondents" entries={toSortedEntries(ageBucketCounts)} />
            <BarChart title="Breakdown: gender of respondents" entries={toSortedEntries(genderCounts)} />
            <BarChart title="Parents only: breakdown of kids ages" entries={toSortedEntries(parentKidsAgesCounts)} />
          </div>
        </section>

        {!fs.existsSync(filePath) ? (
          <section className={styles.card}>
            <div className={styles.muted}>
              Could not find <code>{filePath}</code>. Create or commit <code>submissions.raw.jsonl</code> to view analytics.
            </div>
          </section>
        ) : null}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Quiz answers</h2>
          <div className={styles.muted} style={{ marginTop: 6 }}>
            For each quiz question, the table shows how answers break down across <code>respondent_type</code>.
          </div>

          <div className={styles.answersList}>
            {QUESTIONS.map((q) => {
              const countsByType = answerCountsByQuestion.get(q.id) ?? new Map<string, Map<string, number>>();
              const totalForQuestion = [...countsByType.values()].reduce(
                (sum, m) => sum + [...m.values()].reduce((s, v) => s + v, 0),
                0
              );

              return (
                <section key={q.id} className={styles.card}>
                  <div className={styles.cardTitle}>
                    {q.chapter} — {q.id}
                  </div>
                  <div className={styles.muted} style={{ marginTop: 6 }}>
                    {q.prompt}
                  </div>
                  <div className={styles.muted} style={{ marginTop: 8 }}>
                    Total answers recorded: <strong>{totalForQuestion}</strong>
                  </div>

                  <OptionStackedBars questionId={q.id} respondentTypes={respondentTypes} countsByType={countsByType} />
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
