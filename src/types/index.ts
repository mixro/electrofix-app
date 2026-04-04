export type Component = {
  id: string;
  name: string;
  slug: string;                    // For clean URLs
  category: string;                // e.g., "Electrical Machines"
  subCategory?: string;
  imageUrl: string;                // Remote URL only (or local require later)
  symbol?: string;                 // Optional electrical symbol

  // Rich details for Component Detail Screen
  function: string;
  workingPrinciple: string;
  ratings: {
    voltage?: string;
    current?: string;
    power?: string;
    speed?: string;
    efficiency?: string;
  };
  applications: string[];
  advantages: string[];
  limitations: string[];
  maintenanceTips: string[];
  safetyPrecautions: string[];

  // For quick display
  shortDescription: string;
};

export type Fault = {
  id: string;
  componentId: string;
  title: string;
  category: string;                // e.g., "Starting & Running Problems"
  symptoms: string;
  causes: string[];
  troubleshootingSteps: string[];
  toolsRequired: string[];
  safetyWarnings: string;
  preventiveMeasures: string[];
};

export type Supplier = {
  id: string;
  name: string;
  country: string;
  location: string;
  address?: string;
  phone: string;
  email?: string;
  website?: string;
  products: string[];              // Array of component names or IDs
  priceRange?: string;
  rating?: number;
  description: string;
  imageUrl: string;
};

export type Technician = {
  id: string;
  name: string;
  profession: string;              // Electrician, Automation Engineer, etc.
  location: string;                // City, Tanzania
  phone: string;
  experienceYears: number;
  specialties: string[];           // ["Motors", "PLC", "Wiring"]
  availability: string;
  rating?: number;
  bio?: string;
  projects: number;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;                // For MaterialCommunityIcons
  count?: number;                  // Optional: number of components
};