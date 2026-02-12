import { Literata } from "next/font/google";
import Link from "next/link";
import styles from "./content-assessment.module.css";

const kindleLike = Literata({ subsets: ["latin"], weight: ["400", "600"] });

export default function ContentAssessmentPage() {
  return (
    <main className={`${kindleLike.className} ${styles.page}`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Age-Appropriate Content Assessment Framework
          </h1>
          <p className={styles.subtitle}>
            A comprehensive, evidence-based approach to evaluating digital content safety for children and adolescents
          </p>
          <p className={styles.tagline}>
            Aligned with <strong>IMDA Code of Practice</strong>, <strong>UNICEF Guidance on AI and Children</strong>, and the <strong>UN Convention on the Rights of the Child</strong>
          </p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className={styles.section} style={{ background: 'rgba(0,0,0,0.03)' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <h3 className={styles.problemCardTitle}>
                <span className={styles.problemIcon}>📜</span>
                Regulations Lack Technical Implementation
              </h3>
              <p className={styles.problemCardText}>
                While regulations like <strong>IMDA&apos;s Code of Practice for Online Safety</strong>, the <strong>EU AI Act</strong>, and <strong>UK Online Safety Act</strong> are being implemented, they are not designed in a <strong>tech-first, measurable, and automatable way</strong>. Compliance requirements remain vague, making it difficult for platforms to implement and for regulators to verify.
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3 className={styles.problemCardTitle}>
                <span className={styles.problemIcon}>👶</span>
                Developmental Needs Are Ignored
              </h3>
              <p className={styles.problemCardText}>
                Current regulations treat all children as a monolithic group, failing to recognize that a <strong>7-year-old has vastly different cognitive and emotional capacities than a 15-year-old</strong>. Age-appropriate content assessment requires understanding developmental stages, not just binary &ldquo;child vs adult&rdquo; distinctions.
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3 className={styles.problemCardTitle}>
                <span className={styles.problemIcon}>🔧</span>
                Existing Tools Ignore Children
              </h3>
              <p className={styles.problemCardText}>
                A variety of automated tools exist for code scanning, website testing, vulnerability assessment, and even <strong>LLM assurance (like DeepTeam)</strong>—but <strong>none are designed with children&apos;s safety in mind</strong>. Child-specific harms like grooming, age-inappropriate content, and developmental impact are not measured.
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3 className={styles.problemCardTitle}>
                <span className={styles.problemIcon}>⚠️</span>
                Children Are the Most Vulnerable Users
              </h3>
              <p className={styles.problemCardText}>
                Children are among the <strong>largest and most vulnerable users</strong> of technology and AI. <a href="https://www.ceiglobal.org/work-and-insights/investigating-parent-views-teen-use-generative-ai">Recent Singapore data</a> shows <strong>8 in 10 young people aged 13 to 17 are using Generative AI at least once a week</strong> and <strong>70% of that use for homework or school-related tasks</strong>. Yet they face unique risks: AI-generated CSAM, deepfakes, emotional dependency on chatbots, and exposure to harmful content their developing minds cannot process.
              </p>
            </div>
          </div>

          <div className={styles.problemSummary}>
            <p className={styles.problemSummaryText}>
              <strong>The gap is clear:</strong> We have regulations without implementation guidance, tools without child-safety focus, and a rapidly growing population of young users exposed to unprecedented risks. This framework bridges that gap by providing a <strong>measurable, automatable, developmentally-informed approach</strong> to content assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What is this framework?</h2>
          <p className={styles.text}>
            This framework provides a systematic approach to assess whether web products—including <strong>LLM-based chatbots</strong>, <strong>static websites</strong>, and <strong>dynamic applications</strong>—are appropriate for children and adolescents.
          </p>
          <p className={styles.text}>
            Rather than simple age ratings, we match <strong>content risk/benefit profiles</strong> against <strong>age-specific developmental capacities</strong> to produce holistic appropriateness scores.
          </p>
          
          <div className={styles.keyPoints}>
            <div className={styles.keyPoint}>
              <h3 className={styles.keyPointTitle}>🎯 Universal Application</h3>
              <p className={styles.keyPointText}>
                Works across all web products and content types (text, images, audio, video)
              </p>
            </div>
            <div className={styles.keyPoint}>
              <h3 className={styles.keyPointTitle}>📊 Evidence-Based</h3>
              <p className={styles.keyPointText}>
                Built on regulatory frameworks and child development research
              </p>
            </div>
            <div className={styles.keyPoint}>
              <h3 className={styles.keyPointTitle}>🤖 AI-Ready</h3>
              <p className={styles.keyPointText}>
                Includes specific safeguards for AI-generated content and chatbots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Dimensions */}
      <section className={styles.section} style={{ background: 'rgba(0,0,0,0.02)' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Assessment Criteria</h2>
          <p className={styles.text} style={{ marginBottom: '32px' }}>
            Content is evaluated across <strong>8 safety dimensions</strong> and <strong>5 educational dimensions</strong>, each with specific indicators and scoring rubrics.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.criteriaTable}>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Key Indicators</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.categoryRow}>
                  <td colSpan={3}><strong>Content Safety & Risk (60% of overall score)</strong></td>
                </tr>
                <tr>
                  <td><strong>Information Integrity</strong></td>
                  <td>Source credibility, fact-checking, misinformation detection, AI-generated content disclosure</td>
                  <td>12%</td>
                </tr>
                <tr>
                  <td><strong>Privacy & Data Protection</strong></td>
                  <td>Data collection practices, COPPA compliance, privacy-by-design, children&apos;s data agency</td>
                  <td>18%</td>
                </tr>
                <tr>
                  <td><strong>Harmful Content Detection</strong></td>
                  <td>Sexual content (CSEM zero tolerance), violence, self-harm, cyberbullying, health misinformation, vice/crime</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td><strong>Toxicity & Bias</strong></td>
                  <td>Hate speech, profanity, stereotypes, algorithmic fairness, non-discrimination</td>
                  <td>12%</td>
                </tr>
                <tr>
                  <td><strong>Interaction Safety</strong></td>
                  <td>Contact risks, grooming prevention, reporting effectiveness, moderation quality, response times</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td><strong>Manipulative Design</strong></td>
                  <td>Dark patterns, addictive features, ethical monetization, time management tools</td>
                  <td>8%</td>
                </tr>
                <tr>
                  <td><strong>Transparency & Accountability</strong></td>
                  <td>Safety information accessibility, AI disclosure, community guidelines, annual reporting</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td><strong>AI-Specific Safety</strong></td>
                  <td>Impact assessments, chatbot safeguards, emotional dependency prevention, deepfake detection</td>
                  <td>5%</td>
                </tr>
                
                <tr className={styles.categoryRow}>
                  <td colSpan={3}><strong>Educational & Developmental Value (40% of overall score)</strong></td>
                </tr>
                <tr>
                  <td><strong>Educational Content</strong></td>
                  <td>Learning objectives, curriculum alignment, AI literacy, digital citizenship, life skills</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td><strong>Positive Messaging</strong></td>
                  <td>Role models, prosocial themes, diversity & inclusion, well-being support</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td><strong>Creative Engagement</strong></td>
                  <td>Creative tools, self-expression, problem-solving, collaboration features</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td><strong>Usability & Accessibility</strong></td>
                  <td>WCAG compliance, age-appropriate design, navigation clarity, inclusive design</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td><strong>Engagement Quality</strong></td>
                  <td>Active vs passive engagement, balanced screen time, meaningful interactions</td>
                  <td>15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.scoringNote}>
            <p><strong>Scoring System:</strong> Each dimension receives a grade (A-F) and score (0-100). Final appropriateness is determined by matching content demands against child developmental capacities.</p>
          </div>
        </div>
      </section>

      {/* Age Groups & Score Thresholds */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Developmental Capacity by Age Group</h2>
          <p className={styles.text} style={{ marginBottom: '32px' }}>
            Different age groups have vastly different capacities to process information, recognize risks, and regulate emotions. The framework matches content demands against these developmental capacities to determine appropriateness.
          </p>

          <div className={styles.ageGroupsGrid}>
            {/* Age 0-5 */}
            <div className={styles.ageGroupCard}>
              <div className={styles.ageGroupHeader}>
                <h3 className={styles.ageGroupTitle}>Ages 0-5</h3>
                <span className={styles.ageGroupBadge}>Pre-literate</span>
              </div>
              <div className={styles.capacityBars}>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Information Processing</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '20%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>20/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Privacy Awareness</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '10%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>10/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Risk Recognition</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '15%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>15/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Critical Thinking</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '10%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>10/100</span>
                </div>
              </div>
              <div className={styles.ageGroupRequirements}>
                <strong>Content Requirements:</strong> Parental controls mandatory, no data collection, walled garden, cartoon-only content, adult supervision required
              </div>
            </div>

            {/* Age 6-9 */}
            <div className={styles.ageGroupCard}>
              <div className={styles.ageGroupHeader}>
                <h3 className={styles.ageGroupTitle}>Ages 6-9</h3>
                <span className={styles.ageGroupBadge}>Primary School</span>
              </div>
              <div className={styles.capacityBars}>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Information Processing</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '40%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>40/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Privacy Awareness</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '25%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>25/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Risk Recognition</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '30%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>30/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Critical Thinking</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '30%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>30/100</span>
                </div>
              </div>
              <div className={styles.ageGroupRequirements}>
                <strong>Content Requirements:</strong> Parental consent for data, strong moderation, mild cartoon violence only, no stranger contact, Grade 1-4 reading level
              </div>
            </div>

            {/* Age 10-12 */}
            <div className={styles.ageGroupCard}>
              <div className={styles.ageGroupHeader}>
                <h3 className={styles.ageGroupTitle}>Ages 10-12</h3>
                <span className={styles.ageGroupBadge}>Transition Years</span>
              </div>
              <div className={styles.capacityBars}>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Information Processing</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '55%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>55/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Privacy Awareness</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '40%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>40/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Risk Recognition</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '45%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>45/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Critical Thinking</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '45%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>45/100</span>
                </div>
              </div>
              <div className={styles.ageGroupRequirements}>
                <strong>Content Requirements:</strong> COPPA compliance, FOMO mitigation, anti-addiction features, restricted contact, Grade 5-7 reading level
              </div>
            </div>

            {/* Age 13-15 */}
            <div className={styles.ageGroupCard}>
              <div className={styles.ageGroupHeader}>
                <h3 className={styles.ageGroupTitle}>Ages 13-15</h3>
                <span className={styles.ageGroupBadge}>Early Teens</span>
              </div>
              <div className={styles.capacityBars}>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Information Processing</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '70%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>70/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Privacy Awareness</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '55%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>55/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Risk Recognition</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '60%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>60/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Critical Thinking</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '60%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>60/100</span>
                </div>
              </div>
              <div className={styles.ageGroupRequirements}>
                <strong>Content Requirements:</strong> Privacy controls, robust reporting, mental health support, anti-grooming measures, Grade 8-10 reading level
              </div>
            </div>

            {/* Age 16-17 */}
            <div className={styles.ageGroupCard}>
              <div className={styles.ageGroupHeader}>
                <h3 className={styles.ageGroupTitle}>Ages 16-17</h3>
                <span className={styles.ageGroupBadge}>Late Teens</span>
              </div>
              <div className={styles.capacityBars}>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Information Processing</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '80%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>80/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Privacy Awareness</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '70%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>70/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Risk Recognition</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '75%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>75/100</span>
                </div>
                <div className={styles.capacityBar}>
                  <span className={styles.capacityLabel}>Critical Thinking</span>
                  <div className={styles.capacityBarBg}>
                    <div className={styles.capacityBarFill} style={{ width: '75%' }}></div>
                  </div>
                  <span className={styles.capacityValue}>75/100</span>
                </div>
              </div>
              <div className={styles.ageGroupRequirements}>
                <strong>Content Requirements:</strong> Autonomy with safeguards, algorithm transparency, ethical design, user-controlled safety, Grade 11-12+ reading level
              </div>
            </div>
          </div>

          {/* Matching Algorithm Explanation */}
          <div className={styles.matchingExplanation}>
            <h3 className={styles.matchingTitle}>How Content Scores Match Age Groups</h3>
            <p className={styles.text}>
              The framework calculates a <strong>gap score</strong> between what the content demands and what the child can handle. For example, if content requires 70/100 critical thinking but a 10-year-old has only 45/100 capacity, the gap is 25 points—indicating significant risk.
            </p>
            
            <div className={styles.scoreThresholds}>
              <div className={styles.thresholdCard}>
                <div className={styles.thresholdGrade} style={{ background: 'rgba(34, 139, 34, 0.15)', color: 'rgba(34, 139, 34, 1)' }}>A</div>
                <div className={styles.thresholdInfo}>
                  <strong>90-100 points</strong>
                  <p>Highly appropriate - Content demands well within child&apos;s capacities</p>
                </div>
              </div>
              
              <div className={styles.thresholdCard}>
                <div className={styles.thresholdGrade} style={{ background: 'rgba(100, 149, 237, 0.15)', color: 'rgba(100, 149, 237, 1)' }}>B</div>
                <div className={styles.thresholdInfo}>
                  <strong>75-89 points</strong>
                  <p>Appropriate with minor considerations - Small gaps manageable with guidance</p>
                </div>
              </div>
              
              <div className={styles.thresholdCard}>
                <div className={styles.thresholdGrade} style={{ background: 'rgba(255, 165, 0, 0.15)', color: 'rgba(255, 140, 0, 1)' }}>C</div>
                <div className={styles.thresholdInfo}>
                  <strong>60-74 points</strong>
                  <p>Appropriate with supervision - Moderate gaps require active parental involvement</p>
                </div>
              </div>
              
              <div className={styles.thresholdCard}>
                <div className={styles.thresholdGrade} style={{ background: 'rgba(255, 99, 71, 0.15)', color: 'rgba(255, 69, 0, 1)' }}>D</div>
                <div className={styles.thresholdInfo}>
                  <strong>40-59 points</strong>
                  <p>Questionable - Significant gaps, requires substantial supervision and intervention</p>
                </div>
              </div>
              
              <div className={styles.thresholdCard}>
                <div className={styles.thresholdGrade} style={{ background: 'rgba(220, 20, 60, 0.15)', color: 'rgba(220, 20, 60, 1)' }}>F</div>
                <div className={styles.thresholdInfo}>
                  <strong>0-39 points</strong>
                  <p>Not appropriate - Content demands far exceed child&apos;s developmental capacities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approaches */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Three Implementation Approaches</h2>
          <p className={styles.text} style={{ marginBottom: '40px' }}>
            The framework can be deployed in three complementary ways, each serving different stakeholders in the child safety ecosystem.
          </p>

          <div className={styles.implementations}>
            {/* For Regulators */}
            <div className={styles.implementation}>
              <div className={styles.implementationHeader}>
                <h3 className={styles.implementationTitle}>
                  <span className={styles.implementationIcon}>🏛️</span>
                  For Regulators
                </h3>
                <span className={styles.implementationBadge}>Post-Deployment Audit</span>
              </div>
              <p className={styles.implementationDesc}>
                Government authorities like <strong>IMDA</strong> can use this framework to conduct regulatory audits of deployed platforms, similar to the 2024 Online Safety Assessment Report methodology.
              </p>
              
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  <li><strong>Mystery Shopper Testing</strong> - Automated test accounts submit harmful content to measure detection effectiveness</li>
                  <li><strong>Effectiveness Metrics</strong> - Response time, block rate, notification rate (targets: &gt;90% effectiveness, &lt;24hr response)</li>
                  <li><strong>Policy Assessment</strong> - Automated analysis of privacy policies, community guidelines, transparency reports</li>
                  <li><strong>Public Disclosure</strong> - Published safety ratings for consumer awareness and platform accountability</li>
                  <li><strong>Compliance Enforcement</strong> - Required actions, deadlines, and follow-up audits</li>
                </ul>
              </div>

              <div className={styles.useCases}>
                <strong>Use Cases:</strong> Regulatory compliance verification, third-party certification, competitive benchmarking, continuous monitoring
              </div>
            </div>

            {/* For Developers */}
            <div className={styles.implementation}>
              <div className={styles.implementationHeader}>
                <h3 className={styles.implementationTitle}>
                  <span className={styles.implementationIcon}>👨‍💻</span>
                  For Developers
                </h3>
                <span className={styles.implementationBadge}>Pre-Deployment Scanning</span>
              </div>
              <p className={styles.implementationDesc}>
                Platform developers can integrate the framework into their <strong>CI/CD pipelines</strong> and content upload workflows to proactively block harmful content before it reaches users.
              </p>
              
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  <li><strong>CI/CD Integration</strong> - GitHub Actions, GitLab CI, Jenkins workflows scan content before deployment</li>
                  <li><strong>Upload Hooks</strong> - Real-time assessment of user-generated content with automatic blocking/review queuing</li>
                  <li><strong>Creator Targeting</strong> - Mandatory scanning for creators with ≥40% youth audiences or ≥1,000 youth followers</li>
                  <li><strong>Developer Feedback</strong> - Clear explanations of why content was blocked with improvement suggestions</li>
                  <li><strong>Compliance Reporting</strong> - Automated quarterly reports for regulatory submission</li>
                </ul>
              </div>

              <div className={styles.useCases}>
                <strong>Regulatory Mandate:</strong> Platforms with ≥25% users under 18 or individual creators with significant youth audiences must implement pre-deployment scanning (proposed IMDA amendment)
              </div>
            </div>

            {/* For Parents */}
            <div className={styles.implementation}>
              <div className={styles.implementationHeader}>
                <h3 className={styles.implementationTitle}>
                  <span className={styles.implementationIcon}>👨‍👩‍👧‍👦</span>
                  For Parents
                </h3>
                <span className={styles.implementationBadge}>Child-Safe Browser</span>
              </div>
              <p className={styles.implementationDesc}>
                A <strong>child-safe browser</strong> (in development by FutureNet) that uses the framework to provide real-time content filtering as children browse the web—going beyond simple whitelist/blacklist approaches.
              </p>
              
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  <li><strong>Intelligent Filtering</strong> - Context-aware assessment, not just domain blocking</li>
                  <li><strong>Adaptive Modes</strong> - Strict (block entire page), Adaptive (filter specific elements), Permissive (warn but allow)</li>
                  <li><strong>Real-Time Assessment</strong> - Lightweight pre-scan with progressive content analysis</li>
                  <li><strong>Parent Dashboard</strong> - Child profiles, activity logs, customizable thresholds, manual overrides</li>
                  <li><strong>Offline Capability</strong> - Local ML models for assessment without internet dependency</li>
                  <li><strong>Educational Approach</strong> - Explains why content is blocked to teach digital literacy</li>
                </ul>
              </div>

              <div className={styles.useCases}>
                <strong>Coming Soon:</strong> Browser extension and native browser integration for cross-platform protection
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className={styles.comparisonSection}>
            <h3 className={styles.comparisonTitle}>How They Work Together</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>For Regulators</th>
                    <th>For Developers</th>
                    <th>For Parents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Timing</strong></td>
                    <td>Post-deployment</td>
                    <td>Pre-deployment</td>
                    <td>Real-time</td>
                  </tr>
                  <tr>
                    <td><strong>Scope</strong></td>
                    <td>Entire platform assessment</td>
                    <td>Platform&apos;s own content</td>
                    <td>Any website visited</td>
                  </tr>
                  <tr>
                    <td><strong>Enforcement</strong></td>
                    <td>Regulatory compliance</td>
                    <td>Automated blocking</td>
                    <td>User-side filtering</td>
                  </tr>
                  <tr>
                    <td><strong>Effectiveness</strong></td>
                    <td>Reactive (identifies issues)</td>
                    <td>Proactive (prevents harm)</td>
                    <td>Protective (shields user)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.comparisonNote}>
              Together, these three approaches create a <strong>comprehensive safety ecosystem</strong> covering prevention, verification, and protection.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className={styles.section} style={{ background: 'rgba(0,0,0,0.02)' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Implementation</h2>
          <p className={styles.text}>
            The framework uses a combination of automated tools and AI models to assess content across all modalities:
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h4 className={styles.techCardTitle}>Text Analysis</h4>
              <p className={styles.techCardText}>
                OpenAI Moderation API, Azure Content Safety, LLM-as-judge, reading level analysis, fact-checking APIs
              </p>
            </div>
            <div className={styles.techCard}>
              <h4 className={styles.techCardTitle}>Image Analysis</h4>
              <p className={styles.techCardText}>
                Google Cloud Vision, AWS Rekognition, PhotoDNA for CSEM, deepfake detection, OCR for text-in-image
              </p>
            </div>
            <div className={styles.techCard}>
              <h4 className={styles.techCardTitle}>Audio Analysis</h4>
              <p className={styles.techCardText}>
                Speech-to-text (Whisper), audio classification, voice deepfake detection, tone and emotion analysis
              </p>
            </div>
            <div className={styles.techCard}>
              <h4 className={styles.techCardTitle}>Video Analysis</h4>
              <p className={styles.techCardText}>
                Frame extraction, scene detection, motion analysis for violence, live stream monitoring, thumbnail assessment
              </p>
            </div>
          </div>

          <p className={styles.text} style={{ marginTop: '32px', fontStyle: 'italic' }}>
            <strong>Key Principle:</strong> While technical methods vary by content type, the assessment criteria, scoring weights, and appropriateness matching algorithm remain identical across all platforms and content types.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Learn More</h2>
            <p className={styles.ctaText}>
              This framework represents months of research into child development, regulatory standards, and technical feasibility. We&apos;re committed to creating safer digital spaces for children.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="https://ragtechdev.com/contact" className={styles.ctaButton}>
                Get in Touch
              </Link>
              <Link href="/" className={styles.ctaButtonSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            <strong>Framework Version:</strong> IMDA-UNICEF v1.0 (February 2026)
            <br />
            <strong>Aligned with:</strong> IMDA Code of Practice for Online Safety, UNICEF Guidance on AI and Children (v3), UN Convention on the Rights of the Child
          </p>
        </div>
      </section>
    </main>
  );
}
