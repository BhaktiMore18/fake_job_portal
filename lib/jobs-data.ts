export interface Job {
  title: string
  company_profile: string
  description: string
  requirements: string
  benefits: string
  employment_type: string
  required_experience: string
  required_education: string
  industry: string
  function: string
  telecommuting: number
  has_questions: number
}

export const jobsData: Job[] = [
  {
    title: "Chief Unicorn Wrangler",
    company_profile:
      "SparkleNova Inc. is a rapidly expanding intergalactic startup specializing in rainbow-powered devices. Founded in 2023 on a floating island, we value imagination, glitter-based innovation, and extremely flexible physics.",
    description:
      "The Chief Unicorn Wrangler will oversee daily unicorn mood management, ensure stable rainbow emissions, and coordinate magical transportation schedules. Responsibilities include feeding holographic hay, monitoring sparkle output levels, and preventing cross-realm teleportation accidents.",
    requirements:
      "Must be able to communicate with mythical creatures telepathically. Experience handling rainbow surges is preferred. Ability to lift up to 500kg of enchanted equipment. Familiarity with time loops and alternate dimensions is a plus.",
    benefits:
      "Unlimited glitter allowance, free teleportation passes, weekly enchanted massages, and complimentary dragon-fire coffee.",
    employment_type: "Full-time",
    required_experience: "Executive",
    required_education: "Other",
    industry: "Mythical Creature Management",
    function: "Sparkle Operations",
    telecommuting: 1,
    has_questions: 0,
  },
  {
     title: "Global Operations Coordinator",
    company_profile: "Venterra Solutions Group claims to be an international business expansion firm with ‘offices in 42+ countries.’ The company describes itself vaguely as a fast-growing organization helping brands scale globally, but provides no specific details about its founders, clients, or physical address.",
    description: "This role involves managing international operations, coordinating with overseas partners, and handling high-value client documentation. Tasks include processing confidential files, verifying payment receipts, assisting with cross-border shipment approvals, and communicating with ‘regional agents.’ All work will be assigned through encrypted email channels. Candidates are expected to be available at short notice and comfortable taking fast decisions based on instructions provided.",
    requirements: "Strong communication skills, ability to follow instructions precisely, personal laptop required. Must be willing to handle sensitive documents and occasionally use personal payment apps for ‘temporary client reimbursements.’ No prior experience necessary. Training will be provided through a private messaging group.",
    benefits: "High weekly payouts, flexible work hours, international exposure, and exclusive access to company incentives after probation. No formal deduction or paperwork required.",
    employment_type: "Other",
    required_experience: "Entry level",
    required_education: "Other",
    industry: "Business Services",
    function: "Operations",
    telecommuting: 1,
    has_questions: 1
  },
  {
    title: "Product Manager",
    company_profile:
      "Innovation Hub is a product-focused company building solutions that connect millions of users worldwide. We believe in user-centric design and data-driven decision making.",
    description:
      "As a Product Manager, you will define product strategy, collaborate with engineering and design teams, and drive product launches. You will be responsible for the entire product lifecycle.",
    requirements:
      "5+ years in product management or similar role. Experience with B2B SaaS products. Strong analytical skills and proficiency with product analytics tools.",
    benefits:
      "Competitive compensation, equity, health insurance, learning stipend, home office setup, and catered team lunches.",
    employment_type: "Full-time",
    required_experience: "Mid-Senior Level",
    required_education: "Bachelor's Degree",
    industry: "Software & Technology",
    function: "Product Management",
    telecommuting: 1,
    has_questions: 0,
  },
  {
    title: "UX/UI Designer",
    company_profile:
      "Design Studio X creates beautiful, intuitive digital experiences for leading brands. We value creativity, attention to detail, and user empathy.",
    description:
      "We are seeking a talented UX/UI Designer to join our growing design team. You will create compelling user interfaces, conduct user research, and collaborate with product and engineering teams.",
    requirements:
      "3+ years of UX/UI design experience. Proficiency in Figma or similar design tools. Portfolio demonstrating strong visual design and interaction design skills.",
    benefits:
      "Competitive salary, creative freedom, remote-first culture, professional development, and annual design conference budget.",
    employment_type: "Full-time",
    required_experience: "Mid-Level",
    required_education: "Bachelor's Degree or equivalent",
    industry: "Design & Creative",
    function: "User Experience",
    telecommuting: 1,
    has_questions: 0,
  },
  {
    title: "Data Scientist",
    company_profile:
      "Analytics Pro is a data-driven company helping businesses make informed decisions through advanced analytics and machine learning. We work with Fortune 500 companies.",
    description:
      "Join our data science team to build machine learning models that drive business insights. You will work on data pipeline development, model training, and deployment.",
    requirements:
      "MS or PhD in Computer Science, Statistics, or related field. 3+ years of experience with Python and machine learning frameworks. Strong SQL and data visualization skills.",
    benefits:
      "Generous compensation, stock options, health insurance, conference attendance budget, and state-of-the-art equipment.",
    employment_type: "Full-time",
    required_experience: "Mid-Senior Level",
    required_education: "Master's Degree",
    industry: "Data & Analytics",
    function: "Data Science",
    telecommuting: 1,
    has_questions: 0,
  },
  {
    title: "Marketing Manager",
    company_profile:
      "GrowthPath is a B2B marketing and growth agency specializing in helping tech startups scale rapidly. We are known for our creative campaigns and data-driven strategies.",
    description:
      "As a Marketing Manager, you will develop and execute marketing campaigns, manage social media presence, and lead brand partnerships. You will drive lead generation and brand awareness.",
    requirements:
      "4+ years in marketing or growth roles. Experience with digital marketing, content strategy, and marketing analytics. Strong project management and communication skills.",
    benefits:
      "Competitive salary, bonus structure, stock options, flexible schedule, professional development budget, and team events.",
    employment_type: "Full-time",
    required_experience: "Mid-Level",
    required_education: "Bachelor's Degree",
    industry: "Marketing & Communications",
    function: "Marketing",
    telecommuting: 1,
    has_questions: 0,
  },
]
