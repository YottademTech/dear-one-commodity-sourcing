import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseCircle, HamburgerMenu, SquareArrowRightUp } from "@solar-icons/react";
import { company, nav } from "../content.js";

export default function Shell({ children }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(pathname !== "/");

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(pathname !== "/" || window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className="min-h-screen max-w-full overflow-x-clip bg-ivory text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
          solid ? "bg-deep/92 shadow-lg shadow-deep/20 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
          <Link to="/" className="min-w-0 shrink-0">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto rounded-2xl bg-white object-contain p-1 shadow-md sm:h-20 md:h-[5.25rem]"
            />
          </Link>
          <nav className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-8">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-base transition hover:text-gold ${isActive ? "text-gold" : "text-ivory/80"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={company.whatsapp}
              className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-base font-medium text-deep transition hover:bg-gold-soft md:inline-flex"
            >
              Request a quote
              <SquareArrowRightUp className="size-4" weight="Linear" />
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerMenu className="size-[18px]" weight="Linear" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-deep text-ivory">
          <div className="flex items-center justify-between px-5 py-5">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto rounded-2xl bg-white object-contain p-1 sm:h-20"
            />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseCircle className="size-6" weight="Linear" />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-6 pt-10">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className="max-w-full font-display text-4xl sm:text-5xl"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {children}

      <footer className="bg-deep px-5 py-10 text-ivory md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 w-auto rounded-2xl bg-white object-contain p-1.5 shadow-md sm:h-24"
            />
            <p className="mt-3 max-w-full text-base text-ivory/60">{company.name}</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-base text-gold-soft">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-base text-ivory/50">Kokrobite, Ghana. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={company.whatsapp}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-base font-medium text-deep shadow-lg shadow-deep/20"
      >
        WhatsApp
        <SquareArrowRightUp className="size-4" weight="Linear" />
      </a>
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-base uppercase tracking-[0.18em] text-forest sm:tracking-[0.22em]">{eyebrow}</p>
      <h1 className="mt-4 max-w-full font-display text-4xl leading-[1.05] text-deep sm:text-5xl md:text-6xl">{title}</h1>
      {text && <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-ink/80">{text}</p>}
    </div>
  );
}
