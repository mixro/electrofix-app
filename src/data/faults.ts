import { Fault } from "../types";

export const faults: Fault[] = [
  {
    id: "fault-1",
    componentId: "motor-3phase-squirrel",
    title: "Motor fails to start (no hum)",
    category: "Starting & Running Problems",
    symptoms: "No sound or rotation when power is applied.",
    causes: ["Blown fuse", "Open circuit in wiring", "Faulty contactor", "Thermal overload tripped"],
    troubleshootingSteps: [
      "1. Verify voltage at motor terminals",
      "2. Check fuses and breakers",
      "3. Inspect wiring connections",
      "4. Test contactor operation"
    ],
    toolsRequired: ["Multimeter", "Screwdriver set", "Clamp meter"],
    safetyWarnings: "Disconnect power supply and use lockout/tagout before any work. Risk of electric shock.",
    preventiveMeasures: ["Regular insulation testing", "Proper overload protection", "Keep terminals tight"]
  },

  // Add 50–100+ faults across different components and categories
];