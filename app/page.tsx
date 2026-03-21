"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ExternalLink, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// TRANSLATIONS - All UI text in one place
// ============================================
const translations = {
  es: {
    nav: {
      home: "Inicio",
      sets: "Sets",
      contact: "Contacto",
    },
    items: {
      contactToBuy: "Contactar por Telegram",
      paypalBuy: "Pagar con PayPal",
      soldOut: "AGOTADO",
      steamGift: "Steam Gift / Regalo Steam",
      stock: "Disponibles",
    },
    hero: {
      tagline: "Sets exclusivos de Dota 2",
      subtitle: "Directamente desde mi inventario",
      tiktok: "TikTok",
      cta: "Ver Sets",
    },
    howToBuy: {
      title: "¿Cómo Comprar?",
      step1Title: "Contacta",
      step1Desc: "Escríbeme por Telegram @lermns o Steam",
      step2Title: "Verifica",
      step2Desc: "Acordamos precio y verificas el item",
      step3Title: "Recibe",
      step3Desc: "Te envío la oferta de intercambio en Steam o regalo directo",
      socialProof: "TikTok",
    },
    footer: {
      disclaimer: "Todos los items son artículos legítimos del inventario de Steam",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
      mythical: "Mythical",
      rare: "Rare",
      common: "Common",
    },
  },
  en: {
    nav: {
      home: "Home",
      sets: "Sets",
      contact: "Contact",
    },
    items: {
      contactToBuy: "Contact on Telegram",
      paypalBuy: "Pay with PayPal",
      soldOut: "SOLD OUT",
      steamGift: "Steam Gift",
      stock: "Available",
    },
    hero: {
      tagline: "Exclusive Dota 2 Sets",
      subtitle: "Straight from my inventory",
      tiktok: "TikTok",
      cta: "View Sets",
    },
    howToBuy: {
      title: "How to Buy?",
      step1Title: "Contact",
      step1Desc: "Message me on Telegram @lermns or Steam",
      step2Title: "Verify",
      step2Desc: "We agree on price and you verify the item",
      step3Title: "Receive",
      step3Desc: "I send you the Steam trade offer or direct gift",
      socialProof: "TikTok",
    },
    footer: {
      disclaimer: "All items are legitimate Steam inventory items",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
      mythical: "Mythical",
      rare: "Rare",
      common: "Common",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      sets: "Сеты",
      contact: "Контакт",
    },
    items: {
      contactToBuy: "Написать в Telegram",
      paypalBuy: "Оплатить PayPal",
      soldOut: "ПРОДАНО",
      steamGift: "Steam Подарок",
      stock: "Доступно",
    },
    hero: {
      tagline: "Эксклюзивные сеты Dota 2",
      subtitle: "Прямо из моего инвентаря",
      tiktok: "TikTok",
      cta: "Смотреть Сеты",
    },
    howToBuy: {
      title: "Как Купить?",
      step1Title: "Напиши",
      step1Desc: "Напиши мне в Telegram @lermns или Steam",
      step2Title: "Проверь",
      step2Desc: "Согласуем цену и проверишь предмет",
      step3Title: "Получи",
      step3Desc: "Отправлю тебе предложение обмена в Steam или прямой подарок",
      socialProof: "TikTok",
    },
    footer: {
      disclaimer: "Все предметы являются легитимными предметами инвентаря Steam",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
      mythical: "Mythical",
      rare: "Rare",
      common: "Common",
    },
  },
};

type Language = "es" | "en" | "ru";

