'use client';

import { useMemo, useState } from "react";
import type { LevelKey, ResourceLink } from "@/data/mentor";

type ResourceLibraryProps = {
  resources: ResourceLink[];
};

const levels: (LevelKey | "all")[] = ["all", "100", "200", "300", "400", "500"];

export function ResourceLibrary({ resources }: ResourceLibraryProps) {
  const [levelFilter, setLevelFilter] = useState<LevelKey | "all">("all");
  const [courseFilter, setCourseFilter] = useState<string>("All Courses");

  const courses = useMemo(() => {
    const set = new Set<string>();
    resources.forEach((resource) => {
      if (resource.course) {
        set.add(resource.course);
      }
    });
    return ["All Courses", ...Array.from(set).sort()];
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesLevel =
        levelFilter === "all" ||
        resource.level === "all" ||
        resource.level === levelFilter;
      const matchesCourse =
        courseFilter === "All Courses" ||
        (resource.course && resource.course === courseFilter);
      return matchesLevel && matchesCourse;
    });
  }, [resources, levelFilter, courseFilter]);

  return (
    <section className="w-full rounded-3xl bg-white/80 shadow-sm shadow-slate-600/5 ring-1 ring-black/5">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Resource Library
          </h2>
          <p className="text-sm text-slate-600">
            Prioritise uploaded UNIPORT handouts, slides, and past questions.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                levelFilter === level
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {level === "all" ? "All Levels" : `${level} Level`}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="course-filter"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Focus Course
          </label>
          <select
            id="course-filter"
            value={courseFilter}
            onChange={(event) => setCourseFilter(event.target.value)}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredResources.map((resource) => (
            <article
              key={`${resource.title}-${resource.level}`}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm shadow-slate-600/5"
            >
              <header className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {resource.level === "all"
                      ? "All Levels"
                      : `${resource.level} Level`}
                  </p>
                  <h3 className="text-base font-semibold text-slate-900">
                    {resource.title}
                  </h3>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  {resource.format}
                </span>
              </header>
              <p className="text-sm text-slate-600">{resource.focus}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>
                  {resource.course ? `Course: ${resource.course}` : "General"}
                </span>
                <span className="font-semibold text-blue-600">
                  {resource.action}
                </span>
              </div>
            </article>
          ))}
        </div>
        {filteredResources.length === 0 && (
          <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            No resources match the selected filters yet – check the archive or
            request an upload from your course reps.
          </p>
        )}
      </div>
    </section>
  );
}
