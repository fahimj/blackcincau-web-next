"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/img/logo.png";
import { localeNames, type Locale } from "@/i18n/config";
import { ChevronIcon, CloseIcon, GlobeIcon, MenuIcon } from "./Icons";

interface HeaderProps {
  lang: Locale;
  locales: readonly Locale[];
  brand: string;
  labels: {
    home: string;
    products: string;
    about: string;
    faq: string;
    contact: string;
    menu: string;
    language: string;
    quote: string;
  };
}

export function Header({ lang, locales, brand, labels }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const base = `/${lang}`;

  // Close the language menu on Escape or a click anywhere outside it.
  useEffect(() => {
    if (!langOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [langOpen]);

  const links = [
    { href: base, label: labels.home },
    { href: `${base}#products`, label: labels.products },
    { href: `${base}/about`, label: labels.about },
    { href: `${base}/faq`, label: labels.faq },
    { href: `${base}/contact`, label: labels.contact },
  ];

  const isCurrent = (href: string) =>
    !href.includes("#") &&
    (href === base ? pathname === base : pathname.startsWith(href));

  const items = links.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        aria-current={isCurrent(link.href) ? "page" : undefined}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={base} className="header-logo" aria-label={brand}>
          <Image src={logo} alt={brand} width={64} height={64} priority />
        </Link>
        <nav className="nav-main" aria-label={labels.menu}>
          <ul>{items}</ul>
        </nav>
        <div className="header-actions">
          {locales.length > 1 && (
            <div className="lang-switch" ref={langRef}>
              <button
                className="lang-toggle"
                type="button"
                aria-label={`${labels.language}: ${localeNames[lang]}`}
                aria-expanded={langOpen}
                aria-controls="lang-menu"
                onClick={() => {
                  setLangOpen(!langOpen);
                  setOpen(false);
                }}
              >
                <GlobeIcon />
                <span>{lang.toUpperCase()}</span>
                <ChevronIcon />
              </button>
              <ul className="lang-menu" id="lang-menu" hidden={!langOpen}>
                {locales.map((locale) => (
                  <li key={locale}>
                    <Link
                      href={pathname.replace(base, `/${locale}`)}
                      hrefLang={locale}
                      lang={locale}
                      aria-current={locale === lang ? "true" : undefined}
                      onClick={() => setLangOpen(false)}
                    >
                      {localeNames[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link href={`${base}/contact`} className="btn btn-primary header-cta">
            {labels.quote}
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label={labels.menu}
            aria-expanded={open}
            aria-controls="nav-dropdown"
            onClick={() => {
              setOpen(!open);
              setLangOpen(false);
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav
        className="nav-dropdown"
        id="nav-dropdown"
        aria-label={labels.menu}
        hidden={!open}
      >
        <ul>{items}</ul>
        <Link
          href={`${base}/contact`}
          className="btn btn-primary btn-block"
          onClick={() => setOpen(false)}
        >
          {labels.quote}
        </Link>
      </nav>
    </header>
  );
}
