import { Fault } from '../types';

export const faults: Fault[] = [
  // ==================== ELECTRICAL MACHINES ====================
  {
    id: "f1",
    componentId: "motor-3phase-squirrel",
    title: "Motor fails to start (no hum)",
    category: "Starting & Running Problems",
    symptoms: "No sound or rotation when power is supplied.",
    causes: ["Blown fuse or tripped breaker", "Open circuit in power wiring", "Faulty contactor or starter", "Thermal overload relay activated"],
    troubleshootingSteps: [
      "1. Check voltage at motor terminals with multimeter",
      "2. Inspect fuses and circuit breakers",
      "3. Test contactor operation",
      "4. Verify overload relay setting"
    ],
    toolsRequired: ["Multimeter", "Screwdriver set", "Clamp meter"],
    safetyWarnings: "Always disconnect and lock out power before working. Risk of electric shock.",
    preventiveMeasures: ["Regular insulation testing", "Proper overload protection", "Keep terminals tight"]
  },
  {
    id: "f2",
    componentId: "motor-3phase-squirrel",
    title: "Motor overheats excessively",
    category: "Overheating & Thermal Issues",
    symptoms: "Motor body becomes very hot, thermal protection trips frequently.",
    causes: ["Overloading", "Blocked ventilation / dirty cooling fins", "Low voltage supply", "Worn bearings causing friction"],
    troubleshootingSteps: [
      "1. Check load current against rated current",
      "2. Clean cooling fins and ensure proper airflow",
      "3. Measure supply voltage",
      "4. Check bearing condition"
    ],
    toolsRequired: ["Clamp meter", "Infrared thermometer", "Screwdriver"],
    safetyWarnings: "Do not touch hot surfaces. Allow motor to cool before inspection.",
    preventiveMeasures: ["Avoid overloading", "Regular cleaning of motor", "Proper ventilation"]
  },

  // ==================== POWER COMPONENTS ====================
  {
    id: "f3",
    componentId: "transformer-distribution",
    title: "Transformer overheating",
    category: "Overheating & Thermal Issues",
    symptoms: "High oil temperature, humming sound louder than normal.",
    causes: ["Overloading", "Poor ventilation", "Degraded insulation oil", "Loose connections"],
    troubleshootingSteps: [
      "1. Check load against rated capacity",
      "2. Verify cooling fans/oil circulation",
      "3. Test oil quality (BDV test)",
      "4. Tighten all connections"
    ],
    toolsRequired: ["Thermometer", "Oil testing kit", "Torque wrench"],
    safetyWarnings: "High voltage present. Only qualified personnel should work on transformers.",
    preventiveMeasures: ["Do not overload", "Regular oil maintenance", "Keep area clean"]
  },
  {
    id: "f4",
    componentId: "transformer-distribution",
    title: "Abnormal humming / vibration",
    category: "Noise & Abnormal Operation",
    symptoms: "Loud buzzing or vibrating sound from transformer.",
    causes: ["Loose core laminations", "Loose mounting bolts", "Harmonics in supply"],
    troubleshootingSteps: [
      "1. Tighten all mounting bolts",
      "2. Check for loose core clamping",
      "3. Measure supply harmonics"
    ],
    toolsRequired: ["Torque wrench", "Vibration meter"],
    safetyWarnings: "High voltage danger. Do not open transformer while energized.",
    preventiveMeasures: ["Regular tightening of bolts", "Avoid harmonic loads"]
  },

  // ==================== CONTROL & AUTOMATION ====================
  {
    id: "f5",
    componentId: "plc-siemens-s7-1200",
    title: "PLC not powering on",
    category: "Electrical & Winding Faults",
    symptoms: "No power LED, no output from PLC.",
    causes: ["Power supply failure", "Blown fuse in PSU", "Loose wiring"],
    troubleshootingSteps: [
      "1. Check 24V DC supply voltage",
      "2. Inspect PSU fuse",
      "3. Verify all wiring connections"
    ],
    toolsRequired: ["Multimeter", "Screwdriver"],
    safetyWarnings: "Ensure power is isolated before checking wiring.",
    preventiveMeasures: ["Use surge protection", "Regular inspection of connections"]
  },
  {
    id: "f6",
    componentId: "plc-siemens-s7-1200",
    title: "Intermittent input/output failure",
    category: "Protection & Tripping Problems",
    symptoms: "Inputs or outputs turn on/off randomly.",
    causes: ["Electrical noise", "Loose terminal connections", "Grounding issues"],
    troubleshootingSteps: [
      "1. Check grounding of PLC and cabinet",
      "2. Tighten all I/O terminals",
      "3. Add ferrite cores on cables"
    ],
    toolsRequired: ["Screwdriver", "Multimeter"],
    safetyWarnings: "Improper grounding can cause unpredictable behavior.",
    preventiveMeasures: ["Proper shielding and grounding", "Use shielded cables"]
  },

  // ==================== PROTECTION DEVICES ====================
  {
    id: "f7",
    componentId: "mccb-100a",
    title: "MCCB trips frequently",
    category: "Protection & Tripping Problems",
    symptoms: "Breaker trips even under normal load.",
    causes: ["Incorrect trip settings", "Overheating", "Ground fault"],
    troubleshootingSteps: [
      "1. Check actual load current",
      "2. Verify thermal/magnetic settings",
      "3. Test for insulation leakage"
    ],
    toolsRequired: ["Clamp meter", "Insulation tester"],
    safetyWarnings: "Tripping may indicate serious underlying fault.",
    preventiveMeasures: ["Correct setting of protection", "Regular testing"]
  },
  {
    id: "f8",
    componentId: "mccb-100a",
    title: "MCCB fails to trip on short circuit",
    category: "Starting & Running Problems",
    symptoms: "Short circuit occurs but breaker does not trip.",
    causes: ["Welded contacts", "Mechanism jammed", "Wrong rating"],
    troubleshootingSteps: [
      "1. Do not reset repeatedly",
      "2. Replace MCCB immediately",
      "3. Investigate cause of short circuit"
    ],
    toolsRequired: ["Multimeter"],
    safetyWarnings: "Failure to trip can cause fire or explosion.",
    preventiveMeasures: ["Annual testing of MCCB", "Never bypass protection"]
  },

  // ==================== INSTRUMENTATION ====================
  {
    id: "f9",
    componentId: "current-transformer",
    title: "Current Transformer secondary open",
    category: "Electrical & Winding Faults",
    symptoms: "High voltage on secondary terminals, metering error.",
    causes: ["Secondary circuit broken", "Meter disconnected"],
    troubleshootingSteps: [
      "1. Immediately short secondary terminals",
      "2. Check all connections",
      "3. Never leave CT secondary open"
    ],
    toolsRequired: ["Screwdriver", "Multimeter"],
    safetyWarnings: "Extremely dangerous - high voltage can appear on open secondary.",
    preventiveMeasures: ["Always short CT secondary when not in use"]
  },
  {
    id: "f10",
    componentId: "current-transformer",
    title: "Inaccurate current reading",
    category: "Instrumentation",
    symptoms: "Meter shows wrong current values.",
    causes: ["Wrong CT ratio", "Magnetization of core", "Loose connections"],
    troubleshootingSteps: [
      "1. Verify CT ratio matches meter",
      "2. Demagnetize core if needed",
      "3. Tighten all connections"
    ],
    toolsRequired: ["Multimeter", "Clamp meter"],
    safetyWarnings: "Incorrect readings can lead to wrong decisions.",
    preventiveMeasures: ["Regular calibration"]
  },

  // ==================== CABLES & ACCESSORIES ====================
  {
    id: "f11",
    componentId: "armoured-cable-4core",
    title: "Cable insulation failure",
    category: "Electrical & Winding Faults",
    symptoms: "Earth leakage, tripping of RCCB/MCB.",
    causes: ["Mechanical damage", "Moisture ingress", "Ageing"],
    troubleshootingSteps: [
      "1. Perform insulation resistance test",
      "2. Check for physical damage",
      "3. Replace damaged section"
    ],
    toolsRequired: ["Insulation tester (Megger)", "Cable cutter"],
    safetyWarnings: "Damaged insulation can cause electric shock or fire.",
    preventiveMeasures: ["Proper cable routing and protection"]
  },
  {
    id: "f12",
    componentId: "armoured-cable-4core",
    title: "Cable overheating",
    category: "Overheating & Thermal Issues",
    symptoms: "Cable surface hot, burning smell.",
    causes: ["Overloading", "Poor termination", "Undersized cable"],
    troubleshootingSteps: [
      "1. Measure current flowing through cable",
      "2. Check termination tightness",
      "3. Verify cable size is adequate"
    ],
    toolsRequired: ["Clamp meter", "Infrared thermometer"],
    safetyWarnings: "Overheating cables can cause fire.",
    preventiveMeasures: ["Do not overload cables", "Proper termination"]
  },
];

export const getFaultsByComponentId = (componentId: string): Fault[] => {
  return faults.filter(fault => fault.componentId === componentId);
};