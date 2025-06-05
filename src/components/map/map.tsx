'use client';

import { useEffect, useRef } from 'react';

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Funkcja do załadowania skryptu Google Maps
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Funkcja inicjalizująca mapę
    window.initMap = () => {
      if (mapRef.current) {
        const location = { lat: 50.0343, lng: 15.7812 }; // Współrzędne Pardubic
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            }
          ]
        });

        // Dodanie markera
        new google.maps.Marker({
          position: location,
          map: map,
          title: "Egzamin na prawo jazdy w Pardubicach",
          animation: google.maps.Animation.DROP
        });
      }
    };

    loadGoogleMapsScript();

    return () => {
      // Czyszczenie
      delete window.initMap;
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border-2 border-orange-200">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
} 