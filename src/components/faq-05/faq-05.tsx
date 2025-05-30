import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Languages,
  TimerReset,
  Users,
} from "lucide-react";

const faq = [
  {
    icon: ShieldCheck,
    question: "Czy to w ogóle legalne?",
    answer:
      "Tak. Zdanie egzaminu w Czechach i uzyskanie prawa jazdy jest legalne i uznawane w całej Unii Europejskiej, w tym w Polsce.",
  },
  {
    icon: Languages,
    question: "Czy muszę znać język czeski?",
    answer:
      "Nie. Wszystko organizujemy po polsku. Zapewniamy pomoc tłumacza i dokładnie wyjaśniamy każdy krok.",
  },
  {
    icon: Route,
    question: "Jak wygląda egzamin?",
    answer:
      "Jest podobny do polskiego, ale bardziej przyjazny. Trasy są prostsze, a egzaminatorzy mniej surowi. Możesz też odbyć jazdy próbne.",
  },
  {
    icon: BadgeDollarSign,
    question: "Ile to kosztuje?",
    answer:
      "Cena zależy od terminu i lokalizacji. Podczas pierwszego kontaktu podajemy konkretną wycenę – bez ukrytych kosztów.",
  },
  {
    icon: TimerReset,
    question: "Jak długo to trwa?",
    answer:
      "Najczęściej 3–4 dni. Pomagamy ustalić termin i organizujemy cały proces od początku do końca.",
  },
  {
    icon: Users,
    question: "Czy ktoś już z tego skorzystał?",
    answer:
      "Tak, dziesiątki osób, zwłaszcza po kilku niezdanych egzaminach w Polsce. To sprawdzona i skuteczna opcja.",
  },
];

const FAQ05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-screen-lg">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Najczęstsze pytania (FAQ)
        </h2>
        <p className="mt-3 text-lg text-center text-muted-foreground">
          Odpowiedzi na najważniejsze pytania dotyczące egzaminów w Czechach.
        </p>

        <div className="mt-12 grid md:grid-cols-2 rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ05;
