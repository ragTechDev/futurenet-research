import * as React from "react";
import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr, Img, Link } from "@react-email/components";
import { PHONE_IMAGE_URLS, PERSONAS } from "../digital-parent-quiz/quizPersonas";

// Inline SVG Components
const TreeSvg = ({ width = 80, height = 80, style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 640 640" style={{ ...style, color: "#1a1a1a" }}>
    <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M320 90 C240 120, 200 190, 210 250 C170 260, 150 300, 160 340 C175 400, 250 430, 300 412 C320 460, 390 492, 450 470 C520 444, 540 370, 502 325 C540 300, 552 242, 522 205 C480 155, 390 135, 320 165" />
      <path d="M318 260 C320 360, 320 450, 320 550" />
      <path d="M320 430 C280 410, 250 385, 220 350" />
      <path d="M320 380 C360 360, 390 330, 420 300" />
      <path d="M280 550 C300 520, 340 520, 360 550" />
    </g>
  </svg>
);

const LeafSvg = ({ width = 60, height = 60, style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 640 640" style={{ ...style, color: "#1a1a1a" }}>
    <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M120 360 C140 220, 260 140, 360 160 C480 184, 540 320, 470 420 C410 506, 270 530, 170 470 C130 446, 110 408, 120 360 Z" />
      <path d="M190 470 C280 420, 360 330, 420 210" />
      <path d="M250 430 C270 400, 300 370, 335 330" />
      <path d="M300 470 C330 430, 360 390, 395 340" />
    </g>
  </svg>
);

const CatSvg = ({ width = 70, height = 70, style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 800 800" style={{ ...style, color: "#1a1a1a" }}>
    <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M250 260 C250 180, 350 130, 400 170 C450 130, 550 180, 550 260 C550 380, 480 430, 400 430 C320 430, 250 380, 250 260 Z" />
      <path d="M300 200 C280 140, 330 110, 360 160" />
      <path d="M500 200 C520 140, 470 110, 440 160" />
      <path d="M320 430 C280 520, 300 640, 400 650 C500 640, 520 520, 480 430" />
      <path d="M480 560 C580 580, 600 720, 500 740" />
      <path d="M390 320 C395 330, 405 330, 410 320" />
      <path d="M330 330 C280 320, 260 320, 230 330" />
      <path d="M330 350 C280 350, 260 360, 230 370" />
      <path d="M470 330 C520 320, 540 320, 570 330" />
      <path d="M470 350 C520 350, 540 360, 570 370" />
    </g>
  </svg>
);


const LaptopSvg = ({ width = 80, height = 80, style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 800 800" style={{ ...style, color: "#1a1a1a" }}>
    <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <rect x="200" y="180" width="400" height="260" rx="40" ry="40"/>
      <circle cx="340" cy="300" r="12"/>
      <circle cx="460" cy="300" r="12"/>
      <path d="M360 340 C390 360, 410 360, 440 340"/>
      <path d="M380 440 C370 500, 370 540, 400 560 C430 540, 430 500, 420 440"/>
      <path d="M300 580 C260 600, 260 640, 300 650 C400 670, 500 650, 500 620 C500 590, 460 580, 420 580"/>
      <path d="M400 180 C390 140, 420 120, 440 140"/>
      <circle cx="440" cy="140" r="10"/>
    </g>
  </svg>
);


export type PersonaId =
  | "bb-bold"
  | "htc-desire"
  | "palm-treo"
  | "razr"
  | "walkman"
  | "nokia-3310"
  | "nokia-e71"
  | "bb-curve";

export type DigitalParentQuizResultsPayload = {
  submittedAt: string;
  email: string;
  questions: Array<{
    questionId: string;
    selectedId: string;
    chapter: string;
    prompt: string;
    selectedLabel: string;
  }>;
  scores: Record<PersonaId, number>;
  topPersonaId: PersonaId;
};

export type DigitalParentQuizResultsEmailProps = {
  topPersona: {
    id: PersonaId;
    phoneModel: string;
    characterName: string;
    tagline: string;
    summary: string;
    strengths: string[];
    watchOutFor: string[];
    nextQuest: string[];
  };
  allPersonas: Array<{
    id: PersonaId;
    phoneModel: string;
    characterName: string;
    tagline: string;
    summary: string;
  }>;
  payload: DigitalParentQuizResultsPayload;
  productUrl: string;
};

const base = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  color: "#1a1a1a",
  lineHeight: "1.6",
};



const highlight = {
  background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 10%, rgba(0, 0, 0, 0.18) 90%, rgba(0, 0, 0, 0) 100%)",
  padding: "2px 6px",
  borderRadius: "6px",
};

// Default props for email preview
const defaultProps: DigitalParentQuizResultsEmailProps = {
  topPersona: {
    id: "bb-bold",
    phoneModel: "BlackBerry Bold 9900",
    characterName: "The Executive",
    tagline: "Always connected, always in control",
    summary: "You're the type who needs to stay on top of everything. You're calm under pressure and you want safety systems that are transparent, enforceable, and fair—so trust can grow over time.",
    strengths: [
      "Excellent at multitasking",
      "Great organizational skills",
      "Strong communication abilities",
      "Natural leadership qualities",
      "Efficient time management",
      "Problem-solving mindset",
    ],
    watchOutFor: [
      "Work-life balance can suffer",
      "May overwhelm family with structure",
      "Could miss spontaneous moments",
      "Tendency to over-schedule",
      "Risk of burnout",
      "May prioritize efficiency over connection",
    ],
    nextQuest: [
      "Schedule regular device-free family time",
      "Practice being present in conversations",
      "Let kids lead some activities",
      "Create space for unstructured play",
      "Model healthy tech boundaries",
      "Focus on quality over quantity time",
    ],
  },
  allPersonas: PERSONAS,
  payload: {
    submittedAt: "2025-12-26T14:00:00Z",
    email: "parent@example.com",
    questions: [
      {
        questionId: "q1",
        selectedId: "o1",
        chapter: "Morning Routine",
        prompt: "How do you start your day?",
        selectedLabel: "Check emails and messages immediately",
      },
    ],
    scores: {
      "bb-bold": 85,
      "nokia-3310": 45,
      "razr": 60,
      "htc-desire": 30,
      "palm-treo": 25,
      "walkman": 20,
      "nokia-e71": 70,
      "bb-curve": 55,
    },
    topPersonaId: "bb-bold",
  },
  productUrl: "https://futurenet-demo.netlify.app/digital-parent-quiz",
};

export default function DigitalParentQuizResultsEmail(props: DigitalParentQuizResultsEmailProps = defaultProps) {
  const { topPersona = defaultProps.topPersona, allPersonas = defaultProps.allPersonas, payload = defaultProps.payload, productUrl = defaultProps.productUrl } = props;

  return (
    <Html>
      <Head />
      <Preview>Your Digital Parent Quiz results + full persona breakdown</Preview>
      <Body style={{ ...base, backgroundColor: "#f7f3ea", padding: "20px 12px", backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02))" }}>
        {/* Header with doodles */}
        <Container style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
          {/* Margin decorative doodles */}
          <div style={{ position: "absolute", top: "100px", left: "-180px", opacity: "0.3", transform: "rotate(15deg)" }}>
            <CatSvg width={120} height={120} />
          </div>
          <div style={{ position: "absolute", top: "300px", right: "-170px", opacity: "0.25", transform: "rotate(-20deg)" }}>
            <CatSvg width={150} height={150} />
          </div>
          <div style={{ position: "absolute", top: "500px", left: "-160px", opacity: "0.35", transform: "rotate(10deg)" }}>
            <LeafSvg width={105} height={105} />
          </div>
          <div style={{ position: "absolute", top: "700px", right: "-190px", opacity: "0.2", transform: "rotate(-15deg)" }}>
            <LaptopSvg width={165} height={165} />
          </div>
          <div style={{ position: "absolute", top: "900px", left: "-170px", opacity: "0.3", transform: "rotate(25deg)" }}>
            <TreeSvg width={135} height={135} />
          </div>
          <div style={{ position: "absolute", top: "1100px", right: "-165px", opacity: "0.25", transform: "rotate(-10deg)" }}>
            <LeafSvg width={105} height={105} />
          </div>

          {/* Main content container */}
          <Container style={{ backgroundColor: "#ffffff", border: "3px solid rgba(26, 26, 26, 0.65)", borderRadius: "0", padding: "32px 24px", position: "relative", zIndex: "1" }}>
            {/* Thank You Note */}
            <Section style={{ textAlign: "center", padding: "24px", backgroundColor: "rgba(247, 243, 234, 0.7)", borderRadius: "12px", marginBottom: "32px", border: "2px solid rgba(26, 26, 26, 0.1)" }}>
              <Text style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 16px", color: "#1a1a1a" }}>
                Thank you for joining our research! 🙏
              </Text>
              <Text style={{ fontSize: "14px", lineHeight: "1.6", margin: "0 0 16px", color: "#4a4a4a" }}>
                By taking this quiz, you&apos;ve contributed to crucial research on the digital landscape of children, adolescents, and their parents here at <a href="https://futurenet-demo.netlify.app/" target="_blank" style={{ 
                  backgroundColor: "#000000", 
                  color: "#ffffff", 
                  padding: "4px 8px", 
                  borderRadius: "0px", 
                  border: "2px solid #ffffff", 
                  textDecoration: "none", 
                  fontWeight: "700", 
                  fontSize: "12px", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase",
                  fontFamily: "'Verdana', sans-serif",
                  display: "inline-block",
                  margin: "0 2px"
                }}><strong>FutureNet</strong></a>. We&apos;re a group of technologists who are also parents, working together to give our kids a chance to grow up with the same freedom, creativity, and authentic connections we experienced in our own childhoods.
              </Text>
              <Text style={{ fontSize: "14px", lineHeight: "1.6", margin: "0", color: "#4a4a4a" }}>
                Every response helps us understand how parenting styles have evolved with technology, and how we can build a better digital future for the next generation.
              </Text>
            </Section>

            {/* Hero section */}
            <Section style={{ textAlign: "center", marginBottom: "32px" }}>
              <Heading style={{ margin: "0 0 8px", fontSize: "32px", fontWeight: "600", letterSpacing: "0.02em", lineHeight: "1.02" }}>
                We Guessed Your Phone! 📱
              </Heading>
              <Text style={{ fontSize: "16px", margin: "0 0 24px", color: "#666", fontStyle: "italic" }}>
                Based on your digital parenting style, here&apos;s the phone we think you had...
              </Text>
              <div style={{ ...highlight, display: "inline-block", marginBottom: "16px" }}>
                <Text style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}>
                  You&apos;re a <strong>{topPersona.characterName}</strong>
                </Text>
              </div>
              <Text style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: "600", color: "rgba(26, 26, 26, 0.8)" }}>
                {topPersona.tagline}
              </Text>
              {/* Nostalgic Phone Display - Front and Center */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                <div style={{ 
                  border: "3px solid rgba(26, 26, 26, 0.4)", 
                  borderRadius: "16px", 
                  backgroundColor: "#ffffff", 
                  padding: "32px", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)"
                }}>
                  <Img src={PHONE_IMAGE_URLS[topPersona.id]} alt={topPersona.phoneModel} width={120} height={120} style={{ objectFit: "contain", marginBottom: "16px" }} />
                  <Text style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#1a1a1a", textAlign: "center" }}>
                    {topPersona.phoneModel}
                  </Text>
                  <Text style={{ margin: "8px 0 0", fontSize: "14px", color: "#666", textAlign: "center", fontStyle: "italic" }}>
                    Remember this beauty? 📱✨
                  </Text>
                </div>
              </div>
            </Section>

            {/* Detailed persona writeup */}
            <Section style={{ marginBottom: "32px", padding: "24px", backgroundColor: "#f7f3ea", border: "2px solid rgba(26, 26, 26, 0.2)" }}>
              <Heading as="h2" style={{ margin: "0 0 16px", fontSize: "22px", fontWeight: "600" }}>
                Your Digital Parenting Profile
              </Heading>
              <Text style={{ margin: "0 0 16px", fontSize: "16px", lineHeight: "1.6" }}>
                {topPersona.summary}
              </Text>
              <Text style={{ margin: "0 0 16px", fontSize: "16px", lineHeight: "1.6" }}>
                As <strong>{topPersona.characterName}</strong>, you represent a unique approach to digital parenting that balances technology use with family values. Your {topPersona.phoneModel} choice reflects your personality - practical yet forward-thinking, reliable yet adaptable to new challenges.
              </Text>
              <Text style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", fontStyle: "italic" }}>
                You&apos;re the family&apos;s creative catalyst—you see tech as a tool for connection, expression, and learning together. You&apos;re practical and technical: you&apos;ll allow tech, but only in staged tiers with strong defaults and a rollback plan.
              </Text>
            </Section>

            {/* Strengths section */}
            <Section style={{ marginBottom: "24px" }}>
              <Heading as="h3" style={{ margin: "0 0 12px", fontSize: "18px", fontWeight: "600", color: "#2d5a27" }}>
                🌟 Your Superpowers
              </Heading>
              <div style={{ display: "grid", gap: "8px" }}>
                {topPersona.strengths.slice(0, 6).map((strength) => (
                  <Text key={strength} style={{ margin: "0", fontSize: "15px", padding: "8px 12px", backgroundColor: "rgba(45, 90, 39, 0.1)", border: "1px solid rgba(45, 90, 39, 0.2)", borderRadius: "4px" }}>
                    ✓ {strength}
                  </Text>
                ))}
              </div>
            </Section>

            {/* Watch-outs section */}
            <Section style={{ marginBottom: "24px" }}>
              <Heading as="h3" style={{ margin: "0 0 12px", fontSize: "18px", fontWeight: "600", color: "#8b4513" }}>
                ⚠️ Growth Areas
              </Heading>
              <div style={{ display: "grid", gap: "8px" }}>
                {topPersona.watchOutFor.slice(0, 6).map((watchOut) => (
                  <Text key={watchOut} style={{ margin: "0", fontSize: "15px", padding: "8px 12px", backgroundColor: "rgba(139, 69, 19, 0.1)", border: "1px solid rgba(139, 69, 19, 0.2)", borderRadius: "4px" }}>
                    → {watchOut}
                  </Text>
                ))}
              </div>
            </Section>

            {/* Next quest section */}
            <Section style={{ marginBottom: "32px" }}>
              <Heading as="h3" style={{ margin: "0 0 12px", fontSize: "18px", fontWeight: "600", color: "#4a5568" }}>
                🎯 Your Next Quest
              </Heading>
              <div style={{ display: "grid", gap: "8px" }}>
                {topPersona.nextQuest.slice(0, 6).map((quest) => (
                  <Text key={quest} style={{ margin: "0", fontSize: "15px", padding: "8px 12px", backgroundColor: "rgba(74, 85, 104, 0.1)", border: "1px solid rgba(74, 85, 104, 0.2)", borderRadius: "4px" }}>
                    🚀 {quest}
                  </Text>
                ))}
              </div>
            </Section>

            <Hr style={{ borderColor: "rgba(26, 26, 26, 0.2)", margin: "32px 0", borderWidth: "2px" }} />

            {/* Shareable Result Poster */}
            <Section style={{ marginBottom: "32px", textAlign: "center" }}>
              <Heading as="h2" style={{ margin: "0 0 16px", fontSize: "24px", fontWeight: "600" }}>
                Share Your Results
              </Heading>
              <Text style={{ margin: "0 0 24px", fontSize: "16px", opacity: "0.8" }}>
                Got your digital parent type? Share it with friends and invite them to discover theirs!
              </Text>
              
              {/* Result Poster Card */}
              <div style={{ 
                textAlign: "center", 
                padding: "32px 24px", 
                borderRadius: "0px", 
                background: "#000000",
                border: "4px solid #ffffff",
                position: "relative",
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(rgba(255,0,255,0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px, 20px 20px, 60px 60px, 60px 60px",
                backgroundPosition: "0 0, 0 0, 10px 10px, 30px 30px"
              }}>
                {/* Header */}
                <Text style={{ margin: "0 0 8px", fontSize: "10px", fontWeight: "400", color: "#ffffff", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>
                  FUTURENET / DIGITAL PARENT QUIZ
                </Text>
                
                {/* Phone Image */}
                <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                  <div style={{ 
                    border: "2px solid #ffffff", 
                    borderRadius: "0px", 
                    backgroundColor: "#ffffff", 
                    padding: "16px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    width: "120px",
                    height: "120px"
                  }}>
                    <Img src={PHONE_IMAGE_URLS[topPersona.id]} alt={topPersona.phoneModel} width={88} height={88} style={{ objectFit: "contain" }} />
                  </div>
                </div>
                
                {/* Phone Model */}
                <Text style={{ margin: "0 0 4px", fontSize: "32px", fontWeight: "900", color: "#ffffff", lineHeight: "0.9", fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: "-1px", textTransform: "uppercase" }}>
                  {topPersona.phoneModel.toUpperCase()}
                </Text>
                
                {/* Character Name */}
                <Text style={{ margin: "0 0 16px", fontSize: "14px", fontWeight: "400", color: "#ffffff", fontFamily: "'Helvetica', 'Arial', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>
                  {topPersona.characterName}
                </Text>
                
                {/* Tagline */}
                <div style={{ 
                  backgroundColor: "#ffffff", 
                  border: "2px solid #000000", 
                  borderRadius: "0px", 
                  padding: "6px 12px", 
                  margin: "0 auto 16px",
                  display: "inline-block"
                }}>
                  <Text style={{ margin: "0", fontSize: "11px", fontWeight: "700", color: "#000000", fontFamily: "'Verdana', sans-serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {topPersona.tagline}
                  </Text>
                </div>
                
                {/* URL */}
                <Text style={{ margin: "0", fontSize: "9px", fontWeight: "400", color: "#ffffff", fontFamily: "'Courier New', monospace", letterSpacing: "1px" }}>
                  futurenet-demo.netlify.app/digital-parent-quiz
                </Text>
                
                {/* Y2K Cyberpunk Design Elements */}
                <div style={{ position: "absolute", top: "8px", left: "8px", fontSize: "84px", color: "#ffff00" }}>☀</div>
                <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "72px", color: "#ff00ff" }}>☺</div>
                <div style={{ position: "absolute", bottom: "8px", left: "16px", fontSize: "78px", color: "#00ffff" }}>★</div>
                <div style={{ position: "absolute", bottom: "12px", right: "20px", fontSize: "60px", color: "#ffffff" }}>●</div>
                <div style={{ position: "absolute", top: "50%", left: "8px", fontSize: "54px", color: "#ff00ff" }}>★</div>
                <div style={{ position: "absolute", top: "30%", right: "8px", fontSize: "66px", color: "#00ffff" }}>☺</div>
              </div>

              {/* Social Share Buttons */}
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href={`https://wa.me/?text=I just discovered I'm "${topPersona.characterName}" (${topPersona.phoneModel}) in FutureNet's Digital Parent Quiz! 📱 Help us research how technology shapes modern parenting - what's your digital parenting style? Take the quiz: https://futurenet-demo.netlify.app/digital-parent-quiz`} style={{ textDecoration: "none" }}>
                  <div style={{ 
                    backgroundColor: "#a8e6a3", 
                    color: "#2d5a2d", 
                    padding: "5px 12px", 
                    borderRadius: "8px", 
                    fontSize: "14px", 
                    fontWeight: "600",
                    border: "2px solid rgba(168, 230, 163, 0.6)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#2d5a2d" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M200 80
                                 C120 80, 80 130, 80 200
                                 C80 270, 120 320, 200 320
                                 C220 320, 240 315, 260 305
                                 L300 320 L285 280
                                 C310 250, 320 225, 320 200
                                 C320 130, 280 80, 200 80 Z"/>
                        <path d="M160 180
                                 C150 170, 150 150, 165 145
                                 C190 135, 210 165, 220 185
                                 C230 205, 260 220, 245 245
                                 C230 270, 200 255, 180 230
                                 C165 215, 150 195, 160 180 Z"/>
                      </g>
                    </svg>
                    WhatsApp
                  </div>
                </Link>
                
                <Link href={`https://t.me/share/url?url=https://futurenet-demo.netlify.app/digital-parent-quiz&text=I just discovered I'm "${topPersona.characterName}" (${topPersona.phoneModel}) in FutureNet's Digital Parent Quiz! Help us research how technology shapes modern parenting - what's your digital parenting style?`} style={{ textDecoration: "none" }}>
                  <div style={{ 
                    backgroundColor: "#a3d5f0", 
                    color: "#2d4a5a", 
                    padding: "5px 12px", 
                    borderRadius: "8px", 
                    fontSize: "14px", 
                    fontWeight: "600",
                    border: "2px solid rgba(163, 213, 240, 0.6)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#2d4a5a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="200" cy="200" r="120"/>
                        <path d="M140 220 L280 140 L220 260 L200 220 Z"/>
                      </g>
                    </svg>
                    Telegram
                  </div>
                </Link>
                
                <Link href={`https://www.instagram.com/direct/new/?text=I just discovered I'm "${topPersona.characterName}" (${topPersona.phoneModel}) in FutureNet's Digital Parent Quiz! Help us research how technology shapes modern parenting - what's your digital parenting style? Take the quiz: https://futurenet-demo.netlify.app/digital-parent-quiz`} style={{ textDecoration: "none" }}>
                  <div style={{ 
                    backgroundColor: "#f0a3d5", 
                    color: "#5a2d4a", 
                    padding: "5px 12px", 
                    borderRadius: "8px", 
                    fontSize: "14px", 
                    fontWeight: "600",
                    border: "2px solid rgba(240, 163, 213, 0.6)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#5a2d4a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="80" y="80" width="240" height="240" rx="50"/>
                        <circle cx="200" cy="200" r="50"/>
                        <circle cx="260" cy="140" r="10"/>
                      </g>
                    </svg>
                    Instagram
                  </div>
                </Link>
                
                <Link href={`https://futurenet-demo.netlify.app/digital-parent-quiz?share=${encodeURIComponent(`I just discovered I'm "${topPersona.characterName}" (${topPersona.phoneModel}) in FutureNet's Digital Parent Quiz! Help us research how technology shapes modern parenting.`)}`} style={{ textDecoration: "none" }}>
                  <div style={{ 
                    backgroundColor: "#d5a3f0", 
                    color: "#4a2d5a", 
                    padding: "5px 12px", 
                    borderRadius: "8px", 
                    fontSize: "14px", 
                    fontWeight: "600",
                    border: "2px solid rgba(213, 163, 240, 0.6)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="#4a2d5a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" transform="rotate(30 200 200)">
                        <circle cx="120" cy="120" r="40"/>
                        <circle cx="280" cy="120" r="40"/>
                        <circle cx="200" cy="280" r="40"/>
                        <path d="M155 145 L245 145"/>
                        <path d="M155 145 L165 245"/>
                        <path d="M245 145 L235 245"/>
                      </g>
                    </svg>
                    Share Link
                  </div>
                </Link>
              </div>
              
              <Text style={{ margin: "16px 0 0", fontSize: "14px", opacity: "0.7", fontStyle: "italic" }}>
                Share your result and challenge your friends to find their digital parent type! Every share helps us expand our research and better understand how technology shapes modern parenting.
              </Text>
            </Section>

            <Hr style={{ borderColor: "rgba(26, 26, 26, 0.2)", margin: "32px 0", borderWidth: "2px" }} />

            {/* Other personas section */}
            <Section style={{ marginBottom: "32px" }}>
              <Heading as="h2" style={{ margin: "0 0 16px", fontSize: "24px", fontWeight: "600", textAlign: "center" }}>
                Discover Other Digital Parent Types
              </Heading>
              <Text style={{ margin: "0 0 24px", fontSize: "16px", textAlign: "center", opacity: "0.8" }}>
                Curious about other parenting styles? Here&apos;s the full lineup:
              </Text>

              <div style={{ display: "grid", gap: "16px" }}>
                {allPersonas.map((persona) => (
                  <div key={persona.id} style={{ display: "flex", alignItems: "center", padding: "16px", backgroundColor: "#f7f3ea", border: "2px solid rgba(26, 26, 26, 0.15)", borderRadius: "8px" }}>
                    <div style={{ marginRight: "16px", flexShrink: "0" }}>
                      <div style={{ border: "2px solid rgba(26, 26, 26, 0.3)", borderRadius: "4px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px" }}>
                        <Img src={PHONE_IMAGE_URLS[persona.id]} alt={persona.phoneModel} width={40} height={40} style={{ objectFit: "contain" }} />
                      </div>
                    </div>
                    <div style={{ flex: "1" }}>
                      <Text style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: "600" }}>
                        {persona.phoneModel} — {persona.characterName}
                      </Text>
                      <Text style={{ margin: "0 0 8px", fontSize: "14px", fontStyle: "italic", color: "rgba(26, 26, 26, 0.7)" }}>
                        {persona.tagline}
                      </Text>
                      <Text style={{ margin: "0", fontSize: "14px", lineHeight: "1.4" }}>
                        {persona.summary}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Hr style={{ borderColor: "rgba(26, 26, 26, 0.2)", margin: "32px 0", borderWidth: "2px" }} />

            {/* Call to action */}
            <Section style={{ textAlign: "center", marginBottom: "24px" }}>
              <Heading as="h2" style={{ margin: "0 0 16px", fontSize: "22px", fontWeight: "600" }}>
                Share Your Results!
              </Heading>
              <Text style={{ margin: "0 0 20px", fontSize: "16px", lineHeight: "1.6" }}>
                Think your friends and family would be curious about their digital parenting style? 
                Share the quiz and compare your results!
              </Text>
              <div style={{ margin: "20px 0" }}>
                <a href={productUrl} style={{ display: "inline-block", padding: "14px 24px", backgroundColor: "#f7f3ea", border: "3px solid rgba(26, 26, 26, 0.65)", borderRadius: "0", textDecoration: "none", color: "#1a1a1a", fontWeight: "600", fontSize: "16px", letterSpacing: "0.01em" }}>
                  Take the Quiz Again
                </a>
              </div>
              <Text style={{ margin: "16px 0 0", fontSize: "14px", opacity: "0.7" }}>
                Forward this email to friends or share the link: {productUrl}
              </Text>
            </Section>

            <Hr style={{ borderColor: "rgba(26, 26, 26, 0.2)", margin: "32px 0", borderWidth: "2px" }} />

            {/* Research Data Section */}
            <Section style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <Heading as="h3" style={{ margin: "0", fontSize: "18px", fontWeight: "600", color: "#1a1a1a" }}>
                  Research Data
                </Heading>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{ 
                    backgroundColor: "#000000", 
                    color: "#ffffff", 
                    border: "2px solid #ffffff", 
                    padding: "4px 8px", 
                    fontSize: "10px", 
                    fontFamily: "'Verdana', sans-serif",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }} onClick={() => navigator.clipboard.writeText(JSON.stringify({
                    timestamp: new Date().toISOString(),
                    persona_id: topPersona.id,
                    email: payload?.email || 'unknown'
                  }, null, 2))}>
                    Copy Meta
                  </button>
                  <button style={{ 
                    backgroundColor: "#000000", 
                    color: "#ffffff", 
                    border: "2px solid #ffffff", 
                    padding: "4px 8px", 
                    fontSize: "10px", 
                    fontFamily: "'Verdana', sans-serif",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }} onClick={() => navigator.clipboard.writeText(JSON.stringify(payload?.questions?.map((q: any, index: number) => ({
                    question_id: q.questionId,
                    selected_option: q.selectedId === q.questionId + 'a' ? 1 : 2,
                    chapter: q.chapter
                  })) || [], null, 2))}>
                    Copy Responses
                  </button>
                </div>
              </div>
              <Text style={{ margin: "0 0 12px", fontSize: "12px", color: "#666", fontStyle: "italic" }}>
                For FutureNet's research purposes - thank you for contributing to our study!
              </Text>
              
              {/* Metadata Block */}
              <div style={{ marginBottom: "16px" }}>
                <Text style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>
                  Participant Metadata:
                </Text>
                <div style={{ 
                  backgroundColor: "#f8f8f8", 
                  border: "2px solid #e0e0e0", 
                  borderRadius: "0px", 
                  padding: "12px", 
                  fontFamily: "'Courier New', monospace", 
                  fontSize: "11px", 
                  lineHeight: "1.4",
                  color: "#333",
                  whiteSpace: "pre-wrap"
                }}>
                  <Text style={{ margin: "0", fontFamily: "'Courier New', monospace", fontSize: "11px", whiteSpace: "pre-wrap" }}>
{JSON.stringify({
  timestamp: new Date().toISOString(),
  persona_id: topPersona.id,
  email: payload?.email || 'unknown'
}, null, 2)}
                  </Text>
                </div>
              </div>

              {/* Question Responses Block */}
              <div>
                <Text style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>
                  Question Responses:
                </Text>
                <div style={{ 
                  backgroundColor: "#f8f8f8", 
                  border: "2px solid #e0e0e0", 
                  borderRadius: "0px", 
                  padding: "12px", 
                  fontFamily: "'Courier New', monospace", 
                  fontSize: "11px", 
                  lineHeight: "1.4",
                  color: "#333",
                  whiteSpace: "pre-wrap"
                }}>
                  <Text style={{ margin: "0", fontFamily: "'Courier New', monospace", fontSize: "11px", whiteSpace: "pre-wrap" }}>
{JSON.stringify(payload?.questions?.map((q: any, index: number) => ({
  question_id: q.questionId,
  selected_option: q.selectedId === q.questionId + 'a' ? 1 : 2,
  chapter: q.chapter
})) || [], null, 2)}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Footer doodles */}
            <div style={{ position: "relative", height: "180px", overflow: "visible" }}>
              {/* Additional margin decorations near footer */}
              <div style={{ position: "absolute", top: "-100px", left: "-185px", opacity: "0.2", transform: "rotate(30deg)" }}>
                <CatSvg width={180} height={180} />
              </div>
              <div style={{ position: "absolute", top: "-80px", right: "-175px", opacity: "0.25", transform: "rotate(-25deg)" }}>
                <LeafSvg width={145} height={145} />
              </div>
              <div style={{ position: "absolute", bottom: "10px", opacity: "0.4", transform: "rotate(-2deg)" }}>
                <CatSvg width={105} height={105} />
              </div>
              <div style={{ position: "absolute", bottom: "15px", right: "-0px", opacity: "0.5", transform: "rotate(2deg)" }}>
                <TreeSvg width={105} height={105} />
              </div>
              <div style={{ position: "absolute", bottom: "5px", left: "50%", transform: "translateX(-50%) rotate(-3deg)", opacity: "0.3" }}>
                <LaptopSvg width={120} height={120} />
              </div>
            </div>
          </Container>
        </Container>
      </Body>
    </Html>
  );
}
