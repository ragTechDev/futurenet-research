# Age Rating Criteria
A framework for a ratings and reviews system designed to assess the age-appropriateness of internet websites and web apps for kids and adolescents across granular age groups, using clear, understandable indicators of age-appropriateness. 

As technologists, we also aim for these indicators to be able to map neatly onto technical assessments and automations.

These indicators may be implemented by a rule-based measure, or through an LLM-as-a-Judge method.

## Differentating Between Web Apps vs Websites
Web apps and websites have intrinsic differences that each require a different level of discernment in assessing age-appropriateness. For the purposes of FutureNet, the collective of web apps and web sites will be referred to as a **web product**.

| Feature | Website | Web App |
| ------- | ------- | ------- |
| Interaction | Passive, read-only | Active, user creates & edits |
| Purpose | Inform or market | Provide functionality or service |
| Content | Static, same for every user | Dynamic, different between users |
| Authentication | Public | Login might be needed |
| Examples | Company homepage, news portal, Wikipedia | Trello, social media, online games, Chatbots |

## Age and Stage
- Preschoolers (2-4)
- Little Kids (5-7)
- Big Kids (7-9)
- Tweens (10-12)
- Teens (13-15)
- Young Adults (16-18)

## Value Aspects 

### Risk Handling
- Trustworthiness
  - Does the web product perpetuate misinformation or disinformation?
  - Does it avoid contradicting well-established expert consensus and the promotion of theories that are demonstrably false or outdated?
- Privacy
  -   Does the web product protect data?
  -   Does it comply with best practices related to data and privacy, and does it provide appropriate transparency and control over the use of data?
  -   Does it improperly collect, store, or process children's personal data?
-   Transparency and Accountability
  -   Does the product provide mechanisms for feedback, moderation tools for adults, or notification tools that flag potentially harmful content?
-   Age verification
  -   Does it correctly handle users under 13 and refuse to proceed without parental consent?
-  Exposure Interaction
  - Does it prevent unsafe exposure, grooming-like interactions, or inappropriate content directed toward minors? 

### Responsibility
- Bias(Types: Race, gender, religion, politics, etc.)
  - Does the web product perpetuate stereotypes, reinforce discriminatory perspectives, or display unfair treatment based on gender, race, religion, and politics?
   - Does the web product incite hatred against an individual or group, dehumanize individuals or groups, or employ racial, religious, misogynist, or other slurs and stereotypes that incite or promote hatred?
  - How effectively does the product avoid biased, stereotypical, or discriminatory content? [For user generated content]

### Toxicity (Profanity, insults, threats, etc.)
- Insults
  - Does the product include insults, demeaning, or belittling language, or responses that teach how to insult someone effectively?
- Profanity
  - Does the product include offensive or vulgar language, or responses that encourage or normalize such language?
- Threats
  - Does the product issue direct threats, provide instructions to intimidate, or suggest ways to harm others verbally or physically?
- Mockery
  - Does the product ridicule or mock someone, or teach methods to humiliate or undermine others through ridicule?
- Overall toxicity
  - To what extent is offensive or toxic output controlled? [For user generated content]
 
### Safety
- Illegal Activity (Drinking, drugs, gambling, smoking, underage sex, weapons, child exploitation etc.)
- Graphic Content (Sexual content, graphic content, etc.)
  - Violence and scariness
  - Sex, Romance and Nudity
- Personal safety (Bullying, self-harm etc.)

### Ethics
- Moral integrity
- Responsible Transparency
  - Does the product disclose author/creator identity, state limitations/uncertainty, and avoid deceptive framing?
  - Does the product respect user autonomy and consent?
- Harm Prevention
  - Does the product refuse to provide operationalization of harmful or dual-use guidance?
  - Does the product offer safe, ethical alternatives and mitigation advice?

### Organisational Values
- Cultural norms
  - Does the product disrespect cultural norms?
- Value alignment
  - Is the product aligned to organisational values?
 
### Fairness
- Contextual fairness
  - Does the product maintain comparable fairness and quality across different languages, groups, or environments?

## Positive Content
- Educational Value
- Creative activities (e.g. drawing)
- Positive Messages
- Ease of Play
- Positive Role Models