// ============================================
// COMPONENTS
// ============================================

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    background: string;
    boxShadow: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  const [runes, setRunes] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    color: string;
  }>>([]);

  useEffect(() => {
    const colors = [
      { bg: "rgba(255, 215, 0, 0.6)", shadow: "rgba(255, 215, 0, 0.8)" },
      { bg: "rgba(0, 191, 255, 0.6)", shadow: "rgba(0, 191, 255, 0.8)" },
      { bg: "rgba(106, 13, 173, 0.6)", shadow: "rgba(106, 13, 173, 0.8)" },
    ];

    setParticles(
      [...Array(20)].map((_, i) => {
        const color = colors[i % 3];
        return {
          width: Math.random() * 6 + 2,
          height: Math.random() * 6 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: color.bg,
          boxShadow: `0 0 10px ${color.shadow}`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        };
      })
    );

    setRunes(
      [...Array(8)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        color: i % 2 === 0 ? "#FFD700" : "#00BFFF",
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: p.left,
            top: p.top,
            background: p.background,
            boxShadow: p.boxShadow,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
      {runes.map((r, i) => (
        <div
          key={`rune-${i}`}
          className="absolute text-2xl opacity-20 animate-pulse-slow"
          style={{
            left: r.left,
            top: r.top,
            animationDelay: r.animationDelay,
            color: r.color,
          }}
        >
          ◆
        </div>
      ))}
    </div>
  );
};

function Header({
  lang,
  setLang,
  t,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.es;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold glow-text tracking-wider">
              LERMNS SHOP
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground/80 hover:text-gold transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#sets"
              className="text-foreground/80 hover:text-gold transition-colors"
            >
              {t.nav.sets}
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-gold transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-1 text-sm rounded transition-all ${lang === "es"
                  ? "bg-gold text-background font-medium"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-sm rounded transition-all ${lang === "en"
                  ? "bg-gold text-background font-medium"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-2 py-1 text-sm rounded transition-all ${lang === "ru"
                  ? "bg-gold text-background font-medium"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                RU
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {t.nav.home}
              </a>
              <a
                href="#sets"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {t.nav.sets}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection({ t }: { t: typeof translations.es }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-balance">
          <span className="text-gold glow-text">{t.hero.tagline}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-foreground/80 mb-6">
          {t.hero.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8 text-electric-blue">
          <span className="inline-block animate-pulse">●</span>
          <a
            href="https://www.tiktok.com/@lermns"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @lermns • {t.hero.tiktok}
          </a>
        </div>
        <Button
          size="lg"
          className="bg-gold hover:bg-gold/90 text-background font-bold px-8 py-6 text-lg rounded-lg shadow-lg shadow-gold/30 transition-all hover:shadow-gold/50 hover:scale-105"
          onClick={() => document.getElementById("sets")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

// Componente separado para el carrusel con lightbox
function ImageCarousel({ item, t }: { item: (typeof items)[0]; t: typeof translations.es }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasMultiple = item.image.length > 1;

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {hasMultiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIndex(i => Math.max(0, i - 1)); }}
                disabled={imgIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIndex(i => Math.min(item.image.length - 1, i + 1)); }}
                disabled={imgIndex === item.image.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <img
            src={item.image[imgIndex]}
            alt={`${item.hero} - ${item.setName}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {hasMultiple && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {item.image.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === imgIndex ? "bg-gold scale-125" : "bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Imagen con carrusel */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-secondary to-background overflow-hidden group/img">
        <img
          src={item.image[imgIndex]}
          alt={`${item.hero} - ${item.setName}`}
          className="w-full h-full object-contain p-2 transition-all duration-300 cursor-zoom-in"
          loading="lazy"
          onClick={() => setLightboxOpen(true)}
        />

        {/* Hint de zoom */}
        <div className="absolute top-2 left-2 bg-background/60 border border-border rounded-full px-2 py-0.5 text-xs text-muted-foreground opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
          🔍 Click para ampliar
        </div>

        {/* Glow overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover/img:opacity-20 transition-opacity pointer-events-none ${item.rarity === "mythical"
          ? "bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-500"
          : item.rarity === "immortal"
            ? "bg-gradient-to-br from-orange-500 to-amber-500"
            : item.rarity === "legendary"
              ? "bg-gradient-to-br from-purple-600 to-violet-500"
              : item.rarity === "rare"
                ? "bg-gradient-to-br from-blue-500 to-blue-700"
                : "bg-gradient-to-br from-zinc-500 to-zinc-600"
          }`} />

        {/* Flechas */}
        {hasMultiple && (
          <>
            <button
              onClick={() => setImgIndex(i => Math.max(0, i - 1))}
              disabled={imgIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all opacity-0 group-hover/img:opacity-100 disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg className="w-3.5 h-3.5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setImgIndex(i => Math.min(item.image.length - 1, i + 1))}
              disabled={imgIndex === item.image.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all opacity-0 group-hover/img:opacity-100 disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg className="w-3.5 h-3.5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {item.image.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? "bg-gold scale-125" : "bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute top-2 right-2 bg-background/70 border border-border rounded-full px-2 py-0.5 text-xs text-muted-foreground">
              {imgIndex + 1}/{item.image.length}
            </div>
          </>
        )}
      </div>
    </>
  );
}

function ItemCard({
  item,
  t,
  index,
}: {
  item: (typeof items)[0];
  t: typeof translations.es;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const rarityColors = {
    immortal: {
      glow: "shadow-orange-500/50 hover:shadow-orange-500/70",
      badge: "bg-gradient-to-r from-orange-600 to-amber-500 text-white",
      border: "border-orange-500/30 hover:border-orange-500/60",
    },
    mythical: {
      glow: "shadow-purple-500/50 hover:shadow-purple-500/70",
      badge: "bg-gradient-to-r from-purple-600 to-violet-500 text-white",
      border: "border-purple-500/30 hover:border-purple-500/60",
    },
    legendary: {
      glow: "shadow-purple-400/50 hover:shadow-purple-400/70",
      badge: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
      border: "border-purple-400/30 hover:border-purple-400/60",
    },
    rare: {
      glow: "shadow-blue-500/60 hover:shadow-blue-500/80",
      badge: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
      border: "border-blue-500/30 hover:border-blue-500/60",
    },
    common: {
      glow: "shadow-zinc-400/40 hover:shadow-zinc-400/60",
      badge: "bg-gradient-to-r from-zinc-500 to-zinc-600 text-white",
      border: "border-zinc-500/30 hover:border-zinc-500/60",
    },
  };

  const colors = rarityColors[item.rarity];
  const isSoldOut = item.stock === 0;

  return (
    <div
      ref={cardRef}
      className={`relative group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <div className={`relative bg-card rounded-xl border-2 ${colors.border} overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg ${colors.glow} hover:shadow-xl`}>

        {isSoldOut && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-red-500 rotate-[-12deg] border-4 border-red-500 px-6 py-2 rounded">
              {t.items.soldOut}
            </span>
          </div>
        )}

        <ImageCarousel item={item} t={t} />

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0">
              <h3 className="font-serif text-base font-bold text-foreground truncate">{item.hero}</h3>
              <p className="text-xs text-muted-foreground leading-tight mt-0.5">{item.setName}</p>
            </div>
            <span className={`px-2 py-1 text-xs font-bold rounded-full shrink-0 ${colors.badge}`}>
              {t.rarity[item.rarity]}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
              {t.items.steamGift}
            </span>
            <span className="text-xs text-muted-foreground">
              {t.items.stock}: {item.stock}
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-gold">{item.price}€</span>
          </div>

          <div className="flex gap-2">
            <a
              href="https://t.me/lermns"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${isSoldOut ? "pointer-events-none opacity-50" : ""}`}
            >
              <Button size="sm" disabled={isSoldOut} className="w-full bg-electric-blue hover:bg-electric-blue/80 text-background font-medium gap-1.5 text-xs">
                <Send size={13} />
                {t.items.contactToBuy}
              </Button>
            </a>
            <a
              href={`https://paypal.me/Lermns/${item.price}EUR`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${isSoldOut ? "pointer-events-none opacity-50" : ""}`}
            >
              <Button size="sm" disabled={isSoldOut} className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium gap-1.5 text-xs">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.291-.077.448-.983 5.036-4.341 6.77-8.63 6.77H9.275a.774.774 0 0 0-.763.654l-.834 5.304-.096.613-.506 3.252z" />
                </svg>
                PayPal
              </Button>
            </a>
          </div>
        </div>
      </div >
    </div >
  );
}

const ITEMS_PER_PAGE = 10;

function SetsGrid({ t }: { t: typeof translations.es }) {
  const [search, setSearch] = useState("");
  const [selectedHero, setSelectedHero] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const allHeroes = Array.from(new Set(items.map((item) => item.hero)));

  const filteredHeroes = allHeroes.filter((hero) =>
    hero.toLowerCase().startsWith(search.toLowerCase()) && search.length > 0
  );

  const filteredItems = selectedHero
    ? items.filter((item) => item.hero === selectedHero)
    : items;

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const visibleItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset página al cambiar filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedHero]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelectHero(hero: string) {
    setSelectedHero(hero);
    setSearch(hero);
    setShowDropdown(false);
  }

  function handleClearFilter() {
    setSelectedHero(null);
    setSearch("");
    setCurrentPage(1);
    inputRef.current?.focus();
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    // Scroll suave al inicio del grid
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="sets" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-8 text-gold glow-text">
          {t.nav.sets}
        </h2>

        {/* Search bar */}
        <div className="relative max-w-sm mx-auto mb-10">
          <div className="relative flex items-center">
            <svg className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedHero(null);
                setShowDropdown(true);
              }}
              onFocus={() => search.length > 0 && setShowDropdown(true)}
              placeholder="Buscar héroe..."
              className="w-full pl-9 pr-10 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all text-sm"
            />
            {search && (
              <button onClick={handleClearFilter}
                className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {showDropdown && filteredHeroes.length > 0 && (
            <div ref={dropdownRef}
              className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
              {filteredHeroes.map((hero) => {
                const heroItems = items.filter((i) => i.hero === hero);
                return (
                  <button key={hero} onClick={() => handleSelectHero(hero)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-secondary transition-colors text-left group">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⚔️</span>
                      <span className="text-foreground font-medium">{hero}</span>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-gold transition-colors">
                      {heroItems.length} set{heroItems.length !== 1 ? "s" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {showDropdown && search.length > 0 && filteredHeroes.length === 0 && !selectedHero && (
            <div ref={dropdownRef}
              className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-xl z-50 px-4 py-3 text-sm text-muted-foreground text-center">
              No se encontró ningún héroe
            </div>
          )}
        </div>

        {/* Filtro activo */}
        {selectedHero && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Mostrando sets de:</span>
            <span className="flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-3 py-1 rounded-full">
              {selectedHero}
              <button onClick={handleClearFilter} className="hover:text-white transition-colors ml-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          </div>
        )}

        {/* Contador y página actual */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-sm text-muted-foreground">
            {filteredItems.length} sets • página {currentPage} de {totalPages}
          </span>
          <span className="text-sm text-muted-foreground">
            {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)} de {filteredItems.length}
          </span>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-24">
          {visibleItems.map((item, index) => (
            <ItemCard key={item.id} item={item} t={t} index={index} />
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
            {/* Anterior */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-gold/50 hover:text-gold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>

            {/* Números de página */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Mostrar siempre: primera, última, actual y las 2 adyacentes
              const isNearCurrent = Math.abs(page - currentPage) <= 1;
              const isFirstOrLast = page === 1 || page === totalPages;
              if (!isNearCurrent && !isFirstOrLast) {
                // Mostrar "..." solo una vez entre grupos
                if (page === 2 || page === totalPages - 1) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground text-sm">
                      ...
                    </span>
                  );
                }
                return null;
              }
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                    ? "bg-gold text-background font-bold shadow-lg shadow-gold/30"
                    : "border border-border text-foreground hover:border-gold/50 hover:text-gold"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Siguiente */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-gold/50 hover:text-gold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function HowToBuySection({ t }: { t: typeof translations.es }) {
  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12 text-gold glow-text">
          {t.howToBuy.title}
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { num: 1, title: t.howToBuy.step1Title, desc: t.howToBuy.step1Desc },
            { num: 2, title: t.howToBuy.step2Title, desc: t.howToBuy.step2Desc },
            { num: 3, title: t.howToBuy.step3Title, desc: t.howToBuy.step3Desc },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gold text-background font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mb-8">
          <p className="text-electric-blue font-medium">
            <span className="inline-block animate-pulse mr-2">●</span>
            {t.howToBuy.socialProof} @lermns
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://steamcommunity.com/profiles/76561198278156093/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 border border-border hover:border-gold/50 px-5 py-3 rounded-lg transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V22l4-4-4-4v2.8c-3.45-.8-6-3.92-6-7.68 0-4.34 3.53-7.88 7.88-7.88S19.76 4.78 19.76 9.12c0 1.98-.73 3.79-1.94 5.18l1.45 1.45C21.03 13.92 22 11.58 22 9.12 22 5.05 18.18 2 13.5 2H12z" />
            </svg>
            <span className="text-foreground">Steam</span>
            <ExternalLink size={14} className="text-muted-foreground" />
          </a>
          <a
            href="https://t.me/lermns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0088cc]/80 px-5 py-3 rounded-lg transition-all text-white"
          >
            <MessageCircle size={20} />
            <span>Telegram</span>
            <ExternalLink size={14} className="opacity-70" />
          </a>
          <a
            href="https://www.tiktok.com/@lermns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 border border-border hover:border-gold/50 px-5 py-3 rounded-lg transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span className="text-foreground">TikTok</span>
            <ExternalLink size={14} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: typeof translations.es }) {
  return (
    <footer className="relative z-10 py-8 px-4 border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4">
          {t.footer.disclaimer}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://steamcommunity.com/profiles/76561198278156093/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            Steam
          </a>
          <a
            href="https://www.tiktok.com/@lermns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://t.me/lermns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            Telegram
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60 mt-4">
          © {new Date().getFullYear()} LERMNS SHOP
        </p>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <HeroSection t={t} />
        <SetsGrid t={t} />
        <HowToBuySection t={t} />
      </main>
      <Footer t={t} />

      {/* Custom styles */}
      <style jsx global>{`
        .text-gold {
          color: #FFD700;
        }
        .bg-gold {
          background-color: #FFD700;
        }
        .border-gold {
          border-color: #FFD700;
        }
        .text-electric-blue {
          color: #00BFFF;
        }
        .bg-electric-blue {
          background-color: #00BFFF;
        }
        .text-deep-purple {
          color: #6A0DAD;
        }
        .text-immortal-orange {
          color: #ff8c00;
        }
        .text-arcana-pink {
          color: #ff00ff;
        }
        .text-legendary-purple {
          color: #a855f7;
        }
        .shadow-immortal-orange\\/50 {
          box-shadow: 0 10px 40px rgba(255, 140, 0, 0.3);
        }
        .shadow-immortal-orange\\/70:hover {
          box-shadow: 0 10px 50px rgba(255, 140, 0, 0.5);
        }
        .shadow-arcana-pink\\/50 {
          box-shadow: 0 10px 40px rgba(255, 0, 255, 0.3);
        }
        .shadow-arcana-pink\\/70:hover {
          box-shadow: 0 10px 50px rgba(255, 0, 255, 0.5);
        }
        .shadow-legendary-purple\\/50 {
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.3);
        }
        .shadow-legendary-purple\\/70:hover {
          box-shadow: 0 10px 50px rgba(168, 85, 247, 0.5);
        }
        .border-immortal-orange\\/30 {
          border-color: rgba(255, 140, 0, 0.3);
        }
        .border-immortal-orange\\/60:hover {
          border-color: rgba(255, 140, 0, 0.6);
        }
        .border-arcana-pink\\/30 {
          border-color: rgba(255, 0, 255, 0.3);
        }
        .border-arcana-pink\\/60:hover {
          border-color: rgba(255, 0, 255, 0.6);
        }
        .border-legendary-purple\\/30 {
          border-color: rgba(168, 85, 247, 0.3);
        }
        .border-legendary-purple\\/60:hover {
          border-color: rgba(168, 85, 247, 0.6);
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
        }
        .arcana-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(5px);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}


// ============================================
// ITEMS DATA
// ============================================
const items = [
  // ABADDON
  { id: 1, hero: "Abaddon", setName: "Blightfall", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123335/BLIGHTFALL_ewm9by.jpg"] },
  { id: 2, hero: "Abaddon", setName: "Endless Night", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/ENDLESS_NIGHT_kdhnb5.jpg"] },
  { id: 3, hero: "Abaddon", setName: "Phantom Balladeer", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123335/PANTHOM_BALLADEER_gbulwc.jpg"] },
  { id: 4, hero: "Abaddon", setName: "Spectral Shadow", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/SPECTRAL_SHADOW_ffwaqq.jpg"] },
  // ALCHEMIST
  { id: 5, hero: "Alchemist", setName: "Cosmic Concoctioneers", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/COSMIC_CONCOCTIONEERS_yak35n.jpg"] },
  { id: 6, hero: "Alchemist", setName: "Darkbrew's Transgression", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123335/DARKBREWS_TRANSGRESSION_zhdfwz.jpg"] },
  { id: 7, hero: "Alchemist", setName: "Taur Rider", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/TAUR_RIDER_xnndem.jpg"] },
  // ANCIENT APPARITION
  { id: 8, hero: "Ancient Apparition", setName: "Apocalypse Unbound", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123335/APOCALYPSE_UNBOUND_e235ae.jpg"] },
  { id: 9, hero: "Ancient Apparition", setName: "Frozen Nova", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/FROZEN_NOVA_ofmz6k.jpg"] },
  { id: 10, hero: "Ancient Apparition", setName: "Gilded Decay", rarity: "rare" as const, price: 2, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123336/GILDED_DECAY_clhd3y.jpg"] },
  { id: 11, hero: "Ancient Apparition", setName: "Secrets of the Frost Singularity", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/SECRETS_OF_THE_FROST_SINGULARITY_chavpu.jpg"] },
  { id: 12, hero: "Ancient Apparition", setName: "Unchained Entropy", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/UNCHAINED_ENTROPY_xbxqso.jpg"] },
  // ANTI-MAGE
  { id: 13, hero: "Anti-Mage", setName: "Brands of the Reaper", rarity: "mythical" as const, price: 12, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/BRANDS_OF_THE_REAPER_cbjnol.jpg"] },
  { id: 14, hero: "Anti-Mage", setName: "Howls of the Northmarch", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/HOWLS_OF_THE_NORTHMARCH_uxnndm.jpg"] },
  // ANTI-MAGE PERSONA
  { id: 15, hero: "Anti-Mage Persona", setName: "Designs of the Dragon", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/DESIGNS_OF_THE_DRAGON_roonwb.jpg"] },
  { id: 16, hero: "Anti-Mage Persona", setName: "Proselyte of the Sakura Clan", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123337/PROSELYTE_OF_THE_SAKURA_CLAN_fljsny.jpg"] },
  { id: 17, hero: "Anti-Mage Persona", setName: "Spellbreaker's Braid", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123338/SPELLBREAKERS_BRAID_hzwnk7.jpg"] },
  // ARC WARDEN
  { id: 18, hero: "Arc Warden", setName: "Ire of the Ancient Gaoler", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123338/IRE_OF_THE_ANCIENT_GAOLER_itjk89.jpg"] },
  // AXE
  { id: 19, hero: "Axe", setName: "Bootblack Brawler", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123338/BOOTBLACK_BRAWLER_yt8uuo.jpg"] },
  { id: 20, hero: "Axe", setName: "Days of the Demon", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123339/DAYS_OF_THE_DEMON_aezvus.jpg"] },
  { id: 21, hero: "Axe", setName: "The Molten Fist", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123338/THE_MOLTEN_FIST_ekytf9.jpg"] },
  // BATRIDER
  { id: 22, hero: "Batrider", setName: "Charms of the Firefiend", rarity: "rare" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123338/CHARMS_OF_THE_FIREFIEND_aclb6m.jpg"] },
  { id: 23, hero: "Batrider", setName: "Prized Acquisitions", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123339/PRIZED_ACQUISITIONS_scb07r.jpg"] },
  // BLOODSEEKER
  { id: 24, hero: "Bloodseeker", setName: "Fury of the Bloodforge", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123339/FURY_OF_THE_BLOODFORGE_jfjzvj.jpg"] },
  // BOUNTY HUNTER
  { id: 25, hero: "Bounty Hunter", setName: "Heartless Hunt", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123339/HEARTLESS_HUNT_fev62d.jpg"] },
  { id: 26, hero: "Bounty Hunter", setName: "Verminator", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123350/VERMINATOR_kp7j4i.jpg"] },
  // BREWMASTER
  { id: 27, hero: "Brewmaster", setName: "The Wilding Tiger", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/THE_WILDING_TIGER_fw0kpf.jpg"] },
  // BRISTLEBACK
  { id: 28, hero: "Bristleback", setName: "Beast of the Crimson Ring", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123350/BEAST_OF_THE_CRIMSON_RING_clkrfi.jpg"] },
  { id: 29, hero: "Bristleback", setName: "Blastmitt Berserker Bundle", rarity: "immortal" as const, price: 0.70, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123350/BLASTMITT_BERSERKER_BUNDLE_pkqs6k.jpg"] },
  // BROODMOTHER
  { id: 30, hero: "Broodmother", setName: "Automaton Antiquity", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/AUTOMATON_ANTIQUITY_zzkhj7.jpg"] },
  { id: 31, hero: "Broodmother", setName: "Limbs of Lycosidae", rarity: "immortal" as const, price: 0.2, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/LIMBS_OF_LYCOSIDAE_i2aclh.jpg"] },
  { id: 32, hero: "Broodmother", setName: "Volcanic Sanctuary", rarity: "common" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/VOLCANIC_SANCTUARY_ynk030.jpg"] },
  { id: 33, hero: "Broodmother", setName: "Widow of the Undermount Gloom", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/WIDOW_OF_THE_UNDERMOUNT_GLOOM_mwbe1h.jpg"] },
  // CENTAUR WARRUNNER
  { id: 34, hero: "Centaur Warrunner", setName: "Cunning Counterfeit", rarity: "legendary" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/CUNNING_COUNTERFEIT_pihcz4.jpg"] },
  { id: 35, hero: "Centaur Warrunner", setName: "Golden Infernal Cavalcade", rarity: "immortal" as const, price: 0.20, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/GOLDEN_INFERNAL_CAVALCADE_mu5uxu.jpg"] },
  { id: 36, hero: "Centaur Warrunner", setName: "Infernal Cavalcade", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123351/INFERNAL_CAVALCADE_ry1nvs.jpg"] },
  // CHAOS KNIGHT
  { id: 37, hero: "Chaos Knight", setName: "Melange of the Firelord", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123352/MELANGE_OF_THE_FIRELORD_suwjmz.jpg"] },
  { id: 38, hero: "Chaos Knight", setName: "Talons of the Endless Storm", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123352/TALONS_OF_THE_ENDLESS_STORM_cxkttt.jpg"] },
  { id: 39, hero: "Chaos Knight", setName: "Wrath of the Celestial Sentinel", rarity: "mythical" as const, price: 45, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/WRATH_OF_THE_CELESTIAL_SENTINEL_twyotz.jpg"] },
  // CHEN
  { id: 40, hero: "Chen", setName: "Hounds of Obsession", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/HOUNDS_OF_OBSESSION_ut4w73.jpg"] },
  { id: 41, hero: "Chen", setName: "Perils of the Red Banks", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/PERILS_OF_THE_RED_BANKS_b6rmie.jpg"] },
  // CLINKZ
  { id: 42, hero: "Clinkz", setName: "Withering Pain", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/WITHERING_PAIN_xm2sn4.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/WITHERING_PAIN_2_xpcl04.jpg"], },
  // CLOCKWERK
  { id: 43, hero: "Clockwerk", setName: "Apex Automated", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/APEX_AUTOMATED_v7xlra.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123359/APEX_AUTOMATED_2_udf610.jpg"], },
  { id: 44, hero: "Clockwerk", setName: "Directive of the Sunbound", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123362/DIRECTIVE_OF_THE_SUNBOUND_jzaql0.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/DIRECTIVE_OF_THE_SUNBOUND_2_t10b4g.jpg"], },
  { id: 45, hero: "Clockwerk", setName: "Distinguished Forgemaster", rarity: "common" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/DISTINGUISHED_FORGEMASTER_hei1uv.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/DISTINGUISHED_FORGEMASTER_2_nlq0nu.jpg"], },
  { id: 46, hero: "Clockwerk", setName: "Hare of the Cog", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/HARE_OF_THE_COG_cbevzt.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/HARE_OF_THE_COG_2_lp33uz.jpg"], },
  { id: 47, hero: "Clockwerk", setName: "Seadog's Stash", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123360/SEADOGS_STASH_toaenx.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123367/SEADOGS_STASH_2_k35lsc.jpg"], },
  // CRYSTAL MAIDEN PERSONA
  { id: 48, hero: "Crystal Maiden Persona", setName: "Canis Crystallum", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123367/CANIS_CRYSTALLUM_bj0s5t.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123367/CANIS_CRYSTALLUM_2_rqzkd6.jpg"], },
  { id: 49, hero: "Crystal Maiden Persona", setName: "Narwolf Nebula", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123368/NARWOLF_NEBULA_me5eap.jpg"] },
  // DARK SEER
  { id: 50, hero: "Dark Seer", setName: "Insight of Forlorn Precipice", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123368/INSIGHT_OF_FORLORN_PRECIPICE_asqy5n.jpg"] },
  // DARK WILLOW
  { id: 51, hero: "Dark Willow", setName: "Ardalan Arsonist", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123368/ARDALAN_ARSONIST_geo0pw.jpg"] },
  { id: 52, hero: "Dark Willow", setName: "Twilight Hex", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123368/TWILIGHT_HEX_xi8tcj.jpg"] },
  // DAWNBREAKER
  { id: 53, hero: "Dawnbreaker", setName: "Astral Herald", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123369/ASTRAL_HERALD_xnj8oq.jpg"] },
  { id: 54, hero: "Dawnbreaker", setName: "Perception of the First Light", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123369/PERCEPTION_OF_THE_FIRST_LIGHT_xpt1ic.jpg"] },
  { id: 55, hero: "Dawnbreaker", setName: "Red Dawn", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123374/RED_DAWN_w5ptmy.jpg"] },
  { id: 56, hero: "Dawnbreaker", setName: "Starforge Reformer", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/STARFORGE_REFORMER_gb18hy.jpg"] },
  { id: 57, hero: "Dawnbreaker", setName: "Starlorn Adjudicator", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/STARLORN_ADJUDICATOR_sdkiqz.jpg"] },
  // DAZZLE
  { id: 58, hero: "Dazzle", setName: "Dezun Viper", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/DEZUN_VIPER_kqhw7t.jpg"] },
  { id: 59, hero: "Dazzle", setName: "Needlepoint Necromancer", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/NEEDLEPOINT_NECROMANCER_tbqdcj.jpg"] },
  // DEATH PROPHET
  { id: 60, hero: "Death Prophet", setName: "Darkwood Eulogy", rarity: "legendary" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/DARKWOOD_EULOGY_pioyrq.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/DARKWOOD_EULOGY_2_fsl0mt.jpg"], },
  { id: 61, hero: "Death Prophet", setName: "Oaths of the Beloved", rarity: "legendary" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/OATHS_OF_THE_BELOVED_o7xh0r.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123375/OATHS_OF_THE_BELOVED_2_llsqr8.jpg"], },
  // DISRUPTOR
  { id: 62, hero: "Disruptor", setName: "Fury of the Righteous Storm", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123376/FURY_OF_THE_RIGHTEOUS_STORM_ry0drn.jpg"] },
  { id: 63, hero: "Disruptor", setName: "Tremors of the Tandem Storm", rarity: "immortal" as const, price: 0.20, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123376/TREMORS_OF_THE_TANDEM_STORM_zgarpl.jpg"] },
  // DOOM
  { id: 64, hero: "Doom", setName: "Dawn of a Darkness Foretold", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123376/DAWN_OF_A_DARKNESS_FORETOLD_emcix4.jpg"] },
  { id: 65, hero: "Doom", setName: "Heat of the Sixth Hell", rarity: "common" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123376/HEAT_OF_THE_SIXTH_HELL_qgkder.jpg"] },
  { id: 66, hero: "Doom", setName: "Igneous Infernal", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/IGNEOUS_INFERNAL_en05wk.jpg"] },
  { id: 67, hero: "Doom", setName: "Litany of the Damned", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/LINATY_OF_THE_DAMNED_conwn8.jpg"] },
  { id: 68, hero: "Doom", setName: "Wrath of the Fallen", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/WRATH_OF_THE_FALLEN_tqfwnw.jpg"] },
  // DRAGON KNIGHT
  { id: 69, hero: "Dragon Knight", setName: "Draconic Divide", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/DRACONIC_DIVIDE_p0fmin.jpg"] },
  { id: 70, hero: "Dragon Knight", setName: "Silverwurm Sacrifice", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/SILVERWURM_SACRIFICE_pqgj8p.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123384/SILVERWURM_SACRIFICE_2_gv84ew.jpg"], },
  // DROW RANGER
  { id: 71, hero: "Drow Ranger", setName: "Sight of the Kha-Ren Faithful", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123385/SIGHT_OF_THE_KHA-REN_FAITHFUL_of2yt0.jpg"] },
  { id: 72, hero: "Drow Ranger", setName: "Stranger in the Wandering Isles", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123385/STARNGER_IN_THE_WANDERING_ISLES_fkkloe.jpg"] },
  // EARTHSHAKER
  { id: 73, hero: "Earthshaker", setName: "Pallbringer", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123385/PALLBRINGER_mmb1pt.jpg"] },
  // EMBER SPIRIT
  { id: 74, hero: "Ember Spirit", setName: "Master of the Searing Path", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123385/MASTER_OF_THE_SEARING_PATH_stiupv.jpg"] },
  // ENCHANTRESS
  { id: 75, hero: "Enchantress", setName: "Caerulean Star", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123386/CAERULEAN_STAR_fwuvsh.jpg"] },
  { id: 76, hero: "Enchantress", setName: "Flutterstep", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123386/FLUTTERSTEP_t2nbqg.jpg"] },
  { id: 77, hero: "Enchantress", setName: "Songs of Starfall Glen", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123387/SONGS_OF_STARFALL_GLEN_fdibwz.jpg"] },
  // ENIGMA
  { id: 78, hero: "Enigma", setName: "Angel of the Abyss", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123386/ANGEL_OF_THE_ABYSS_l0eit0.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123386/ANGEL_OF_THE_ABYSS_2_vqfbvc.jpg"], },
  { id: 79, hero: "Enigma", setName: "Astral Terminus", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123386/ASTRAL_TERMINUS_yuaaf8.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123387/ASTRAL_TERMINUS_2_uijzxm.jpg"], },
  { id: 80, hero: "Enigma", setName: "Evolution of the Infinite", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123391/EVOLUTION_OF_THE_INFINITE_qtf0tv.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/EVOLUTION_OF_THE_INFINITE_2_zx40on.jpg"], },
  { id: 81, hero: "Enigma", setName: "Graviton Blackguard", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/GRAVITON_BLACKGUARD_dqwnox.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/GRAVITON_BLACKGUARD_2_xn2hmk.jpg"], },
  // FACELESS VOID
  { id: 82, hero: "Faceless Void", setName: "Chines of the Inquisitor", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/CHINES_OF_THE_INQUISITOR_brj6na.jpg"] },
  { id: 83, hero: "Faceless Void", setName: "Chrononaut Continuum", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/CHRONONAUT_CONTINUUM_ru1ozm.jpg"] },
  { id: 84, hero: "Faceless Void", setName: "Tendrils of the Timeless", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123399/TENDRILS_OF_THE_TIMELESS_ecrjut.jpg"] },
  // GRIMSTROKE
  { id: 85, hero: "Grimstroke", setName: "Elegy of the Reaper", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/ELEGY_OF_THE_REAPER_mxupx8.jpg"] },
  { id: 86, hero: "Grimstroke", setName: "Herald of the Ember Eye", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/HERALD_OF_THE_EMBER_EYE_fq9rnb.jpg"] },
  { id: 87, hero: "Grimstroke", setName: "The Chained Scribe", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/THE_CHAINED_SCRIBE_j4myma.jpg"] },
  // GYROCOPTER
  { id: 88, hero: "Gyrocopter", setName: "Arcane Inverter", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/ARCANE_INVERTER_uodsfp.jpg"] },
  // HOODWINK
  { id: 89, hero: "Hoodwink", setName: "Bilge Rat Buccaneer", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/BILGE_RAT_BUCCANEER_xxzizd.jpg"] },
  { id: 90, hero: "Hoodwink", setName: "Shadowleaf Insurgent", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/SHADOWLEAF_INSURGENT_glruvv.jpg"] },
  { id: 91, hero: "Hoodwink", setName: "The Strings of Suradan Bundle", rarity: "immortal" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123400/THE_STRINGS_OF_SURADAN_BUNDLE_uhm3i6.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/THE_STRINGS_OF_SURADAN_BUNDLE_2_ch9x0j.jpg"], },
  { id: 92, hero: "Hoodwink", setName: "Tomokan Footsoldier", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/TOMOKAN_FOOTSOLDIER_l402uc.jpg"] },
  // HUSKAR
  { id: 93, hero: "Huskar", setName: "Bleeding Edge", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/BLEEDING_EDGE_c25ajn.jpg"] },
  { id: 94, hero: "Huskar", setName: "Draca Mane", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/DRACA_MANE_vze4ax.jpg"] },
  { id: 95, hero: "Huskar", setName: "Flashpoint Proselyte", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/FLASHPOINT_PROSELYTE_cureq9.jpg"] },
  { id: 96, hero: "Huskar", setName: "Golden Draca Mane", rarity: "immortal" as const, price: 0.20, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123401/GOLDEN_DRACA_MANE_yn0hwc.jpg"] },
  { id: 97, hero: "Huskar", setName: "Hides of Hostility", rarity: "common" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123415/HIDES_OF_HOSTILITY_cgsgf8.jpg"] },
  { id: 98, hero: "Huskar", setName: "Sacred Chamber Guardian", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123416/SACRED_CHAMBER_GUARDIAN_klxwle.jpg"] },
  { id: 99, hero: "Huskar", setName: "The Burning Sentinel", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123415/THE_BURNING_SENTINEL_etyaah.jpg"] },
  // INVOKER PERSONA
  { id: 100, hero: "Invoker Persona", setName: "Angel of Vex", rarity: "mythical" as const, price: 15, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123415/ANGEL_OF_VEX_dfjwoc.jpg"] },
  { id: 101, hero: "Invoker Persona", setName: "Magus Mimicry", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123415/MAGUS_MIMICRY_t4hosy.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123415/MAGUS_MIMICRY_2_nxwrto.jpg"], },
  { id: 102, hero: "Invoker Persona", setName: "Urchin of Kazim", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123416/URCHIN_OF_KAZIM_oajxel.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123416/URCHIN_OF_KAZIM_2_hjmfnx.jpg"], },
  // JAKIRO
  { id: 103, hero: "Jakiro", setName: "Ancestral Heritage", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123417/ANCESTRAL_HERITAGE_tnudn0.jpg"] },
  { id: 104, hero: "Jakiro", setName: "Fissured Flight", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123417/FISSURED_FLIGHT_jx１g３i.jpg"] },
  // JUGGERNAUT
  { id: 105, hero: "Juggernaut", setName: "Ancient Exile", rarity: "mythical" as const, price: 15, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123418/ANCIENT_EXILE_q4wtpl.jpg"] },
  { id: 106, hero: "Juggernaut", setName: "Lineage of the Stormlords", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123417/LINAGE_OF_THE_STORMLORDS_wrrvmc.jpg"] },
  // KEEPER OF THE LIGHT
  { id: 107, hero: "Keeper of the Light", setName: "The King of Thieves", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123417/THE_KING_OF_THIEVES_utlv0m.jpg"] },
  // KUNKKA
  { id: 108, hero: "Kunkka", setName: "Sea Spirit", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123418/SEA_SPIRIT_xj1oug.jpg"] },
  // LEGION COMMANDER
  { id: 109, hero: "Legion Commander", setName: "Bird of Prey", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123418/BIRD_OF_PREY_zrouom.jpg"] },
  { id: 110, hero: "Legion Commander", setName: "Triumph of the Imperatrix", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123418/TRIUMPH_OF_THE_IMPERATRIX_vjzfwg.jpg"] },
  // LIFESTEALER
  { id: 111, hero: "Lifestealer", setName: "Obsidian Atrocity", rarity: "common" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/OBSIDIAN_ATROCITY_blh8ah.jpg"] },
  // LINA
  { id: 112, hero: "Lina", setName: "Dead Heat", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/DEAD_HEAT_l0icuu.jpg"] },
  { id: 113, hero: "Lina", setName: "Flame of Origin", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/FLAME_OF_ORIGIN_snrrrq.jpg"] },
  { id: 114, hero: "Lina", setName: "Glory of the Elderflame", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/GLORY_OF_THE_ELDERFLAME_ewaub6.jpg"] },
  // LION
  { id: 115, hero: "Lion", setName: "Caprine Chimera", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/CAPRINE_CHIMERA_ey6qbc.jpg"] },
  { id: 116, hero: "Lion", setName: "Nefarious Fixations", rarity: "common" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123430/NEFARIOUS_FIXATIONS_pnxy5i.jpg"] },
  // LUNA
  { id: 117, hero: "Luna", setName: "Bloodmoon Stalker", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/BLOODMOON_STALKER_ssvxab.jpg"] },
  { id: 118, hero: "Luna", setName: "Seeker of the Crescent Wheel", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/SEEKER_OF_THE_CRESCENT_WHEEL_pemhcy.jpg"] },
  // LYCAN
  { id: 119, hero: "Lycan", setName: "Creed of the Skullhound", rarity: "mythical" as const, price: 12, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/CREED_OF_THE_SKULLHOUND_uag7r2.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/CREED_OF_THE_SKULLHOUND_2_jx2j0j.jpg"], },
  // MARCI
  { id: 120, hero: "Marci", setName: "Brightfist", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/BRIGHTFIST_koqcfk.jpg"] },
  { id: 121, hero: "Marci", setName: "Cosmic Cartographer", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/COSMIC_CARTOGRAPHER_xzyxzx.jpg"] },
  { id: 122, hero: "Marci", setName: "Faithful Fortune", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123432/FAITHFUL_FORTUNE_lefh5f.jpg"] },
  { id: 123, hero: "Marci", setName: "Little Red", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123431/LITTLE_RED_q2orsf.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123444/LITTLE_RED_2_z0lrqb.jpg"], },
  { id: 124, hero: "Marci", setName: "School of the Solar Fang", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123444/SCHOOL_OF_THE_SOLAR_FANG_lj2xax.jpg"] },
  // MARS
  { id: 125, hero: "Mars", setName: "Forgotten Fate", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123444/FORGOTTEN_FATE_xtrul7.jpg"] },
  { id: 126, hero: "Mars", setName: "Molten Bore", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123444/MOLTEN_BORE_idmtou.jpg"] },
  // MEDUSA
  { id: 127, hero: "Medusa", setName: "Death Adder", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/DEATH_ADDER_m6xn6j.jpg"] },
  { id: 128, hero: "Medusa", setName: "Jewels of Anamnessa", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/JEWELS_OF_ANAMNESSA_ee1fuo.jpg"] },
  // MEEPO
  { id: 129, hero: "Meepo", setName: "Everglyph Goggles", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123444/EVERGLYPH_GOGGLES_bphxkk.jpg"] },
  { id: 130, hero: "Meepo", setName: "Lotus of the Mountain Bear Clan", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/LOTUS_OF_THE_MOUNTAIN_BEAR_CLAN_otp1si.jpg"] },
  // MIRANA
  { id: 131, hero: "Mirana", setName: "Photax Fluttercat", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/PHOTAX_FLUTTERCAT_hzs3jj.jpg"] },
  // MONKEY KING
  { id: 132, hero: "Monkey King", setName: "Champion of the Fire Lotus", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/CHAMPION_OF_THE_FIRE_LOTUS_quunux.jpg"] },
  { id: 133, hero: "Monkey King", setName: "Tangled Tropics", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123445/TANGLED_TROPICS_cmwgsz.jpg"] },
  // MORPHLING
  { id: 134, hero: "Morphling", setName: "Fluid Frenzy", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123446/FLUID_FRENZY_rc7qxh.jpg"] },
  // MUERTA
  { id: 135, hero: "Muerta", setName: "Blackwing Bandolera", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123446/BLACKWING_BANDOLERA_uny0wq.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123446/BLACKWING_BANDOLERA_2_tbkfvs.jpg"], },
  { id: 136, hero: "Muerta", setName: "Mariposa Mori", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123447/MARIPOSA_MORI_mivh8s.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/MARIPOSA_MORI_2_wbns70.jpg"], },
  { id: 137, hero: "Muerta", setName: "Rose of Moira", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/ROSE_OF_MOIRA_x0cnwg.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/ROSE_OF_MOIRA_2_lx69so.jpg"], },
  // NAGA SIREN
  { id: 138, hero: "Naga Siren", setName: "Martyrdom of the Brineborn", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/MARTYRDOM_OF_THE_BRINEBORN_ect2qv.jpg"] },
  // NATURE'S PROPHET
  { id: 139, hero: "Nature's Prophet", setName: "Desert Bloom", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/DESERT_BLOOM_v7sowd.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123460/DESERT_BLOOM_2_jard7m.jpg"], },
  { id: 140, hero: "Nature's Prophet", setName: "Signs of the Allfather", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123461/SIGNS_OF_THE_ALLFATHER_yvogab.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123461/SIGNS_OF_THE_ALLFATHER_2_mq5urk.jpg"], },
  // NECROPHOS
  { id: 141, hero: "Necrophos", setName: "Golden Sullen Sanctum", rarity: "immortal" as const, price: 1.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123461/GOLDEN_SULLEN_SANCTUM_wzxy5f.jpg"] },
  { id: 142, hero: "Necrophos", setName: "Rot-Iron Ripper", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123461/ROT-IRON_RIPPER_e4ktud.jpg"] },
  { id: 143, hero: "Necrophos", setName: "Sullen Sanctum", rarity: "immortal" as const, price: 0.20, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123461/SULLEN_SANCTUM_rywxaf.jpg"] },
  // NIGHT STALKER
  { id: 144, hero: "Night Stalker", setName: "Dread of Night", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123462/DREAD_OF_NIGHT_zdfnz3.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/DREAD_OF_NIGHT_2_klp6xs.jpg"], },
  { id: 145, hero: "Night Stalker", setName: "Feasts of Forever", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123473/FEASTS_OF_FOREVER_gixeqd.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/FEASTS_OF_FOREVER_2_lddptw.jpg"], },
  { id: 146, hero: "Night Stalker", setName: "Origin of the Dark Oath", rarity: "mythical" as const, price: 15, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/ORIGIN_OF_THE_DARK_OATH_xbluxv.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/ORIGIN_OF_THE_DARK_OATH_2_ugcsnj.jpg"], },
  { id: 147, hero: "Night Stalker", setName: "Twilight Legions", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/TWILIGHT_LEGIONS_acmoer.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/TWILIGHT_LEGIONS_2_fkyiaa.jpg"], },
  // NYX ASSASSIN
  { id: 148, hero: "Nyx Assassin", setName: "Mecha Nyx", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123474/MECHA_NYX_qa47g6.jpg"] },
  // OGRE MAGI
  { id: 149, hero: "Ogre Magi", setName: "Freeboot Fortunes", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/FREEBOOT_FORTUNES_lkk9na.jpg"] },
  { id: 150, hero: "Ogre Magi", setName: "Pyrexae Polymorph Perfected", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/PYREXAE_POLYMORPH_PERFECTED_yllrp4.jpg"] },
  // ORACLE
  { id: 151, hero: "Oracle", setName: "Foreseen Horizons", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/FORESEEN_HORIZONS_g2bag8.jpg"] },
  { id: 152, hero: "Oracle", setName: "Silence of the Starweaver", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/SILENCE_OF_THE_STARWEAVER_npm493.jpg"] },
  { id: 153, hero: "Oracle", setName: "Transcendent Path", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/TRANSCENDENT_PATH_ledhui.jpg"] },
  // PANGOLIER
  { id: 154, hero: "Pangolier", setName: "Tales of the Windward Rogue", rarity: "mythical" as const, price: 15, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/TALES_OF_THE_WINDWARD_ROGUE_vqdgq2.jpg"] },
  // PHANTOM ASSASSIN
  { id: 155, hero: "Phantom Assassin", setName: "Darkfeather Factioneer", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123475/DARKFEATHER_FACTIONEER_l1hjxv.jpg"] },
  { id: 156, hero: "Phantom Assassin", setName: "Onikage Disciple", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123476/ONIKAGE_DISCIPLE_syyrix.jpg"] },
  // PHANTOM ASSASSIN PERSONA
  { id: 157, hero: "Phantom Assassin Persona", setName: "Phantom's Facade", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/PHANTOMS_FACADE_lwzhdi.jpg"] },
  { id: 158, hero: "Phantom Assassin Persona", setName: "Reaper of the Waning Veil", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/REAPER_OF_THE_WANING_VEIL_yd1t8g.jpg"] },
  { id: 159, hero: "Phantom Assassin Persona", setName: "Shadow Stalker", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/SHADOW_STALKER_zxpstr.jpg"] },
  // PHANTOM LANCER
  { id: 160, hero: "Phantom Lancer", setName: "Scales of the Shadow Walker", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/SCALES_OF_THE_SHADOW_WALKER_bewees.jpg"] },
  // PHOENIX
  { id: 161, hero: "Phoenix", setName: "Blaze of Oblivion", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/BLAZE_OF_OBLIVION_mexitp.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/BLAZE_OF_OBLIVION_2_y3iozt.jpg"], },
  { id: 162, hero: "Phoenix", setName: "Crimson Dawn", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123493/CRIMSON_DAWN_dtwwqj.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123494/CRIMSON_DAWN_2_y7hz4h.jpg"], },
  { id: 163, hero: "Phoenix", setName: "Star Sage", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123494/STAR_SAGE_pdzdsa.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123494/STAR_SAGE_2_jrmigq.jpg"], },
  // PRIMAL BEAST
  { id: 164, hero: "Primal Beast", setName: "Primeval Abomination", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123495/PRIMEVAL_ABOMINATION_g0lfjx.jpg"] },
  { id: 165, hero: "Primal Beast", setName: "Svarog the Infernal", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123495/SVAROG_THE_INFERNAL_jbmh0p.jpg"] },
  // PUDGE
  { id: 166, hero: "Pudge", setName: "Cursed Cryptbreaker", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/CURSED_CRYPTBREAKER_lmj432.jpg"] },
  { id: 167, hero: "Pudge", setName: "Dapper Disguise", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123508/DAPPER_DISGUISE_ohgmpk.jpg"] },
  { id: 168, hero: "Pudge", setName: "Mindless Slaughter", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123508/MINDLESS_SLAUGHTER_fkmzsm.jpg"] },
  { id: 169, hero: "Pudge", setName: "Rotzo the Clown", rarity: "immortal" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123508/ROTZO_THE_CLOWN_uaonjq.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/ROTZO_THE_CLOWN_2_rgyogi.jpg"], },
  // PUDGE PERSONA
  { id: 170, hero: "Pudge Persona", setName: "Velveteen Vanquisher", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/VELVETEEN_VANQUISHER_pnwcwx.jpg"] },
  // QUEEN OF PAIN
  { id: 171, hero: "Queen of Pain", setName: "Exquisite Agonies", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/EXQUISITE_AGONIES_catgsv.jpg"] },
  // RAZOR
  { id: 172, hero: "Razor", setName: "Heinous Exultation", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/HEINOUS_EXULTATION_tkjbym.jpg"] },
  { id: 173, hero: "Razor", setName: "Test of the Basilisk Lord", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/TEST_OF_THE_BASILISK_LORD_zdrctt.jpg"] },
  // RIKI
  { id: 174, hero: "Riki", setName: "Scarlet Subversion", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123509/SCARLET_SUBVERSION_ejhji6.jpg"] },
  // RUBICK
  { id: 175, hero: "Rubick", setName: "Carousal of the Mystic Masquerade", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123510/CAROUSAL_OF_THE_MYSTIC_MASQUERADE_yxukf9.jpg"] },
  { id: 176, hero: "Rubick", setName: "March of the Crackerjack Mage", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123510/MARCH_OF_THE_CRACKERJACK_MAGE_vxlq4i.jpg"] },
  // SHADOW DEMON
  { id: 177, hero: "Shadow Demon", setName: "Crown of Calaphas", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123510/CROWN_OF_CALAPHAS_uzrizj.jpg"] },
  { id: 178, hero: "Shadow Demon", setName: "Vile Vessel", rarity: "immortal" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123512/VILE_VESSEL_ifvcm8.jpg"] },
  // SHADOW FIEND
  { id: 179, hero: "Shadow Fiend", setName: "Souls Tyrant", rarity: "mythical" as const, price: 18, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123527/SOULS_TYRANT_n6wtj5.jpg"] },
  // SHADOW SHAMAN
  { id: 180, hero: "Shadow Shaman", setName: "Red Sands Marauder", rarity: "mythical" as const, price: 9, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123528/RED_SANDS_MARAUDER_she7s9.jpg"] },
  // SILENCER
  { id: 181, hero: "Silencer", setName: "Grand Suppressor", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123528/GRAND_SUPPRESSOR_ch6ejv.jpg"] },
  { id: 182, hero: "Silencer", setName: "Silent Slayer", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/SILENT_SLAYER_zbudtf.jpg"] },
  { id: 183, hero: "Silencer", setName: "Worship of the Whispered Wing", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/WORSHIP_OF_THE_WHISPERED_WING_m1rzh4.jpg"] },
  // SKYWRATH MAGE
  { id: 184, hero: "Skywrath Mage", setName: "Eyriebound Imperator", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123528/EYRIEBOUND_IMPERATOR_dvxe2x.jpg"] },
  { id: 185, hero: "Skywrath Mage", setName: "Secrets of the Celestial", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123528/SECRETS_OF_THE_CELESTIAL_hpaid3.jpg"] },
  // SLARK
  { id: 186, hero: "Slark", setName: "Angler in the Abyss", rarity: "mythical" as const, price: 2, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123528/ANGLER_IN_THE_ABYSS_mkqm6d.jpg"] },
  // SNAPFIRE
  { id: 187, hero: "Snapfire", setName: "Ardalan Arms Race", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123529/ARDALAN_ARMS_RACE_hmf97a.jpg"] },
  { id: 188, hero: "Snapfire", setName: "Shellshock Saturnalia", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123529/SHELLSHOCK_SATURNALIA_kbtnse.jpg"] },
  { id: 189, hero: "Snapfire", setName: "Snailfire", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123529/SNAILFIRE_m3ifni.jpg"] },
  { id: 190, hero: "Snapfire", setName: "Wasteland Rattler", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/WATELAND_RATTLER_qng4hx.jpg"] },
  { id: 191, hero: "Snapfire", setName: "Whippersnapper", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/WHIPPERSNAPPER_n4xuck.jpg"] },
  // SNIPER
  { id: 192, hero: "Sniper", setName: "Blacksail Cannoneer", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/BLACKSAIL_CANNONEER_vhovky.jpg"] },
  // SPECTRE
  { id: 193, hero: "Spectre", setName: "Crescent Huntress", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/CRESCENT_HUNTRESS_jeigmj.jpg"] },
  { id: 194, hero: "Spectre", setName: "Spoils of the Shadowveil", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123530/SPOILS_OF_THE_SHADOWVEIL_b9iwsj.jpg"] },
  // SPIRIT BREAKER
  { id: 195, hero: "Spirit Breaker", setName: "Barathrums Fury", rarity: "common" as const, price: 2, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123551/BARATHRUMS_FURY_ku3b1t.jpg"] },
  { id: 196, hero: "Spirit Breaker", setName: "Crystal Colossus", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123552/CRYSTAL_COLOSSUS_szuclg.jpg"] },
  { id: 197, hero: "Spirit Breaker", setName: "Taurhorn Terror", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123554/TAURHORN_TERROR_xxzrro.jpg"] },
  { id: 198, hero: "Spirit Breaker", setName: "Taurid Twilight", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123552/TAURID_TWILIGHT_mazehk.jpg"] },
  // STORM SPIRIT
  { id: 199, hero: "Storm Spirit", setName: "Beast of Thunder", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123552/BEAST_OF_THUNDER_zcblkk.jpg"] },
  // SVEN
  { id: 200, hero: "Sven", setName: "Astral Schism", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123552/ASTRAL_SCHISM_tosimr.jpg"] },
  { id: 201, hero: "Sven", setName: "Indomitable Legacy", rarity: "mythical" as const, price: 80, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/INDOMITABLE_LEGACY_hsvc6b.jpg"] },
  { id: 202, hero: "Sven", setName: "Watcher on the Northern Shore", rarity: "rare" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/WATCHER_ON_THE_NORTHERN_SHORE_j05w9v.jpg"] },
  // TECHIES
  { id: 203, hero: "Techies", setName: "War Rig Eradicators", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/WAR_RIG_ERADICATORS_vtvke8.jpg"] },
  // TEMPLAR ASSASSIN
  { id: 204, hero: "Templar Assassin", setName: "Darkblade Adept", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/DARKBLADE_ADEPT_e2j5db.jpg"] },
  { id: 205, hero: "Templar Assassin", setName: "Faction of the Feather", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/FACTION_OF_THE_FEATHER_ihhpca.jpg"] },
  { id: 206, hero: "Templar Assassin", setName: "Golden Seclusions of the Void", rarity: "immortal" as const, price: 0.30, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123554/GOLDEN_SECLUSIONS_OF_THE_VOID_pgd2st.jpg"] },
  { id: 207, hero: "Templar Assassin", setName: "Seclusions of the Void", rarity: "immortal" as const, price: 0.10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123553/SECLUSIONS_OF_THE_VOID_iolibs.jpg"] },
  { id: 208, hero: "Templar Assassin", setName: "Steward of the Forbidden Chamber", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123554/STEWARD_OF_THE_FORBIDDEN_CHAMBER_kty9a4.jpg"] },
  // TERRORBLADE
  { id: 209, hero: "Terrorblade", setName: "Forgotten Station", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123554/FORGOTTEN_STATION_rgznbf.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/FORGOTTEN_STATION_2_wobuai.jpg"], },
  // TIDEHUNTER
  { id: 210, hero: "Tidehunter", setName: "Horror from the Deep", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/HORROR_FROM_THE_DEEP_rpuexm.jpg"] },
  // TIMBERSAW
  { id: 211, hero: "Timbersaw", setName: "Clearcut Cavalier", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/CLEARCUT_CAVALIER_bfdijg.jpg"] },
  // TINKER
  { id: 212, hero: "Tinker", setName: "Interstellar Astrarium", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/INTERESTELLAR_ASTRARIUM_p0eoqs.jpg"] },
  // TINY
  { id: 213, hero: "Tiny", setName: "Ancient Inheritance", rarity: "mythical" as const, price: 12, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/ANCIENT_INHERITANCE_jnq0zq.jpg"] },
  { id: 214, hero: "Tiny", setName: "Anthozoan Assault", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123575/ANTHOZOAN_ASSAULT_wfgk92.jpg"] },
  { id: 215, hero: "Tiny", setName: "Colossal Terrorpin", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/COLOSSAL_TERRORPIN_k5prp1.jpg"] },
  // TREANT PROTECTOR
  { id: 216, hero: "Treant Protector", setName: "Grudges of the Gallows Tree", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/GRUDES_OF_THE_GALLOWS_TREE_pgmjsw.jpg"] },
  // TUSK
  { id: 217, hero: "Tusk", setName: "Distinguished Expeditionary", rarity: "mythical" as const, price: 8, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/DISTINGUISHED_EXPEDITIONARY_zbbbun.jpg"] },
  // UNDYING
  { id: 218, hero: "Undying", setName: "Dirge Amplifier", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/DIRGE_AMPLIFIER_v4vsoo.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/DIRGE_AMPLIFIER_2_vnit2o.jpg"], },
  { id: 219, hero: "Undying", setName: "Undying Love", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/UNDYING_LOVE_jw24xz.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123576/UNDYING_LOVE_2_oktvki.jpg"], },
  // URSA
  { id: 220, hero: "Ursa", setName: "Bloodzo the Bear", rarity: "mythical" as const, price: 3, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123577/BLOODZO_THE_BEAR_li9ivo.jpg"] },
  { id: 221, hero: "Ursa", setName: "Trophies of the Hallowed Hunt", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123577/TROPHIES_OF_THE_HALLOWED_HUNT_vpoo5b.jpg"] },
  // VENGEFUL SPIRIT
  { id: 222, hero: "Vengeful Spirit", setName: "Acrimonies of Obsession", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123577/ACRIMONIES_OF_OBSESSION_rdwnrl.jpg"] },
  // VENOMANCER
  { id: 223, hero: "Venomancer", setName: "Mechamancer", rarity: "mythical" as const, price: 7, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123577/MECHAMANCER_g2cbtt.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123577/MECHAMANCER_2_zs4y84.jpg"], },
  { id: 224, hero: "Venomancer", setName: "Molokau Stalker", rarity: "mythical" as const, price: 2, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123596/MOLOKAU_STALKER_rzr0y1.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123604/MOLOKAU_STALKER_2_xhshum.jpg"], },
  { id: 225, hero: "Venomancer", setName: "The Orb of Aktok", rarity: "immortal" as const, price: 0.1, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123605/THE_ORB_OF_AKTOK_fnxlrh.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123605/THE_ORB_OF_AKTOK_2_mcrfyb.jpg"], },
  // VOID SPIRIT
  { id: 226, hero: "Void Spirit", setName: "Sublime Equilibrium", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123606/SUBLIME_EQUILIBRIUM_izuabc.jpg"] },
  { id: 227, hero: "Void Spirit", setName: "Umbral Expanse", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123607/UMBRAL_EXPANSE_vdgjgv.jpg"] },
  // WARLOCK
  { id: 228, hero: "Warlock", setName: "Beholden of the Banished Ones", rarity: "mythical" as const, price: 10, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123607/BEHOLDEN_OF_THE_BANISHED_ONES_hvyb9j.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123616/BEHOLDEN_OF_THE_BANISHED_ONES_2_vvcy1r.jpg"], },
  { id: 229, hero: "Warlock", setName: "Seam Ripper Snuggle Time", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/SEAM_RIPPER_SNUGGLE_TIME_pviuiq.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/SEAM_RIPPER_SNUGGLE_TIME_2_xwhd49.jpg"], },
  { id: 230, hero: "Warlock", setName: "Tribal Pathways", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/TRIBAL_PATHWAYS_xvzgjo.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/TRIBAL_PATHWAYS_2_pgqcox.jpg"], },
  // WINTER WYVERN
  { id: 231, hero: "Winter Wyvern", setName: "Arctic Recluse", rarity: "rare" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/ARCTIC_RECLUSE_e7nca4.jpg"] },
  { id: 232, hero: "Winter Wyvern", setName: "Defender of the Brumal Crest", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/DEFENDER_OF_THE_BRUMAL_CREST_nuxm3s.jpg"] },
  // WITCH DOCTOR
  { id: 233, hero: "Witch Doctor", setName: "Deathstitch Shaman", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/DEATHSTITCH_SHAMAN_as66w8.jpg", "https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123618/DEATHSTITCH_SHAMAN_2_swsw0u.jpg"], },
  // WRAITH KING
  { id: 234, hero: "Wraith King", setName: "Grim Destiny", rarity: "mythical" as const, price: 6, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123617/GRIM_DESTINY_ywtenp.jpg"] },
  { id: 235, hero: "Wraith King", setName: "Tyrant of the Veil", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123618/TYRANT_OF_THE_VEIL_wifinu.jpg"] },
  // ZEUS
  { id: 236, hero: "Zeus", setName: "Fury of the Thunderhawk", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123618/FURY_OF_THE_THUNDERHAWK_huefmi.jpg"] },
  { id: 237, hero: "Zeus", setName: "Photonic Father", rarity: "mythical" as const, price: 4, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123619/PHOTONIC_FATHER_vc7m1i.jpg"] },
  { id: 238, hero: "Zeus", setName: "Thundervolt", rarity: "mythical" as const, price: 5, stock: 1, image: ["https://res.cloudinary.com/dxte0oxyq/image/upload/v1774123640/THUNDERVOLT_elaiwr.jpg"] },
];