import { useState } from "react";
import { ArrowRight, ClockCircle, Letter, MapPoint, Phone, SquareArrowRightUp } from "@solar-icons/react";
import { house } from "../content.js";

const ways = [
  {
    icon: MapPoint,
    label: "The house",
    title: house.place,
    text: house.name,
    href: house.mapLink,
    action: "Open in Google Maps",
    external: true,
  },
  {
    icon: Phone,
    label: "Speak",
    title: house.phone,
    text: "Call the desk, or write on WhatsApp.",
    href: house.phoneHref,
    action: "Call now",
  },
  {
    icon: Letter,
    label: "Write",
    title: house.email,
    text: "Replies go out on business days.",
    href: `mailto:${house.email}`,
    action: "Send an email",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-ivory">
      <header className="relative overflow-hidden bg-deep text-ivory">
        <img
          src="/media/images/img_10_cashew_clean.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 md:min-h-[34rem] md:px-8 md:pb-16">
          <p className="text-base uppercase tracking-[0.22em] text-gold-soft">Contact us</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
            We provide our services to the Asian, American, and European market
          </h1>
        </div>
      </header>

      <div className="w-full max-w-full overflow-hidden">
        <iframe
          title="Dear One Commodity Sourcing Enterprise in Kokrobite, Ghana"
          src={house.mapEmbed}
          className="block h-[28rem] w-full max-w-full border-0 md:h-[36rem]"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((item) => (
            <article key={item.label} className="rounded-[1.8rem] bg-paper p-6 shadow-sm shadow-forest/5">
              <item.icon className="size-[22px] text-gold" weight="Linear" />
              <p className="mt-5 text-base uppercase tracking-[0.18em] text-forest">{item.label}</p>
              <h2 className="mt-2 break-words font-display text-3xl leading-tight text-deep">{item.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.text}</p>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-2 text-lg text-forest hover:underline"
              >
                {item.action}
                <SquareArrowRightUp className="size-4" weight="Linear" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <p className="text-base uppercase tracking-[0.22em] text-forest">The brief</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-deep sm:text-5xl">
              Tell us what you need held.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              A short note is enough. Crop, grade, volume, and the port you prefer. We reply with what can move, and what must wait.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-lg text-ink/70">
              <ClockCircle className="size-[18px] text-gold" weight="Linear" /> Replies on business days
            </p>
            <a
              href={house.whatsapp}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-medium text-deep transition hover:bg-gold-soft"
            >
              WhatsApp the desk
              <SquareArrowRightUp className="size-4" weight="Linear" />
            </a>
          </div>

          <form
            className="rounded-[2rem] bg-paper p-6 shadow-sm shadow-forest/5 sm:p-8 lg:col-span-8"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const subject = `Contact: ${data.get("topic")}`;
              const body = [
                `Name: ${data.get("name")}`,
                `Company: ${data.get("company")}`,
                `Email: ${data.get("email")}`,
                `Phone: ${data.get("phone")}`,
                `Topic: ${data.get("topic")}`,
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
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Topic" name="topic" wide />
            </div>
            <label className="mt-4 block text-lg text-ink/75">
              Message
              <textarea
                required
                name="note"
                rows="6"
                className="mt-2 w-full rounded-2xl border border-forest/10 bg-ivory px-4 py-3 text-lg outline-none ring-gold focus:ring-2"
                placeholder="Crop, grade, volume, and the port you have in mind."
              />
            </label>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-base text-ivory transition hover:bg-canopy">
              Send the message
              <ArrowRight className="size-4" weight="Linear" />
            </button>
            {sent && (
              <p className="mt-4 text-lg text-forest">
                Received. Your mail is ready to leave, and the desk will answer from Kokrobite.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", wide = false }) {
  return (
    <label className={`block text-lg text-ink/75 ${wide ? "md:col-span-2" : ""}`}>
      {label}
      <input
        required={name !== "phone" && name !== "company"}
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-forest/10 bg-ivory px-4 py-3 text-lg outline-none ring-gold focus:ring-2"
      />
    </label>
  );
}
