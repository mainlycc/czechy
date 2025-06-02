import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 !text-white">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
                <span className="text-xl md:text-2xl font-bold text-white">+48 788 450 137</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
                <span className="text-xl md:text-2xl font-bold text-white lowercase">czeskieprawojazdy@proton.me</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 !text-white">Usługi</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              <li>Prawo jazdy kat. B</li>
              <li>Prawo jazdy kat. A</li>
              <li>Prawo jazdy kat. C</li>
              <li>Kod 95</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 !text-white">Informacje</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              <li>Regulamin</li>
              <li>Polityka prywatności</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500">
          <p className="text-xs md:text-sm">&copy; 2024 Prawo Jazdy w Czechach. Wszystkie prawa zastrzeżone.</p>
          <div className="mt-2 text-sm">
            Made by <Link 
              href="https://www.mainly.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-semibold"
            >
              mainly
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 