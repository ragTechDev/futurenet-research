"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type AgeGroup = "5-7" | "8-10" | "11-13" | "14-16";
type ScanState = "idle" | "scanning" | "complete";
type ResultType = "suitable" | "caution" | "not-recommended";

type ScanStep = {
  id: string;
  label: string;
  icon: string;
};

type BreakdownItem = {
  label: string;
  status: "good" | "caution" | "bad";
  statusText: string;
};

type EvaluationResult = {
  type: ResultType;
  title: string;
  explanation: string;
  safetyScore: number;
  breakdown: BreakdownItem[];
  actionText?: string;
  alternatives?: string[];
};

type ParentReview = {
  rating: number;
  count: number;
  tags: string[];
};

const SCAN_STEPS: ScanStep[] = [
  { id: "language", label: "Scanning language", icon: "📝" },
  { id: "images", label: "Checking images", icon: "🖼️" },
  { id: "ads", label: "Detecting ads", icon: "🎯" },
  { id: "reviews", label: "Looking for parent reviews", icon: "⭐" },
];

const MOCK_RESULTS: Record<string, EvaluationResult> = {
  "youtube.com": {
    type: "caution",
    title: "Some parts may not be suitable",
    explanation: "YouTube has a mix of content. While YouTube Kids is safer, regular YouTube contains videos that may not be appropriate for this age group. Parental supervision is recommended.",
    safetyScore: 3,
    breakdown: [
      { label: "Language", status: "caution", statusText: "Mixed" },
      { label: "Images", status: "caution", statusText: "Varies" },
      { label: "Ads", status: "caution", statusText: "Present" },
      { label: "External links", status: "good", statusText: "Limited" },
      { label: "Reading level", status: "good", statusText: "Appropriate" },
    ],
    actionText: "Continue with protection",
  },
  "pbskids.org": {
    type: "suitable",
    title: "Suitable for ages 5–10",
    explanation: "PBS Kids is designed specifically for children with educational content, no ads, and age-appropriate material. This is a safe and enriching website for kids.",
    safetyScore: 5,
    breakdown: [
      { label: "Language", status: "good", statusText: "Child-friendly" },
      { label: "Images", status: "good", statusText: "Safe" },
      { label: "Ads", status: "good", statusText: "None" },
      { label: "External links", status: "good", statusText: "Controlled" },
      { label: "Reading level", status: "good", statusText: "Age-appropriate" },
    ],
  },
  "reddit.com": {
    type: "not-recommended",
    title: "Not recommended for this age",
    explanation: "Reddit contains user-generated content that is often not moderated for children. There may be mature themes, inappropriate language, and unfiltered discussions.",
    safetyScore: 1,
    breakdown: [
      { label: "Language", status: "bad", statusText: "Unfiltered" },
      { label: "Images", status: "bad", statusText: "Unmoderated" },
      { label: "Ads", status: "caution", statusText: "Present" },
      { label: "External links", status: "bad", statusText: "Unrestricted" },
      { label: "Reading level", status: "caution", statusText: "Adult-oriented" },
    ],
    actionText: "Ask a parent to review",
    alternatives: ["PBS Kids", "National Geographic Kids", "Scratch (MIT)"],
  },
};

const MOCK_REVIEWS: Record<string, ParentReview> = {
  "pbskids.org": {
    rating: 4.8,
    count: 1247,
    tags: ["Educational", "Safe", "No ads", "Age-appropriate"],
  },
  "youtube.com": {
    rating: 3.2,
    count: 8934,
    tags: ["Mixed content", "Needs supervision", "YouTube Kids better"],
  },
};

