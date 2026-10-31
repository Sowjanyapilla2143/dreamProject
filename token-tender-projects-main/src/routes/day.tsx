
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Burst, Chapter } from "@/components/love";
import { SONGS } from "@/lib/content";
import cake from "@/assets/cake.jpg";

export const Route = createFileRoute("/day")({
  head: () => ({
    meta: [
      { title: "A Day to Remember ❤️" },
      {
        name: "description",
        content: "Today is all about you.",
      },
      {
        property: "og:title",
        content: "A Day to Remember",
      },
      {
        property: "og:description",
        content: "Today is all about you.",
      },
    ],
  }),
  component: Day,
});

function Day() {
  const [wished, setWished] = useState(0);

  return (
    <Chapter
      title="A Day to Remember, Let's Celebrate it Virtually"
      song={SONGS.day}
    >
      {/* Responsive birthday cake image */}
      <div className="relative w-full min-w-0">
        <img
          src={cake}
          alt="Birthday cake with candles and roses"
          width={1024}
          height={768}
          className={`fade-up mx-auto block w-full max-w-sm sm:max-w-md lg:max-w-xl max-h-[35vh] sm:max-h-[40vh] lg:max-h-[45vh] object-contain rounded-2xl sm:rounded-3xl transition duration-1000 ${
            wished ? "brightness-60" : ""
          }`}
          style={{ animationDelay: ".3s" }}
        />

        <Burst trigger={wished} />
      </div>

      {/* Birthday message and buttons */}
      <div className="mt-3 sm:mt-4 text-center">
        <p
          className="fade-up font-serif text-lg sm:text-xl lg:text-2xl text-gold"
          style={{ animationDelay: "1s" }}
        >
          Today is your day, my favourite person. ❤️
        </p>

        {!wished ? (
          <button
            className="btn-love mt-4 sm:mt-5"
            onClick={() => setWished(Date.now())}
          >
            Make a Wish
          </button>
        ) : (
          <div className="fade-up mt-4 sm:mt-5">
            <p className="font-hand text-2xl sm:text-3xl lg:text-4xl text-blush">
              May every wish you made come true. Wishing you a wonderful
              birthday and a life full of happiness and peace.
            </p>

            <button
              className="btn-ghost mt-3 sm:mt-4"
              onClick={() => setWished(0)}
            >
              Light the candles again
            </button>
          </div>
        )}
      </div>
    </Chapter>
  );
}
