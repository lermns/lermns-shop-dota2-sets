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
    hero: {
      tagline: "Sets exclusivos de Dota 2",
      subtitle: "Directamente desde mi inventario",
      tiktok: "+120K vistas en TikTok",
      cta: "Ver Sets",
    },
    items: {
      contactToBuy: "Contactar para Comprar",
      soldOut: "AGOTADO",
      steamGift: "Steam Gift / Regalo Steam",
    },
    howToBuy: {
      title: "¿Cómo Comprar?",
      step1Title: "Contacta",
      step1Desc: "Escríbeme por Telegram @lermns o Steam",
      step2Title: "Verifica",
      step2Desc: "Acordamos precio y verificas el item",
      step3Title: "Recibe",
      step3Desc: "Te envío la oferta de intercambio en Steam",
      socialProof: "+120K vistas en TikTok",
    },
    footer: {
      disclaimer: "Todos los items son artículos legítimos del inventario de Steam",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
    },
  },
  en: {
    nav: {
      home: "Home",
      sets: "Sets",
      contact: "Contact",
    },
    hero: {
      tagline: "Exclusive Dota 2 Sets",
      subtitle: "Straight from my inventory",
      tiktok: "+120K views on TikTok",
      cta: "View Sets",
    },
    items: {
      contactToBuy: "Contact to Buy",
      soldOut: "SOLD OUT",
      steamGift: "Steam Gift",
    },
    howToBuy: {
      title: "How to Buy?",
      step1Title: "Contact",
      step1Desc: "Message me on Telegram @lermns or Steam",
      step2Title: "Verify",
      step2Desc: "We agree on price and you verify the item",
      step3Title: "Receive",
      step3Desc: "I send you the Steam trade offer",
      socialProof: "+120K views on TikTok",
    },
    footer: {
      disclaimer: "All items are legitimate Steam inventory items",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      sets: "Сеты",
      contact: "Контакт",
    },
    hero: {
      tagline: "Эксклюзивные сеты Dota 2",
      subtitle: "Прямо из моего инвентаря",
      tiktok: "+120K просмотров в TikTok",
      cta: "Смотреть Сеты",
    },
    items: {
      contactToBuy: "Связаться для покупки",
      soldOut: "ПРОДАНО",
      steamGift: "Steam Подарок",
    },
    howToBuy: {
      title: "Как Купить?",
      step1Title: "Напиши",
      step1Desc: "Напиши мне в Telegram @lermns или Steam",
      step2Title: "Проверь",
      step2Desc: "Согласуем цену и проверишь предмет",
      step3Title: "Получи",
      step3Desc: "Отправлю тебе предложение обмена в Steam",
      socialProof: "+120K просмотров в TikTok",
    },
    footer: {
      disclaimer: "Все предметы являются легитимными предметами инвентаря Steam",
    },
    rarity: {
      immortal: "Immortal",
      arcana: "Arcana",
      legendary: "Legendary",
    },
  },
};

type Language = "es" | "en" | "ru";

// ============================================
// ITEMS DATA
// ============================================
const items = [
  {
    id: 1,
    hero: "Juggernaut",
    setName: "Bladeform Legacy",
    rarity: "arcana" as const,
    price: 45,
    soldOut: false,
  },
  {
    id: 2,
    hero: "Pudge",
    setName: "Feast of Abscession",
    rarity: "immortal" as const,
    price: 28,
    soldOut: false,
  },
  {
    id: 3,
    hero: "Invoker",
    setName: "The Magus Cypher",
    rarity: "legendary" as const,
    price: 35,
    soldOut: true,
  },
  {
    id: 4,
    hero: "Crystal Maiden",
    setName: "Frost Avalanche",
    rarity: "arcana" as const,
    price: 50,
    soldOut: false,
  },
  {
    id: 5,
    hero: "Anti-Mage",
    setName: "Sange and Yasha Blades",
    rarity: "immortal" as const,
    price: 22,
    soldOut: false,
  },
  {
    id: 6,
    hero: "Phantom Assassin",
    setName: "Manifold Paradox",
    rarity: "arcana" as const,
    price: 60,
    soldOut: false,
  },
];

