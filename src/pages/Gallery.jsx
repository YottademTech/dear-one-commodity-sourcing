import { useState } from "react";
import { Play, X } from "lucide-react";
import { films, gallery } from "../content.js";
import { PageIntro } from "../components/Shell.jsx";

export default function Gallery() {
  const [shot, setShot] = useState(null);
  const [film, setFilm] = useState(null);

  return (
    <main className="bg-ivory pt-28">
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:pb-28">
        <PageIntro
          eyebrow="Gallery"
          title="The lots, as they live."
          text="Films from the yard and stills from the sack. Open any frame for a closer look."
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((item) => (
            <button
              key={item.title}
              onClick={() => setFilm(item)}
              className="group relative h-80 w-full overflow-hidden rounded-[1.8rem] text-left"
            >
              <img src={item.poster} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-deep/35" />
              <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gold text-deep">
                <Play size={16} fill="currentColor" />
              </span>
              <span className="absolute bottom-4 left-4 right-4 font-display text-3xl text-ivory">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-14 min-w-0 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <button
              key={item.src}
              onClick={() => setShot(item)}
              className="mb-4 block w-full overflow-hidden rounded-[1.6rem] break-inside-avoid"
            >
              <img src={item.src} alt={item.label} className="w-full object-cover transition duration-700 hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      {shot && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-deep/90 p-4" onClick={() => setShot(null)}>
          <button className="absolute right-5 top-5 text-ivory" aria-label="Close image">
            <X />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={shot.src} alt={shot.label} className="max-h-[80vh] w-full rounded-3xl object-contain" />
            <figcaption className="mt-3 text-center text-base text-ivory/80">{shot.label}</figcaption>
          </figure>
        </div>
      )}

      {film && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-deep/95 p-4">
          <button className="absolute right-5 top-5 text-ivory" onClick={() => setFilm(null)} aria-label="Close film">
            <X />
          </button>
          <video className="max-h-[80vh] w-full max-w-4xl rounded-3xl" controls autoPlay src={film.src} />
        </div>
      )}
    </main>
  );
}
