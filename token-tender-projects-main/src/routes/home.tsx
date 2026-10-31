import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Camera, Gem, Home as HomeIcon, Mail } from "lucide-react";
import { FloatingHearts, playSong, useGuard } from "@/components/love";
import { SONGS } from "@/lib/content";
import cake from "@/assets/cake.jpg";
import memories from "@/assets/memories.jpg";
import proposal from "@/assets/proposal.jpg";
import dream from "@/assets/dream.jpg";
import letter from "@/assets/letter.jpg";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Our Little Forever ❤️" },
      { name: "description", content: "Happy Birthday, my love — five little chapters of us." },
      { property: "og:title", content: "Our Little Forever ❤️" },
      { property: "og:description", content: "Happy Birthday, my love — five little chapters of us." },
    ],
  }),
  component: HomePage,
});

const CARDS = [
  { to: "/day", title: "A Day to Remember", desc: "Today is all about you, my love.", img: cake, Icon: Cake, song: SONGS.day, },
  { to: "/memories", title: "Our Memories", desc: "Little moments that became my favourite memories.", img: memories, Icon: Camera, song: SONGS.memories, },
  { to: "/letter", title: "A Letter for You", desc: "Words I want you to keep close to your heart.", img: letter, Icon: Mail, song: SONGS.letter, },
  { to: "/proposal", title: "My Proposal", desc: "One more reason to choose you, every day.", img: proposal, Icon: Gem, song: SONGS.proposal, },
  { to: "/dream", title: "Our Dream", desc: "The beautiful little world I dream of sharing with you.", img: dream, Icon: HomeIcon, song: SONGS.dream, },
] as const;

function HomePage() {
  useGuard();
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-14">
      <FloatingHearts />
      <header className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-hand text-3xl text-gold">Our Little Forever</p>
        <h1 className="fade-up mt-2 text-5xl md:text-7xl">Happy Birthday, My Love ❤️</h1>
        <p className="fade-up mt-5 font-serif text-xl italic text-blush" style={{ animationDelay: ".3s" }}>
          If I could give you one thing in this world, it would be the chance to see yourself through my eyes.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Every little thing here has a piece of my heart.</p>
      </header>
      <section className="relative z-10 mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c, i) => (
          <Link key={c.to} to={c.to} onClick={() => playSong(c.song)}
            className={`glass fade-up group relative block h-72 overflow-hidden rounded-3xl transition hover:-translate-y-1 ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
            {c.img ? (
              <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-elevated to-secondary" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <c.Icon className="h-6 w-6 text-gold" />
              <p className="mt-1 text-xs text-gold">Chapter {i + 1}</p>
              <h2 className="text-3xl">{c.title}</h2>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
