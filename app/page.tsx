import { Badge } from "@/components/ui/Badge";
import { SkillRadar } from "@/components/sections/SkillRadar";
import { certifications, curatedResources, demoStudent, domainRoadmaps, jobFeed } from "@/lib/data";
import { generateDomainRanking, placementReadinessScore } from "@/lib/engine";

export default function Home() {
  const ranking = generateDomainRanking();
  const topDomain = ranking[0];
  const readiness = placementReadinessScore(ranking);
  const radarData = Object.entries(demoStudent.technicalSkills).map(([subject, value]) => ({ subject, value }));
  const roadmap = domainRoadmaps[topDomain.domain];

  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-6 px-4 py-8 md:px-6">
      <section className="card">
        <p className="text-sm text-sky-300">AI Training & Placement Portal · India-first</p>
        <h1 className="mt-2 text-3xl font-bold">CareerOS: Next-Generation Placement Automation</h1>
        <p className="mt-2 max-w-3xl text-slate-300">
          Personalized domain recommendation, adaptive preparation, job matching, fraud detection, and placement-cell analytics in one modular platform.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone="info">Modular architecture</Badge>
          <Badge tone="good">AI mentor ready</Badge>
          <Badge>Open-source friendly</Badge>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="card lg:col-span-2">
          <h2 className="section-title">1) AI Career Domain Selection Engine</h2>
          <p className="section-subtitle">Psychometric + aptitude + academics + interests + skill gap analysis.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-400">
                <tr>
                  <th className="py-2">Domain</th>
                  <th>Suitability</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((item, idx) => (
                  <tr key={item.domain} className="border-t border-slate-800">
                    <td className="py-2">#{idx + 1} {item.domain}</td>
                    <td>{item.score}%</td>
                    <td>{item.confidence}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div>
              <h3 className="font-medium text-emerald-300">Strengths</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">{topDomain.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-medium text-amber-300">Weaknesses</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">{topDomain.weaknesses.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-medium text-sky-300">Improvement areas</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">{topDomain.improvements.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title">Student Snapshot</h2>
          <p className="mt-2 text-sm text-slate-300">{demoStudent.name} · {demoStudent.branch}</p>
          <p className="text-sm text-slate-300">Readiness Score: <span className="font-semibold text-white">{readiness}/100</span></p>
          <p className="text-sm text-slate-300">Placement Probability: <span className="font-semibold text-white">{Math.min(95, readiness + 8)}%</span></p>
          <div className="mt-3">
            <SkillRadar data={radarData} />
          </div>
        </article>
      </section>

      <section className="card">
        <h2 className="section-title">2) Personalized Career Roadmap Generator ({topDomain.domain})</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {roadmap.map((m) => (
            <article key={m.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase text-sky-300">{m.stage} · {m.durationWeeks} weeks</p>
              <h3 className="mt-1 font-semibold">{m.title}</h3>
              <p className="mt-2 text-xs text-slate-400">Prerequisites: {m.prerequisites.join(", ")}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">{m.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article>
            <h3 className="font-medium text-emerald-300">Curated Resources</h3>
            <p className="text-sm text-slate-300">Free: {curatedResources.free.join(" · ")}</p>
            <p className="mt-1 text-sm text-slate-300">Paid (optional): {curatedResources.paid.join(" · ")}</p>
          </article>
          <article>
            <h3 className="font-medium text-sky-300">Practice Platforms</h3>
            <p className="text-sm text-slate-300">{curatedResources.practice.join(" · ")}</p>
          </article>
          <article>
            <h3 className="font-medium text-violet-300">Certifications</h3>
            <ul className="mt-1 text-sm text-slate-300">{certifications.map((c) => <li key={c.name}>{c.name} ({c.cost}) · ROI: {c.roi}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="card">
          <h2 className="section-title">3) AI Placement Preparation Suite</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Aptitude engine: adaptive quant/logical/verbal tests + weak-area analytics + company patterns.</li>
            <li>Technical prep: domain question bank, coding sandbox, AI evaluator, DSA tracker.</li>
            <li>Behavioral trainer: AI mock HR, STAR feedback, communication scoring, resume-based questions.</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="section-title">4) Verified Internship & Job Aggregator</h2>
          <div className="mt-3 space-y-3 text-sm">
            {jobFeed.map((job) => (
              <div key={`${job.company}-${job.title}`} className="rounded-xl border border-slate-800 p-3">
                <p className="font-medium">{job.title} · {job.company}</p>
                <p className="text-slate-300">{job.stipendOrCtc} · {job.eligibility}</p>
                <p className="text-slate-400">Source: {job.source} · Match: {job.matchScore}% · Trust: {job.trustScore}% · Deadline: {job.deadline}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="card">
          <h2 className="section-title">5) Future Scope & Career Intelligence</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>5–10 year demand trend: high for AI/ML, cloud, cybersecurity.</li>
            <li>India salary trend: ₹6–40 LPA by role maturity; global range benchmarked.</li>
            <li>Automation risk scoring + emerging skills (GenAI ops, security automation, product analytics).</li>
            <li>Career ladder map: intern → analyst/engineer → specialist → lead → manager.</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="section-title">6) Analytics Dashboards</h2>
          <p className="text-sm text-slate-300">Student dashboard: readiness, skill radar, roadmap progress, test analytics.</p>
          <p className="mt-2 text-sm text-slate-300">Placement cell dashboard: batch distribution, funnel, company engagement, weak-skill heatmap.</p>
        </article>
        <article className="card">
          <h2 className="section-title">7–8) AI Mentor + Anti-Fraud Trust Layer</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
            <li>Career mentor chatbot with resume review, interview simulation, daily nudges, and next-step planning.</li>
            <li>Fraud engine: company verification, anomaly detection on listings, community reports, trust scoring.</li>
            <li>Eligibility checker + application tracker + deadline reminders in one workflow.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
