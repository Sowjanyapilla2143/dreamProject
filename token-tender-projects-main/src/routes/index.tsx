import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Burst, FloatingHearts, UNLOCK_KEY } from "@/components/love";
import { QUESTIONS, QUESTIONS_PER_VISIT, type Question } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hey, My Favourite Person ❤️" },
      { name: "description", content: "A little romantic birthday surprise, made with love." },
      { property: "og:title", content: "Hey, My Favourite Person ❤️" },
      { property: "og:description", content: "A little romantic birthday surprise, made with love." },
    ],
  }),
  component: Entrance,
});

function Entrance() {
  const nav = useNavigate();
  const [stage, setStage] = useState<"intro" | "quiz" | "done">("intro");
  const [qs, setQs] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [fb, setFb] = useState<{ ok: boolean; msg: string } | null>(null);
  const [wrong, setWrong] = useState<string | null>(null);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    setQs([...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_VISIT));
  }, []);

  const answer = (opt: string) => {
    const q = qs[i]!;
    if (fb?.ok) return;
    if (opt === q.correctAnswer) {
      setFb({ ok: true, msg: q.successMessage }); setBurst(Date.now());
      setTimeout(() => {
        setFb(null);
        if (i + 1 < qs.length) setI(i + 1); else setStage("done");
      }, 3500);
    } else {
      setWrong(opt); setFb({ ok: false, msg: "Hehe, not quite! Try again, birthday boy ❤️" });
      setTimeout(() => setWrong(null), 400);
    }
  };

  const unlock = () => { sessionStorage.setItem(UNLOCK_KEY, "1"); nav({ to: "/home" }); };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <FloatingHearts />
      {stage === "intro" && (
        <div className="relative z-10 text-center">
          <Heart className="pulse-glow mx-auto h-24 w-24 text-primary" fill="currentColor" />
          <h1 className="fade-up mt-8 text-5xl text-foreground md:text-7xl">Hey, My Favourite Person ❤️</h1>
          <p className="fade-up mt-4 text-lg text-muted-foreground" style={{ animationDelay: ".4s" }}>I have something special waiting for you...</p>
          <p className="fade-up mt-2 font-serif text-2xl italic text-gold" style={{ animationDelay: ".8s" }}>But first, prove that you know us.</p>
          <button className="btn-love fade-up mt-10" style={{ animationDelay: "1.2s" }} onClick={() => setStage("quiz")}>
            <Sparkles className="h-4 w-4" /> Start Our Little Challenge
          </button>
        </div>
      )}
      {stage === "quiz" && qs[i] && (
        <div key={i} className="glass fade-up relative z-10 w-full max-w-lg rounded-3xl p-6 md:p-8">
          <Burst trigger={burst} />
          <p className="text-center text-xs uppercase tracking-[.3em] text-gold">A Little Test of Love</p>
          <p className="mt-2 text-center text-sm text-muted-foreground">Question {i + 1} of {qs.length}</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div className="h-full bg-primary transition-all duration-700" style={{ width: `${((i + (fb?.ok ? 1 : 0)) / qs.length) * 100}%` }} />
          </div>
          <h2 className="mt-6 text-center text-3xl text-foreground">{qs[i]!.question}</h2>
          <div className="mt-6 grid gap-3">
            {qs[i]!.options.map((o, k) => (
              <button key={k} onClick={() => answer(o)}
                className={`rounded-2xl border px-5 py-3.5 text-left transition hover:bg-elevated ${fb?.ok && o === qs[i]!.correctAnswer ? "border-gold bg-elevated" : "bg-secondary/60"} ${wrong === o ? "shake border-primary" : ""}`}>
                {o}
              </button>
            ))}
          </div>
          <p className={`mt-5 min-h-6 text-center ${fb?.ok ? "text-gold" : "text-blush"}`}>{fb?.msg}</p>
        </div>
      )}
      {stage === "done" && (
        <div className="fade-up relative z-10 text-center">
          <Heart className="pulse-glow mx-auto h-20 w-20 text-primary" fill="currentColor" />
          <h2 className="mt-6 text-4xl md:text-5xl">You know us better than you think. ❤️</h2>
          <p className="mt-3 text-muted-foreground">Ready to enter our little world?</p>
          <button className="btn-love mt-8" onClick={unlock}>Unlock My Surprise</button>
        </div>
      )}
    </main>
  );
}
