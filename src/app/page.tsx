"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, Star, ArrowRight, Zap } from "lucide-react";
import FAQ05 from "@/components/faq-05/faq-05";

const timeline = [
  {
    number: "1",
    title: "Kontakt i rezerwacja",
    desc: "Zadzwoń, napisz lub wypełnij formularz. Ustalimy termin, transport i odpowiemy na wszystkie pytania.",
  },
  {
    number: "2",
    title: "Przyjazd do Czech",
    desc: "Przyjeżdżasz wybraną formą transportu. Odbieramy Cię z dworca lub lotniska i pomagamy od pierwszych chwil.",
  },
  {
    number: "3",
    title: "Zakwaterowanie",
    desc: "Zapewniamy wygodny nocleg blisko egzaminu. Odpoczniesz, zrelaksujesz się i przygotujesz do ważnego dnia.",
  },
  {
    number: "4",
    title: "Przygotowanie do egzaminu",
    desc: "Możesz skorzystać z konsultacji lub jazdy próbnej. Poznasz trasę i poczujesz się pewniej.",
  },
  {
    number: "5",
    title: "Egzamin praktyczny",
    desc: "Egzamin trwa ok. 30 minut. Pomagamy w komunikacji, atmosfera jest przyjazna, a zasady jasne.",
  },
  {
    number: "6",
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCallPopout(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Optimized for conversion */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" /> wysoka skuteczność zdawalności!
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                  <span className="text-white">Prawo jazdy w Czechach – </span>
                  <span className="text-orange-400 font-extrabold drop-shadow-lg italic">zdaj egzamin</span>
                  <span className="text-white"> łatwo, szybko, bez stresu</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed text-center lg:text-left">
                  Nie możesz zdać prawa jazdy w Polsce? Z nami zdasz praktykę w Czechach – pomagamy we wszystkim, od A do Z.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Zacznij dzisiaj
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
                  onClick={() => {
                    const pricingSection = document.getElementById('cennik');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Zobacz ceny
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                  <span>Brak ukrytych kosztów</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                  <span>Wsparcie 24/7</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex flex-col gap-2 justify-center items-center text-center font-semibold text-lg md:text-2xl text-orange-200">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span>Adres e-mail:</span>
                    <button
                      className={`transition-colors duration-200 focus:outline-none text-xl md:text-3xl font-bold ${copied ? 'text-green-400' : 'text-orange-400'}`}
                      onClick={() => {
                        navigator.clipboard.writeText('czeskieprawojazdy@proton.me');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                      title="Kliknij, aby skopiować adres e-mail"
                    >
                      czeskieprawojazdy@proton.me
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span>Telefon:</span>
                    <span className="text-xl md:text-3xl font-bold text-orange-400">+48 788 450 137</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <Image
                  src="/samochód.png"
                  alt="Egzamin praktyczny na prawo jazdy w Czechach"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-3 md:p-4 rounded-lg shadow-xl max-w-[250px] md:max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-semibold">5.0</span>
                </div>
                <p className="text-xs md:text-sm">&quot;Zdałem za pierwszym razem! Polecam każdemu.&quot;</p>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1">- Marcin K.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-8 bg-gradient-to-r from-orange-50 via-blue-50 to-orange-100 shadow-lg border-y-2 border-orange-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-900">30 min</div>
              <div className="text-sm text-gray-600">Średni czas egzaminu</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-900">24/7</div>
              <div className="text-sm text-gray-600">Wsparcie klientów</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dlaczego warto?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Poznaj wszystkie korzyści i zobacz, dlaczego tysiące Polaków wybiera Czech Republic
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {advantages.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 shadow-lg bg-white"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4 flex justify-center items-center">
                    <span className="text-4xl md:text-5xl">{item.icon}</span>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-900 text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardDescription className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jak wygląda proces uzyskania prawa jazdy w Czechach?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Prosty, przejrzysty proces w 6 krokach</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6 mb-6 md:mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg shadow-lg">
                    {item.number}
                  </div>
                  {index < 5 && <div className="w-0.5 h-12 md:h-16 bg-orange-200 mx-auto mt-2 md:mt-4"></div>}
                </div>
                <div className="flex-1 pt-1 md:pt-2 bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">Opinie kursantów o egzaminach w Czechach</h2>
            <p className="text-lg md:text-xl text-blue-100">Zobacz, co mówią nasi zadowoleni klienci</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                text: "Już nie musiałem się stresować. Cały proces był bardzo dobrze zorganizowany, a instruktor świetnie mnie przygotował.",
                author: "Marcin K.",
                city: "Wrocław",
                rating: 5,
              },
              {
                text: "Nie wierzyłem, że to może być takie proste. Zdałem za pierwszym razem i zaoszczędziłem mnóstwo pieniędzy.",
                author: "Anna S.",
                city: "Pabianice",
                rating: 5,
              },
              {
                text: "Polecam każdemu, kto ma problemy z egzaminem w Polsce. W Czechach wszystko poszło gładko.",
                author: "Tomasz W.",
                city: "Żory",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-4 md:p-6">
                  <div className="flex text-yellow-400 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed !text-white">&quot;{testimonial.text}&quot;</p>
                  <p className="font-semibold text-orange-300">- {testimonial.author}</p>
                  <p className="text-sm text-gray-300 mt-1">{testimonial.city}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
              Nie trać więcej czasu i pieniędzy
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <p className="mt-4 text-sm md:text-base text-blue-100">
              Zadzwoń do nas już dziś: <span className="font-bold text-orange-300">czeskieprawojazdy@proton.me</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="cennik" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cennik egzaminów i kursów prawa jazdy w Czechach</h2>
            <p className="text-lg md:text-xl text-gray-600">Przejrzyste ceny, bez ukrytych kosztów</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {prices.map((item, index) => (
              <Card
                key={index}
                className={`relative shadow-lg bg-white transition-all duration-300 hover:shadow-xl ${
                  item.popular
                    ? "border-2 border-orange-500 shadow-xl scale-105 ring-4 ring-orange-100"
                    : "border-2 border-gray-200 hover:border-orange-300"
                }`}
              >
                {item.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 text-xs md:text-sm">
                    Najpopularniejsze
                  </Badge>
                )}
                <CardHeader className="text-center p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl text-gray-900">{item.category}</CardTitle>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mt-3 md:mt-4">{item.price}</div>
                </CardHeader>
                <CardContent className="text-center p-4 md:p-6">
                  <Button
                    className={`w-full ${item.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                    size="lg"
                  >
                    Wybierz pakiet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-sm md:text-base text-gray-600 mb-4">Ceny zawierają pełną obsługę, transport i zakwaterowanie</p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            >
              Zapytaj o indywidualną wycenę
            </Button>
          </div>

          {/* Sekcja z informacją o VAT i opcjach płatności */}
          <div className="mt-8 md:mt-16 bg-blue-50 rounded-xl py-4 md:py-6 px-4 text-center">
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Wszystkie ceny zawierają podatek VAT. Możliwość płatności w ratach.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-700">
              <span className="flex items-center gap-2"><span role="img" aria-label="karta">💳</span> Płatność kartą</span>
              <span className="flex items-center gap-2"><span role="img" aria-label="bank">🏦</span> Przelew bankowy</span>
              <span className="flex items-center gap-2"><span role="img" aria-label="blik">📱</span> BLIK</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FAQ05 />
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Gotowy na zdobycie prawa jazdy w Czechach?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Nie czekaj dłużej! Skontaktuj się z nami już dziś i zacznij proces uzyskania prawa jazdy w Czechach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Zadzwoń teraz: +48 788 450 137
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-500 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
            >
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Napisz email
            </Button>
          </div>

          <p className="text-base md:text-lg font-semibold">czeskieprawojazdy@proton.me</p>
        </div>
      </section>

      {/* Pop-out zachęcający do telefonu */}
      {showCallPopout && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-orange-500 border border-orange-400 rounded-xl shadow-lg p-4 md:p-6 flex flex-col sm:flex-row items-center gap-3 md:gap-4 animate-fade-in">
          <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
          <span className="text-base md:text-lg font-semibold text-white">Masz pytania? Zadzwoń teraz:</span>
          <a href="tel:+48788450137" className="text-lg md:text-xl font-bold text-white underline whitespace-nowrap">+48 788 450 137</a>
          <button
            onClick={() => setShowCallPopout(false)}
            className="ml-2 text-white/80 hover:text-white text-xl md:text-2xl font-bold focus:outline-none"
            aria-label="Zamknij okno zachęty do telefonu"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
