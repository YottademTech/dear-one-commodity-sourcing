import { Link } from "react-router-dom";
import {
  ArrowRight,
  Buildings2,
  ClipboardText,
  Delivery,
  Global,
  Leaf,
  ShieldCheck,
} from "@solar-icons/react";
import {
  advantages,
  gallery,
  company,
  industries,
  markets,
  pillars,
  products,
  ribbon,
  stats,
  steps,
} from "../content.js";

const featuredNames = [
  "Voacanga Africana",
  "Griffonia seed",
  "Grain of paradise",
  "Hibiscus",
  "Raw cashew nuts",
  "Shea butter",
];

export default function Home() {
  const featured = featuredNames
    .map((name) => products.find((item) => item.name === name))
    .filter(Boolean);

  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-deep text-ivory">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/images/img_10_cashew_clean.jpg"
          onVolumeChange={(event) => {
            event.currentTarget.muted = true;
          }}
        >
          <source src="/media/videos/vid_06_cashew_nuts.mp4" type="video/mp4" />
        </video>
        <div className="hero-veil absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8">
          <p className="rise text-base uppercase tracking-[0.22em] text-gold-soft">
            Ghana · Asia · America · Europe
          </p>
          <h1 className="rise mt-5 max-w-4xl font-display text-4xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-5xl md:text-7xl">
            Premium Ghanaian seeds, tree crops, and agro produce for the world.
          </h1>
          <p className="rise mt-6 max-w-2xl text-xl font-light leading-relaxed text-ivory/90 md:text-2xl">
            {company.name} sources herbal seed, tree crops, and cereals from known hands in Ghana,
            then prepares them for buyers across Asia, America, and Europe.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-semibold text-deep transition hover:bg-gold-soft"
            >
              Request a quote
              <ArrowRight className="size-4" weight="Linear" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-base text-ivory transition hover:border-gold hover:text-gold"
            >
              Explore products
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-deep/10 bg-deep text-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-4xl font-semibold tracking-[-0.02em] text-gold-soft md:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-base text-ivory/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-full overflow-x-clip border-b border-forest/10 bg-forest text-ivory">
        <div className="ribbon-track flex gap-10 whitespace-nowrap py-4">
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10 text-base tracking-wide">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto grid min-w-0 max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-base uppercase tracking-[0.22em] text-forest">Who we are</p>
          <h2 className="mt-4 max-w-full font-display text-4xl leading-none font-semibold tracking-[-0.02em] text-deep sm:text-5xl">
            A Ghana commodity enterprise for buyers who want origin without noise.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            From Kokrobite, Dear One connects farms and gathering points to pharmaceutical,
            food, wellness, and trade partners abroad. The difference is simple: the lot is seen,
            graded, and documented before it is promised.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-forest hover:underline">
            Learn about the enterprise
            <ArrowRight className="size-4" weight="Linear" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-3xl bg-paper p-5 shadow-sm shadow-deep/5">
              <Leaf className="size-[18px] text-forest" weight="Linear" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-deep">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-base uppercase tracking-[0.22em] text-forest">Featured products</p>
              <h2 className="mt-4 font-display text-4xl leading-none font-semibold tracking-[-0.02em] text-deep sm:text-5xl">
                Crops we can stand behind.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Herbal seed, tree crops, and agro produce prepared for export, when the season allows.
              </p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-base font-semibold text-forest hover:underline">
              View all products
              <ArrowRight className="size-4" weight="Linear" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.name}
                to="/products"
                className="group overflow-hidden rounded-[1.8rem] bg-ivory shadow-sm shadow-deep/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-sm uppercase tracking-[0.14em] text-forest">
                    {item.kind}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl font-semibold text-deep">{item.name}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink/75">{item.note}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-forest">
                    View details
                    <ArrowRight className="size-4" weight="Linear" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">Industries we serve</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none font-semibold tracking-[-0.02em] sm:text-5xl">
            One offer, many industries.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-ivory/10 bg-white/5 p-6">
                <Buildings2 className="size-[22px] text-gold" weight="Linear" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ivory/75">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <p className="text-base uppercase tracking-[0.22em] text-forest">Why Dear One</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none font-semibold tracking-[-0.02em] text-deep sm:text-5xl">
          What serious buyers need besides a good crop.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = [ShieldCheck, Leaf, ClipboardText, Global, Delivery, Buildings2][index];
            return (
              <article key={item.title} className="rounded-[1.8rem] bg-paper p-6 shadow-sm shadow-deep/5">
                <Icon className="size-[22px] text-forest" weight="Linear" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-deep">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">How it works</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none font-semibold tracking-[-0.02em] sm:text-5xl">
            From enquiry to delivery, without theatre.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((item) => (
              <article key={item.n} className="rounded-[1.8rem] border border-ivory/10 bg-canopy/40 p-6">
                <span className="font-display text-4xl font-semibold text-gold">{item.n}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ivory/80">{item.text}</p>
              </article>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-semibold text-deep transition hover:bg-gold-soft"
          >
            Start with an enquiry
            <ArrowRight className="size-4" weight="Linear" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-base uppercase tracking-[0.22em] text-forest">Global markets</p>
            <h2 className="mt-4 font-display text-4xl leading-none font-semibold tracking-[-0.02em] text-deep sm:text-5xl">
              We serve Asia, America, and Europe.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Dear One is Ghanaian. The buyers we serve sit across three market regions,
              with the same care for grade, papers, and timing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {markets.map((item) => (
              <article key={item.region} className="rounded-[1.8rem] border border-deep/10 bg-paper p-6">
                <Global className="size-[22px] text-forest" weight="Linear" />
                <h3 className="mt-5 font-display text-3xl font-semibold text-deep">{item.region}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-base uppercase tracking-[0.22em] text-forest">From the yard</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-none font-semibold tracking-[-0.02em] text-deep sm:text-5xl">
                Still frames from the work.
              </h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-lg font-semibold text-forest hover:underline">
              Open the gallery
              <ArrowRight className="size-4" weight="Linear" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.slice(0, 4).map((item) => (
              <Link key={item.src} to="/gallery" className="group overflow-hidden rounded-[1.4rem]">
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-56"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep text-ivory">
        <img
          src="/media/images/img_13_voacanga_harvest.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">Start today</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none font-semibold tracking-[-0.02em] sm:text-5xl md:text-6xl">
            Ready to source from Ghana with a calm, lasting partner?
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-ivory/85">
            Send the crop, the grade, and the window. Our team replies with what can move,
            and what must wait.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-semibold text-deep transition hover:bg-gold-soft"
            >
              Request a quote
              <ArrowRight className="size-4" weight="Linear" />
            </Link>
            <a
              href={company.whatsapp}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-base text-ivory transition hover:border-gold hover:text-gold"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
