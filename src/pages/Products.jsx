import { useMemo, useState } from "react";
import { CloseCircle } from "@solar-icons/react";
import { also, products } from "../content.js";
import { PageIntro } from "../components/Shell.jsx";

const filters = ["All", "Herbal", "Tree crop", "Agro"];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [shot, setShot] = useState(null);
  const shown = useMemo(
    () => (filter === "All" ? products : products.filter((item) => item.kind === filter)),
    [filter]
  );

  return (
    <main className="bg-ivory pt-28">
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:pb-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <PageIntro
            eyebrow="Products"
            title="Crops the house can speak for."
            text="Each lot is named, seen, and offered only when the house can stand behind it."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-base transition ${
                  filter === item ? "bg-forest text-ivory" : "bg-mist text-deep hover:bg-forest/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-[1.8rem] bg-paper shadow-sm shadow-forest/5">
              <button className="block w-full text-left" onClick={() => setShot({ src: item.image, label: item.name })}>
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-base uppercase tracking-[0.14em] text-forest">
                    {item.kind}
                  </span>
                </div>
              </button>
              <div className="p-5">
                <h2 className="font-display text-4xl text-deep">{item.name}</h2>
                <p className="mt-2 text-lg leading-relaxed text-ink/75">{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-forest/10 bg-paper px-6 py-6">
          <p className="text-base uppercase tracking-[0.18em] text-forest">Also arranged</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {also.map((item) => (
              <span key={item} className="rounded-full border border-forest/15 px-4 py-2 text-base text-deep">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {shot && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-deep/90 p-4" onClick={() => setShot(null)}>
          <button className="absolute right-5 top-5 text-ivory" aria-label="Close image">
            <CloseCircle className="size-6" weight="Linear" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={shot.src} alt={shot.label} className="max-h-[80vh] w-full rounded-3xl object-contain" />
            <figcaption className="mt-3 text-center text-base text-ivory/80">{shot.label}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
