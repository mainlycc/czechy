declare global {
  interface Window {
    initMap: () => void;
    google: {
      maps: {
        Map: new (mapDiv: HTMLElement, options: google.maps.MapOptions) => google.maps.Map;
        Marker: new (options: google.maps.MarkerOptions) => google.maps.Marker;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

declare namespace google {
  namespace maps {
    interface MapOptions {
      center: { lat: number; lng: number };
      zoom: number;
      styles?: any[];
    }

    interface MarkerOptions {
      position: { lat: number; lng: number };
      map: Map;
      title?: string;
      animation?: number;
    }

    class Map {
      constructor(mapDiv: HTMLElement, options: MapOptions);
    }

    class Marker {
      constructor(options: MarkerOptions);
    }
  }
}

export {}; 