| Value Aspect | Category | Indicator | Example technical test | 
| ------------ | -------- | --------- | ---------------------- | 

## Example test tool
```json
{ score_card_name: "Wikipedia page age-appropriateness score"
indicators: - name: "How correct is the information provided by the product?"
apply_to:
test_name: "wikipedia_test" metric: "information_correctness"
assessment:
- {
outcome: "A" condition: "greater_equal",
threshold: 0.95,
description: "Completely accurate",
}
— { outcome: "B", condition: "greater_than",
threshold: 0.9,
description: "Highly accurate"
}
...
```


## References
- [Commmon Sense Media AI Framework](https://www.commonsensemedia.org/aiframework)
  - Provides a framework to evaluate safety of AI products in the context of child safety, together with principles. We can take     reference to the principles used.
- [Resaro's AI Assurance Quality Index](https://resaro.ai/asqi)
  - Provides a transparent, use-case-specific measure of AI quality that is evidence and metric-based
  - Not a yes/no characteristic. ASQI distinguishes 5 levels for each indicator — from best-in-class to minimal concern.
- [DeepTeam](https://www.trydeepteam.com/docs/red-teaming-vulnerabilities-bias)
  - an open-source framework to red team LLM systems
  - Detect vulnerabilities such as bias, misinformation, PII leakage, over-reliance on context, and harmful content generation

## Key Even-Year Milestones (Ages 6-18), The Anxious Generation Reference
- Age 6 (Family Responsibility): Children take on a small list of chores and receive an allowance for completing them.
- Age 8 (Local Freedom): Children gain freedom to play/hang out in groups without direct adult supervision, such as running errands locally.
- Age 10 (Age of Roaming): Increased freedom to roam, including more distant, unsupervised play or biking, and potential for a simple phone with no internet.
- Age 12 (Apprenticeship): Involvement with adult mentors, increased chores, and more time with relatives.
- Age 14 (Work & Technology): First smartphone (non-social media) and starting to work for pay or join formal teams.
- Age 16 (Independence): Ability to drive, as part of the "rite of passage" to adulthood.
- Age 18 (Adulthood): Full autonomy.

## Common Sense Principles
- Put People First: Does the product respect human rights and children's rights, as well as identity, integrity, and human dignity? Does it support human agency with human-in-the-loop and adults (parents, guardians, educators)-in-the-loop models?
- Promote Learning: Is the product centered on the needs of individual students (including linguistically diverse students and students with disabilities)? Is it aligned with content standards? Does it foster a love of learning?
- Prioritize Fairness: Does the product prioritize equitable sharing of the benefits of artificial intelligence, with a goal of eliminating unfair bias in development and use of AI systems?
- Help People Connect: Does the product foster meaningful human contact and interpersonal connection? It should not incite hatred against an individual or group, dehumanize individuals or groups, or employ racial, religious, misogynist, or other slurs and stereotypes that incite or promote hatred.
- Be Trustworthy: Does the product perpetuate misinformation or disinformation? Does it avoid contradicting well-established expert consensus and the promotion of theories that are demonstrably false or outdated?
- Defend Privacy: Does the product protect data? Does it comply with best practices related to data and privacy, and does it provide appropriate transparency and control over the use of data?
- Keep Kids and Teens Safe: Does the product protect children's safety, health, and well-being, regardless of whether the product is intended to be used by them?
- Be Transparent and Accountable: Does the product provide mechanisms for feedback, moderation tools for adults, or notification tools that flag potentially harmful content?

## Defining Violence
From [research on violent media impact on youth](https://pmc.ncbi.nlm.nih.gov/articles/PMC10177625/):
1. behaviors that would likely result in murder (i.e., stabbing or shooting someone); 
2. aggravated assault (i.e., threatening someone with a weapon; attacking someone resulting in the need for medical care); 
3. robbery (i.e., using a knife or gun or some other kind of weapon like a bat to get something from someone else); and
4. sexual assault (kissing, touching, or doing anything sexual with another person when it was not wanted by that person). This last item was written to be developmentally appropriate for 10–15-year-olds.
