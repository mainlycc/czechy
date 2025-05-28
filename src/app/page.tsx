"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import FAQ05 from "@/components/faq-05/faq-05";

const timeline = [
  {
    icon: "📞",
    title: "Kontakt i rezerwacja",
    desc: "Zadzwoń, napisz lub wypełnij formularz. Ustalimy termin, transport i odpowiemy na wszystkie pytania.",
  },
  {
    icon: "🚗",
    title: "Przyjazd do Czech",
    desc: "Przyjeżdżasz wybraną formą transportu. Odbieramy Cię z dworca lub lotniska i pomagamy od pierwszych chwil.",
  },
  {
    icon: "🏨",
    title: "Zakwaterowanie",
    desc: "Zapewniamy wygodny nocleg blisko egzaminu. Odpoczniesz, zrelaksujesz się i przygotujesz do ważnego dnia.",
  },
  {
    icon: "🧑‍🏫",
    title: "Przygotowanie do egzaminu",
    desc: "Możesz skorzystać z konsultacji lub jazdy próbnej. Poznasz trasę i poczujesz się pewniej.",
  },
  {
    icon: "📝",
    title: "Egzamin praktyczny",
    desc: "Egzamin trwa ok. 30 minut. Pomagamy w komunikacji, atmosfera jest przyjazna, a zasady jasne.",
  },
  {
    icon: "🎉",
    title: "Zdałeś prawo jazdy!",
    desc: "Gratulacje! Otrzymujesz czeskie prawo jazdy uznawane w całej UE. Ciesz się wolnością za kierownicą!",
  },
];

const advantages = [
  {
    icon: "🚘",
    title: "Egzamin prostszy niż w Polsce",
    desc: "W Czechach procedury są mniej restrykcyjne, a atmosfera bardziej przyjazna. Egzaminatorzy nie szukają błędów na siłę – oceniają realne umiejętności.",
  },
  {
    icon: "😌",
    title: "Zerowy stres – pełne wsparcie",
    desc: "Od chwili przyjazdu do chwili powrotu jesteś pod naszą opieką. Nie musisz martwić się o język, logistykę ani formalności – jesteśmy z Tobą na każdym kroku.",
  },
  {
    icon: "⏳",
    title: "Oszczędność czasu",
    desc: "W Polsce możesz czekać miesiącami na termin. U nas – ustalamy termin szybko, często z tygodnia na tydzień! Cały proces może zająć zaledwie 2–3 dni.",
  },
  {
    icon: "🏨",
    title: "Nocleg i transport w cenie",
    desc: "Organizujemy komfortowy nocleg oraz dowóz z dworca lub lotniska. Nie musisz nic planować – wszystko masz w pakiecie.",
  },
  {
    icon: "🧭",
    title: "Brak językowej bariery",
    desc: "Nie mówisz po czesku? Spokojnie. Pomagamy w komunikacji i formalnościach. Twój komfort to nasz priorytet.",
  },
  {
    icon: "🛡️",
    title: "Legalnie i bezpiecznie",
    desc: "Cały proces odbywa się zgodnie z przepisami – bez kombinowania, bez ryzyka. Twoje prawo jazdy będzie w pełni legalne i ważne w całej Unii Europejskiej.",
  },
];

const prices = [
  { category: "Kategoria A", price: "2900 zł" },
  { category: "Kategoria B", price: "2900 zł", popular: true },
  { category: "Kategoria E do B", price: "2100 zł" },
  { category: "Kategoria C", price: "4800 zł" },
  { category: "Kategoria E do C", price: "4100 zł" },
  { category: "Kod 95", price: "2100 zł" },
];