export default function BrowserSimulatorPage() {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>("8-10");
  const [url, setUrl] = useState("");
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [currentScanStep, setCurrentScanStep] = useState(0);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [parentReview, setParentReview] = useState<ParentReview | null>(null);

  const handleCheckSite = () => {
    if (!url.trim()) return;

    setScanState("scanning");
    setCurrentScanStep(0);
    setResult(null);
    setParentReview(null);

    const scanInterval = setInterval(() => {
      setCurrentScanStep((prev) => {
        if (prev >= SCAN_STEPS.length - 1) {
          clearInterval(scanInterval);
          setTimeout(() => {
            setScanState("complete");
            
            const domain = extractDomain(url);
            const mockResult = MOCK_RESULTS[domain] || generateGenericResult(domain);
            setResult(mockResult);
            
            const review = MOCK_REVIEWS[domain];
            if (review) {
              setParentReview(review);
            }
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const extractDomain = (inputUrl: string): string => {
    try {
      let processedUrl = inputUrl.trim().toLowerCase();
      if (!processedUrl.startsWith("http")) {
        processedUrl = "https://" + processedUrl;
      }
      const urlObj = new URL(processedUrl);
      return urlObj.hostname.replace("www.", "");
    } catch {
      return inputUrl.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    }
  };

  const generateGenericResult = (domain: string): EvaluationResult => {
    return {
      type: "caution",
      title: "Review recommended",
      explanation: `We don't have enough data about ${domain} yet. Please review this site with your child to ensure it's appropriate for their age.`,
      safetyScore: 3,
      breakdown: [
        { label: "Language", status: "caution", statusText: "Unknown" },
        { label: "Images", status: "caution", statusText: "Unknown" },
        { label: "Ads", status: "caution", statusText: "Unknown" },
        { label: "External links", status: "caution", statusText: "Unknown" },
        { label: "Reading level", status: "caution", statusText: "Unknown" },
      ],
      actionText: "Continue with supervision",
    };
  };

  const handleReset = () => {
    setUrl("");
    setScanState("idle");
    setCurrentScanStep(0);
    setResult(null);
    setParentReview(null);
  };

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < score ? "★" : "☆"}</span>
    ));
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Browser Simulator</h1>
          <Link href="/" className={`${styles.button} ${styles.buttonSecondary}`}>
            Back to FutureNet
          </Link>
        </div>

        <p className={styles.subcopy}>
          Check if a website is right for kids — by age
        </p>

        <div className={styles.card}>
          <div className={styles.kicker}>
            Age Group <span className={styles.lockIcon}>🔒</span> Parent-controlled
          </div>
          <div className={styles.ageSelector}>
            {(["5-7", "8-10", "11-13", "14-16"] as AgeGroup[]).map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => setSelectedAge(age)}
                className={`${styles.agePill} ${
                  selectedAge === age ? styles.agePillSelected : ""
                }`}
              >
                Ages {age}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.kicker}>Website URL</div>
          <div className={styles.urlInputWrapper}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && url.trim() && scanState === "idle") {
                  handleCheckSite();
                }
              }}
              placeholder="https://example.com"
              className={styles.urlInput}
              disabled={scanState !== "idle"}
            />
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={handleCheckSite}
              disabled={!url.trim() || scanState !== "idle"}
              className={`${styles.button} ${styles.buttonPrimary} ${
                !url.trim() || scanState !== "idle" ? styles.buttonDisabled : ""
              }`}
            >
              Check this site
            </button>
            {scanState !== "idle" && (
              <button
                type="button"
                onClick={handleReset}
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {scanState === "scanning" && (
          <div className={styles.card}>
            <div className={styles.kicker}>Analyzing website...</div>
            <div className={styles.scanProgress}>
              {SCAN_STEPS.map((step, index) => (
                <div key={step.id} className={styles.scanItem}>
                  <span className={styles.scanIcon}>
                    {index < currentScanStep ? "✓" : index === currentScanStep ? (
                      <span className={styles.scanSpinner}>⟳</span>
                    ) : "○"}
                  </span>
                  <span className={styles.scanText}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {scanState === "complete" && result && (
          <div className={styles.resultCard}>
            <div className={styles.resultHeader}>
              <span
                className={`${styles.badge} ${
                  result.type === "suitable"
                    ? styles.badgeSuitable
                    : result.type === "caution"
                    ? styles.badgeCaution
                    : styles.badgeNotRecommended
                }`}
              >
                {result.type === "suitable" && "✓"}
                {result.type === "caution" && "⚠"}
                {result.type === "not-recommended" && "✕"}
                <span>{result.title}</span>
              </span>
            </div>

            <div className={styles.safetyScore}>
              <span>Safety Score:</span>
              <span className={styles.stars}>{renderStars(result.safetyScore)}</span>
              <span>
                {result.safetyScore}/5
              </span>
            </div>

            <div className={styles.explanation}>{result.explanation}</div>

            <div className={styles.breakdown}>
              <div className={styles.breakdownTitle}>Safety Breakdown</div>
              {result.breakdown.map((item, index) => (
                <div key={index} className={styles.breakdownRow}>
                  <span className={styles.breakdownLabel}>{item.label}</span>
                  <span
                    className={`${styles.breakdownStatus} ${
                      item.status === "good"
                        ? styles.statusGood
                        : item.status === "caution"
                        ? styles.statusCaution
                        : styles.statusBad
                    }`}
                  >
                    {item.statusText}
                  </span>
                </div>
              ))}
            </div>

            {result.alternatives && result.alternatives.length > 0 && (
              <div className={styles.alternatives}>
                <div className={styles.alternativesTitle}>
                  Try these safer alternatives:
                </div>
                <div className={styles.alternativesList}>
                  {result.alternatives.map((alt, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setUrl(alt);
                        handleReset();
                      }}
                      className={styles.alternativeLink}
                    >
                      → {alt}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.actionButtons}>
              {result.actionText && (
                <button type="button" className={`${styles.button} ${styles.buttonPrimary}`}>
                  {result.actionText}
                </button>
              )}
              <button
                type="button"
                onClick={handleReset}
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                Check another site
              </button>
            </div>

            {parentReview && (
              <div className={styles.parentReviews}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewStars}>
                    {renderStars(Math.round(parentReview.rating))}
                  </div>
                  <span className={styles.reviewCount}>
                    {parentReview.rating.toFixed(1)} ({parentReview.count.toLocaleString()} parent reviews)
                  </span>
                </div>
                <div className={styles.reviewTags}>
                  {parentReview.tags.map((tag, index) => (
                    <span key={index} className={styles.reviewTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {scanState === "complete" && result && (
          <div className={styles.browserFrame}>
            <div className={styles.browserChrome}>
              <div className={styles.browserDots}>
                <div className={styles.browserDot} />
                <div className={styles.browserDot} />
                <div className={styles.browserDot} />
              </div>
              <div className={styles.browserUrlBar}>
                <span className={styles.browserShield}>🛡️</span>
                <span>{url}</span>
              </div>
            </div>
            <div className={styles.browserContent}>
              <p>
                <strong>Simulated browser view</strong>
              </p>
              <p>
                This is a read-only preview of how the website would appear in a
                kid-safe browser. The actual content would be filtered and monitored
                based on the age settings.
              </p>
              <p style={{ opacity: 0.6, fontSize: "13px", marginTop: "20px" }}>
                [Website content would appear here with appropriate filtering]
              </p>
            </div>
            <div className={styles.browserActions}>
              <button type="button" className={styles.browserActionBtn}>
                📖 Explain words
              </button>
              <button type="button" className={styles.browserActionBtn}>
                🚩 Flag issue
              </button>
              <button type="button" className={styles.browserActionBtn}>
                ⏸️ Pause & ask parent
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
