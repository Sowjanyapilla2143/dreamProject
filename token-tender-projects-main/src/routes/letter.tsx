import { createFileRoute } from "@tanstack/react-router";
import { Heart, Mail } from "lucide-react";
import { useState } from "react";
import { Chapter } from "@/components/love";
import { LETTER, SONGS } from "@/lib/content";

export const Route = createFileRoute("/letter")({
  head: () => ({ meta: [{ title: "A Letter for You ❤️" }, { name: "description", content: "Words to keep close to your heart." }, { property: "og:title", content: "A Letter for You" }, { property: "og:description", content: "Words to keep close to your heart." }] }),
  component: Letter,
});

function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <Chapter title="A Letter for You" song={SONGS.letter}>
      {!open ? (
        <div className="fade-up text-center">
          <div className="glass mx-auto flex h-52 w-80 items-center justify-center rounded-2xl">
            <Mail className="h-16 w-16 text-gold" />
            <Heart className="absolute h-6 w-6 translate-y-6 text-primary" fill="currentColor" />
          </div>
          <button className="btn-love mt-8" onClick={() => setOpen(true)}>Open My Letter</button>
        </div>
      ) : (
        <article className="fade-up mx-auto max-w-2xl rounded-3xl bg-foreground p-8 text-card shadow-2xl md:p-12">
          <p className="font-hand text-4xl text-primary">To My Most Beautiful Dimple,</p>
          {LETTER.map((p, k) => (
            <p key={k} className="fade-up mt-5 font-serif text-xl leading-relaxed" style={{ animationDelay: `${0.4 + k * 0.4}s` }}>{p}</p>
          ))}
          <p className="mt-8 font-serif italic">With all my love,</p>
          <p className="font-hand text-3xl text-primary">Yours, always ❤️</p>
          <div className="mt-8 text-center"><button className="btn-love" onClick={() => setOpen(false)}>Close the letter</button></div>
        </article>
      )}
    </Chapter>
  );
}
