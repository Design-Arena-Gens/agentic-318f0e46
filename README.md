## UNIPORT Petroleum & Gas Engineering Academic Mentor

This web application delivers a personalised academic assistant for students of the University of Port Harcourt, Department of Petroleum and Gas Engineering. It aggregates level-specific study roadmaps, curated resources, practice questions, and quick engineering calculators that align with local field realities.

### Key Features
- Level navigator covering 100–500 level success strategies.
- Library of prioritised departmental materials (handouts, slides, past questions).
- Exam-ready practice decks with recommended solution approaches.
- Engineering calculators for drilling hydraulics, flow regime identification, and production decline analysis.
- Study support playbook with memory techniques and accountability prompts.

### Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000` to explore the mentor interface.

### Production Build
```bash
npm run build
npm start
```

### Deployment
Optimised for Vercel. Use the provided production deployment script:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-318f0e46
```
