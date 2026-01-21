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
              <h3>📱 Kids need phones for safety</h3>
              <p>After-school pickups. Emergency contact. Peace of mind knowing you can reach them.</p>
            </div>
            <div className={styles.problemItem}>
              <h3>⚠️ But one size doesn&rsquo;t fit all ages</h3>
              <p>
                What&rsquo;s safe for a 13-year-old isn&rsquo;t right for a 16-year-old. 
                Digital boundaries need to grow with your child — but who has time to research and update settings every year?
              </p>
            </div>
            <div className={styles.problemItem}>
              <h3>😓 Parents are drowning in decisions</h3>
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
                  &ldquo;The constant battles: &apos;But ALL my friends have TikTok!&apos;&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className={styles.existingSolutions}>
            <h3>Existing solutions fail:</h3>
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <h4>Mainstream phones + Screen Time</h4>
                <p>High parent effort, bypassable, no expert guidance on age-appropriateness</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>"Healthy phones"</h4>
                <p>Static policies (same rules at 13 and 16), no graduated access</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>School PLDs (iPads/Chromebooks)</h4>
                <p>Learning tools, not personal communication devices. WiFi-only, school-owned.</p>
              </div>
              <div className={styles.solutionCard}>
                <h4>Watches/trackers</h4>
                <p>Don't meet teen expectations for a "real phone"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Solution</h2>
          
          <div className={styles.valueProposition}>
            <h3 className={styles.vpTitle}>"Set it once, and we'll update it as your child grows."</h3>
            
            <div className={styles.ageTimeline}>
              <div className={styles.ageCard}>
                <div className={styles.ageNumber}>13</div>
                <h4>Age 13</h4>
                <ul>
                  <li>Calls/SMS only</li>
                  <li>No browser, no social media</li>
                  <li>School Mode during school hours</li>
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
                <p>Psychologists, digital wellness researchers</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Approved by educators</h4>
                <p>Teachers, school counselors</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Updated automatically</h4>
                <p>No parent effort required</p>
              </div>
              <div className={styles.expertCard}>
                <span className={styles.checkmark}>✅</span>
                <h4>Customizable</h4>
                <p>Parents can adjust if needed, but defaults are expert-backed</p>
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
                <li>Parents don't need to guess what's developmentally appropriate</li>
                <li>Reduces parent stress and family conflict</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>2. School Mode</h3>
              <p className={styles.featureTag}>Auto-activates during school hours</p>
              <ul>
                <li>Locks device to calls/SMS only (whitelisted contacts)</li>
                <li>No browser, no social media, no games</li>
                <li>Optional educator override (teacher can unlock for approved use)</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <h3>3. Parent-Managed Device</h3>
              <p className={styles.featureTag}>Android Enterprise Device Owner</p>
              <ul>
                <li>Strong enforcement (not bypassable via VPN, hidden apps, or factory reset)</li>
                <li>Parent portal to review and customize age templates</li>
                <li>Override controls if needed (but defaults are expert-backed)</li>
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
          <h2 className={styles.sectionTitle}>Expert & Educator Partnerships</h2>
          <p className={styles.partnersIntro}>
            Our age-appropriate templates are not guesswork — they're backed by experts and educators.
          </p>

          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <h3>Child Development Experts</h3>
              <ul>
                <li><strong>Cyberlite</strong> — Child Cybersafety Organisation (Current Partner)</li>
                <li><strong>Dr. Adrian Loh</strong> — Child & Adolescent Psychiatrist, Promises Healthcare</li>
              </ul>
            </div>
            <div className={styles.partnerCard}>
              <h3>Youth Mental Health</h3>
              <ul>
                <li><strong>IASH</strong> — It All Starts Hear, Youth Mental Health Programs</li>
              </ul>
            </div>
            <div className={styles.partnerCard}>
              <h3>Educators</h3>
              <ul>
                <li><strong>MOE Teachers & School Counselors</strong> — Validate age templates align with school policies</li>
              </ul>
            </div>
          </div>

          <div className={styles.valueProps}>
            <div className={styles.valuePropCard}>
              <h4>For Parents</h4>
              <p>"You're not guessing what's age-appropriate — experts and educators have already figured it out."</p>
            </div>
            <div className={styles.valuePropCard}>
              <h4>For Schools</h4>
              <p>"Our age templates are validated by child development experts and approved by educators."</p>
            </div>
            <div className={styles.valuePropCard}>
              <h4>For Investors</h4>
              <p>"We're building an expert network moat that competitors can't easily replicate."</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why FutureNet Phone?</h2>
          
          <div className={styles.differentiatorGrid}>
            <div className={styles.differentiatorCard}>
              <h3>Complements School PLDs</h3>
              <p><strong>School PLD</strong> (iPad/Chromebook): For learning, school-owned, WiFi-only</p>
              <p><strong>FutureNet Phone</strong>: For communication, parent-owned, cellular, graduated access</p>
            </div>
            <div className={styles.differentiatorCard}>
              <h3>Only Phone with Automated Graduated Access</h3>
              <p>All competitors have static policies or require manual parent updates. FutureNet is the only solution with expert-reviewed, educator-approved age templates that update automatically.</p>
            </div>
            <div className={styles.differentiatorCard}>
              <h3>Reduces Parent Stress</h3>
              <p>No more annual parental control reviews. No more guessing what's age-appropriate. No more family conflicts over app access.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Join Our Journey</h2>
          <p className={styles.ctaText}>
            We're launching on Kickstarter in March 2026. Be the first to know when we go live.
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
