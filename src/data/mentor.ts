export type LevelKey = "100" | "200" | "300" | "400" | "500";

export type StudySegment = {
  title: string;
  description: string;
  suggestedHours: number;
};

export type CourseFocus = {
  code: string;
  name: string;
  summary: string;
  learningFlow: string[];
  fieldApplications: string[];
  quickChecks: string[];
};

export type LevelProfile = {
  level: LevelKey;
  title: string;
  overview: string;
  successKeys: string[];
  weeklyRhythm: StudySegment[];
  courses: CourseFocus[];
  assessmentTips: string[];
  fieldPreparation: string[];
  labChecklist: string[];
  signatureProjects: string[];
};

export type ResourceLink = {
  level: LevelKey | "all";
  course?: string;
  title: string;
  format: "PDF" | "Slides" | "Text";
  focus: string;
  action: string;
};

export type PracticePrompt = {
  level: LevelKey;
  theme: string;
  prompt: string;
  expectedApproach: string[];
};

export const levelProfiles: LevelProfile[] = [
  {
    level: "100",
    title: "Foundation Year – Building Engineering Fluency",
    overview:
      "Lay a solid base in mathematics, physics, chemistry, and workshop practice to support future petroleum engineering specialisation.",
    successKeys: [
      "Translate theoretical maths into sketches and basic calculations.",
      "Relate physics and chemistry laws to drilling and production fundamentals.",
      "Prepare lab notebooks ahead of experiments; capture data systematically.",
      "Build disciplined study habits anchored on lecture timetables.",
    ],
    weeklyRhythm: [
      {
        title: "Concept Primer",
        description:
          "Quickly preview lecture notes and highlight unfamiliar ideas before classes begin.",
        suggestedHours: 4,
      },
      {
        title: "Problem Drills",
        description:
          "Solve mathematics and physics problems daily to strengthen procedural memory.",
        suggestedHours: 8,
      },
      {
        title: "Studio Practice",
        description:
          "Sketch freehand projections for Engineering Drawing and practice measurement accuracy.",
        suggestedHours: 5,
      },
      {
        title: "Reflection",
        description:
          "Summarise each course in a one-page sheet linking concepts to petroleum examples.",
        suggestedHours: 3,
      },
    ],
    courses: [
      {
        code: "MTH 101",
        name: "Engineering Mathematics I",
        summary:
          "Introduces functions, limits, differentiation, integration, and vectors with emphasis on engineering applications.",
        learningFlow: [
          "Review algebraic manipulation and graphical interpretation of functions.",
          "Master limit evaluation techniques (algebraic, L'Hospital).",
          "Practice differential calculus for optimisation and rate-related problems.",
          "Integrate typical reservoir volume and discharge computations.",
          "Apply vector resolution to forces acting on drilling rigs.",
        ],
        fieldApplications: [
          "Calculating reservoir pore volume using definite integrals.",
          "Determining optimum pump speeds from rate-of-change analyses.",
          "Resolving load distributions across wellhead assemblies.",
        ],
        quickChecks: [
          "Sketch a production decline curve and describe the meaning of its slope.",
          "Use derivatives to confirm the maximum safe hook-load in drilling hoists.",
          "Explain how vectors determine resultant forces on Christmas trees.",
        ],
      },
      {
        code: "PHY 115",
        name: "Applied Mechanics",
        summary:
          "Covers Newtonian mechanics, rotational motion, energy balances, and simple machines.",
        learningFlow: [
          "Map forces and free-body diagrams for static systems.",
          "Relate kinematics equations to rig hoisting and pipe handling.",
          "Apply work-energy theorems to drilling operations.",
          "Analyse rotational dynamics of rotary tables and top drives.",
        ],
        fieldApplications: [
          "Predicting drill string tension and hook load requirements.",
          "Sizing counterweights for motion-compensated offshore rigs.",
          "Estimating kinetic energy during pipe tripping operations.",
        ],
        quickChecks: [
          "Draw a free-body diagram of a derrick block-and-tackle system.",
          "Compute kinetic energy for drill pipes ascending at constant velocity.",
          "Explain why frictional losses matter for rig equipment maintenance.",
        ],
      },
    ],
    assessmentTips: [
      "UNIPORT foundation exams reward detailed working; avoid skipping intermediary steps.",
      "Carry a labelled diagram into every drawing-based answer.",
      "Solve past questions in 90-minute blocks to simulate actual test pacing.",
    ],
    fieldPreparation: [
      "Visit the University fabrication workshop; correlate machines with petroleum applications.",
      "Observe laboratory safety signage and note hazardous chemical labelling.",
      "Identify local Niger Delta fields and link geology notes to their stratigraphy.",
    ],
    labChecklist: [
      "Personal lab coat and goggles.",
      "Engineering drawing set (T-square, set squares, compass).",
      "Bound lab notebook with ruled and graph sections.",
      "Scientific calculator with polar/rectangular conversion.",
    ],
    signatureProjects: [
      "Prepare a comparative summary of Niger Delta sedimentary basin layers.",
      "Model a simple derrick using cardboard to visualise force distribution.",
      "Build a study wall-chart linking mathematics topics to petroleum use-cases.",
    ],
  },
  {
    level: "200",
    title: "Transition Year – From Principles to Processes",
    overview:
      "Integrate mathematics with material balances, thermodynamics, and strength of materials to support core petroleum courses.",
    successKeys: [
      "Derive formulas rather than memorising – lecturers emphasise first principles.",
      "Develop unit-conversion fluency across metric and field units.",
      "Link geology excursions to laboratory rock-property testing.",
      "Schedule peer discussions after lectures to consolidate understanding.",
    ],
    weeklyRhythm: [
      {
        title: "Theory Deep Dive",
        description: "Re-derive fluid mechanics equations using annotated notes.",
        suggestedHours: 6,
      },
      {
        title: "Numerical Practice",
        description: "Tackle problem sets on material balances and thermodynamics.",
        suggestedHours: 7,
      },
      {
        title: "Lab & Field",
        description: "Prepare lab reports early; insert sketches and photographs.",
        suggestedHours: 4,
      },
      {
        title: "Concept Integration",
        description:
          "Discuss how mechanics, materials, and geology interact in drilling operations.",
        suggestedHours: 3,
      },
    ],
    courses: [
      {
        code: "PET 201",
        name: "Fluid Mechanics",
        summary:
          "Studies fluid statics, Bernoulli equation, laminar and turbulent flow, and dimensional analysis.",
        learningFlow: [
          "Revisit fluid properties, units, and measurement techniques.",
          "Apply hydrostatic pressure distributions to drilling mud columns.",
          "Derive Bernoulli equation; extend to pump selection and choke sizing.",
          "Classify flow regimes using Reynolds number and friction factor charts.",
          "Use Buckingham Pi theorem for model testing of pipelines.",
        ],
        fieldApplications: [
          "Mud balance calculations for kick prevention.",
          "Optimising flow assurance in gathering lines.",
          "Designing separators with correct pressure differentials.",
        ],
        quickChecks: [
          "Compute hydrostatic head for a 10.5 ppg mud in a 8500 ft well.",
          "Explain when Bernoulli's equation may fail in production manifolds.",
          "Discuss the role of dimensionless analysis in scaling wax deposition tests.",
        ],
      },
      {
        code: "ENG 214",
        name: "Strength of Materials",
        summary:
          "Explores stress-strain relationships, torsion, bending, and failure criteria relevant to tubulars.",
        learningFlow: [
          "Relate stress components and Mohr's circle for principal stress evaluation.",
          "Analyse axial loading and deformation in drill strings.",
          "Solve torsion in hollow shafts (casing, tubing).",
          "Evaluate combined loading for casing design envelopes.",
        ],
        fieldApplications: [
          "Preventing casing collapse during cementing operations.",
          "Sizing sucker rods for artificial lift systems.",
          "Assessing fatigue in offshore risers due to wave loading.",
        ],
        quickChecks: [
          "Distinguish yield vs ultimate strengths for API tubular grades.",
          "Use Mohr's circle to compute safety factors for casing.",
          "Explain shear stress distribution in hollow shafts.",
        ],
      },
    ],
    assessmentTips: [
      "Past question analysis reveals derivations are often 40–50% of exam marks.",
      "Plot neat graphs with labelled axes; UNIPORT scripts reward clarity.",
      "Cross-check unit conversions for every numeric step before final answers.",
    ],
    fieldPreparation: [
      "Attend industry seminars at PTDF building; note current Niger Delta development projects.",
      "Review core samples from Geology lab; align textural properties with depositional environments.",
      "Practice report writing with concise executive summaries.",
    ],
    labChecklist: [
      "Calibrated hydrometers and viscometers for fluid labs.",
      "Protective gloves for rock and core handling.",
      "Spreadsheet templates for automated lab calculations.",
      "Tripod or phone stand to capture experiment setups.",
    ],
    signatureProjects: [
      "Design a mini pipeline network and simulate flow distribution.",
      "Prepare a failure analysis report of casing collapse referencing UNIPORT field notes.",
      "Develop a laminated conversion chart for SI ↔ Field units.",
    ],
  },
  {
    level: "300",
    title: "Core Petroleum Year – Reservoir to Production Integration",
    overview:
      "Engage deeply with reservoir, drilling, production, and formation evaluation topics while strengthening analytical software skills.",
    successKeys: [
      "Link reservoir rock and fluid properties to drilling and production decisions.",
      "Maintain a concept map showing dependencies across courses.",
      "Practice type-curve matching and decline analysis weekly.",
      "Balance coursework with early exposure to industry software (Petrel, Eclipse).",
    ],
    weeklyRhythm: [
      {
        title: "Reservoir Analytics",
        description: "Solve material balance and flow equation problems in study groups.",
        suggestedHours: 6,
      },
      {
        title: "Well Engineering",
        description: "Review drilling hydraulics and casing design problems.",
        suggestedHours: 5,
      },
      {
        title: "Formation Evaluation",
        description: "Interpret well logs using Schlumberger chartbook equivalents.",
        suggestedHours: 4,
      },
      {
        title: "Industry Update",
        description: "Track JV field development projects in the Niger Delta.",
        suggestedHours: 2,
      },
    ],
    courses: [
      {
        code: "PET 301",
        name: "Reservoir Engineering I",
        summary:
          "Covers volumetric analysis, material balance, PVT evaluation, and flow through porous media.",
        learningFlow: [
          "Classify reservoir drive mechanisms and performance indicators.",
          "Compute OOIP/OGIP via volumetric equations using Niger Delta data.",
          "Derive and apply general material balance equation.",
          "Analyse single-phase radial flow and productivity indices.",
          "Interpret PVT reports to adjust formation volume factors.",
        ],
        fieldApplications: [
          "Forecasting production for Agbada formation reservoirs.",
          "Selecting appropriate secondary recovery for depleted sandstone units.",
          "Estimating inflow performance for workover candidates.",
        ],
        quickChecks: [
          "List assumptions behind the general material balance equation.",
          "Explain the effect of permeability anisotropy on radial flow solutions.",
          "Compute skin factor impact on well productivity index.",
        ],
      },
      {
        code: "PET 303",
        name: "Drilling Engineering",
        summary:
          "Introduces drilling rig components, hydraulics, casing design, bit selection, and well control.",
        learningFlow: [
          "Sketch rig systems and explain functions of each subsystem.",
          "Design mud programs for vertical and deviated wells.",
          "Perform casing design considering burst, collapse, and tension loads.",
          "Calculate kick tolerance and well control response procedures.",
        ],
        fieldApplications: [
          "Selecting BOP configurations for swamp vs onshore rigs.",
          "Assessing hole cleaning efficiency during directional drilling.",
          "Planning well control drills aligned with DPR standards.",
        ],
        quickChecks: [
          "Compute equivalent circulating density for a given flow rate.",
          "Outline steps for handling gas kicks in Niger Delta deviated wells.",
          "Justify bit selection for abrasive sandstone sections.",
        ],
      },
    ],
    assessmentTips: [
      "Combine hand calculation and software verification for major assignments.",
      "Past questions often integrate multiple courses – practice interdisciplinary problems.",
      "Document assumptions clearly to secure partial credit in derivations.",
    ],
    fieldPreparation: [
      "Participate in SPE UNIPORT student chapter technical sessions.",
      "Shadow well services teams during local field visits when possible.",
      "Compile a personal drilling problems workbook with step-by-step solutions.",
    ],
    labChecklist: [
      "Laptop with reservoir calculation templates (Excel/Matlab).",
      "API standards for casing/tubing selection.",
      "Well log interpretation charts (e.g., Schlumberger).",
      "Flash drive for lab data transfers.",
    ],
    signatureProjects: [
      "Material balance study of a Niger Delta oil rim reservoir.",
      "Drilling hydraulics optimisation for deviated wells at a UNIPORT field school.",
      "Log interpretation atlas comparing shale and clean sand responses.",
    ],
  },
  {
    level: "400",
    title: "Advanced Applications – Optimising Field Performance",
    overview:
      "Focus on production optimisation, well testing, completions, and natural gas processing with strong economic justification skills.",
    successKeys: [
      "Integrate surface network simulation with reservoir performance.",
      "Critically evaluate well test data to recommend remediation.",
      "Align technical proposals with Nigerian regulatory frameworks.",
      "Keep a decision log for design selections and cost implications.",
    ],
    weeklyRhythm: [
      {
        title: "Production Systems",
        description: "Model nodal analysis scenarios and discuss constraints.",
        suggestedHours: 6,
      },
      {
        title: "Testing & Diagnostics",
        description:
          "Interpret build-up and drawdown tests; reconcile with production history.",
        suggestedHours: 4,
      },
      {
        title: "Completions Workshop",
        description: "Review completion types, component selection, and design schematics.",
        suggestedHours: 4,
      },
      {
        title: "Economics & HSE",
        description: "Evaluate project cashflows under varying fiscal regimes.",
        suggestedHours: 3,
      },
    ],
    courses: [
      {
        code: "PET 401",
        name: "Production Engineering",
        summary:
          "Studies inflow performance, artificial lift, surface facilities, and flow assurance.",
        learningFlow: [
          "Plot IPR and TPR curves to identify operating points.",
          "Compare artificial lift methods suitable for Niger Delta wells.",
          "Design wellhead choke and surface separation systems.",
          "Assess flow assurance risks (hydrate, wax, asphaltene) and mitigation.",
        ],
        fieldApplications: [
          "Optimising gas-lift systems for mature swamp wells.",
          "Sizing flowlines to mitigate slugging in wet gas fields.",
          "Selecting heat management strategies for waxy crude pipelines.",
        ],
        quickChecks: [
          "Determine when to recommend dual-string completions.",
          "Explain hydrate prevention strategy during shutdown/startup.",
          "Calculate nodal analysis for a well with tubing restrictions.",
        ],
      },
      {
        code: "PET 407",
        name: "Well Testing",
        summary:
          "Focuses on pressure transient analysis, deliverability testing, and interpretation workflows.",
        learningFlow: [
          "Classify test types (drawdown, build-up, DST) and objectives.",
          "Apply Horner and MDH plots to estimate permeability and skin.",
          "Diagnose wellbore storage, boundary effects, and heterogeneities.",
          "Present test interpretations with confidence intervals.",
        ],
        fieldApplications: [
          "Evaluating candidate wells for workover vs stimulation.",
          "Characterising compartmentalisation in Niger Delta reservoirs.",
          "Recommending surface test equipment configurations.",
        ],
        quickChecks: [
          "Differentiate derivative curve responses for radial vs fracture flows.",
          "Compute skin factor from a late-time build-up segment.",
          "State assumptions behind the Horner method and failure modes.",
        ],
      },
    ],
    assessmentTips: [
      "Annotate well test plots with interpretation notes before exams.",
      "Defend economic assumptions with real Nigerian cost benchmarks.",
      "Use bullet-based conclusions in essay questions to avoid verbosity.",
    ],
    fieldPreparation: [
      "Attend live nodal analysis sessions with production engineers.",
      "Review DPR/NUIMS production reporting templates.",
      "Analyse flow assurance incidents from Nigerian pipelines.",
    ],
    labChecklist: [
      "Portable pressure transient analysis toolkit (software or spreadsheets).",
      "Updated cost database for equipment sourcing in Nigeria.",
      "Thermal insulation references for flow assurance labs.",
      "Safety case templates aligned with local regulations.",
    ],
    signatureProjects: [
      "Integrated production system optimisation report for a marginal field.",
      "Comparison study of gas-lift vs ESP in high-water-cut reservoirs.",
      "Flow assurance risk register for Bonny export line segments.",
    ],
  },
  {
    level: "500",
    title: "Capstone & Industry Alignment – Leadership Ready",
    overview:
      "Drive final-year projects, enhanced oil recovery strategies, gas monetisation, and economic evaluation to professional standards.",
    successKeys: [
      "Connect research objectives to UNIPORT thesis guidelines and SPE publishing standards.",
      "Quantify uncertainties and risk in every recommendation.",
      "Lead multidisciplinary collaboration, documenting decisions and lessons.",
      "Prepare for transition into NYSC and graduate trainee programmes.",
    ],
    weeklyRhythm: [
      {
        title: "Project Execution",
        description: "Allocate daily slots to literature review, methodology, and analysis.",
        suggestedHours: 8,
      },
      {
        title: "Advanced Simulation",
        description: "Validate models using sensitivity analysis and history matching.",
        suggestedHours: 5,
      },
      {
        title: "Industry Engagement",
        description: "Attend webinars, engage with alumni mentors, review case studies.",
        suggestedHours: 3,
      },
      {
        title: "Professional Readiness",
        description: "Update CV, rehearse technical interviews, and practice presentations.",
        suggestedHours: 3,
      },
    ],
    courses: [
      {
        code: "PET 501",
        name: "Enhanced Oil Recovery",
        summary:
          "Examines chemical, gas, and thermal EOR methods with screening criteria and Nigerian field deployment cases.",
        learningFlow: [
          "Differentiate microscopic vs macroscopic displacement efficiencies.",
          "Evaluate screening criteria for polymer, surfactant, WAG, and thermal methods.",
          "Design pilot tests with material balance and numerical simulation support.",
          "Quantify incremental recovery and economic viability.",
        ],
        fieldApplications: [
          "Assessing surfactant-polymer pilots for shallow Niger Delta reservoirs.",
          "Evaluating CO₂ source availability and logistics within Nigeria.",
          "Designing chemical storage and injection facilities.",
        ],
        quickChecks: [
          "Outline chemical adsorption challenges in unconsolidated sands.",
          "Estimate mobility control factor for a polymer flood.",
          "Discuss risks of souring during miscible gas injection.",
        ],
      },
      {
        code: "PET 509",
        name: "Petroleum Economics & Asset Management",
        summary:
          "Integrates cashflow modelling, fiscal regimes, risk, and portfolio optimisation for upstream assets.",
        learningFlow: [
          "Construct discounted cashflow models with Nigerian royalty and tax terms.",
          "Use sensitivity analysis to stress-test project assumptions.",
          "Prioritise portfolios using decision tree and real options frameworks.",
          "Prepare board-level investment recommendation memos.",
        ],
        fieldApplications: [
          "Ranking marginal field development plans under varying crude prices.",
          "Evaluating gas monetisation (LNG, GTL, power) for domestic supply.",
          "Negotiating PSC terms with JV partners backed by economic metrics.",
        ],
        quickChecks: [
          "Compute government take under a JV vs PSC scenario.",
          "Explain NPV vs IRR limitations for gas processing projects.",
          "Propose risk mitigation strategies for price volatility.",
        ],
      },
    ],
    assessmentTips: [
      "Back every recommendation with data triangulation (lab + simulation + economics).",
      "Maintain a thesis progress tracker with advisor feedback and deadlines.",
      "Prepare a 3-slide executive summary for quick stakeholder updates.",
    ],
    fieldPreparation: [
      "Engage with IOCs and indigenous operators for case-study interviews.",
      "Compile lessons from Nigerian EOR pilots and gas flare-down initiatives.",
      "Document compliance requirements for DPR project approvals.",
    ],
    labChecklist: [
      "Version-controlled repository for thesis calculations and code.",
      "Template for experimental uncertainty analysis.",
      "Presentation-ready figures with consistent branding.",
      "Review checklist aligned with UNIPORT thesis formatting rules.",
    ],
    signatureProjects: [
      "Full-field EOR screening portfolio for Niger Delta sandstone reservoirs.",
      "Economic evaluation comparing gas monetisation pathways for UNIPORT partner fields.",
      "Integrated asset management plan including HSE, economics, and community engagement.",
    ],
  },
];

