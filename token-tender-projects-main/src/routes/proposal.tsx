import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Burst, Chapter } from "@/components/love";
import { PROPOSAL, SONGS } from "@/lib/content";
import img from "@/assets/proposal.jpg";

export const Route = createFileRoute("/proposal")({
  head: () => ({ meta: [{ title: "My Proposal ❤️" }, { name: "description", content: "One more reason to choose you, every day." }, { property: "og:title", content: "My Proposal" }, { property: "og:description", content: "One more reason to choose you, every day." }] }),
  component: Proposal,
});


function Proposal() {
  const [run, setRun] = useState(1);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const t = setInterval(
      () => setShown((s) => (s > PROPOSAL.length ? s : s + 1)),
      1800
    );
    return () => clearInterval(t);
  }, [run]);

  const done = shown > PROPOSAL.length - 1;

  return (
    <Chapter title="" song={SONGS.proposal}>
      <div key={run} className="relative">
        <img
          src={img}
          alt="A girl proposing to a boy among rose petals"
          width={1024}
          height={768}
          className="fade-up mx-auto block w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[32vh] sm:max-h-[38vh] lg:max-h-[42vh] object-contain rounded-2xl sm:rounded-3xl shadow-[0_0_50px_-10px_var(--gold)]"
        />
        {done && <Burst trigger={run} />}
      </div>

      <div className="mx-auto mt-3 sm:mt-4 max-w-2xl space-y-2 sm:space-y-3 text-center">
        {PROPOSAL.slice(0, shown).map((l, k) => (
          <p
            key={`${run}-${k}`}
            className={`fade-up font-serif text-lg sm:text-xl lg:text-2xl leading-snug ${
              k === PROPOSAL.length - 1
                ? "text-gold"
                : "text-foreground"
            }`}
          >
            {l}
          </p>
        ))}

        {done && (
          <div className="fade-up pt-2 sm:pt-3">
            <Heart
              className="pulse-glow mx-auto h-8 w-8 sm:h-10 sm:w-10 text-primary"
              fill="currentColor"
            />
            <button
              className="btn-love mt-3 sm:mt-4"
              onClick={() => setRun(run + 1)}
            >
              One More Time, Just for Us
            </button>
          </div>
        )}
      </div>
    </Chapter>
  );
}
