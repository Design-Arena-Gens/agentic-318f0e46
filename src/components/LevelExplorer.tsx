'use client';

import { useState } from "react";
import type { LevelKey, LevelProfile } from "@/data/mentor";

type LevelExplorerProps = {
  profiles: LevelProfile[];
};

const levelOrder: LevelKey[] = ["100", "200", "300", "400", "500"];

export function LevelExplorer({ profiles }: LevelExplorerProps) {
  const [activeLevel, setActiveLevel] = useState<LevelKey>("300");

  const profileMap = profiles.reduce<Record<LevelKey, LevelProfile>>(
    (acc, profile) => {
      acc[profile.level] = profile;
      return acc;
    },
    {
      "100": profiles[0],
      "200": profiles[1] ?? profiles[0],
      "300": profiles[2] ?? profiles[0],
      "400": profiles[3] ?? profiles[0],
      "500": profiles[4] ?? profiles[0],
    }
  );

  const current = profileMap[activeLevel];

  return (
    <section className="w-full rounded-3xl bg-white/70 shadow-sm shadow-blue-950/5 ring-1 ring-black/5 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-50 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Level Navigator
        </h2>
        <div className="flex flex-wrap gap-2">
          {levelOrder.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeLevel === level
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-800/40"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {level} Level
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8 p-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-blue-700">
            {current.title}
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">
            {current.overview}
          </h3>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {current.successKeys.map((tip) => (
            <div
              key={tip}
              className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-slate-700 shadow-sm"
            >
              {tip}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Weekly Rhythm
          </h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {current.weeklyRhythm.map((segment) => (
              <div
                key={segment.title}
                className="rounded-xl border border-white bg-white/80 p-4 shadow-sm shadow-slate-500/5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900">
                    {segment.title}
                  </p>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {segment.suggestedHours} hrs
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Core Courses
            </h4>
            <span className="text-xs text-slate-500">
              Align with UNIPORT lecture notes &amp; marking rubrics
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {current.courses.map((course) => (
              <article
                key={course.code}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm shadow-slate-600/5"
              >
                <header className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {course.code}
                  </p>
                  <h5 className="text-lg font-semibold text-slate-900">
                    {course.name}
                  </h5>
                  <p className="text-sm text-slate-600">{course.summary}</p>
                </header>
                <div className="space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Learning Flow
                    </p>
                    <ul className="mt-1 space-y-1">
                      {course.learningFlow.map((step) => (
                        <li
                          key={step}
                          className="flex gap-2 rounded-lg bg-slate-50 p-2"
                        >
                          <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Field Applications
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-600">
                      {course.fieldApplications.map((application) => (
                        <li key={application}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Quick Checks</p>
                    <ul className="mt-1 space-y-1">
                      {course.quickChecks.map((question) => (
                        <li
                          key={question}
                          className="rounded-lg border border-dashed border-blue-200 bg-blue-50/60 p-2 text-slate-700"
                        >
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-slate-500/5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Assessment Mindset
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {current.assessmentTips.map((tip) => (
                <li key={tip} className="rounded-lg bg-slate-50 p-2">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-slate-500/5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Field &amp; Lab Preparation
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-800">Industry Focus</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-600">
                  {current.fieldPreparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Lab Checklist</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-600">
                  {current.labChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm shadow-blue-500/10">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Signature Projects &amp; Field Tasks
          </h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-blue-900 md:flex-row md:flex-wrap">
            {current.signatureProjects.map((project) => (
              <li
                key={project}
                className="flex-1 rounded-xl border border-blue-200 bg-white/80 p-3 shadow-sm shadow-blue-300/15"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
