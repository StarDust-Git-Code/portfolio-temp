"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_FILLS = [
  "rgba(255,255,255,0.08)",
  "rgba(255,255,255,0.22)",
  "rgba(255,255,255,0.45)",
  "rgba(255,255,255,0.70)",
  "rgba(255,255,255,0.95)",
] as const;

const WEEKS = 26; // half a year of shipping

export function ContributionGraph({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((json: { contributions: Day[] }) => {
        if (!cancelled) setDays(json.contributions.slice(-WEEKS * 7));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (failed) return null;

  const total = days?.reduce((s, d) => s + d.count, 0) ?? 0;
  const weeks: Day[][] = days ? chunkWeeks(days) : [];
  const CELL = 8;
  const GAP = 3;

  return (
    <div className="mt-16 border-t border-foreground/10 pt-10">
      <div className="flex items-baseline justify-between">
        <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
          {"// Alive & shipping"}
        </span>
        {days ? (
          <span className="font-tech text-[12px] uppercase tracking-[0.2em] text-foreground/50">
            <span className="font-semibold text-foreground">
              {total.toLocaleString()}
            </span>{" "}
            commits · last {WEEKS} weeks
          </span>
        ) : null}
      </div>

      <div
        className="mt-6 overflow-x-auto"
        role="img"
        aria-label={`GitHub contribution graph for ${username}`}
      >
        {days ? (
          <svg
            width={weeks.length * (CELL + GAP)}
            height={7 * (CELL + GAP)}
            className="block"
          >
            {weeks.map((week, wi) =>
              week.map((day, di) => (
                <rect
                  key={day.date}
                  x={wi * (CELL + GAP)}
                  y={di * (CELL + GAP)}
                  width={CELL}
                  height={CELL}
                  rx="2"
                  fill={LEVEL_FILLS[day.level]}
                />
              ))
            )}
          </svg>
        ) : (
          <div className="h-[77px] w-full max-w-[600px] animate-pulse rounded bg-foreground/5" />
        )}
      </div>
    </div>
  );
}

/** Groups consecutive days into columns of 7 (calendar-aligned from the end) */
function chunkWeeks(days: Day[]): Day[][] {
  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}