export const resourceLibrary: ResourceLink[] = [
  {
    level: "100",
    course: "Engineering Mathematics",
    title: "Vector Resolution in Drilling Hoists",
    format: "PDF",
    focus: "Worked examples linking vector mechanics to rig operations.",
    action: "Download class handout from Dr. Kalagbor's archive.",
  },
  {
    level: "100",
    course: "Physics",
    title: "Kinematics for Pipe Handling",
    format: "Slides",
    focus: "Step-by-step breakdown of constant-acceleration problems.",
    action: "Review before weekly tutorial.",
  },
  {
    level: "200",
    course: "Fluid Mechanics",
    title: "Mud Hydraulics Tutorial Pack",
    format: "PDF",
    focus: "Derivations of Bernoulli equation with drilling applications.",
    action: "Solve Problem Set B ahead of next lab.",
  },
  {
    level: "300",
    course: "Reservoir Engineering",
    title: "Material Balance Spreadsheet Template",
    format: "Text",
    focus: "Automated OOIP/OGIP calculations from UNIPORT field data.",
    action: "Input Agbada reservoir parameters.",
  },
  {
    level: "300",
    course: "Formation Evaluation",
    title: "Well Log Interpretation Atlas",
    format: "Slides",
    focus: "Comparative charts for shale vs clean sand responses.",
    action: "Annotate with personal notes.",
  },
  {
    level: "400",
    course: "Production Engineering",
    title: "Nodal Analysis Case Study",
    format: "PDF",
    focus: "Complete well system analysis from UNIPORT field school.",
    action: "Trace each assumption before exams.",
  },
  {
    level: "500",
    course: "Petroleum Economics",
    title: "Fiscal Terms Decision Tree",
    format: "Slides",
    focus: "PSC vs JV scenarios with Nigerian benchmarks.",
    action: "Adjust royalty assumptions for assignment.",
  },
  {
    level: "all",
    title: "UNIPORT Petroleum Engineering Past Questions (2015-2023)",
    format: "PDF",
    focus: "Comprehensive past question bank across levels.",
    action: "Print and sort by course code.",
  },
  {
    level: "all",
    title: "Laboratory Report Template",
    format: "Text",
    focus: "UNIPORT-compliant structure with marking guide.",
    action: "Duplicate for upcoming labs.",
  },
];

