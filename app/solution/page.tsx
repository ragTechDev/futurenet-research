import { Literata } from "next/font/google";
import Link from "next/link";
import styles from "./solution.module.css";

const kindleLike = Literata({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Solution() {
  return (
    <main className={`${kindleLike.className} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          <h1 className={styles.title}>FutureNet Phone</h1>
          <p className={styles.subtitle}>
            The smartphone that grows with your child — age-appropriate boundaries that update automatically every year
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <div className={styles.problemBox}>
            <blockquote className={styles.quote}>
              &ldquo;I want my child to be reachable, but I don&rsquo;t want to hand them the entire internet. 
              And I don&rsquo;t want to spend hours every year updating parental controls as they grow.&rdquo;
              <cite>— Parent of 13-year-old, Sec 1</cite>
            </blockquote>
          </div>

          <div className={styles.problemList}>
            <div className={styles.problemItem}>
              <h3>📱 Parents are familiar with managed devices (PLDs)</h3>
              <p>
                Every secondary school student has a school-issued laptop or tablet for learning. 
                Parents understand managed devices work for specific purposes.
              </p>
            </div>
            <div className={styles.problemItem}>
              <h3>⚠️ But PLDs don&rsquo;t solve the personal phone problem</h3>
              <p>
                PLDs are for learning, not communication. They&rsquo;re laptops/tablets, not smartphones. 
                Parents still need to buy their child a personal smartphone for communication, coordination, and safety — and they&rsquo;re on their own figuring out what&rsquo;s appropriate.
              </p>
            </div>
            <div className={styles.problemItem}>
              <h3>😓 Parents are exhausted with manual parental controls</h3>
              <p className={styles.problemHighlight}>Sound familiar?</p>
              <div className={styles.speechBubbles}>
                <div className={styles.speechBubble}>
                  &ldquo;Should I allow YouTube? What about WhatsApp? Is 14 too young for Instagram?&rdquo;
                </div>
                <div className={styles.speechBubble}>
                  &ldquo;I spent 3 hours configuring Screen Time... and my kid bypassed it in 10 minutes.&rdquo;
                </div>
                <div className={styles.speechBubble}>
                  &ldquo;Every birthday means re-researching what&rsquo;s age-appropriate. I&rsquo;m not a child psychologist!&rdquo;
                </div>
                <div className={styles.speechBubble}>
                  &ldquo;The school manages the laptop for learning. I wish someone could manage the phone for overall development — not just school hours.&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className={styles.existingSolutions}>
            <h3>Existing solutions fail:</h3>
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <h4>Mainstream phones + Screen Time</h4>
                <p>High parent effort, easily bypassed, no expert guidance on age-appropriateness</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>&ldquo;Healthy phones&rdquo; (US/UK)</h4>
                <p>Static policies (same rules at 13 and 16), expensive subscriptions, not available in Singapore</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>School PLDs (laptops/tablets)</h4>
                <p>For learning, not communication. School-managed for school hours, not holistic child development.</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>Watches/trackers</h4>
                <p>Ages 7-12, not smartphones, no graduation path to independence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Solution</h2>
          
          <div className={styles.valueProposition}>
            <h3 className={styles.vpTitle}>&ldquo;Set it once, and we&rsquo;ll update it as your child grows.&rdquo;</h3>
            
            <div className={styles.ageTimeline}>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>13</div>
                <h4>Age 13</h4>
                <ul>
                  <li>Calls/SMS only</li>
                  <li>No browser, no social media</li>
                  <li>Focus Mode during school hours</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>14</div>
                <h4>Age 14</h4>
                <ul>
                  <li>Add messaging apps (parent-approved)</li>
                  <li>Basic productivity apps</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>15</div>
                <h4>Age 15</h4>
                <ul>
                  <li>Educational social media (YouTube with restrictions)</li>
                  <li>Maps, music</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>16</div>
                <h4>Age 16</h4>
                <ul>
                  <li>Broader app access</li>
                  <li>Graduated browser (safe search enforced)</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>17</div>
                <h4>Age 17</h4>
                <ul>
                  <li>Near-full smartphone experience</li>
                  <li>Preparing for independence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.expertBacking}>
            <h3>Every age template is:</h3>
            <div className={styles.expertGrid}>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Reviewed by child development experts</h4>
                <p>Child & adolescent psychiatrists, cybersafety experts</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Validated by parents</h4>
                <p>Parent advisory board provides ongoing feedback</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Updated automatically</h4>
                <p>No parent effort required — boundaries update as your child grows</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Customizable</h4>
                <p>Parents can adjust based on family values, but defaults are expert-backed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Features</h2>
          
          <div className={styles.featuresList}>
            <div className={styles.featureCard}>
              <h3>1. Graduated Access System</h3>
              <p className={styles.featureTag}>The hero feature</p>
              <ul>
                <li>Age-appropriate boundaries that update automatically at start of new school year</li>
                <li>Expert-reviewed templates for ages 13–17</li>
                <li>Parents don&ldquo;t need to guess what&ldquo;s developmentally appropriate</li>
                <li>Reduces parent stress and family conflict</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>2. Holistic Management (Beyond School Hours)</h3>
              <p className={styles.featureTag}>Different from PLDs</p>
              <ul>
                <li>PLDs are school-managed for in-school learning; FutureNet is parent-managed for holistic child development</li>
                <li>All-day context: school hours, homework time, family time, sleep, social development</li>
                <li>Expert-backed by child & adolescent psychiatrists and cybersafety experts</li>
                <li>Focus on overall development, not just school compliance</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>3. Focus Mode (Optional, Parent-Configured)</h3>
              <p className={styles.featureTag}>Parent choice, not institutional requirement</p>
              <ul>
                <li>Parents can set &ldquo;focus hours&rdquo; (e.g., during school, homework time, bedtime)</li>
                <li>Locks device to calls/SMS only during focus hours</li>
                <li>Parent-configured, not school-mandated</li>
                <li>Strong enforcement via Android Enterprise Device Owner mode</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>4. Ready Out of the Box</h3>
              <p className={styles.featureTag}>Zero setup hassle</p>
              <ul>
                <li>Phone arrives fully configured with age-appropriate settings</li>
                <li>No apps to install, no parental controls to configure</li>
                <li>Just insert SIM card and turn on</li>
                <li>We handle everything — parents can relax</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>5. SIM-Unlocked, Parent-Owned</h3>
              <ul>
                <li>Not tied to telco contracts</li>
                <li>Parents choose carrier and plan</li>
                <li>Device ownership stays with family</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.partnersSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Expert Partnerships & Parent Validation</h2>
          <p className={styles.partnersIntro}>
            Our age-appropriate templates are not guesswork — they&rsquo;re backed by child development experts and validated by parents.
          </p>

          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <h3>Child Development & Cybersafety Experts</h3>
              <ul>
                <li><strong>Cyberlite</strong> — Child Cybersafety Organisation (Current Partner)</li>
                <li><strong>Child & Adolescent Psychiatrists</strong> — Developmental appropriateness</li>
                <li><strong>Youth Mental Health Professionals</strong> — Healthy digital habits</li>
              </ul>
            </div>
            <div className={styles.partnerCard}>
              <h3>Parent Advisory Board</h3>
              <ul>
                <li><strong>20-30 Parent Advisors</strong> — Ongoing feedback on age template effectiveness</li>
                <li><strong>Real-world validation</strong> — Co-design features based on actual parent needs</li>
                <li><strong>Community advocates</strong> — Building trust through parent-to-parent recommendations</li>
              </ul>
            </div>
            <div className={styles.partnerCard}>
              <h3>Built by Community-centered Technologists</h3>
              <ul>
                <li><strong>Three women software engineers</strong> — Building for their own community</li>
                <li><strong>Women Devs SG leaders</strong> — Community of 1,000+ members, many are parents</li>
                <li><strong>RagTech podcast co-hosts</strong> — Making tech accessible for families</li>
              </ul>
            </div>
          </div>

          <div className={styles.valueProps}>
            <div className={styles.valuePropCard}>
              <h4>For Parents</h4>
              <p>&ldquo;You&rsquo;re not guessing what&rsquo;s age-appropriate — child development experts have already figured it out, and other parents have validated it works.&rdquo;</p>
            </div>
            <div className={styles.valuePropCard}>
              <h4>For Investors</h4>
              <p>&ldquo;We&rsquo;re building an expert network moat that competitors can&rsquo;t easily replicate. Parents trust experts more than they trust their own guesswork.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why FutureNet Phone?</h2>
          
          <div className={styles.differentiatorGrid}>
            <div className={styles.differentiatorCard}>
              <h3>Different from PLDs</h3>
              <p><strong>School PLD</strong> (laptop/tablet): For learning, school-managed for school hours</p>
              <p><strong>FutureNet Phone</strong>: For communication, parent-managed for holistic child development across the whole day</p>
              <p>PLDs focus on in-school learning. FutureNet focuses on overall development — school hours, homework time, family time, sleep, social development.</p>
            </div>
            <div className={styles.differentiatorCard}>
              <h3>Only Phone with Automated Graduated Access</h3>
              <p>All competitors have static policies or require manual parent updates. FutureNet is the only solution with expert-backed age templates that update automatically as your child grows.</p>
            </div>
            <div className={styles.differentiatorCard}>
              <h3>No Installation Required</h3>
              <p>Phone comes pre-configured out of the box. Parents don&rsquo;t need to install apps, configure settings, or troubleshoot technical issues. Just insert SIM card and turn on.</p>
            </div>
            <div className={styles.differentiatorCard}>
              <h3>Reduces Parent Exhaustion</h3>
              <p>No more annual parental control reviews. No more guessing what&rsquo;s age-appropriate. No more family conflicts over app access. Set it once, we handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Join Our Journey</h2>
          <p className={styles.ctaText}>
            We&rsquo;re launching on Kickstarter in April 2026. Be the first to know when we go live.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Get Early Access
            </Link>
            <Link href="/digital-parent-quiz" className={styles.ctaButtonSecondary}>
              Take the Digital Parent Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
