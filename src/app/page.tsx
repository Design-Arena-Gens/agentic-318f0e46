import { LevelExplorer } from "@/components/LevelExplorer";
import { PracticeDeck } from "@/components/PracticeDeck";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { SkillCalculators } from "@/components/SkillCalculators";
import {
  levelProfiles,
  practicePrompts,
  resourceLibrary,
} from "@/data/mentor";

export default function Home() {
  const quickActions = [
    {
      title: "Explain a Topic",
      description:
        "Get beginner-to-advanced breakdowns of any Petroleum & Gas Engineering concept.",
      detail: "Structured notes + worked examples within UNIPORT context.",
    },
    {
      title: "Solve Past Questions",
      description:
        "Upload or quote past exam items and receive full workings and marking guide tips.",
      detail: "Model answers follow departmental grading rubrics.",
    },
    {
      title: "Plan Study & Revision",
      description:
        "Generate weekly timetables, memory techniques, and accountability prompts.",
      detail: "Adapts to class schedules and upcoming assessments.",
    },
  ];

  const externalBoosts = [
    {
      title: "SPE UNIPORT YouTube Tutorials",
      description:
        "Review drilling hydraulics, PVT analysis, and nodal analysis playlists tailored to local fields.",
    },
    {
      title: "Nigerian Petroleum Engineering Open Textbook",
      description:
        "Download freely accessible chapters covering reservoir appraisal and gas processing.",
    },
    {
      title: "PetroSim Lite Online",
      description:
        "Practice material balance and decline curve simulations via browser without installations.",
    },
  ];

  return (
    <div className="gradient-band min-h-screen bg-blue-50/40">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:gap-10 lg:px-10 lg:py-16">
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-lg shadow-blue-500/10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
                University of Port Harcourt · Petroleum &amp; Gas Engineering
              </span>
              <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Your Personal Academic Mentor from 100 to 500 Level
              </h1>
              <p className="text-lg text-slate-600">
                Access curated UNIPORT lecture notes, worked examples, past
                questions, and study strategies tailored to petroleum and gas
                engineering. Ask for explanations, calculations, lab prep, and
                project guidance anytime.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                <span className="rounded-full bg-blue-50 px-4 py-1 font-medium text-blue-700">
                  Fluid &amp; Reservoir Mastery
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-700">
                  Past Question Clinic
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-1 font-medium text-amber-700">
                  Thesis &amp; Project Coach
                </span>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-2xl border border-blue-200 bg-blue-900 px-6 py-8 text-slate-100 shadow-lg shadow-blue-900/40">
              <h2 className="text-lg font-semibold">Smart Interaction</h2>
              <ul className="mt-4 space-y-3 text-sm text-blue-100">
                <li className="rounded-xl border border-white/20 bg-white/5 p-3">
                  <p className="font-semibold text-white">Prompt</p>
                  <p className="text-blue-100">
                    “Explain gas compressibility at 300 level depth.”
                  </p>
                </li>
                <li className="rounded-xl border border-white/20 bg-white/5 p-3">
                  <p className="font-semibold text-white">Solve</p>
                  <p className="text-blue-100">
                    “Work a 2019 PET 303 past question step-by-step.”
                  </p>
                </li>
                <li className="rounded-xl border border-white/20 bg-white/5 p-3">
                  <p className="font-semibold text-white">Plan</p>
                  <p className="text-blue-100">
                    “Build a 2-week revision plan before mid-semester tests.”
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-600/5"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {action.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{action.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {action.detail}
              </p>
            </article>
          ))}
        </section>

        <SkillCalculators />
        <LevelExplorer profiles={levelProfiles} />
        <ResourceLibrary resources={resourceLibrary} />
        <PracticeDeck prompts={practicePrompts} />

        <section className="rounded-3xl border border-amber-100 bg-amber-50/70 p-6 shadow-sm shadow-amber-400/20 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-xl font-semibold text-amber-900">
                Study Support Playbook
              </h2>
              <p className="text-sm text-amber-800">
                Combine structured revision with memory cues and accountability
                partners to stay ahead of assessments.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-amber-900 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm">
                <h3 className="font-semibold">Active Recall Toolkit</h3>
                <p className="mt-1 text-amber-700">
                  Convert each lecture into bullet questions and self-test using
                  spaced repetition (Day 1, 3, 7, 14).
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm">
                <h3 className="font-semibold">Field Examples</h3>
                <p className="mt-1 text-amber-700">
                  Link theories to Nigerian operations: Bonny export terminal,
                  Agbada reservoirs, offshore Bonga assets.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm md:col-span-2">
                <h3 className="font-semibold">Accountability Partners</h3>
                <p className="mt-1 text-amber-700">
                  Pair with classmates by course. Rotate “explainer roles” every
                  week to reinforce understanding and mimic oral defence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-600/5 md:p-8">
          <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                External Boosters
              </h2>
              <p className="text-sm text-slate-600">
                When departmental materials need reinforcement, switch to these
                verified open-access resources.
              </p>
            </div>
            <span className="rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              No login required
            </span>
          </header>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {externalBoosts.map((resource) => (
              <article
                key={resource.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-500/5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2">{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-center gap-2 rounded-3xl border border-slate-200 bg-white/70 px-6 py-8 text-center text-sm text-slate-500 shadow-sm shadow-slate-600/5">
          <p className="font-semibold text-slate-700">
            Built for the Department of Petroleum &amp; Gas Engineering,
            University of Port Harcourt.
          </p>
          <p>
            Stay curious, stay consistent. Ask for clarifications, worked
            solutions, or project guidance whenever you need support.
          </p>
        </footer>
      </main>
    </div>
  );
}
