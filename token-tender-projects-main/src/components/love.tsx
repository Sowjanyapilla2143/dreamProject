import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Heart, Home, Music, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

export const UNLOCK_KEY = "love-unlocked";
let audio: HTMLAudioElement | null = null;
const notify = () => window.dispatchEvent(new Event("song-change"));
let currentSong = "";

export function FloatingHearts({ count = 12 }: { count?: number }) {
  const hearts = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      left: (i * 37) % 100, size: 10 + ((i * 7) % 18), dur: 10 + ((i * 5) % 12), delay: (i * 1.3) % 10,
    })), [count]);
  return (
    <>
      {hearts.map((h, i) => (
        <Heart key={i} className="float-heart" fill="currentColor"
          style={{ left: `${h.left}%`, width: h.size, height: h.size, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s`, opacity: 0.5 }} />
      ))}
    </>
  );
}


export function playSong(src: string) {
  if (!audio || currentSong !== src) {
    audio?.pause();

    audio = new Audio(src);
    audio.loop = true;
    currentSong = src;

    audio.addEventListener("play", notify);
    audio.addEventListener("pause", notify);
  }

  audio.play().catch((error) => {
    console.error("Unable to play music:", error);
  });
}

export function stopSong() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
    currentSong = "";
  }

  notify();
}

export function Burst({ trigger }: { trigger: number }) {
  if (!trigger) return null;
  return (
    <div key={trigger} className="pointer-events-none absolute inset-0 overflow-visible">
      {Array.from({ length: 18 }, (_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const style = { "--x": `${Math.cos(a) * 160}px`, "--y": `${Math.sin(a) * 160}px` } as React.CSSProperties;
        return i % 3 ? (
          <Heart key={i} className="burst-p h-4 w-4 text-primary" fill="currentColor" style={style} />
        ) : (
          <span key={i} className="burst-p h-2 w-2 rounded-full bg-gold" style={style} />
        );
      })}
    </div>
  );
}

/** Music: drop mp3 files in /public/music/ with these names. */
function MusicToggle({ src }: { src: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => {
      setOn(!!audio && !audio.paused && currentSong === src);
    };

    sync();

    window.addEventListener("song-change", sync);

    return () => {
      window.removeEventListener("song-change", sync);
    };
  }, [src]);

  const toggle = () => {
    if (audio && currentSong === src && !audio.paused) {
      audio.pause();
    } else {
      playSong(src);
    }
  };

  return (
    <button
      onClick={toggle}
      className="btn-ghost"
      aria-label="Toggle music"
    >
      {on ? (
        <Music className="h-4 w-4" />
      ) : (
        <VolumeX className="h-4 w-4" />
      )}
      {on ? "Playing" : "Music"}
    </button>
  );
}

export function useGuard() {
  const nav = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) !== "1") nav({ to: "/" });
  }, [nav]);
}



export function Chapter({
  title,
  song,
  children,
}: {
  title: string;
  song: string;
  children: ReactNode;
}) {
  useGuard();

  useEffect(() => {
    playSong(song);
  }, [song]);

  return (
    <div className="relative min-h-screen overflow-x-hidden px-3 sm:px-4 pb-3 pt-2">
      <FloatingHearts count={8} />

      <nav className="relative z-10 mx-auto flex max-w-5xl items-center justify-between gap-2">
        <div className="flex gap-2">
          <Link to="/home" onClick={stopSong} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>

          <Link
            to="/home"
            onClick={stopSong}
            className="btn-ghost"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </div>

        <MusicToggle src={song} />
      </nav>

      <h1 className="fade-up relative z-10 mt-3 sm:mt-4 text-center text-2xl sm:text-3xl lg:text-4xl leading-tight text-blush">
        {title}
      </h1>

      <div className="relative z-10 mx-auto mt-2 sm:mt-3 max-w-4xl">
        {children}
      </div>
    </div>
  );
}

