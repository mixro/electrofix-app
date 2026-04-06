import { Component } from '../types';

export const componentsData: Component[] = [

  // ==================== ELECTRICAL MACHINES - MOTORS ====================

  {
    id: "motor-3phase-squirrel",
    name: "3-Phase Squirrel Cage Induction Motor",
    slug: "3-phase-squirrel-cage-induction-motor",
    category: "Electrical Machines",
    imageUrl: "https://cdn.moglix.com/p/kqrXC7Gm24sK3-xxlarge.jpg",
    shortDescription: "The most widely used industrial motor for pumps, fans, compressors, and conveyors.",

    function: "Converts electrical energy into mechanical rotational energy",
    workingPrinciple: "Works on electromagnetic induction. A rotating magnetic field produced in the stator induces current in the rotor bars, generating torque.",

    ratings: {
      voltage: "380 - 415 V (3-phase)",
      current: "Varies with power rating",
      power: "0.18 kW to 500 kW",
      speed: "750, 1000, 1500, 3000 RPM",
      efficiency: "IE2 / IE3",
    },

    applications: ["Water pumps", "HVAC fans", "Compressors", "Conveyors", "Machine tools", "Crushers"],
    advantages: ["Simple & rugged construction", "Low maintenance", "High efficiency", "Cost effective", "Long service life"],
    limitations: ["High starting current", "Limited speed control without VFD", "Poor power factor at light load"],

    maintenanceTips: [
      "Regularly grease bearings according to schedule",
      "Keep cooling fins clean and ensure proper ventilation",
      "Check terminal connections for tightness",
      "Monitor vibration and temperature during operation"
    ],
    safetyPrecautions: [
      "Always disconnect and lock out power before maintenance",
      "Use proper lockout/tagout (LOTO) procedures",
      "Ensure proper earthing of the motor frame",
      "Never operate with damaged cables"
    ],
  },

  {
    id: "motor-dc-shunt",
    name: "DC Shunt Motor",
    slug: "dc-shunt-motor",
    category: "Electrical Machines",
    imageUrl: "https://static1.industrybuying.com/products/motors-power-transmission/dc-motors/general-purpose-dc-motors/MOT.GEN.58521381_1679653590687.webp",
    shortDescription: "Constant speed motor widely used where precise speed control is required.",

    function: "Converts DC electrical energy into mechanical energy with nearly constant speed",
    workingPrinciple: "Field and armature windings are connected in parallel. Back EMF regulates speed.",

    ratings: {
      voltage: "110V - 440V DC",
      current: "Varies",
      power: "0.5 kW to 100 kW",
      speed: "500 - 3000 RPM",
    },

    applications: ["Lathe machines", "Drilling machines", "Elevators", "Blowers", "Centrifugal pumps"],
    advantages: ["Excellent speed regulation", "Easy speed control", "High starting torque"],
    limitations: ["Requires DC power supply", "Higher maintenance due to commutator and brushes"],

    maintenanceTips: [
      "Regularly clean and maintain commutator",
      "Check and replace carbon brushes when worn",
      "Lubricate bearings periodically"
    ],
    safetyPrecautions: [
      "Never run without field excitation",
      "Ensure proper cooling",
      "Avoid overloading"
    ],
  },

  {
    id: "motor-dc-series",
    name: "DC Series Motor",
    slug: "dc-series-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNS5sYbnQ1BpB4-u4NaD8QN7cdKhJhx2WLQ&s",
    shortDescription: "High starting torque motor used in traction and heavy load applications.",

    function: "Provides very high starting torque for heavy load applications",
    workingPrinciple: "Field and armature windings are connected in series. Torque is proportional to square of current.",

    ratings: {
      voltage: "110V - 600V DC",
      power: "1 kW to 200 kW",
      speed: "Variable (high at light load)",
    },

    applications: ["Electric trains", "Cranes", "Hoists", "Electric vehicles", "Winches"],
    advantages: ["Very high starting torque", "Compact size for given power"],
    limitations: ["Speed varies greatly with load", "Cannot be used where constant speed is required"],

    maintenanceTips: [
      "Frequent inspection of commutator and brushes",
      "Check for sparking at brushes"
    ],
    safetyPrecautions: [
      "Never run at no-load (can overspeed dangerously)",
      "Use proper speed limiting controls"
    ],
  },

  {
    id: "motor-slip-ring",
    name: "Slip Ring Induction Motor",
    slug: "slip-ring-induction-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV1pdedtoG4iRRaO8WMgxLD1tZalySu1Rnw&s",
    shortDescription: "Wound rotor induction motor with external resistance for better starting torque and speed control.",

    function: "Converts electrical energy to mechanical energy with high starting torque",
    workingPrinciple: "Rotor windings are connected to slip rings allowing external resistance to be added during starting.",

    ratings: {
      voltage: "415 V (3-phase)",
      power: "5 kW to 500 kW",
      speed: "750 - 1500 RPM",
    },

    applications: ["Cranes", "Hoists", "Elevators", "Heavy duty conveyors", "Ball mills"],
    advantages: ["High starting torque", "Smooth acceleration", "Speed control possible"],
    limitations: ["Higher cost and maintenance", "Slip rings and brushes require regular maintenance"],

    maintenanceTips: [
      "Regularly clean slip rings and brushes",
      "Check brush pressure and wear"
    ],
    safetyPrecautions: [
      "Ensure proper shorting of slip rings during normal operation",
      "Never leave external resistance connected permanently"
    ],
  },

  {
    id: "motor-single-phase",
    name: "Single Phase Induction Motor",
    slug: "single-phase-induction-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRFPpp7E3eJntbB8HhIc8fbcCBSR-ipu5ZQ&s",
    shortDescription: "Commonly used in domestic and light industrial applications.",

    function: "Converts single-phase AC power into mechanical energy",
    workingPrinciple: "Uses auxiliary winding and capacitor or centrifugal switch to create starting torque.",

    ratings: {
      voltage: "220 - 240 V",
      power: "0.09 kW to 5 kW",
      speed: "1440 RPM (approx)",
    },

    applications: ["Fans", "Washing machines", "Refrigerators", "Small pumps", "Power tools"],
    advantages: ["Simple construction", "Low cost", "Reliable for domestic use"],
    limitations: ["Lower efficiency", "Poor starting torque without auxiliary means"],

    maintenanceTips: [
      "Check capacitor regularly",
      "Lubricate bearings as per schedule"
    ],
    safetyPrecautions: [
      "Ensure proper earthing",
      "Never run with faulty capacitor"
    ],
  },

  {
    id: "motor-synchronous",
    name: "Synchronous Motor",
    slug: "synchronous-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GKQOGvuCajy6DF-Zr-pncj8n8UF6kr3alQ&s",
    shortDescription: "Constant speed motor used for power factor correction and high-precision industrial drives.",

    function: "Converts AC electrical power into mechanical power at a fixed synchronous speed.",
    workingPrinciple: "The rotor locks into the rotating magnetic field of the stator. It requires a DC excitation for the rotor to maintain synchronism.",

    ratings: {
      voltage: "415V - 11kV (3-phase)",
      power: "150 kW to 15 MW",
      speed: "Fixed (Synchronous Speed: Ns = 120f/P)",
      efficiency: "Very high (95% - 98%)",
    },

    applications: ["Power factor correction (Synchronous Condensers)", "Ball mills", "Reciprocating compressors", "Paper mills", "Large fans"],
    advantages: ["Constant speed regardless of load", "Can improve system power factor", "High efficiency"],
    limitations: ["Not self-starting (requires auxiliary means)", "Requires DC excitation", "Higher initial cost"],

    maintenanceTips: [
      "Check DC excitation system and slip rings",
      "Monitor for hunting or loss of synchronism",
      "Inspect rotor windings for insulation health"
    ],
    safetyPrecautions: [
      "Ensure proper synchronization before connecting to grid",
      "Do not exceed excitation limits",
      "Discharge DC field before maintenance"
    ],
  },

  {
    id: "motor-universal",
    name: "Universal Motor",
    slug: "universal-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3QjBwO5CKFkolHeWQiZ-wQkZwycSza5q8w&s",
    shortDescription: "A high-speed motor that can operate on both AC and DC power.",

    function: "High-torque, high-speed motor for portable tools and appliances.",
    workingPrinciple: "A commutated series-wound motor where the field and armature flux change direction simultaneously on AC, maintaining torque in one direction.",

    ratings: {
      voltage: "110V - 240V AC/DC",
      power: "0.1 kW to 2 kW",
      speed: "3,000 - 20,000 RPM",
    },

    applications: ["Vacuum cleaners", "Electric drills", "Angle grinders", "Blenders", "Sewing machines"],
    advantages: ["High starting torque", "Compact and lightweight", "High speed capability", "Works on AC or DC"],
    limitations: ["Noisy operation", "Short life due to brush/commutator wear", "Causes RFI (Radio Frequency Interference)"],

    maintenanceTips: [
      "Replace carbon brushes periodically",
      "Clean commutator segments to prevent arcing",
      "Check for worn bearings due to high-speed operation"
    ],
    safetyPrecautions: [
      "Ensure tool is double-insulated or properly earthed",
      "Avoid running for extended periods at extremely high speeds without load",
      "Keep away from flammable vapors (brushes spark)"
    ],
  },

  {
    id: "motor-stepper",
    name: "Stepper Motor",
    slug: "stepper-motor",
    category: "Electrical Machines",
    imageUrl: "https://www.automate.org/userAssets/mcaUploads/image/What%20Kinds%20of%20Applications%20are%20Best%20for%20Stepper%20Motors.jpeg",
    shortDescription: "Brushless DC motor that divides a full rotation into a number of equal steps for precise positioning.",

    function: "Provides precise angular positioning and speed control without feedback sensors.",
    workingPrinciple: "Electronic pulses are converted into discrete mechanical movements (steps).",

    ratings: {
      voltage: "5V - 48V DC",
      stepAngle: "0.9°, 1.8°, 7.5°",
      torque: "0.1 Nm to 30 Nm",
    },

    applications: ["3D Printers", "CNC machines", "Hard disk drives", "Robotic arms", "Camera platforms"],
    advantages: ["Precise positioning", "High torque at low speeds", "Open-loop control (no encoder needed)"],
    limitations: ["Low efficiency (draws current even when stationary)", "Can lose steps if overloaded", "Noisy at high speeds"],

    maintenanceTips: [
      "Keep motor housing clean for heat dissipation",
      "Check wiring for secure connections to the driver",
      "Avoid disassembling (can demagnetize the rotor)"
    ],
    safetyPrecautions: [
      "Never disconnect motor while the driver is energized",
      "Monitor driver temperature; use heat sinks if necessary",
      "Ensure supply voltage matches motor/driver rating"
    ],
  },

  {
    id: "motor-servo",
    name: "Servo Motor (AC/DC)",
    slug: "servo-motor",
    category: "Electrical Machines",
    imageUrl: "https://www.ato.com/content/images/thumbs/0009759_12-kw-ac-servo-motor-4-nm12-nm-3000-rpm_550.jpeg",
    shortDescription: "High-performance motor with feedback for precise control of velocity, acceleration, and position.",

    function: "Used in closed-loop systems for high-precision motion control.",
    workingPrinciple: "A motor coupled with a sensor (encoder) for position feedback to a controller.",

    ratings: {
      voltage: "24V DC to 415V AC",
      torque: "Varies",
      speed: "Up to 5000 RPM",
    },

    applications: ["Industrial robots", "Antenna positioning", "Automated manufacturing", "Aerospace actuators"],
    advantages: ["High accuracy and resolution", "High efficiency", "High torque-to-inertia ratio"],
    limitations: ["Requires complex controller and encoder", "High system cost", "Requires tuning of PID parameters"],

    maintenanceTips: [
      "Inspect encoder cables for shielding integrity",
      "Check for smooth rotation without cogging",
      "Ensure cooling fans (if present) are functional"
    ],
    safetyPrecautions: [
      "Use shielded cables to prevent signal noise",
      "Be aware of sudden movements during tuning",
      "Ensure Emergency Stop (E-Stop) is integrated into the drive"
    ],
  },

  {
    id: "motor-pmdc",
    name: "Permanent Magnet DC (PMDC) Motor",
    slug: "pmdc-motor",
    category: "Electrical Machines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGB70WbY7DEuWAHji0FvyRdMXWG6He5HROQ&s",
    shortDescription: "A DC motor using permanent magnets instead of field windings.",

    function: "Commonly used in small-scale applications and battery-operated devices.",
    workingPrinciple: "Interaction between the fixed magnetic field of permanent magnets and the armature current generates torque.",

    ratings: {
      voltage: "3V - 220V DC",
      power: "1W to 2 kW",
      speed: "1000 - 5000 RPM",
    },

    applications: ["Automobile starters", "Windshield wipers", "Toys", "Small medical equipment", "Cordless tools"],
    advantages: ["Higher efficiency (no field copper loss)", "Compact size", "Linear speed-torque characteristics"],
    limitations: ["Risk of demagnetization at high temperatures", "Limited to smaller power ratings", "Cannot vary field strength"],

    maintenanceTips: [
      "Keep away from high heat sources",
      "Check brushes and commutator wear",
      "Avoid strong external magnetic fields"
    ],
    safetyPrecautions: [
      "Do not exceed rated voltage",
      "Ensure polarity is correct for desired direction of rotation",
      "Avoid physical impact which can crack magnets"
    ],
  },

  // ==================== POWER DEVICES ====================

  {
    id: "transformer-distribution",
    name: "Distribution Transformer",
    slug: "distribution-transformer",
    category: "Power Components",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXf0Sd79UtlEmqHE7gAeLqObaXjiFS_v40A&s",
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
    id: "acb-air-circuit-breaker",
    name: "Air Circuit Breaker (ACB)",
    slug: "air-circuit-breaker-acb",
    category: "Power Components",
    imageUrl: "https://iallway.com/wp-content/uploads/2024/02/78805a221a988e79ef3f.png",
    shortDescription: "High-current protection device used in main low-voltage distribution boards.",

    function: "Protects high-power electrical circuits (above 800A) from overcurrent, short circuits, and earth faults.",
    workingPrinciple: "Operates in free air; uses an arc chute to cool and extinguish the electric arc when the contacts open under load.",

    ratings: {
      voltage: "415V - 690V AC",
      current: "800A to 6300A",
      breakingCapacity: "50kA to 150kA",
    },

    applications: ["Main Industrial Switchboards", "Generator outgoing protection", "Large commercial building mains", "Transformer secondary protection"],
    advantages: ["Adjustable trip settings (LSI - Long, Short, Instantaneous)", "High breaking capacity", "Can be maintained and repaired (unlike MCCBs)"],
    limitations: ["Large physical size", "Expensive initial cost", "Requires regular mechanical lubrication"],

    maintenanceTips: [
      "Perform periodic 'Trip' tests using the test button",
      "Clean and lubricate the racking mechanism and main contacts",
      "Check for signs of overheating on busbar connections"
    ],
    safetyPrecautions: [
      "Ensure the spring is discharged before attempting mechanical work",
      "Use remote racking handles where available to avoid arc flash risk",
      "Verify the breaker is 'Open' before racking out"
    ],
  },

  {
    id: "capacitor-bank-pfc",
    name: "Automatic Power Factor Correction (APFC) Bank",
    slug: "apfc-capacitor-bank",
    category: "Power Components",
    imageUrl: "https://tekwin.in/wp-content/webp-express/webp-images/uploads/2022/07/222.jpg.webp",
    shortDescription: "A group of capacitors used to improve power factor and reduce electricity costs.",

    function: "Offsets reactive power (kVAR) caused by inductive loads (motors/transformers) to improve efficiency.",
    workingPrinciple: "Capacitors provide leading reactive power to cancel out the lagging reactive power of motors, bringing the power factor closer to unity (1.0).",

    ratings: {
      voltage: "415V (3-phase)",
      capacity: "10 kVAR to 500+ kVAR",
      configuration: "Step-controlled via APFC Relay",
    },

    applications: ["Industrial manufacturing plants", "Water pumping stations", "Large office complexes", "Data centers"],
    advantages: ["Reduces utility penalties for low power factor", "Reduces heat in cables and transformers", "Increases system load capacity"],
    limitations: ["Can cause resonance if harmonics are present", "Capacitors degrade over time due to heat"],

    maintenanceTips: [
      "Monitor current draw of each step to detect failing capacitors",
      "Check contactors for pitting or welding",
      "Ensure cooling fans in the enclosure are operational"
    ],
    safetyPrecautions: [
      "DANGER: Capacitors store charge. Wait at least 5 minutes after power-off before touching terminals.",
      "Always discharge terminals to earth before working",
      "Ensure discharge resistors are functional"
    ],
  },

  {
    id: "avr-voltage-stabilizer",
    name: "Automatic Voltage Regulator (AVR)",
    slug: "automatic-voltage-regulator-avr",
    category: "Power Components",
    imageUrl: "https://image.made-in-china.com/202f0j00dnOcTBjyeFbz/Mingch-High-Quality-220V-Single-Phase-Automatic-Voltage-Regulator-AVR-2kVA-5kVA-10kVA-AC-Current-Input-for-Tnd-Usage.webp",
    shortDescription: "Maintains a constant voltage level to protect sensitive equipment from fluctuations.",

    function: "Automatically corrects voltage sags and surges to provide a stable output.",
    workingPrinciple: "Uses a servomotor to adjust a variable transformer (Variac) or electronic switching of transformer taps to maintain set voltage.",

    ratings: {
      voltage: "Input: 160V-260V | Output: 220V/230V",
      power: "1 kVA to 1000 kVA",
      responseType: "Servo-motor or Static (Electronic)",
    },

    applications: ["Medical diagnostic equipment (MRI/CT)", "Server rooms", "Industrial CNC machines", "Laboratory instruments"],
    advantages: ["Protects equipment from damage", "Extends lifespan of electronics", "Smooths out brownouts"],
    limitations: ["Efficiency loss during regulation", "Servo types have moving parts that wear out"],

    maintenanceTips: [
      "For servo types, inspect the carbon brush and commutator on the Variac",
      "Keep air filters clean to prevent internal overheating",
      "Verify output voltage accuracy with a calibrated multimeter"
    ],
    safetyPrecautions: [
      "Ensure the AVR is rated for the total 'Starting Current' of the connected load",
      "Do not exceed the kVA rating during peak operation",
      "Maintain proper clearance for ventilation"
    ],
  },


  // ==================== CONTROL & AUTOMATION ====================

  {
    id: "plc-siemens-s7-1200",
    name: "Siemens S7-1200 PLC",
    slug: "siemens-s7-1200-plc",
    category: "Control & Automation",
    imageUrl: "https://media.rs-online.com/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/R8624468-01?pgw=1",
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
    id: "vfd-schneider-atv320",
    name: "Variable Frequency Drive (VFD)",
    slug: "variable-frequency-drive-vfd",
    category: "Control & Automation",
    imageUrl: "https://image.made-in-china.com/202f0j00ZBcqCIFSpobk/Ycb3000-High-Performance-Current-Vector-Frequency-Converter-Variable-0-75-1000kw-Frequency-Drive-Vf-Control-VFD.webp",
    shortDescription: "Electronic device used to control motor speed and torque by varying frequency.",

    function: "Regulates the speed of AC induction motors for energy saving and process control.",
    workingPrinciple: "Converts incoming AC to DC (Rectifier), filters it (DC Bus), and then inverts it back to variable frequency AC (Inverter) using PWM.",

    ratings: {
      voltage: "200V - 480V (3-phase)",
      power: "0.37 kW to 22 kW (Typical industrial range)",
      controlType: "V/f control or Vector control",
    },

    applications: ["Conveyor speed control", "Energy-saving pump systems", "Industrial fans", "Elevators and lifts"],
    advantages: ["Significant energy savings", "Soft starting (reduces mechanical stress)", "Precise speed and torque control"],
    limitations: ["Generates harmonic distortion", "Sensitive to heat and dust", "High initial cost"],

    maintenanceTips: [
      "Keep cooling fans and heat sinks free of dust",
      "Check DC bus capacitors for bulging or leakage",
      "Ensure all control terminal screws are tight"
    ],
    safetyPrecautions: [
      "Wait for DC bus capacitors to discharge (approx. 10 mins) before opening",
      "Use shielded motor cables to reduce EMI",
      "Do not bypass the internal protection parameters"
    ],
  },

  {
    id: "contactor-magnetic-3pole",
    name: "Magnetic Contactor",
    slug: "magnetic-contactor",
    category: "Control & Automation",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZl3prxYXC8inteSUT-eDKlye8AlnTzHg4Q&s",
    shortDescription: "Electrically controlled switch used for switching a power circuit.",

    function: "Frequently makes and breaks high-current power circuits to motors and heaters.",
    workingPrinciple: "When the coil is energized, it creates a magnetic field that pulls the armature, closing the power contacts.",

    ratings: {
      coilVoltage: "24V DC, 110V AC, or 220V AC",
      current: "9A to 800A (AC3 rating)",
      poles: "3-Pole or 4-Pole",
    },

    applications: ["Direct-On-Line (DOL) starters", "Star-Delta starters", "Lighting control", "Heater switching"],
    advantages: ["Allows remote control of heavy loads", "Can handle high switching frequencies", "Provides 'no-volt' protection"],
    limitations: ["Mechanical wear on contacts over time", "Coil can burn out if voltage is unstable"],

    maintenanceTips: [
      "Inspect contacts for pitting or carbon buildup",
      "Listen for 'humming' or 'buzzing' (indicates dirty magnetic pole faces)",
      "Verify auxiliary contacts are switching correctly"
    ],
    safetyPrecautions: [
      "Never manually push the contactor with a screwdriver while energized",
      "Ensure the coil voltage matches the control circuit",
      "Use arc chutes if the contactor is designed for them"
    ],
  },

  {
    id: "relay-thermal-overload",
    name: "Thermal Overload Relay (TOR)",
    slug: "thermal-overload-relay",
    category: "Control & Automation",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU9sQejvrlEzfb_1o2FNNcUsMJd29AHxb3Q&s",
    shortDescription: "Protective device that prevents motors from burning out due to overload.",

    function: "Trips the control circuit when the motor draws excessive current for too long.",
    workingPrinciple: "Current flows through bimetallic strips; excess heat causes them to bend and trigger the trip mechanism.",

    ratings: {
      range: "Adjustable (e.g., 4A - 6A, 18A - 25A)",
      tripClass: "Class 10 (Standard), Class 20 (Heavy duty)",
    },

    applications: ["Motor starter protection", "Pump protection", "Phase failure protection"],
    advantages: ["Inexpensive motor protection", "Adjustable current settings", "Includes 'Test' and 'Reset' buttons"],
    limitations: ["Must be used with a contactor (cannot break power directly)", "Does not protect against short circuits"],

    maintenanceTips: [
      "Test the trip contact regularly using the test slider",
      "Ensure the setting matches the Motor Full Load Current (FLC)",
      "Check that the reset mode (Auto/Manual) is correctly selected"
    ],
    safetyPrecautions: [
      "Do not set the dial higher than the motor nameplate rating",
      "Investigate the cause of a trip before resetting",
      "Wait for the bimetal to cool before attempting a reset"
    ],
  },

  {
    id: "sensor-proximity-inductive",
    name: "Inductive Proximity Sensor",
    slug: "inductive-proximity-sensor",
    category: "Control & Automation",
    imageUrl: "https://lorentzzi.com/wp-content/uploads/2023/03/LM24-inductive-sensor-2.jpg",
    shortDescription: "Non-contact sensor used to detect the presence of metallic objects.",

    function: "Detects metal targets without physical contact in automated machinery.",
    workingPrinciple: "Emits an electromagnetic field; when a metal object enters the field, eddy currents are induced, changing the oscillation.",

    ratings: {
      voltage: "10V - 30V DC",
      sensingDistance: "2mm to 20mm",
      outputType: "PNP or NPN (Normally Open/Closed)",
    },

    applications: ["Position sensing on conveyor belts", "Counting metallic parts", "Speed sensing (Tachometer pulse)", "Limit detection"],
    advantages: ["No mechanical wear (long life)", "Impervious to oil, dust, and moisture", "High switching speed"],
    limitations: ["Only detects metallic objects", "Short sensing range compared to optical sensors"],

    maintenanceTips: [
      "Keep the sensing face clean of metal shavings",
      "Check for loose mounting brackets due to vibration",
      "Monitor the LED indicator to verify switching"
    ],
    safetyPrecautions: [
      "Verify correct wiring (Brown+, Blue-, Black-Signal)",
      "Do not exceed the maximum switching current",
      "Ensure the target metal is within the rated sensing range"
    ],
  },


  // ==================== CABLES & ACCESSORIES ====================

  {
    id: "armoured-cable-4core",
    name: "4-Core Armoured Power Cable",
    slug: "4-core-armoured-power-cable",
    category: "Cables & Accessories",
    imageUrl: "https://image.made-in-china.com/365f3j00EmSqvpjFlHkz/4-Core-16mm-25mm-35mm-50mm-70mm-95mm-120mm-150mm-185mm-240mm-Copper-Aluminum-Armoured-Power-Cable-Price.webp",
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

  {
    id: "cable-nyy-flexible",
    name: "NYY Flexible Power Cable",
    slug: "nyy-flexible-power-cable",
    category: "Cables & Accessories",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__cCHXSlFQ2Q70V0ivX5lD9ptXqhNpUwksg&s",
    shortDescription: "Versatile PVC insulated power and control cable for fixed installations.",

    function: "Transmits electrical energy in energy stations, industrial plants, and local grids.",
    workingPrinciple: "Multi-strand copper conductors allow for flexibility during installation while PVC insulation prevents leakage.",

    ratings: {
      voltage: "0.6/1 kV",
      cores: "1, 2, 3, 4, or 5 Cores",
      temperature: "Max 70°C (Normal operation)",
    },

    applications: ["Indoor wiring", "Direct burial (with protection)", "Cable ducts", "Control panels"],
    advantages: ["High flexibility", "Flame retardant (PVC)", "UV resistant outer sheath"],
    limitations: ["No mechanical armor (prone to physical damage)", "Not suitable for high-vibration machinery without conduit"],

    maintenanceTips: [
      "Inspect outer sheath for cracks or discoloration",
      "Ensure cable ties are not too tight (prevents insulation 'cold flow')",
      "Verify termination tightness at both ends"
    ],
    safetyPrecautions: [
      "Do not exceed the rated current-carrying capacity (Ampacity)",
      "Use proper color coding (L1, L2, L3, N, E) for identification",
      "Avoid sharp bends that could stress the copper strands"
    ],
  },

  {
    id: "cable-xlpe-armoured",
    name: "XLPE Armoured Power Cable",
    slug: "xlpe-armoured-power-cable",
    category: "Cables & Accessories",
    imageUrl: "https://image.made-in-china.com/365f3j00eozcltUJHLbD/Armored-Cable-Suppliers-Pure-Copper-XLPE-Insulation-Armoured-Swa-Power-Cable-4-Core-25mm.webp",
    shortDescription: "Cross-linked Polyethylene insulated cable with steel wire armoring for heavy-duty use.",

    function: "Primary power feeder for heavy industrial loads and underground mains.",
    workingPrinciple: "XLPE insulation allows the conductor to run at higher temperatures (90°C) than standard PVC, increasing current capacity.",

    ratings: {
      voltage: "0.6/1 kV to 33 kV",
      insulation: "XLPE (Cross-linked Polyethylene)",
      armor: "SWA (Steel Wire Armour) or STA (Steel Tape Armour)",
    },

    applications: ["Main power distribution", "Mining operations", "Substation connections", "Underground direct burial"],
    advantages: ["Very high mechanical strength", "Higher current rating than PVC cables", "Excellent chemical and moisture resistance"],
    limitations: ["Very stiff and difficult to bend", "Requires specialized heavy-duty glands"],

    maintenanceTips: [
      "Check the armor for corrosion or rust",
      "Perform insulation resistance (Megger) tests annually",
      "Ensure the armor is effectively grounded at the supply end"
    ],
    safetyPrecautions: [
      "Use the armor as a secondary earth, but always include a dedicated CPC (Circuit Protective Conductor)",
      "Requires proper cable pulling equipment to prevent internal conductor stretch",
      "Seal ends immediately after cutting to prevent moisture ingress"
    ],
  },

  {
    id: "cable-gland-brass",
    name: "Industrial Cable Gland (CW/BW)",
    slug: "industrial-cable-gland",
    category: "Cables & Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/51n-wsXX05L._AC_UF894,1000_QL80_.jpg",
    shortDescription: "Mechanical cable entry device used to attach and secure the end of a cable to equipment.",

    function: "Provides strain relief, sealing, and electrical continuity for cable armor.",
    workingPrinciple: "A compression nut tightens a seal around the cable outer sheath and/or grips the steel armor wires.",

    ratings: {
      material: "Brass, Nickel-plated Brass, or Stainless Steel",
      ipRating: "IP54 to IP68 (Dust/Waterproof)",
      sizes: "20mm, 25mm, 32mm, 40mm, 50mm, 63mm, 75mm",
    },

    applications: ["Motor terminal boxes", "Junction boxes", "Distribution boards", "Control stations"],
    advantages: ["Maintains the IP rating of the enclosure", "Prevents cable pull-out", "Ensures armor-to-earth continuity"],
    limitations: ["Must precisely match the cable diameter", "Overtightening can damage cable insulation"],

    maintenanceTips: [
      "Check for looseness caused by thermal expansion/vibration",
      "Ensure the rubber shroud (if used) is not perished",
      "Verify that the 'Earth Tag' (banjo) is clean and secure"
    ],
    safetyPrecautions: [
      "Always use the correct size gland for the specific cable OD (Outer Diameter)",
      "In hazardous areas, use only certified 'Ex' rated glands",
      "Deburr the hole in the enclosure before fitting the gland"
    ],
  },

  {
    id: "cable-lug-crimping",
    name: "Copper Compression Lug",
    slug: "copper-compression-lug",
    category: "Cables & Accessories",
    imageUrl: "https://www.nexans.co.uk/.rest/eservice/dam/v1/image/243434?variant=856x856&scaleType=FILL",
    shortDescription: "Connector used for terminating large power cables to busbars or switchgear terminals.",

    function: "Ensures a high-conductivity, low-resistance mechanical connection between cable and terminal.",
    workingPrinciple: "The cable conductor is inserted into the lug barrel and permanently deformed (crimped) using a hydraulic or mechanical tool.",

    ratings: {
      material: "Electrolytic Tin-plated Copper",
      sizes: "1.5mm² to 630mm²",
      studSizes: "M6, M8, M10, M12, M16",
    },

    applications: ["Transformer terminations", "Busbar connections", "Motor starter wiring", "Battery bank connections"],
    advantages: ["Excellent electrical conductivity", "Vibration-proof connection", "Tin plating prevents copper oxidation"],
    limitations: ["Requires specific crimping tools", "Permanent (cannot be reused if removed)"],

    maintenanceTips: [
      "Look for signs of heat (discoloration) on the lug or cable insulation",
      "Ensure the bolt securing the lug is torqued correctly",
      "Use an antioxidant paste on aluminum-to-copper joints"
    ],
    safetyPrecautions: [
      "Ensure all wire strands are fully inside the lug barrel before crimping",
      "Use the correct 'Die' size on the crimper to prevent under-crimping",
      "Cover the lug barrel with heat-shrink tubing for insulation and phase identification"
    ],
  },


  // ==================== PROTECTION DEVICES ====================

  {
    id: "mccb-100a",
    name: "100A Molded Case Circuit Breaker (MCCB)",
    slug: "100a-mccb",
    category: "Protection Devices",
    imageUrl: "https://image.made-in-china.com/2f0j00GuAcdfOghzpI/100A-MCCB-Moulded-Case-Circuit-Breakers-Case-Busbar-3p-Main-Circuit-Breaker.webp",
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
    id: "rccb-residual-current",
    name: "Residual Current Circuit Breaker (RCCB/RCD)",
    slug: "rccb-residual-current-device",
    category: "Protection Devices",
    imageUrl: "https://toolssavvy.ph/cdn/shop/files/NL1-63-63A-2P-RCCB-3.png?v=1769742793",
    shortDescription: "Life-saving device that detects earth leakage and prevents electric shock.",

    function: "Protects people from electrocution and prevents fires caused by earth faults.",
    workingPrinciple: "Monitors the balance between Phase and Neutral currents. If a difference (leakage) is detected, it trips the circuit instantly.",

    ratings: {
      sensitivity: "30mA (Personnel) / 300mA (Fire protection)",
      current: "25A, 40A, 63A",
      poles: "2-Pole (Single phase) or 4-Pole (Three phase)",
    },

    applications: ["Domestic consumer units", "Socket outlet circuits", "Damp environments (Kitchens/Bathrooms)", "Construction sites"],
    advantages: ["Detects very small leakage currents", "Extremely fast tripping (typically <40ms)", "Prevents electrical fires"],
    limitations: ["Does not protect against overloads or short circuits (unless it is an RCBO)", "Prone to nuisance tripping in older installations"],

    maintenanceTips: [
      "Press the 'Test' button monthly to ensure the internal mechanism works",
      "Check for loose neutral connections which cause malfunction",
      "Keep the device free from heavy dust and moisture"
    ],
    safetyPrecautions: [
      "Must be paired with an MCB for full circuit protection",
      "Ensure the sensitivity (mA) matches the application requirements",
      "Never bypass an RCD that keeps tripping; investigate the leakage fault"
    ],
  },

  {
    id: "spd-surge-protection",
    name: "Surge Protective Device (SPD)",
    slug: "surge-protection-spd",
    category: "Protection Devices",
    imageUrl: "https://image.made-in-china.com/202f0j00RQTboPGrRqcV/385V-AC-SPD-Current-Surge-Arrester-Protection-Protector.webp",
    shortDescription: "Protects sensitive electronics from high-voltage spikes and lightning strikes.",

    function: "Limits transient voltages by diverting surge currents to the ground.",
    workingPrinciple: "Contains Metal Oxide Varistors (MOVs) that have high resistance at normal voltage but become highly conductive during a surge.",

    ratings: {
      type: "Type 1 (Lightning), Type 2 (Switching), Type 3 (Point of use)",
      maxVoltage: "275V - 440V AC",
      dischargeCurrent: "20kA to 100kA",
    },

    applications: ["Main distribution boards", "Data centers", "Solar PV installations", "CCTV and Telecom racks"],
    advantages: ["Saves expensive electronic equipment", "Reduces downtime from storm damage", "Automated protection"],
    limitations: ["Sacrificial device (needs replacement after a major hit)", "Requires very low impedance grounding to work effectively"],

    maintenanceTips: [
      "Check the visual indicator (Green = OK, Red = Replace)",
      "Ensure the earth cable is as short and straight as possible",
      "Verify the backup fuse/breaker for the SPD is closed"
    ],
    safetyPrecautions: [
      "Always install an SPD before the equipment it is meant to protect",
      "Do not perform insulation resistance (Megger) tests with SPD connected",
      "Select the correct 'Type' based on the building's exposure to lightning"
    ],
  },

  {
    id: "mpcb-motor-protection",
    name: "Motor Protection Circuit Breaker (MPCB)",
    slug: "motor-protection-circuit-breaker",
    category: "Protection Devices",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iEqpgM7QJ3My96t7v38KdxUo4EnOWen3rA&s",
    shortDescription: "Integrated device providing thermal, magnetic, and phase-loss protection for motors.",

    function: "Combines the functions of an MCB and an Overload Relay into a single unit for motor control.",
    workingPrinciple: "Uses a bimetallic strip for overload and an electromagnetic coil for short-circuit protection.",

    ratings: {
      currentRange: "Adjustable (e.g., 1.6A-2.5A, 10A-16A)",
      breakingCapacity: "Up to 100kA",
      trippingClass: "Class 10",
    },

    applications: ["Direct-On-Line (DOL) motor starters", "HVAC systems", "Industrial pumping stations"],
    advantages: ["Protects against phase loss (single-phasing)", "Compact (saves space in panels)", "Manual ON/OFF toggle for isolation"],
    limitations: ["More expensive than standard MCBs", "Specific to motor loads; not for general lighting/power"],

    maintenanceTips: [
      "Verify the current dial is set exactly to the motor nameplate FLC",
      "Check for tight busbar and cable connections",
      "Exercise the manual switch occasionally to ensure it doesn't seize"
    ],
    safetyPrecautions: [
      "Ensure the MPCB is locked out during motor maintenance",
      "Check that the breaking capacity is sufficient for the supply fault level",
      "Do not use as a frequent start/stop switch (use a contactor instead)"
    ],
  },

  {
    id: "fuse-hrc-industrial",
    name: "High Rupturing Capacity (HRC) Fuse",
    slug: "hrc-fuse",
    category: "Protection Devices",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9XJhctGYC4VbLqMWUPFu0gBHRekz7vX_1g&s",
    shortDescription: "High-reliability fuse capable of interrupting very high fault currents.",

    function: "Provides final backup protection for cables and heavy industrial equipment.",
    workingPrinciple: "A silver or copper element melts during a fault. The body is filled with silica sand to quench the arc instantly.",

    ratings: {
      current: "2A to 1250A",
      breakingCapacity: "80kA to 120kA",
      voltage: "415V - 11kV",
    },

    applications: ["Transformer protection", "Main switchgear backup", "Capacitor bank protection", "Busbar feeders"],
    advantages: ["Extremely reliable (no moving parts)", "High-speed clearing of short circuits", "Consistent performance over many years"],
    limitations: ["Single-use only (must be replaced after blowing)", "Can lead to single-phasing if only one fuse in a 3-phase set blows"],

    maintenanceTips: [
      "Check for oxidation on fuse base clips",
      "Use a multimeter (continuity) to verify if the fuse is blown",
      "Ensure the fuse holder tension is tight to prevent arcing"
    ],
    safetyPrecautions: [
      "Always replace with the exact same current and voltage rating",
      "Use a specialized 'Fuse Puller' for safe removal",
      "In 3-phase systems, if one fuse blows, check the motor for damage before replacing"
    ],
  },

  // ==================== INSTRUMENTANTION ====================

  {
    id: "current-transformer",
    name: "Current Transformer (CT)",
    slug: "current-transformer",
    category: "Instrumentation",
    imageUrl: "https://www.cn-delixi.com/wp-content/uploads/2024/01/image-25.webp",
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
    id: "instrument-digital-multimeter",
    name: "Digital Multimeter (DMM)",
    slug: "digital-multimeter",
    category: "Instrumentation",
    imageUrl: "https://cdn11.bigcommerce.com/s-sgprcd6/images/stencil/1280x1280/products/707/16195/TECPEL_Electricals_and_Electronics_Testing_Multimeters_DMM-8060__44742.1682857612.jpg?c=2",
    shortDescription: "The essential diagnostic tool for measuring voltage, current, and resistance.",

    function: "Measures multiple electrical properties to troubleshoot circuits and components.",
    workingPrinciple: "Converts analog input signals into digital data using an Analog-to-Digital Converter (ADC) for display.",

    ratings: {
      category: "CAT III 600V / CAT IV 300V",
      display: "LCD with Backlight",
      features: "Auto-ranging, True RMS",
    },

    applications: ["Circuit troubleshooting", "Battery testing", "Component testing (Diodes/Capacitors)", "Industrial maintenance"],
    advantages: ["High accuracy", "Portable and easy to use", "Multi-functional"],
    limitations: ["Requires battery power", "Digital lag on rapidly changing signals"],

    maintenanceTips: [
      "Check internal fuses if current readings are zero",
      "Replace batteries when the low-battery indicator appears to maintain accuracy",
      "Inspect test leads for insulation damage or broken tips"
    ],
    safetyPrecautions: [
      "Always verify the dial is on the correct setting before touching live wires",
      "Never measure resistance on a live circuit",
      "Ensure leads are plugged into the correct ports (Com, V, or 10A)"
    ],
  },

  {
    id: "instrument-energy-meter-3phase",
    name: "3-Phase Digital Energy Meter",
    slug: "3-phase-energy-meter",
    category: "Instrumentation",
    imageUrl: "https://image.made-in-china.com/202f0j00kMwiJqnrwWGe/DC-Smart-Electricity-3-Phase-Kwh-Modbus-RTU-Energy-Meter-Power-Meter-for-Current-Energy-Measurment.webp",
    shortDescription: "Records electrical energy consumption for billing and monitoring.",

    function: "Measures and displays total energy consumption (kWh), voltage, current, and power factor.",
    workingPrinciple: "Calculates energy by integrating the product of instantaneous voltage and current over time.",

    ratings: {
      voltage: "3 x 230/400 V AC",
      current: "5(100) A (Direct) or CT Operated",
      accuracy: "Class 1.0",
    },

    applications: ["Industrial sub-metering", "Commercial billing", "Power quality monitoring", "Load management"],
    advantages: ["Tamper-proof design", "High precision", "Digital communication (RS485/Modbus) for remote reading"],
    limitations: ["Sensitive to high harmonic distortion", "Requires professional installation"],

    maintenanceTips: [
      "Verify terminal tightness to prevent arcing and incorrect readings",
      "Check that the 'Pulse' LED is blinking in proportion to the load",
      "Keep the display window clean for easy reading"
    ],
    safetyPrecautions: [
      "Seal the terminal cover to prevent unauthorized access",
      "Ensure CT ratios are correctly programmed if using external transformers",
      "Do not exceed the maximum rated current for direct-connected meters"
    ],
  },

  {
    id: "instrument-frequency-meter",
    name: "Digital Frequency Meter",
    slug: "digital-frequency-meter",
    category: "Instrumentation",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/11/361903052/CY/ZG/YO/19451612/ems-13a-2866.jpg",
    shortDescription: "Displays the frequency of an AC power system (Hz).",

    function: "Monitors the stability of the AC supply, critical for generator operations.",
    workingPrinciple: "Counts the number of cycles (zero-crossings) of the AC waveform per second.",

    ratings: {
      range: "45.0 Hz to 65.0 Hz",
      voltage: "110V - 440V AC",
      display: "7-Segment LED",
    },

    applications: ["Generator control panels", "Power plant monitoring", "Synchronizing panels", "Variable speed drive output monitoring"],
    advantages: ["Instant visual feedback on system stability", "Highly accurate compared to vibrating reed types", "Easy panel mounting"],
    limitations: ["Only works with AC signals", "Requires a minimum voltage threshold to trigger a reading"],

    maintenanceTips: [
      "Periodically calibrate against a standard reference",
      "Check for loose rear-panel wiring",
      "Protect from extreme vibration"
    ],
    safetyPrecautions: [
      "Ensure the meter's voltage rating matches the system voltage",
      "Disconnect during high-voltage insulation tests",
      "Use appropriate fuses on the voltage sensing lines"
    ],
  },

  {
    id: "instrument-earth-tester",
    name: "Digital Earth Resistance Tester",
    slug: "earth-resistance-tester",
    category: "Instrumentation",
    imageUrl: "https://www.kewtechcorp.com/media/uploads/2021/11/KEW4105A-cropped-1024x938.png",
    shortDescription: "Specialized tool used to measure the resistance of grounding systems.",

    function: "Ensures that the earthing system is effective enough to safely divert fault currents.",
    workingPrinciple: "Injects a current into the earth through spikes and measures the resulting voltage drop (Fall of Potential method).",

    ratings: {
      range: "0.01 Ω to 2000 Ω",
      method: "3-Pole or 4-Pole testing",
      safety: "IEC 61010-1",
    },

    applications: ["Substation commissioning", "Lightning protection testing", "Building safety inspections", "Telecommunication site grounding"],
    advantages: ["Direct digital readout of Ohms", "Noise rejection features", "Essential for regulatory compliance"],
    limitations: ["Requires physical space to drive test spikes", "Inaccurate in very dry or frozen soil without wetting"],

    maintenanceTips: [
      "Clean the test spikes after every use to prevent rust",
      "Keep test cables neatly coiled to prevent internal breaks",
      "Check battery levels before going to the field"
    ],
    safetyPrecautions: [
      "Never test during a thunderstorm",
      "Ensure the system being tested is de-energized or isolated from the grid",
      "Wear appropriate PPE when driving spikes near underground utilities"
    ],
  },
];