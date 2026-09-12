import { Link } from "react-router-dom";
import { ArrowRight, ClipboardText, Leaf, MapPoint } from "@solar-icons/react";
import { company } from "../content.js";

const facts = [
  { label: "Business name", value: "Dear One Commodity Sourcing Enterprise" },
  { label: "Form", value: "Sole proprietorship" },
  { label: "Registration number", value: "BN337650522" },
  { label: "Tax identification", value: "P0061763144" },
  { label: "Work began", value: "16 May 2022" },
  { label: "Registered", value: "27 May 2022" },
];

export default function About() {
  return (
    <main className="bg-ivory">
      <header className="relative overflow-hidden bg-deep text-ivory">
        <img
          src="/media/images/img_12_voacanga_fruit.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 md:min-h-[34rem] md:px-8 md:pb-16">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">About us</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
            A registered Ghana commodity enterprise, quiet in its purpose.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-ivory/90">
            Dear One Commodity Sourcing Enterprise was entered on the register on the 27th day of May 2022, under the Registration of Business Names Act, 1962.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-base uppercase tracking-[0.22em] text-forest">The beginning</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-deep sm:text-5xl">
            Work started a little before the seal was set.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            The enterprise opened its books on 16 May 2022. Eleven days later, the Republic of Ghana recorded the name. The certificate bears registration number BN337650522, and the date the 27th day of May 2022.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            The calling is simple, and it is written plainly: the sale and supply of seeds and cereals, and the wider discipline of general trading.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {facts.map((item) => (
            <article key={item.label} className="rounded-[1.6rem] bg-paper p-5 shadow-sm shadow-forest/5">
              <p className="text-base uppercase tracking-[0.16em] text-forest">{item.label}</p>
              <p className="mt-3 font-display text-3xl leading-tight text-deep">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-deep text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
          <img
            src="/media/images/img_02_sesame_tray.jpg"
            alt="Pale sesame seed prepared for supply"
            className="h-80 w-full rounded-[2rem] object-cover md:h-[28rem]"
          />
          <div>
            <Leaf className="size-[22px] text-gold" weight="Linear" />
            <p className="mt-5 text-base uppercase tracking-[0.22em] text-gold-soft">The work</p>
            <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
              Seeds and cereals, offered with a trader’s care.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/80">
              The principal activity is the sale and supply of seeds and cereals. Beside that sits general trading, so a buyer may ask for the grain, the nut, or the seed the season can honestly give.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">
              On the industrial register the enterprise is classed, first, as retail sale of food in specialized stores. That is the public name for a private habit: know the crop, then place it well.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MapPoint className="size-[22px] text-gold" weight="Linear" />
            <p className="mt-5 text-base uppercase tracking-[0.22em] text-forest">The address</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-deep sm:text-5xl">
              Kokrobite, near the ocean hill.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              The principal place of business is in Kokrobite, near LMB Ocean Hill, in the city of Accra.
            </p>
          </div>
          <div className="rounded-[1.8rem] bg-paper p-6 shadow-sm shadow-forest/5 sm:p-8 lg:col-span-7">
            <dl className="grid gap-6 sm:grid-cols-2">
              <Detail label="Building" value="Kokrobite" />
              <Detail label="Street" value="Near LMB Ocean Hill" />
              <Detail label="City" value="Accra" />
              <Detail label="District" value="Ga South" />
              <Detail label="Region" value="Greater Accra" />
              <Detail label="Country" value="Ghana" />
              <Detail label="Digital address" value="GS-0701-9116" />
              <Detail label="Postal" value="P.O. Box AN 1578, Accra North, Greater Accra" />
            </dl>
            <a
              href={company.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-lg text-forest hover:underline"
            >
              Find us on the map
              <ArrowRight className="size-4" weight="Linear" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <img
            src="/media/images/img_39_company_building.jpg"
            alt="Dear One Commodity Sourcing Enterprise building in Kokrobite"
            className="h-72 w-full rounded-[1.8rem] object-cover md:h-[26rem]"
          />
          <img
            src="/media/images/img_40_company_front.jpg"
            alt="Front view of the Dear One company building in Kokrobite"
            className="h-72 w-full rounded-[1.8rem] object-cover md:h-[26rem]"
          />
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 lg:py-20">
          <div className="max-w-2xl">
            <ClipboardText className="size-[22px] text-gold" weight="Linear" />
            <p className="mt-5 text-base uppercase tracking-[0.22em] text-gold-soft">The certificate</p>
            <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
              A name held on the public register, and kept with private care.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/80">
              The Registrar of Business Names certified the name Dear One Commodity Sourcing Enterprise. The papers are Form A, a sole proprietorship, and the certificate dated the 27th day of May 2022.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-medium text-deep transition hover:bg-gold-soft"
          >
            Contact us
            <ArrowRight className="size-4" weight="Linear" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="min-w-0">
      <dt className="text-base uppercase tracking-[0.16em] text-forest">{label}</dt>
      <dd className="mt-2 text-lg leading-relaxed text-deep">{value}</dd>
    </div>
  );
}