// ============================================
// COMPONENTS
// ============================================

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 
              ? "rgba(255, 215, 0, 0.6)" 
              : i % 3 === 1 
              ? "rgba(0, 191, 255, 0.6)" 
              : "rgba(106, 13, 173, 0.6)",
            boxShadow: i % 3 === 0 
              ? "0 0 10px rgba(255, 215, 0, 0.8)" 
              : i % 3 === 1 
              ? "0 0 10px rgba(0, 191, 255, 0.8)" 
              : "0 0 10px rgba(106, 13, 173, 0.8)",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
      {/* Rune symbols */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`rune-${i}`}
          className="absolute text-2xl opacity-20 animate-pulse-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            color: i % 2 === 0 ? "#FFD700" : "#00BFFF",
          }}
        >
          ◆
        </div>
      ))}
    </div>
  );
}

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
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
                className={`px-2 py-1 text-sm rounded transition-all ${
                  lang === "es"
                    ? "bg-gold text-background font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-sm rounded transition-all ${
                  lang === "en"
                    ? "bg-gold text-background font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-2 py-1 text-sm rounded transition-all ${
                  lang === "ru"
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rarityColors = {
    immortal: {
      glow: "shadow-immortal-orange/50 hover:shadow-immortal-orange/70",
      badge: "bg-gradient-to-r from-orange-600 to-amber-500 text-white",
      border: "border-immortal-orange/30 hover:border-immortal-orange/60",
    },
    arcana: {
      glow: "shadow-arcana-pink/50 hover:shadow-arcana-pink/70",
      badge: "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white arcana-shimmer",
      border: "border-arcana-pink/30 hover:border-arcana-pink/60",
    },
    legendary: {
      glow: "shadow-legendary-purple/50 hover:shadow-legendary-purple/70",
      badge: "bg-gradient-to-r from-purple-600 to-violet-500 text-white",
      border: "border-legendary-purple/30 hover:border-legendary-purple/60",
    },
  };

  const colors = rarityColors[item.rarity];

  return (
    <div
      ref={cardRef}
      className={`relative group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative bg-card rounded-xl border-2 ${colors.border} overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg ${colors.glow} hover:shadow-xl`}
      >
        {/* Sold Out Overlay */}
        {item.soldOut && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-red-500 rotate-[-12deg] border-4 border-red-500 px-6 py-2 rounded">
              {t.items.soldOut}
            </span>
          </div>
        )}

        {/* Hero Image Placeholder */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden">
          <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
            ⚔️
          </div>
          {/* Rarity glow effect */}
          <div
            className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity ${
              item.rarity === "arcana"
                ? "bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500"
                : item.rarity === "immortal"
                ? "bg-gradient-to-br from-orange-500 to-amber-500"
                : "bg-gradient-to-br from-purple-600 to-violet-500"
            }`}
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {item.hero}
              </h3>
              <p className="text-sm text-muted-foreground">{item.setName}</p>
            </div>
            <span
              className={`px-2 py-1 text-xs font-bold rounded-full ${colors.badge}`}
            >
              {t.rarity[item.rarity]}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
              {t.items.steamGift}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gold">
              ${item.price}
            </span>
            <a
              href="https://t.me/lermns"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                item.soldOut ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Button
                size="sm"
                disabled={item.soldOut}
                className="bg-electric-blue hover:bg-electric-blue/80 text-background font-medium gap-2"
              >
                <Send size={16} />
                {t.items.contactToBuy}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SetsGrid({ t }: { t: typeof translations.es }) {
  return (
    <section id="sets" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12 text-gold glow-text">
          {t.nav.sets}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ItemCard key={item.id} item={item} t={t} index={index} />
          ))}
        </div>
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
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V22l4-4-4-4v2.8c-3.45-.8-6-3.92-6-7.68 0-4.34 3.53-7.88 7.88-7.88S19.76 4.78 19.76 9.12c0 1.98-.73 3.79-1.94 5.18l1.45 1.45C21.03 13.92 22 11.58 22 9.12 22 5.05 18.18 2 13.5 2H12z"/>
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
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