export default function Home() {
  const [showCallPopout, setShowCallPopout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCallPopout(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero sekcja */}
      <section className="bg-background text-foreground py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Lewa kolumna: tekst */}
          <div className="flex-1 text-center md:text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ✅ Zdaj egzamin praktyczny w Czechach – łatwiej, szybciej, bez stresu
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto md:mx-0">
              Nie możesz zdać prawa jazdy w Polsce? Z nami zdasz praktykę w Czechach – pomagamy we wszystkim, od A do Z.
            </p>
            <div className="flex flex-col gap-4 items-center sm:items-start mb-6">
              <Button asChild size="lg" className="text-lg font-semibold px-8 py-4 bg-primary text-primary-foreground hover:bg-accent">
                <a href="tel:+48788450137">👉 Zadzwoń po bezpłatną konsultację</a>
              </Button>
            </div>
            <div className="mt-6">
              <span className="block text-2xl font-bold tracking-widest">CZESKIEPRAWOJAZDY@PROTON.ME</span>
            </div>
          </div>
          {/* Prawa kolumna: obrazek */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <Image
              src="/samochód.png"
              alt="Samochód nauki jazdy"
              width={520}
              height={300}
              className="rounded shadow-lg w-full max-w-[520px] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pasek zaufania */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-gray-600">CE</div>
            <div className="text-gray-600">Auto szkoła partnerska</div>
            <div className="text-gray-600">⭐️ Polecane przez kursantów</div>
          </div>
        </div>
      </section>

      {/* Zalety */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Dlaczego warto?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-accent flex flex-col gap-2 sm:gap-3">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{adv.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">{adv.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces - oś czasu */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Jak wygląda cały proces?</h2>
          <ol className="relative border-l-4 border-accent max-w-xl sm:max-w-3xl mx-auto">
            {timeline.map((step, idx) => (
              <li key={idx} className="mb-10 sm:mb-12 ml-4 sm:ml-6 flex flex-col sm:flex-row sm:items-center">
                <span className="absolute -left-6 sm:-left-7 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-2xl sm:text-3xl font-bold border-4 border-white shadow-lg">
                  {step.icon}
                </span>
                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-accent w-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Opinie */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent>
                <p className="text-lg mb-4">🗣 "4 razy nie zdałam w Polsce. Dzięki tej usłudze mam prawo jazdy w tydzień!"</p>
                <p className="font-semibold">— Karolina, 27 lat z Wrocławia</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-lg mb-4">🗣 "Nie wierzyłem, że to takie proste. Świetna organizacja, zero stresu."</p>
                <p className="font-semibold">— Paweł, 34 lata, Poznań</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Nie trać więcej czasu i nerwów.</h2>
          <p className="text-xl mb-8">Zdaj praktykę w Czechach i ciesz się wolnością za kierownicą.</p>
          <Button asChild size="lg" className="text-lg font-semibold px-8 py-4 bg-white text-primary hover:bg-accent mb-6">
            <a href="#kontakt">👉 Skontaktuj się z nami już dziś</a>
          </Button>
          <div className="mt-6">
            <span className="block text-2xl font-bold tracking-widest">CZESKIEPRAWOJAZDY@PROTON.ME</span>
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Cennik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {prices.map((item, idx) => (
              <div
                key={item.category}
                className={`relative bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-accent flex flex-col items-center gap-2 ${item.popular ? 'ring-4 ring-primary' : ''}`}
              >
                {item.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow">Najpopularniejsze</span>
                )}
                <span className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{item.category}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ05 />

      {/* Stopka */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-xl font-bold tracking-widest">CZESKIEPRAWOJAZDY@PROTON.ME</span>
            <div className="flex justify-center gap-8">
              <a href="#" className="hover:text-gray-300">Kontakt</a>
              <a href="#" className="hover:text-gray-300">Regulamin</a>
              <a href="#" className="hover:text-gray-300">Polityka prywatności</a>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://wa.me/48788450137" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.86 5.1 2.33 7.09L4 29l7.18-2.28A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.36 1.4-4.16-.25-.4A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.26-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Pop-out zachęcający do telefonu */}
      {showCallPopout && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-accent rounded-xl shadow-lg p-6 flex items-center gap-4 animate-fade-in">
          <span className="text-lg font-semibold text-primary">Masz pytania? Zadzwoń teraz:</span>
          <a href="tel:+48788450137" className="text-xl font-bold text-accent underline whitespace-nowrap">+48 788 450 137</a>
          <button
            onClick={() => setShowCallPopout(false)}
            className="ml-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
            aria-label="Zamknij"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
