import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Ship,
  X,
} from "lucide-react";
import {
  also,
  films,
  gallery,
  house,
  nav,
  pillars,
  products,
  ribbon,
  steps,
} from "./content.js";

const filters = ["All", "Herbal", "Tree crop", "Agro"];

function App() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [filter, setFilter] = useState("All");
  const [shot, setShot] = useState(null);
  const [film, setFilm] = useState(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = shot || film ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shot, film]);

  const shown = useMemo(
    () => (filter === "All" ? products : products.filter((item) => item.kind === filter)),
    [filter]
  );

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
          solid ? "bg-deep/92 shadow-lg shadow-deep/20 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button onClick={() => go("top")} className="text-left">
            <span className="block font-display text-2xl leading-none text-ivory">Dear One</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-gold">
              Commodity house
            </span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-sm text-ivory/80 transition hover:text-gold"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={house.whatsapp}
              className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-deep transition hover:bg-gold-soft md:inline-flex"
            >
              Speak with the desk
              <ArrowUpRight size={16} />
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-deep text-ivory">
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-display text-3xl">Dear One</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-6 pt-10">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-left font-display text-5xl"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden bg-deep text-ivory">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/images/img_10_cashew_clean.jpg"
          >
            <source src="/media/videos/vid_06_cashew_nuts.mp4" type="video/mp4" />
          </video>
          <div className="hero-veil absolute inset-0" />
          <div className="grain pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8">
            <p className="rise text-xs uppercase tracking-[0.32em] text-gold-soft">
              Kokrobite · Ghana
            </p>
            <h1 className="rise mt-5 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              A calm house for the crops the world still seeks.
            </h1>
            <p className="rise mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/85 md:text-lg">
              Dear One Commodity Sourcing Enterprise gathers herbal seed, tree crops, and agro
              produce with the patience of a private desk and the standing of public office.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => go("offer")}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-deep transition hover:bg-gold-soft"
              >
                See the offer
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => go("desk")}
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-sm text-ivory transition hover:border-gold hover:text-gold"
              >
                Request a supply note
              </button>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-forest/10 bg-forest text-ivory">
          <div className="ribbon-track flex w-max gap-10 py-4">
            {[...ribbon, ...ribbon].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10 text-sm tracking-wide">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </div>

        <section id="house" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-forest">The house</p>
            <h2 className="mt-4 font-display text-5xl leading-none text-deep md:text-6xl">
              Led with public standing. Run as a private craft.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg font-light leading-relaxed text-ink/80">
              From Kokrobite, the enterprise sources for buyers who want origin they can trust
              and a counterpart who answers with care. The house is guided by a Minister of State.
              That duty shapes how lots are chosen, how words are kept, and how a shipment is
              allowed to leave.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <article key={item.title} className="rounded-3xl bg-paper p-5 shadow-sm shadow-forest/5">
                  <Leaf className="text-gold" size={18} />
                  <h3 className="mt-4 font-display text-2xl text-deep">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep text-ivory">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
            <img
              src="/media/images/img_13_voacanga_harvest.jpg"
              alt="Voacanga fruit drying beside a pail of seed"
              className="h-80 w-full rounded-[2rem] object-cover md:h-[28rem]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">A note from the desk</p>
              <p className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                We do not chase volume for its own sake. We hold what we can stand behind.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-ivory/70">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-gold" /> Grade before promise
                </span>
                <span className="inline-flex items-center gap-2">
                  <Ship size={16} className="text-gold" /> Ready for passage
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="offer" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-forest">The offer</p>
              <h2 className="mt-4 max-w-xl font-display text-5xl leading-none text-deep md:text-6xl">
                Crops the house can speak for.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
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
              <article
                key={item.name}
                className="group overflow-hidden rounded-[1.8rem] bg-paper shadow-sm shadow-forest/5"
              >
                <button
                  className="block w-full text-left"
                  onClick={() => setShot({ src: item.image, label: item.name })}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-forest">
                      {item.kind}
                    </span>
                  </div>
                </button>
                <div className="p-5">
                  <h3 className="font-display text-3xl text-deep">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.8rem] border border-forest/10 bg-paper px-6 py-6">
            <p className="text-xs uppercase tracking-[0.24em] text-forest">Also arranged</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {also.map((item) => (
                <span key={item} className="rounded-full border border-forest/15 px-4 py-2 text-sm text-deep">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="bg-forest text-ivory">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
            <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">The path</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-6xl">
              Four movements. No rush that spoils the lot.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {steps.map((item) => (
                <article key={item.n} className="rounded-[1.8rem] border border-ivory/10 bg-canopy/40 p-6">
                  <span className="font-display text-4xl text-gold">{item.n}</span>
                  <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="film" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-forest">In motion</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-deep md:text-6xl">
                The lots, as they live.
              </h2>
            </div>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
            {films.map((item) => (
              <button
                key={item.title}
                onClick={() => setFilm(item)}
                className="group relative h-80 w-64 shrink-0 overflow-hidden rounded-[1.8rem] text-left"
              >
                <img src={item.poster} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-deep/35" />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gold text-deep">
                  <Play size={16} fill="currentColor" />
                </span>
                <span className="absolute bottom-4 left-4 right-4 font-display text-3xl text-ivory">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
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

        <section id="desk" className="bg-paper">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.28em] text-forest">Enquire</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-deep md:text-6xl">
                Write the crop. We will answer the season.
              </h2>
              <div className="mt-8 space-y-4 text-sm text-ink/75">
                <p className="flex items-center gap-3">
                  <MapPin className="text-gold" size={16} /> {house.place}
                </p>
                <a className="flex items-center gap-3 hover:text-forest" href={house.phoneHref}>
                  <Phone className="text-gold" size={16} /> {house.phone}
                </a>
                <a className="flex items-center gap-3 hover:text-forest" href={`mailto:${house.email}`}>
                  <Mail className="text-gold" size={16} /> {house.email}
                </a>
              </div>
            </div>
            <form
              className="rounded-[2rem] bg-ivory p-6 shadow-sm shadow-forest/5 lg:col-span-7"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const subject = `Supply note: ${data.get("crop")}`;
                const body = [
                  `Name: ${data.get("name")}`,
                  `Company: ${data.get("company")}`,
                  `Email: ${data.get("email")}`,
                  `Crop: ${data.get("crop")}`,
                  "",
                  data.get("note"),
                ].join("\n");
                window.location.href = `mailto:${house.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Crop of interest" name="crop" />
              </div>
              <label className="mt-4 block text-sm text-ink/70">
                Note
                <textarea
                  required
                  name="note"
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-forest/10 bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
                  placeholder="Grade, volume, and the port you have in mind."
                />
              </label>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm text-ivory transition hover:bg-canopy">
                Send the brief
                <ArrowRight size={16} />
              </button>
              {sent && (
                <p className="mt-4 text-sm text-forest">
                  Received. The desk will reply with what can be offered, and what must wait.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-deep px-5 py-10 text-ivory md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl">Dear One</p>
            <p className="mt-2 text-sm text-ivory/60">{house.name}</p>
          </div>
          <p className="text-sm text-ivory/50">Kokrobite, Ghana. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={house.whatsapp}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-medium text-deep shadow-lg shadow-deep/20"
      >
        WhatsApp
        <ArrowUpRight size={16} />
      </a>

      {shot && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-deep/90 p-4" onClick={() => setShot(null)}>
          <button className="absolute right-5 top-5 text-ivory" aria-label="Close image">
            <X />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={shot.src} alt={shot.label} className="max-h-[80vh] w-full rounded-3xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-ivory/80">{shot.label}</figcaption>
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
    </div>
  );
}

function Field({ label, name, type = "text" }) {
  return (
    <label className="block text-sm text-ink/70">
      {label}
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-forest/10 bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
      />
    </label>
  );
}

export default App;
