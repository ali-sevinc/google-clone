"use client";

import { useEffect, useState } from "react";

("NEXT_PUBLIC_ mandatory!");
const key = process.env.NEXT_PUBLIC_EXTREME_IP_KEY;

export default function Country() {
  const [country, setCountry] = useState<string>("Your Location...");

  useEffect(function () {
    async function fetchCountry() {
      const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${key}`);
      const data = await res.json();
      if (!res.ok) return;
      console.log(data);
      setCountry(data.country);
    }
    fetchCountry();
  }, []);

  return <div>{country}</div>;
}
