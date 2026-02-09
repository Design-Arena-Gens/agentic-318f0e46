'use client';

import { useMemo, useState } from "react";
import type { LevelKey, PracticePrompt } from "@/data/mentor";

type PracticeDeckProps = {
  prompts: PracticePrompt[];
};

const promptLevels: (LevelKey | "all")[] = ["all", "200", "300", "400", "500"];

export function PracticeDeck({ prompts }: PracticeDeckProps) {
  const [levelFilter, setLevelFilter] = useState<LevelKey | "all">("all");

  const filtered = useMemo(() => {
    if (levelFilter === "all") {
      return prompts;
    }
    return prompts.filter((prompt) => prompt.level === levelFilter);
  }, [prompts, levelFilter]);

  return (
    <section className="w-full rounded-3xl bg-slate-950 text-slate-100 shadow-lg shadow-slate-900/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold">Practice Arena</h2>
          <p className="text-sm text-slate-300">
            Attempt exam-mode questions then compare with the model thinking
            path.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {promptLevels.map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                levelFilter === level
                  ? "bg-white text-slate-950"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              {level === "all" ? "All" : `${level} Level`}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-6">
        {filtered.map((prompt) => (
          <article
            key={`${prompt.theme}-${prompt.level}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-slate-900/30"
          >
            <header className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {prompt.level} Level
                </p>
                <h3 className="text-base font-semibold text-white">
                  {prompt.theme}
                </h3>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                Exam Drill
              </span>
            </header>
            <p className="mt-3 text-sm text-slate-100">{prompt.prompt}</p>
            <div className="mt-4 rounded-xl bg-slate-900/60 p-4 text-sm text-blue-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                Recommended Thinking Path
              </p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-200">
                {prompt.expectedApproach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center text-sm text-slate-200">
            Fresh practice sets are being curated. Review past questions or
            request faculty uploads for this level.
          </p>
        )}
      </div>
    </section>
  );
}
