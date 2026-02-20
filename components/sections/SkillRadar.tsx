"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

interface SkillPoint {
  subject: string;
  value: number;
}

export function SkillRadar({ data }: { data: SkillPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
          <Radar dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
