import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Chapter } from "@/components/love";
import { MEMORIES, SONGS } from "@/lib/content";
import fallback from "@/assets/memories.jpg";

export const Route = createFileRoute("/memories")({
  head: () => ({ meta: [{ title: "Our Memories ❤️" }, { name: "description", content: "Little moments that became favourite memories." }, { property: "og:title", content: "Our Memories" }, { property: "og:description", content: "Little moments that became favourite memories." }] }),
  component: Memories,
});

function Memories() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const n = MEMORIES.length;
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 4000);
    return () => clearInterval(t);
  }, [auto, n]);
  const m = MEMORIES[i]!;
  return (
    <Chapter title="Our Memories 🫂❤️" song={SONGS.memories}>
      <figure key={i}  className="fade-up mx-auto mt-3 sm:mt-4 max-w-sm rotate-[-1.5deg] rounded-md bg-foreground p-3 sm:p-4 pb-4 sm:pb-5 shadow-2xl">
        <img src={m.src} alt={m.caption} onError={(e) => (e.currentTarget.src = fallback)} className="aspect-square w-full object-cover" />
        <figcaption className="mt-2 text-center font-hand text-2xl text-card">{m.caption}</figcaption>
        <p className="mt-0.5 text-center text-xs text-elevated">{m.date}</p>
      </figure>
      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3">
        <button className="btn-ghost" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous"><ChevronLeft className="h-4 w-4" /></button>
        <span className="text-sm text-gold">{i + 1} of {n}</span>
        <button className="btn-ghost" onClick={() => setI((i + 1) % n)} aria-label="Next"><ChevronRight className="h-4 w-4" /></button>
        <button className="btn-ghost" onClick={() => setAuto(!auto)}>{auto ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
      </div>
      <p className="mt-5 sm:mt-6 text-center font-serif text-xl sm:text-2xl italic text-blush">Every picture holds a little piece of us❤️ And many more still waiting to be made. 💕</p>
    </Chapter>
  );
}
