'use client';

import { useMemo, useState } from "react";

type HydrostaticInputs = {
  mudWeight: string;
  depth: string;
};

type ReynoldsInputs = {
  density: string;
  velocity: string;
  diameter: string;
  viscosity: string;
};

type DeclineInputs = {
  qi: string;
  declineRate: string;
  time: string;
  declineType: "exponential" | "harmonic" | "hyperbolic";
  bFactor: string;
};

const toNumber = (value: string) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export function SkillCalculators() {
  const [hydroInputs, setHydroInputs] = useState<HydrostaticInputs>({
    mudWeight: "10.5",
    depth: "8500",
  });

  const [reynoldsInputs, setReynoldsInputs] = useState<ReynoldsInputs>({
    density: "1250",
    velocity: "1.2",
    diameter: "0.1",
    viscosity: "0.85",
  });

  const [declineInputs, setDeclineInputs] = useState<DeclineInputs>({
    qi: "5500",
    declineRate: "0.18",
    time: "2",
    declineType: "hyperbolic",
    bFactor: "0.5",
  });

  const hydrostaticResult = useMemo(() => {
    const mudWeight = toNumber(hydroInputs.mudWeight);
    const depth = toNumber(hydroInputs.depth);
    const gradient = mudWeight * 0.052;
    const pressure = gradient * depth;
    return {
      gradient,
      pressure,
    };
  }, [hydroInputs]);

  const reynoldsResult = useMemo(() => {
    const density = toNumber(reynoldsInputs.density);
    const velocity = toNumber(reynoldsInputs.velocity);
    const diameter = toNumber(reynoldsInputs.diameter);
    const viscosity = toNumber(reynoldsInputs.viscosity);

    const reynolds =
      density * velocity * diameter / Math.max(viscosity / 1000, 1e-6);

    let regime = "Laminar";
    if (reynolds >= 4000) {
      regime = "Turbulent";
    } else if (reynolds >= 2000) {
      regime = "Transitional";
    }

    return {
      reynolds,
      regime,
    };
  }, [reynoldsInputs]);

  const declineResult = useMemo(() => {
    const qi = toNumber(declineInputs.qi);
    const D = toNumber(declineInputs.declineRate);
    const t = toNumber(declineInputs.time);
    const b = Math.max(toNumber(declineInputs.bFactor), 0.0001);

    const safeD = Math.max(D, 1e-6);

    if (declineInputs.declineType === "exponential") {
      const qt = qi * Math.exp(-D * t);
      const cum = (qi - qt) / safeD;
      return { qt, cum };
    }

    if (declineInputs.declineType === "harmonic") {
      const qt = qi / (1 + safeD * t);
      const cum = (qi / safeD) * Math.log(1 + safeD * t);
      return { qt, cum };
    }

    // hyperbolic
    const effectiveB = Math.abs(b - 1) < 1e-4 ? 0.9999 : b;
    const qt = qi / Math.pow(1 + effectiveB * safeD * t, 1 / effectiveB);
    const factor = Math.pow(
      1 + effectiveB * safeD * t,
      (effectiveB - 1) / effectiveB
    );
    const cum =
      (qi / ((1 - effectiveB) * safeD)) * (1 - factor);
    return { qt, cum };
  }, [declineInputs]);

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <article className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-600/5">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Drilling Hydraulics
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            Mud Hydrostatic Pressure
          </h3>
          <p className="text-sm text-slate-600">
            Calculate bottomhole hydrostatic pressure using UNIPORT field unit
            convention (ppg &amp; ft).
          </p>
        </header>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Mud Weight (ppg)
            </span>
            <input
              type="number"
              value={hydroInputs.mudWeight}
              onChange={(event) =>
                setHydroInputs((prev) => ({
                  ...prev,
                  mudWeight: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              True Vertical Depth (ft)
            </span>
            <input
              type="number"
              value={hydroInputs.depth}
              onChange={(event) =>
                setHydroInputs((prev) => ({
                  ...prev,
                  depth: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
        </div>
        <dl className="mt-5 grid gap-3 rounded-2xl bg-slate-50/80 p-4 text-sm text-slate-700">
          <div className="flex items-center justify-between">
            <dt className="font-medium text-slate-800">Pressure Gradient</dt>
            <dd className="font-semibold text-blue-700">
              {hydrostaticResult.gradient.toFixed(3)} psi/ft
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-medium text-slate-800">
              Bottomhole Pressure
            </dt>
            <dd className="font-semibold text-blue-700">
              {hydrostaticResult.pressure.toFixed(1)} psi
            </dd>
          </div>
          <p className="rounded-xl bg-white/70 p-3 text-xs text-slate-500">
            Formula:{" "}
            <span className="font-semibold">
              P = 0.052 &times; MW (ppg) &times; TVD (ft)
            </span>{" "}
            &mdash; use for UNIPORT well control quick checks.
          </p>
        </dl>
      </article>

      <article className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-600/5">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Flow Regime Identifier
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            Reynolds Number
          </h3>
          <p className="text-sm text-slate-600">
            Determine laminar vs turbulent flow for mud circulation or surface
            pipelines.
          </p>
        </header>
        <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Density (kg/m³)
            </span>
            <input
              type="number"
              value={reynoldsInputs.density}
              onChange={(event) =>
                setReynoldsInputs((prev) => ({
                  ...prev,
                  density: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Velocity (m/s)
            </span>
            <input
              type="number"
              value={reynoldsInputs.velocity}
              onChange={(event) =>
                setReynoldsInputs((prev) => ({
                  ...prev,
                  velocity: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Diameter (m)
            </span>
            <input
              type="number"
              value={reynoldsInputs.diameter}
              onChange={(event) =>
                setReynoldsInputs((prev) => ({
                  ...prev,
                  diameter: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Viscosity (cP)
            </span>
            <input
              type="number"
              value={reynoldsInputs.viscosity}
              onChange={(event) =>
                setReynoldsInputs((prev) => ({
                  ...prev,
                  viscosity: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
        </div>
        <dl className="mt-5 grid gap-3 rounded-2xl bg-slate-50/80 p-4 text-sm text-slate-700">
          <div className="flex items-center justify-between">
            <dt className="font-medium text-slate-800">Reynolds Number</dt>
            <dd className="font-semibold text-blue-700">
              {reynoldsResult.reynolds.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-medium text-slate-800">Flow Regime</dt>
            <dd className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              {reynoldsResult.regime}
            </dd>
          </div>
          <p className="rounded-xl bg-white/70 p-3 text-xs text-slate-500">
            Formula: <span className="font-semibold">Re = ρ v D / μ</span>,
            where μ is converted to Pa·s. Use <strong>Laminar &lt; 2000</strong>,
            <strong>Transitional 2000–4000</strong>, <strong>Turbulent &gt; 4000</strong>.
          </p>
        </dl>
      </article>

      <article className="md:col-span-2 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-600/5">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Production Forecasting
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            Decline Curve Visualiser
          </h3>
          <p className="text-sm text-slate-600">
            Estimate rate after time <span className="font-semibold">t</span> and
            cumulative production using UNIPORT exam-standard decline equations.
          </p>
        </header>
        <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Initial Rate (STB/day or MSCF/day)
            </span>
            <input
              type="number"
              value={declineInputs.qi}
              onChange={(event) =>
                setDeclineInputs((prev) => ({
                  ...prev,
                  qi: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Decline Rate (1/year)
            </span>
            <input
              type="number"
              step="0.01"
              value={declineInputs.declineRate}
              onChange={(event) =>
                setDeclineInputs((prev) => ({
                  ...prev,
                  declineRate: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Time (years)
            </span>
            <input
              type="number"
              value={declineInputs.time}
              onChange={(event) =>
                setDeclineInputs((prev) => ({
                  ...prev,
                  time: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Decline Type
            </span>
            <select
              value={declineInputs.declineType}
              onChange={(event) =>
                setDeclineInputs((prev) => ({
                  ...prev,
                  declineType: event.target.value as DeclineInputs["declineType"],
                }))
              }
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="exponential">Exponential</option>
              <option value="harmonic">Harmonic</option>
              <option value="hyperbolic">Hyperbolic</option>
            </select>
          </label>
          {declineInputs.declineType === "hyperbolic" && (
            <label className="block md:col-span-2 lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Hyperbolic b-Factor
              </span>
              <input
                type="number"
                step="0.05"
                value={declineInputs.bFactor}
                onChange={(event) =>
                  setDeclineInputs((prev) => ({
                    ...prev,
                    bFactor: event.target.value,
                  }))
                }
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
          )}
        </div>
        <dl className="mt-5 grid gap-4 rounded-2xl bg-slate-50/80 p-4 text-sm text-slate-700 md:grid-cols-2">
          <div className="rounded-xl bg-white/80 p-4 shadow-sm shadow-slate-500/5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rate at Time t
            </dt>
            <dd className="mt-1 text-lg font-semibold text-blue-700">
              {declineResult.qt.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}{" "}
              units/day
            </dd>
          </div>
          <div className="rounded-xl bg-white/80 p-4 shadow-sm shadow-slate-500/5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Cumulative Production
            </dt>
            <dd className="mt-1 text-lg font-semibold text-blue-700">
              {declineResult.cum.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}{" "}
              units
            </dd>
          </div>
        </dl>
        <p className="mt-3 rounded-xl bg-slate-100 p-4 text-xs text-slate-600">
          Use decline analysis to justify workover or artificial lift proposals.
          Always document assumptions (constant BHP, stable fluid properties)
          when presenting to supervisors or industry partners.
        </p>
      </article>
    </section>
  );
}
