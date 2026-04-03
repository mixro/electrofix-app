import { Component } from "../types";

export const componentsData: Component[] = [
  {
    id: "motor-3phase-squirrel",
    name: "3-Phase Squirrel Cage Induction Motor",
    slug: "3-phase-squirrel-cage-induction-motor",
    category: "Electrical Machines",
    imageUrl: "https://savree-storage.s3.amazonaws.com/Articles/optimised/Induction%20Electric%20Motor%20(Squirrel%20Cage).jpg", // remote
    shortDescription: "Most widely used industrial motor for pumps, fans, and conveyors.",

    function: "Converts electrical energy into mechanical rotational energy",
    workingPrinciple: "Uses electromagnetic induction to create rotating magnetic field...",
    
    ratings: {
      voltage: "380-415V",
      current: "Depends on power rating",
      power: "0.18 kW to 500 kW",
      speed: "750 - 3000 RPM",
    },

    applications: ["Pumps", "Fans", "Compressors", "Conveyors", "Machine tools"],
    advantages: ["Simple & rugged construction", "Low maintenance", "High efficiency"],
    limitations: ["Poor speed control without VFD", "High starting current"],

    maintenanceTips: ["Check bearings regularly", "Keep windings clean and dry"],
    safetyPrecautions: ["Always isolate power before maintenance", "Use proper lockout/tagout"],
  },

  // Add many more components here (DC motors, transformers, PLCs, relays, etc.)
];