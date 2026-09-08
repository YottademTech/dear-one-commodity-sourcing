import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Ship, Sprout } from "lucide-react";
import { gallery, house, pillars, products, ribbon } from "../content.js";

export default function Home() {
  const featured = products.slice(0, 3);

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
        >
          <source src="/media/videos/vid_06_cashew_nuts.mp4" type="video/mp4" />
        </video>
        <div className="hero-veil absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8">
          <p className="rise text-base uppercase tracking-[0.22em] text-gold-soft">Kokrobite · Ghana</p>
          <h1 className="rise mt-5 max-w-full font-display text-4xl leading-[0.95] sm:text-5xl md:text-7xl">
            A calm house for the crops the world still seeks.
          </h1>
          <p className="rise mt-6 max-w-2xl text-xl font-light leading-relaxed text-ivory/90 md:text-2xl">
            {house.name} gathers herbal seed, tree crops, and agro produce with the patience of a
            private desk and the standing of public office.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-medium text-deep transition hover:bg-gold-soft"
            >
              See the products
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-base text-ivory transition hover:border-gold hover:text-gold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-full overflow-x-clip border-y border-forest/10 bg-forest text-ivory">
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
          <p className="text-base uppercase tracking-[0.22em] text-forest">The house</p>
          <h2 className="mt-4 max-w-full font-display text-4xl leading-none text-deep sm:text-5xl">Led with public standing. Run as a private craft.</h2>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-base text-forest hover:underline">
            Read the house story
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-3xl bg-paper p-5 shadow-sm shadow-forest/5">
              <Leaf className="text-gold" size={18} />
              <h3 className="mt-4 font-display text-3xl text-deep">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-base uppercase tracking-[0.22em] text-forest">Products</p>
              <h2 className="mt-4 max-w-full font-display text-4xl leading-none text-deep sm:text-5xl">A first look at the offer.</h2>
            </div>
            <Link to="/products" className="hidden items-center gap-2 text-base text-forest hover:underline sm:inline-flex">
              All products
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((item) => (
              <Link key={item.name} to="/products" className="group overflow-hidden rounded-[1.8rem] bg-ivory">
                <img src={item.image} alt={item.alt} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-base uppercase tracking-[0.16em] text-forest">{item.kind}</p>
                  <h3 className="mt-2 font-display text-3xl text-deep">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 text-lg text-forest hover:underline sm:hidden">
            All products
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">The standard</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none sm:text-5xl">
            What a buyer can expect before a lot is named.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Sprout,
                title: "Known origin",
                text: "Each offer begins with a farm, a gathering point, or a hand the house already trusts.",
              },
              {
                icon: ShieldCheck,
                title: "Seen before promised",
                text: "Moisture, colour, and cleanliness are read. Nothing is offered on rumour.",
              },
              {
                icon: Ship,
                title: "Held for passage",
                text: "Approved stock is sacked or cartoned, then kept until the route is clear.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-ivory/10 bg-canopy/40 p-6">
                <item.icon className="text-gold" size={22} />
                <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ivory/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/media/images/img_12_voacanga_fruit.jpg"
            alt="Voacanga fruit on the tree"
            className="h-56 w-full rounded-[1.6rem] object-cover sm:h-72"
          />
          <img
            src="/media/images/img_18_export_cartons.jpg"
            alt="Cartons packed and ready to move"
            className="mt-8 h-56 w-full rounded-[1.6rem] object-cover sm:h-72"
          />
        </div>
        <div>
          <p className="text-base uppercase tracking-[0.22em] text-forest">From tree to store</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-deep sm:text-5xl">
            The lot is quiet work, from the branch to the sack.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Harvest, drying, and packing stay close to the crop. The house does not dress a parcel to look larger than it is. You see the same grain in the field that you receive at the port.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-lg text-forest hover:underline">
            Follow the path
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-base uppercase tracking-[0.22em] text-forest">The gallery</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-none text-deep sm:text-5xl">
                Still frames from the yard.
              </h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-lg text-forest hover:underline">
              Open the gallery
              <ArrowRight size={16} />
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
    </main>
  );
}
