import { demoStudent, domainWeights } from "./data";
import { Domain, DomainScore } from "./types";

const systemsAffinity = (domain: Domain) => {
  const systemHeavy: Domain[] = ["Cloud Computing", "DevOps", "Software Development", "Cybersecurity", "Core Engineering"];
  return systemHeavy.includes(domain) ? 78 : 66;
};

export const generateDomainRanking = (): DomainScore[] => {
  const coding = (demoStudent.technicalSkills["Data Structures"] + demoStudent.technicalSkills.Python + demoStudent.technicalSkills["Web Development"]) / 3;

  return (Object.keys(domainWeights) as Domain[])
    .map((domain) => {
      const w = domainWeights[domain];
      const score =
        demoStudent.aptitude.quant * w.quant +
        demoStudent.aptitude.logic * w.logic +
        demoStudent.aptitude.verbal * w.verbal +
        coding * w.coding +
        systemsAffinity(domain) * w.systems;

      const confidence = Math.round(Math.min(98, score + demoStudent.psychometric.resilience * 0.12));
      const strengths = ["Logical reasoning", "Python programming", "High openness to learning"];
      const weaknesses = ["Communication under pressure", "Cloud hands-on depth"];
      const improvements = [
        "2 mock interviews per week with STAR feedback",
        "Build and deploy one production-grade project monthly",
        "Solve 15 adaptive aptitude questions daily",
      ];

      return { domain, score: Math.round(score), confidence, strengths, weaknesses, improvements };
    })
    .sort((a, b) => b.score - a.score);
};

export const placementReadinessScore = (ranking: DomainScore[]) => {
  const topDomainBoost = ranking[0].confidence * 0.35;
  const aptitude = (demoStudent.aptitude.quant + demoStudent.aptitude.logic + demoStudent.aptitude.verbal) / 3;
  const skills = Object.values(demoStudent.technicalSkills).reduce((sum, value) => sum + value, 0) / Object.keys(demoStudent.technicalSkills).length;
  return Math.round(topDomainBoost + aptitude * 0.3 + skills * 0.35);
};
