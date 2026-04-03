import { Category } from '../types';

export const categories: Category[] = [
  {
    id: "electrical-machines",
    title: "Electrical Machines",
    slug: "electrical-machines",
    description: "AC/DC motors, generators, alternators, and other rotating machines",
    iconName: "engine",
  },
  {
    id: "power-components",
    title: "Power Components",
    slug: "power-components",
    description: "Transformers, circuit breakers, switches, and power distribution equipment",
    iconName: "flash",
  },
  {
    id: "control-automation",
    title: "Control & Automation",
    slug: "control-automation",
    description: "PLCs, VFDs, contactors, relays, and automation systems",
    iconName: "robot-industrial",
  },
  {
    id: "cables-accessories",
    title: "Cables & Accessories",
    slug: "cables-accessories",
    description: "Power cables, control cables, wiring accessories, and connectors",
    iconName: "cable-data",
  },
  {
    id: "protection-devices",
    title: "Protection Devices",
    slug: "protection-devices",
    description: "MCBs, MCCBs, RCCBs, fuses, overload relays, and surge protectors",
    iconName: "shield-check",
  },
  {
    id: "instrumentation",
    title: "Instrumentation",
    slug: "instrumentation",
    description: "Sensors, transducers, measuring instruments, and control devices",
    iconName: "gauge",
  },
];