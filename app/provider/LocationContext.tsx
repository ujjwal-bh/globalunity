"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type LocationData = {
  country: string;
  country_code: string;
  city: string;
  region: string;
  status: "idle" | "loading" | "success" | "error";
};

const defaultState: LocationData = {
  country: "",
  country_code: "",
  city: "",
  region: "",
  status: "idle",
};

const LocationContext = createContext<LocationData>(defaultState);

const CACHE_KEY = "gu_location_v1";
const CACHE_TTL = 1000 * 60 * 60 * 24 * 3; // 3 days

export function LocationProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LocationData>(defaultState);

  useEffect(() => {
    // 1. Serve from cache if still fresh
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      console.log(raw, "rawww")
      if (raw) {
        const cached = JSON.parse(raw);
        if (Date.now() - cached.cachedAt < CACHE_TTL) {
          setData({ ...cached, status: "success" });
          return;
        }
      }
    } catch {}

    // 2. Fetch from our own API route
    setData((d) => ({ ...d, status: "loading" }));

    fetch("/api/location")
      .then((r) => r.json())
      .then((json: LocationData) => {
        if (json.status === "success") {
          const result: LocationData = { ...json, status: "success" };
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ ...result, cachedAt: Date.now() })
            );
          } catch {}
          setData(result);
        } else {
          setData((d) => ({ ...d, status: "error" }));
        }
      })
      .catch(() => setData((d) => ({ ...d, status: "error" })));
  }, []);

  return (
    <LocationContext.Provider value={data}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation(): LocationData {
  return useContext(LocationContext);
}