export const practicePrompts: PracticePrompt[] = [
  {
    level: "200",
    theme: "Bernoulli Application",
    prompt:
      "A 10.5 ppg mud flows through a vertical standpipe reducing from 4-inch to 2.5-inch diameter. Determine pressure loss and pump horsepower required for 500 gpm flow. State assumptions.",
    expectedApproach: [
      "Convert field units to SI (density, diameters, flow rate).",
      "Apply continuity to compute velocities in each section.",
      "Use Bernoulli with head loss term; estimate friction factor by Reynolds number.",
      "Translate head loss to pressure loss in psi and compute pump power.",
    ],
  },
  {
    level: "300",
    theme: "Material Balance",
    prompt:
      "Given Niger Delta reservoir data (OOIP, production history, PVT), determine drive mechanism and remaining reserves using Havlena-Odeh plot.",
    expectedApproach: [
      "Plot F vs Eo+EgBg for diagnostic.",
      "Interpret slope and intercept to identify drive mechanism.",
      "Estimate remaining reserves with extrapolation.",
      "State assumptions relating to pressure data quality.",
    ],
  },
  {
    level: "400",
    theme: "Well Test Interpretation",
    prompt:
      "Analyse a build-up test showing unit slope derivative at early time transitioning to flat derivative. Recommend remediation steps.",
    expectedApproach: [
      "Link unit slope to wellbore storage/damaged zone.",
      "Identify radial flow from flat derivative.",
      "Estimate permeability and skin from semi-log straight line.",
      "Propose wellbore clean-up or stimulation justifying with calculated skin.",
    ],
  },
  {
    level: "500",
    theme: "EOR Screening",
    prompt:
      "Screen an unconsolidated shallow reservoir for chemical EOR. Suggest viable method with economic considerations under Nigerian conditions.",
    expectedApproach: [
      "Compare polymer vs surfactant-polymer criteria against reservoir properties.",
      "Discuss chemical sourcing logistics within Nigeria.",
      "Develop simple cashflow model including sensitivity.",
      "Highlight HSE and community engagement requirements.",
    ],
  },
];
