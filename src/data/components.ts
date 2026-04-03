import { Component } from '../types';

export const componentsData: Component[] = [
  {
    id: "motor-3phase-squirrel",
    name: "3-Phase Squirrel Cage Induction Motor",
    slug: "3-phase-squirrel-cage-induction-motor",
    category: "Electrical Machines",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e", // You can replace with your own later
    shortDescription: "Most widely used industrial motor for driving pumps, fans, and conveyors.",

    function: "Converts electrical energy into mechanical rotational energy",
    workingPrinciple: "Works on the principle of electromagnetic induction. A rotating magnetic field is produced in the stator which induces current in the rotor bars, creating torque.",

    ratings: {
      voltage: "380 - 415 V",
      current: "Varies with power rating",
      power: "0.18 kW to 500 kW",
      speed: "750 - 3000 RPM",
      efficiency: "IE2 / IE3",
    },

    applications: ["Water pumps", "HVAC fans", "Compressors", "Conveyors", "Machine tools"],
    advantages: ["Rugged construction", "Low maintenance", "High efficiency", "Cost effective"],
    limitations: ["High starting current", "Limited speed control without VFD"],

    maintenanceTips: [
      "Regularly check and grease bearings",
      "Keep motor clean and dry",
      "Check terminal connections for tightness"
    ],
    safetyPrecautions: [
      "Always disconnect power before maintenance",
      "Use proper lockout/tagout procedures",
      "Ensure proper earthing"
    ],
  },

  {
    id: "transformer-distribution",
    name: "Distribution Transformer",
    slug: "distribution-transformer",
    category: "Power Components",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e",
    shortDescription: "Steps down high voltage to usable low voltage for distribution.",

    function: "Transfers electrical energy between circuits through electromagnetic induction",
    workingPrinciple: "Works on mutual induction between primary and secondary windings.",

    ratings: {
      voltage: "11 kV / 415 V",
      current: "Varies",
      power: "25 kVA to 2500 kVA",
    },

    applications: ["Power distribution networks", "Industrial plants", "Commercial buildings"],
    advantages: ["High efficiency", "Long service life", "Low maintenance"],
    limitations: ["Heavy weight", "Requires oil maintenance in some types"],

    maintenanceTips: ["Check oil level and quality regularly", "Monitor temperature"],
    safetyPrecautions: ["Keep area clear of vegetation", "Never touch bushings when energized"],
  },

  {
    id: "plc-siemens-s7-1200",
    name: "Siemens S7-1200 PLC",
    slug: "siemens-s7-1200-plc",
    category: "Control & Automation",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e",
    shortDescription: "Compact and powerful programmable logic controller for automation.",

    function: "Controls industrial processes and machinery through programmed logic",
    workingPrinciple: "Executes user program in a cyclic scan (read inputs → execute logic → update outputs).",

    ratings: {
      voltage: "24 V DC",
      power: "Low power consumption",
    },

    applications: ["Machine automation", "Process control", "Building automation"],
    advantages: ["Easy programming", "Modular design", "Reliable performance"],
    limitations: ["Limited I/O in basic models"],

    maintenanceTips: ["Keep firmware updated", "Protect from dust and moisture"],
    safetyPrecautions: ["Follow proper grounding", "Use surge protection"],
  },

  {
    id: "mccb-100a",
    name: "100A Molded Case Circuit Breaker (MCCB)",
    slug: "100a-mccb",
    category: "Protection Devices",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e",
    shortDescription: "Provides overload and short circuit protection for electrical circuits.",

    function: "Protects electrical circuits from overload and short circuits",
    workingPrinciple: "Uses thermal and magnetic trip mechanisms.",

    ratings: {
      voltage: "415 V AC",
      current: "100 A",
    },

    applications: ["Main switchboards", "Motor protection", "Distribution panels"],
    advantages: ["Adjustable trip settings", "High breaking capacity"],
    limitations: ["Larger size compared to MCB"],

    maintenanceTips: ["Test trip function periodically", "Keep contacts clean"],
    safetyPrecautions: ["Never bypass the breaker", "Use appropriate PPE when working"],
  },

  {
    id: "current-transformer",
    name: "Current Transformer (CT)",
    slug: "current-transformer",
    category: "Instrumentation",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e",
    shortDescription: "Steps down high current to low current for safe measurement.",

    function: "Measures high alternating currents safely",
    workingPrinciple: "Works on electromagnetic induction principle.",

    ratings: {
      voltage: "Low voltage secondary",
      current: "5A or 1A secondary",
    },

    applications: ["Energy metering", "Protection relays", "Monitoring systems"],
    advantages: ["Safe measurement of high currents", "High accuracy"],
    limitations: ["Must never be operated with secondary open"],

    maintenanceTips: ["Check connections regularly"],
    safetyPrecautions: ["Never open secondary circuit while energized"],
  },

  {
    id: "armoured-cable-4core",
    name: "4-Core Armoured Power Cable",
    slug: "4-core-armoured-power-cable",
    category: "Cables & Accessories",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-4c5f9c3c3e6e",
    shortDescription: "Heavy duty cable suitable for underground and outdoor installation.",

    function: "Transmits electrical power safely over distance",
    workingPrinciple: "Conducts electricity through copper or aluminum conductors.",

    ratings: {
      voltage: "0.6/1 kV",
      current: "Depends on cross-section",
    },

    applications: ["Underground power distribution", "Industrial wiring", "Outdoor installations"],
    advantages: ["Mechanical protection", "Moisture resistant"],
    limitations: ["Stiff and heavy"],

    maintenanceTips: ["Avoid sharp bends during installation"],
    safetyPrecautions: ["Use proper glands and termination"],
  },
];