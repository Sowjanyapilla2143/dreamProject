import { createFileRoute } from "@tanstack/react-router";
import { FastForward, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Chapter } from "@/components/love";
import { SONGS } from "@/lib/content";
import img from "@/assets/dream.jpg";

export const Route = createFileRoute("/dream")({
  head: () => ({ meta: [{ title: "Our Dream ❤️" }, { name: "description", content: "The little world I dream of sharing with you." }, { property: "og:title", content: "Our Dream" }, { property: "og:description", content: "The little world I dream of sharing with you." }] }),
  component: Dream,
});

// Each step reveals a region of the painting (clip inset: top right bottom left, in %).
const STEPS = [
  { label: "A warm sunset sky…", clip: "0 0 70% 0" },
  { label: "Our peaceful home, windows glowing.", clip: "0 20% 45% 5%" },
  { label: "A garden full of flowers.", clip: "0 0 0 0", dim: true },
  { label: "A beautiful car and bike by the house.", focus: "82% 45%" },
  { label: "You and me.", focus: "20% 45%" },
  { label: "Our elder son…", focus: "55% 70%" },
  { label: "…and our little girl.", focus: "70% 78%" },
  { label: "Attayya and Nanamma.", focus: "43% 55%" },
  { label: "Amma and Nanna.", focus: "70% 45%" },
  { label: "This is the little world I dream of. ❤️", final: true },
];

function Dream() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || step >= STEPS.length - 1) return;
    const t = setTimeout(() => setStep(step + 1), 2600);
    return () => clearTimeout(t);
  }, [step, paused]);
  const s = STEPS[step]!;
  const clip = step < 2 ? s.clip : "0 0 0 0";
  return (
    <Chapter title="Our Dream ❤️" song={SONGS.dream}>
      <div className="relative overflow-hidden rounded-3xl border">
        <img src={img} alt="Our dream family home with everyone together" width={1536} height={864}
          className="w-full transition-all duration-[1800ms]"
          style={{ clipPath: `inset(${clip})`, filter: s.dim ? "brightness(.85)" : "none" }} />
        {s.focus && (
          <div className="pointer-events-none absolute inset-0 transition-all duration-1000"
            style={{ background: `radial-gradient(circle at ${s.focus}, transparent 12%, rgba(37,9,19,.75) 32%)` }} />
        )}
      </div>
      <p key={step} className={`fade-up mt-6 text-center font-serif ${s.final ? "text-3xl text-gold" : "text-2xl text-blush"}`}>{s.label}</p>
      {s.final && (
        <p className="fade-up mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Maybe our dream is not about having the biggest house or the most expensive things. It's about a home full of love, laughter, peace and the people who matter most.
        </p>
      )}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button className="btn-ghost" onClick={() => { setStep(0); setPaused(false); }}><RotateCcw className="h-4 w-4" /> Replay</button>
        <button className="btn-ghost" onClick={() => setPaused(!paused)}>{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />} {paused ? "Resume" : "Pause"}</button>
        <button className="btn-ghost" onClick={() => setStep(STEPS.length - 1)}><FastForward className="h-4 w-4" /> Skip</button>
      </div>
    </Chapter>
  );
}
