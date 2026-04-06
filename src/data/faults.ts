import { Fault } from '../types';

export const faults: Fault[] = [

  // ==================== 3-PHASE SQUIRREL MOTOR====================
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

  // ==================== DC SHUNT MOTOR ====================
  {
    id: "f13",
    componentId: "motor-dc-shunt",
    title: "Excessive Sparking at Brushes",
    category: "Commutation Issues",
    symptoms: "Visible sparking at the commutator, localized heating, and rapid brush wear.",
    causes: ["Dirty or pitted commutator", "Incorrect brush tension", "High mica between segments", "Overloading"],
    troubleshootingSteps: [
      "1. Inspect commutator for high mica or pitting",
      "2. Check brush length and spring tension",
      "3. Clean commutator with a proper cleaning stone",
      "4. Verify load current is within nameplate rating"
    ],
    toolsRequired: ["Screwdriver set", "Commutator stone", "Clamp meter"],
    safetyWarnings: "Risk of arc flash. Do not adjust brushes while the motor is energized.",
    preventiveMeasures: ["Regular brush inspection", "Keep motor environment free of oil mist"]
  },
  {
    id: "f14",
    componentId: "motor-dc-shunt",
    title: "Motor Overspeeding (Runaway)",
    category: "Control Faults",
    symptoms: "Motor speed increases uncontrollably beyond rated RPM.",
    causes: ["Field circuit open (loss of excitation)", "Faulty field rheostat", "Loose field terminal connections"],
    troubleshootingSteps: [
      "1. Immediately disconnect power supply",
      "2. Check continuity of the field winding",
      "3. Inspect field terminal connections for looseness",
      "4. Test field rheostat resistance"
    ],
    toolsRequired: ["Multimeter", "Insulation tester"],
    safetyWarnings: "DANGER: A DC shunt motor can disintegrate due to centrifugal force if the field is lost. Never run without field protection.",
    preventiveMeasures: ["Install a field-loss protection relay", "Use vibration-proof terminal connectors"]
  },

  // ==================== DC SERIES MOTOR ====================
  {
    id: "f15",
    componentId: "motor-dc-series",
    title: "Motor fails to start under load",
    category: "Starting Problems",
    symptoms: "Motor hums but refuses to rotate when load is applied.",
    causes: ["Low supply voltage", "Open circuit in armature or field", "Mechanical jam in load", "Seized bearings"],
    troubleshootingSteps: [
      "1. Measure voltage at motor terminals",
      "2. Check continuity of series field and armature",
      "3. Manually rotate load to check for mechanical binding",
      "4. Inspect brushes for proper contact"
    ],
    toolsRequired: ["Multimeter", "Clamp meter", "Wrench set"],
    safetyWarnings: "High starting torque can cause mechanical shifts; stay clear of moving parts.",
    preventiveMeasures: ["Regular bearing lubrication", "Routine load-limit testing"]
  },
  {
    id: "f16",
    componentId: "motor-dc-series",
    title: "Sudden overspeeding at no-load",
    category: "Operational Faults",
    symptoms: "Motor speed increases dangerously when load is removed.",
    causes: ["Broken drive belt or coupling", "Sudden drop in mechanical load"],
    troubleshootingSteps: [
      "1. Shut down motor immediately",
      "2. Inspect mechanical coupling and belts",
      "3. Check for shaft damage",
      "4. Re-evaluate speed limiting controls"
    ],
    toolsRequired: ["Flashlight", "Tachometer"],
    safetyWarnings: "Never run a DC series motor without a mechanical load coupled.",
    preventiveMeasures: ["Use direct couplings instead of belts where possible", "Install overspeed trip switches"]
  },

  // ==================== SLIP RING INDUCTION MOTOR ====================
  {
    id: "f17",
    componentId: "motor-slip-ring",
    title: "Low starting torque",
    category: "Starting Problems",
    symptoms: "Motor struggles to start despite being energized.",
    causes: ["External resistance bank fault", "Dirty slip rings", "Worn brushes", "Open rotor circuit"],
    troubleshootingSteps: [
      "1. Inspect external resistor bank for open circuits",
      "2. Clean slip rings with fine sandpaper",
      "3. Check brush pressure and contact",
      "4. Measure rotor circuit continuity"
    ],
    toolsRequired: ["Multimeter", "Contact cleaner", "Sandpaper"],
    safetyWarnings: "Rotor circuit carries significant voltage during start-up. Treat as live.",
    preventiveMeasures: ["Periodic slip ring resurfacing", "Verify resistor bank cooling"]
  },
  {
    id: "f18",
    componentId: "motor-slip-ring",
    title: "Arcing at slip rings",
    category: "Electrical Faults",
    symptoms: "Visible arcing and pitting on the slip ring surface.",
    causes: ["Carbon dust buildup", "Uneven brush wear", "Moisture on insulation"],
    troubleshootingSteps: [
      "1. Clean slip ring assembly of carbon dust",
      "2. Ensure brushes are properly seated",
      "3. Test insulation resistance of the slip ring unit",
      "4. Check for vibration in the rotor shaft"
    ],
    toolsRequired: ["Insulation tester", "Compressed air", "Cleaning solvent"],
    safetyWarnings: "Risk of phase-to-phase short at the slip rings. Use proper PPE.",
    preventiveMeasures: ["Ensure dust extraction is functional", "Regularly wipe down insulation supports"]
  },

  // ==================== SINGLE PHASE INDUCTION MOTOR ====================
  {
    id: "f19",
    componentId: "motor-single-phase",
    title: "Motor hums but won't start",
    category: "Starting Problems",
    symptoms: "Motor makes a loud humming sound but needs a manual 'push' to start.",
    causes: ["Faulty starting capacitor", "Stuck centrifugal switch", "Open auxiliary winding"],
    troubleshootingSteps: [
      "1. Test capacitor with a capacitance meter",
      "2. Listen for the 'click' of the centrifugal switch during spin-down",
      "3. Measure resistance of starting and main windings",
      "4. Inspect centrifugal switch contacts for pitting"
    ],
    toolsRequired: ["Multimeter with capacitance mode", "Screwdriver"],
    safetyWarnings: "Capacitors store charge. Discharge them before testing.",
    preventiveMeasures: ["Replace capacitors periodically", "Keep motor away from high humidity"]
  },
  {
    id: "f20",
    componentId: "motor-single-phase",
    title: "Frequent tripping on thermal overload",
    category: "Overheating Issues",
    symptoms: "Motor stops unexpectedly and is hot to the touch.",
    causes: ["Centrifugal switch failing to open", "Low supply voltage", "Blocked ventilation"],
    troubleshootingSteps: [
      "1. Check if starting winding remains energized after start",
      "2. Measure line voltage during operation",
      "3. Clean motor vents and internal fan",
      "4. Check if the load exceeds motor kVA rating"
    ],
    toolsRequired: ["Clamp meter", "Infrared thermometer"],
    safetyWarnings: "Motor may restart automatically if it has an auto-reset thermal protector.",
    preventiveMeasures: ["Ensure proper ambient cooling", "Check belt tension"]
  },

  // ==================== SYNCHRONOUS MOTOR ====================
  {
    id: "f21",
    componentId: "motor-synchronous",
    title: "Motor fails to pull into synchronism",
    category: "Starting & Running Problems",
    symptoms: "Motor reaches near-synchronous speed but 'hunts' and vibrates.",
    causes: ["Insufficient DC excitation", "Excessive load torque during start", "Faulty field discharge resistor"],
    troubleshootingSteps: [
      "1. Check DC excitation voltage and current",
      "2. Reduce load during the starting sequence",
      "3. Inspect field application relay and timing",
      "4. Verify damper (Amortisseur) winding condition"
    ],
    toolsRequired: ["DC Clamp meter", "Multimeter", "Tachometer"],
    safetyWarnings: "High voltage induced in rotor during start. Do not touch field circuit.",
    preventiveMeasures: ["Regularly check exciter brushes", "Monitor load levels during start"]
  },
  {
    id: "f22",
    componentId: "motor-synchronous",
    title: "Excessive Hunting",
    category: "Operational Faults",
    symptoms: "Oscillations in speed and current around the synchronous point.",
    causes: ["Rapid load fluctuations", "Faulty damper winding", "Unstable excitation current"],
    troubleshootingSteps: [
      "1. Check for periodic changes in mechanical load",
      "2. Inspect damper winding for loose bars",
      "3. Monitor stability of the DC excitation source",
      "4. Verify power factor settings"
    ],
    toolsRequired: ["Power quality analyzer", "Vibration meter"],
    safetyWarnings: "Severe hunting can cause mechanical failure and trip the main breaker.",
    preventiveMeasures: ["Use a stable DC power source", "Ensure mechanical couplings are tight"]
  },

  // ==================== UNIVERSAL MOTOR ====================
  {
    id: "f23",
    componentId: "motor-universal",
    title: "Heavy arcing and burning smell",
    category: "Commutation Issues",
    symptoms: "Intense sparking at brushes, ozone smell, and loss of power.",
    causes: ["Short-circuited armature windings", "Open armature coil", "Worn brushes"],
    troubleshootingSteps: [
      "1. Perform a 'growler' test on the armature",
      "2. Check for blackened commutator segments",
      "3. Measure resistance between adjacent commutator bars",
      "4. Replace worn carbon brushes"
    ],
    toolsRequired: ["Growler tester", "Multimeter", "Screwdriver"],
    safetyWarnings: "Turn off and unplug tools before inspection. Arcing creates high heat.",
    preventiveMeasures: ["Avoid stalling the motor", "Blow out carbon dust regularly"]
  },
  {
    id: "f24",
    componentId: "motor-universal",
    title: "Motor runs only at high speed",
    category: "Control Faults",
    symptoms: "Speed control trigger/dial has no effect; motor runs at max RPM.",
    causes: ["Shorted speed control TRIAC", "Bypassed internal controller", "Faulty potentiometer"],
    troubleshootingSteps: [
      "1. Test the speed control module/TRIAC",
      "2. Inspect internal wiring for bypasses",
      "3. Check continuity of the speed adjustment potentiometer",
      "4. Replace the electronic control assembly"
    ],
    toolsRequired: ["Multimeter", "Soldering iron"],
    safetyWarnings: "Uncontrolled high speed can cause tool bits to shatter.",
    preventiveMeasures: ["Avoid moisture in the switch handle", "Do not force the speed dial"]
  },

  // ==================== STEPPER MOTOR ====================
  {
    id: "f25",
    componentId: "motor-stepper",
    title: "Motor missing steps",
    category: "Positioning Faults",
    symptoms: "Final position is inaccurate; motor makes a clicking noise without smooth movement.",
    causes: ["Excessive mechanical load", "Resonance at specific speeds", "Insufficient current from driver"],
    troubleshootingSteps: [
      "1. Reduce speed/acceleration in software",
      "2. Adjust driver current pot (Vref)",
      "3. Check for mechanical binding in the linear rails/lead screws",
      "4. Ensure power supply voltage is stable"
    ],
    toolsRequired: ["Screwdriver", "Multimeter", "Allen keys"],
    safetyWarnings: "Stepper drivers can become very hot. Do not touch during operation.",
    preventiveMeasures: ["Use micro-stepping to reduce resonance", "Properly size motor for the load"]
  },
  {
    id: "f26",
    componentId: "motor-stepper",
    title: "Motor vibrates but doesn't rotate",
    category: "Electrical Faults",
    symptoms: "Shaft oscillates back and forth rapidly without completing a turn.",
    causes: ["Incorrect phase wiring", "Broken wire in one motor phase", "Faulty driver channel"],
    troubleshootingSteps: [
      "1. Check wiring diagram and phase pairs (A+/A- and B+/B-)",
      "2. Measure resistance of each motor coil",
      "3. Swap motor to a known working driver channel",
      "4. Inspect connectors for loose pins"
    ],
    toolsRequired: ["Multimeter", "Wiring diagram"],
    safetyWarnings: "Never disconnect a stepper motor while the driver is powered.",
    preventiveMeasures: ["Use high-flex cables for moving axes", "Secure all connectors"]
  },

  // ==================== SERVO MOTOR ====================
  {
    id: "f27",
    componentId: "motor-servo",
    title: "Servo Error / Fault Trip",
    category: "Control Faults",
    symptoms: "Driver displays an error code (e.g., Overcurrent, Encoder Error).",
    causes: ["Encoder feedback cable failure", "Mechanical blockage", "PID tuning instability"],
    troubleshootingSteps: [
      "1. Read the specific error code from the drive manual",
      "2. Check encoder cable shielding and connections",
      "3. Verify motor can rotate freely by hand (when de-energized)",
      "4. Re-run auto-tuning sequence"
    ],
    toolsRequired: ["Drive software/laptop", "Multimeter"],
    safetyWarnings: "Servo motors can move violently during a fault or tuning. Stay clear.",
    preventiveMeasures: ["Use high-quality shielded feedback cables", "Properly ground the drive"]
  },
  {
    id: "f28",
    componentId: "motor-servo",
    title: "High-pitched noise or oscillation",
    category: "Operational Faults",
    symptoms: "Motor whines or vibrates when at a standstill or low speed.",
    causes: ["Gain settings too high (PID)", "Mechanical resonance", "Loose coupling"],
    troubleshootingSteps: [
      "1. Lower the proportional gain (Kp) in the drive software",
      "2. Enable notch filters to cancel resonance frequencies",
      "3. Inspect the coupling for any 'play' or looseness",
      "4. Check for electromagnetic interference (EMI) on feedback lines"
    ],
    toolsRequired: ["Oscilloscope", "Drive software", "Hex keys"],
    safetyWarnings: "Continuous oscillation can overheat the motor and damage the encoder.",
    preventiveMeasures: ["Regularly check mechanical tightness", "Isolate power and signal cables"]
  },

  // ==================== PMDC MOTOR ====================
  {
    id: "f29",
    componentId: "motor-pmdc",
    title: "Permanent loss of torque",
    category: "Magnetic Faults",
    symptoms: "Motor runs but has very little power even with full voltage.",
    causes: ["Demagnetization due to overheating", "Severe physical impact", "Internal short circuit"],
    troubleshootingSteps: [
      "1. Measure no-load current vs. rated current",
      "2. Check for signs of internal heat (discolored casing)",
      "3. Measure armature resistance",
      "4. Replace motor if magnets are demagnetized"
    ],
    toolsRequired: ["Multimeter", "Gauss meter (optional)"],
    safetyWarnings: "PMDC motors can act as generators; they produce voltage when spun manually.",
    preventiveMeasures: ["Do not exceed rated current", "Avoid mechanical shocks to the motor"]
  },
  {
    id: "f30",
    componentId: "motor-pmdc",
    title: "Motor runs only in one direction",
    category: "Starting & Running Problems",
    symptoms: "Motor works fine in one polarity but fails when reversed.",
    causes: ["Faulty H-bridge driver or switch", "One-way diode in circuit", "Worn brushes making contact only one way"],
    troubleshootingSteps: [
      "1. Test the reversing switch or controller outputs",
      "2. Check for accidental bypass diodes in the wiring",
      "3. Inspect brush holders and springs for symmetry",
      "4. Clean the commutator"
    ],
    toolsRequired: ["Multimeter", "Contact cleaner"],
    safetyWarnings: "Verify polarity before connection to prevent accidental reverse movement.",
    preventiveMeasures: ["Use high-quality reversing switches", "Periodic brush maintenance"]
  },


  // ==================== TRANSFORMER DISTRIBUTION ====================
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

  // ==================== AIR CIRCUIT BREAKER (ACB) ====================
  {
    id: "f31",
    componentId: "acb-air-circuit-breaker",
    title: "ACB Fails to Close",
    category: "Starting & Running Problems",
    symptoms: "The closing spring is charged, but the breaker does not close when the 'ON' button is pressed or the closing coil is energized.",
    causes: ["Under-voltage trip (UVT) not energized", "Anti-pumping relay fault", "Mechanical interlock active", "Blown closing coil"],
    troubleshootingSteps: [
      "1. Verify that the Under-voltage Trip (UVT) has the correct supply voltage",
      "2. Check if the 'Trip' flag is still active and reset the breaker manually",
      "3. Inspect mechanical interlocks (e.g., key locks or door interlocks) for engagement",
      "4. Test the continuity of the closing coil"
    ],
    toolsRequired: ["Multimeter", "Screwdriver set", "Control circuit diagram"],
    safetyWarnings: "ACB mechanisms contain high-tension springs. Never attempt to bypass safety interlocks while energized.",
    preventiveMeasures: ["Regularly test UVT supply", "Keep the mechanical linkages lubricated with specified grease"]
  },
  {
    id: "f32",
    componentId: "acb-air-circuit-breaker",
    title: "Excessive Heating at Main Contacts",
    category: "Overheating & Thermal Issues",
    symptoms: "Discoloration of the busbar or cradle terminals; burning smell; breaker trips on 'Long Time' (L) protection.",
    causes: ["Loose cradle or busbar connections", "Pitted or oxidized main contacts", "Insufficient contact pressure", "Overloading"],
    troubleshootingSteps: [
      "1. Perform a contact resistance test (Ductor test) if possible",
      "2. Inspect the finger contacts (cluster contacts) in the cradle for tension",
      "3. Use an IR thermometer to identify specific hot spots",
      "4. Clean contacts with approved electrical contact cleaner"
    ],
    toolsRequired: ["Infrared thermometer", "Torque wrench", "Contact cleaner"],
    safetyWarnings: "Risk of arc flash. Use thermal scanning from a safe distance while under load.",
    preventiveMeasures: ["Annual 'Racking out' to inspect and clean primary contacts", "Check bolt torques every 6 months"]
  },

  // ==================== APFC CAPACITOR BANK ====================
  {
    id: "f33",
    componentId: "capacitor-bank-pfc",
    title: "Step Failure (No Current Draw)",
    category: "Protection & Tripping Problems",
    symptoms: "The APFC controller shows a step is 'ON', but the system power factor does not improve and ammeter shows 0A for that step.",
    causes: ["Blown HRC fuses for that step", "Failed contactor coil or welded contacts", "Capacitor bank has reached end-of-life (internal leakage)"],
    troubleshootingSteps: [
      "1. Check the HRC fuses for continuity",
      "2. Verify if the contactor pulls in when the controller sends a signal",
      "3. Measure the capacitance of the unit using a multimeter",
      "4. Inspect control wiring between the relay and the contactor"
    ],
    toolsRequired: ["Multimeter with capacitance mode", "Clamp meter", "Fuse puller"],
    safetyWarnings: "DANGER: Wait at least 5 minutes after switching off before touching capacitor terminals. Verify zero voltage.",
    preventiveMeasures: ["Use capacitor-duty contactors with pre-charge resistors", "Ensure panel ventilation is clear"]
  },
  {
    id: "f34",
    componentId: "capacitor-bank-pfc",
    title: "Frequent Contactor Chattering",
    category: "Noise & Abnormal Operation",
    symptoms: "Contactor rapidly switches on and off; loud clicking noise; fluctuating power factor readings.",
    causes: ["Incorrect 'C/K' setting on APFC relay", "Harmonic distortion in the system", "Target power factor set too high (e.g., 1.00)"],
    troubleshootingSteps: [
      "1. Check the APFC relay settings, specifically the 'Step Delay' and 'C/K' ratio",
      "2. Reduce the target Power Factor to 0.98 to avoid hunting",
      "3. Inspect for harmonics if VFDs are running on the same bus",
      "4. Verify CT (Current Transformer) placement and polarity"
    ],
    toolsRequired: ["APFC Controller Manual", "Power Quality Analyzer", "Screwdriver"],
    safetyWarnings: "Rapid switching (chattering) can cause capacitor explosions due to inrush current.",
    preventiveMeasures: ["Set a minimum re-connection delay of 60 seconds", "Regularly verify CT signal integrity"]
  },

  // ==================== AUTOMATIC VOLTAGE REGULATOR (AVR) ====================
  {
    id: "f35",
    componentId: "avr-voltage-stabilizer",
    title: "Output Voltage too High/Low",
    category: "Instrumentation",
    symptoms: "AVR output remains outside the ±1-5% tolerance; equipment enters 'High Voltage' protect mode.",
    causes: ["Faulty carbon brush in servo motor", "Limit switch failure", "Control PCB malfunction", "Input voltage outside regulation range"],
    troubleshootingSteps: [
      "1. Measure input voltage to see if it exceeds the AVR's rated window",
      "2. Inspect the carbon brush on the Variac for wear or sparking",
      "3. Manually test the servo motor movement (if safe)",
      "4. Check control PCB for burnt components or loose pots"
    ],
    toolsRequired: ["Multimeter", "Fine sandpaper", "Small brush"],
    safetyWarnings: "Servo-type AVRs have moving parts. Keep fingers clear of the Variac and chain drive.",
    preventiveMeasures: ["Periodically clean the Variac copper track with a soft cloth", "Replace carbon brushes before they wear to the holder"]
  },
  {
    id: "f36",
    componentId: "avr-voltage-stabilizer",
    title: "AVR Humming and Overheating",
    category: "Overheating & Thermal Issues",
    symptoms: "Loud 50Hz hum; casing is hot to the touch; output voltage fluctuates or cuts out.",
    causes: ["Overloading beyond kVA rating", "Short circuit in transformer windings", "Failed cooling fan", "Loose core laminations"],
    troubleshootingSteps: [
      "1. Calculate total connected load current and compare with AVR rating",
      "2. Check if internal cooling fans are spinning",
      "3. Tighten mounting bolts of the internal transformer",
      "4. Inspect for dust buildup blocking air vents"
    ],
    toolsRequired: ["Clamp meter", "Screwdriver", "Vacuum cleaner/Blower"],
    safetyWarnings: "Do not operate with the cover removed. High voltage is exposed on the Variac winding.",
    preventiveMeasures: ["Always size AVR at 1.5x the rated load to account for inrush", "Keep in a dust-free, cool environment"]
  },

  // ==================== PLC SIEMENS S7 1200 ====================
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

  // ==================== VARIABLE FREQUENCY DRIVE (VFD) ====================
  {
    id: "f37",
    componentId: "vfd-schneider-atv320",
    title: "VFD Overcurrent (OC) Fault",
    category: "Protection & Tripping Problems",
    symptoms: "Drive trips and displays 'OC' or 'OCF' code; motor stops immediately.",
    causes: ["Acceleration time too short", "Mechanical jam in the motor/load", "Short circuit in motor cables", "Inverter module (IGBT) failure"],
    troubleshootingSteps: [
      "1. Increase the Acceleration Time (ACC) parameter",
      "2. Disconnect the motor and run the VFD; if it still trips, the VFD is faulty",
      "3. Perform an insulation test (Megger) on the motor and cables",
      "4. Check for mechanical blockages in the pump or conveyor"
    ],
    toolsRequired: ["Multimeter", "Insulation tester", "VFD Keypad"],
    safetyWarnings: "Wait 10 minutes for DC bus capacitors to discharge before touching terminals.",
    preventiveMeasures: ["Ensure proper motor parameters are entered", "Install line reactors for long cable runs"]
  },
  {
    id: "f38",
    componentId: "vfd-schneider-atv320",
    title: "OHF (Overheating) Fault",
    category: "Overheating & Thermal Issues",
    symptoms: "VFD trips after running for a while; 'OHF' code displayed; cooling fans may be silent.",
    causes: ["Clogged heat sink fins", "Failed internal cooling fan", "High ambient temperature in the panel", "VFD is undersized for the load"],
    troubleshootingSteps: [
      "1. Clean the VFD heat sink with compressed air",
      "2. Check if the internal fan is spinning during operation",
      "3. Verify the panel exhaust fans are functional",
      "4. Measure actual motor current against VFD rating"
    ],
    toolsRequired: ["Compressed air", "Infrared thermometer", "Clamp meter"],
    safetyWarnings: "Do not touch the heat sink; it can reach temperatures above 80°C.",
    preventiveMeasures: ["Regularly clean panel filters", "Ensure minimum clearance around the VFD for airflow"]
  },

  // ==================== MAGNETIC CONTACTOR ====================
  {
    id: "f39",
    componentId: "contactor-magnetic-3pole",
    title: "Contactor Chattering / Humming",
    category: "Noise & Abnormal Operation",
    symptoms: "Loud buzzing sound or rapid 'on-off' clicking when the coil is energized.",
    causes: ["Low control voltage to the coil", "Dust or rust on the magnetic pole faces", "Broken shading coil (copper ring)", "Loose control wiring"],
    troubleshootingSteps: [
      "1. Measure the voltage across A1 and A2 terminals",
      "2. Disassemble and clean the magnetic core faces with a dry cloth",
      "3. Inspect the shading coil for visible cracks or breaks",
      "4. Tighten all control circuit terminal screws"
    ],
    toolsRequired: ["Multimeter", "Screwdriver set", "Contact cleaner"],
    safetyWarnings: "Never manually press the contactor with a tool while the power circuit is live.",
    preventiveMeasures: ["Use a voltage stabilizer for control circuits", "Keep the control panel dust-tight"]
  },
  {
    id: "f40",
    componentId: "contactor-magnetic-3pole",
    title: "Main Contacts Welded / Stuck",
    category: "Electrical & Winding Faults",
    symptoms: "Motor continues to run even when the control signal is removed; contactor won't release.",
    causes: ["High inrush current (Arcing)", "Short circuit on the load side", "Contacts reaching end of life", "Rapid switching (inching)"],
    troubleshootingSteps: [
      "1. Isolate the main power immediately",
      "2. Use a multimeter to check continuity across poles (L1-T1) while de-energized",
      "3. Inspect for visible melting or blackening of the plastic housing",
      "4. Replace the contactor (welded contacts are not repairable)"
    ],
    toolsRequired: ["Multimeter", "Insulation tester"],
    safetyWarnings: "Welded contacts provide a false sense of security; power is still present at the motor.",
    preventiveMeasures: ["Ensure contactor AC-3 rating matches the motor", "Add RC suppressors across the coil"]
  },

  // ==================== THERMAL OVERLOAD RELAY (TOR) ====================
  {
    id: "f41",
    componentId: "relay-thermal-overload",
    title: "Nuisance Tripping",
    category: "Protection & Tripping Problems",
    symptoms: "Motor stops frequently even when running under normal load; TOR is hot.",
    causes: ["Current setting dial is too low", "Loose power terminations (causing local heat)", "High ambient temperature in the box", "Unbalanced phase currents"],
    troubleshootingSteps: [
      "1. Check the motor nameplate FLC and adjust the dial correctly",
      "2. Use a clamp meter to verify the actual current on all three phases",
      "3. Tighten the screws connecting the TOR to the contactor",
      "4. Check for 'Phase Unbalance' at the supply"
    ],
    toolsRequired: ["Clamp meter", "Screwdriver", "Infrared thermometer"],
    safetyWarnings: "Investigate the actual current draw before increasing the trip setting.",
    preventiveMeasures: ["Use a torque wrench for power connections", "Avoid installing TORs in direct sunlight"]
  },
  {
    id: "f42",
    componentId: "relay-thermal-overload",
    title: "Failure to Trip on Overload",
    category: "Starting & Running Problems",
    symptoms: "Motor burns out or smells of smoke, but the TOR remains in the 'Reset' position.",
    causes: ["Faulty bimetallic mechanism", "Incorrect wiring (NC contact bypassed)", "Setting dial is at maximum (far above FLC)"],
    troubleshootingSteps: [
      "1. Press the 'Test' button to verify the mechanical trip linkage",
      "2. Verify that the 95-96 NC contact is actually in series with the contactor coil",
      "3. Check for signs of internal corrosion or moisture ingress",
      "4. Replace the relay if the test button fails to break the circuit"
    ],
    toolsRequired: ["Multimeter", "Test slider/button"],
    safetyWarnings: "A failed TOR offers zero protection; it must be replaced immediately.",
    preventiveMeasures: ["Perform a secondary injection test during annual maintenance", "Check wiring logic"]
  },

  // ==================== INDUCTIVE PROXIMITY SENSOR ====================
  {
    id: "f43",
    componentId: "sensor-proximity-inductive",
    title: "Sensor 'Always On' (False Trigger)",
    category: "Instrumentation",
    symptoms: "The LED stays lit and the signal is high even when no target is present.",
    causes: ["Metallic dust or shavings on the sensing face", "Internal short circuit in the sensor", "Sensing distance too small (target too close)", "Electromagnetic interference (EMI)"],
    troubleshootingSteps: [
      "1. Wipe the sensing face with a clean cloth",
      "2. Check the distance between the sensor and the target",
      "3. Verify the wiring for short circuits between the signal (Black) and V+ (Brown)",
      "4. Ensure shielded cables are used if near a VFD"
    ],
    toolsRequired: ["Cleaning cloth", "Feeler gauge/Ruler", "Multimeter"],
    safetyWarnings: "Disconnect power before cleaning if the sensor is in a hazardous moving area.",
    preventiveMeasures: ["Mount the sensor away from swarf/metal waste areas", "Use non-flush mounting types where possible"]
  },
  {
    id: "f44",
    componentId: "sensor-proximity-inductive",
    title: "Sensor fails to detect target",
    category: "Instrumentation",
    symptoms: "The target passes the sensor, but the LED does not blink and no signal is sent.",
    causes: ["Target is non-metallic (e.g., plastic/wood)", "Target is outside the sensing range", "Supply voltage is below 10V DC", "Broken wire in the sensor cable"],
    troubleshootingSteps: [
      "1. Confirm the target material is ferrous (iron/steel is best)",
      "2. Measure the DC supply voltage at the sensor connector",
      "3. Move the target closer to the sensor face to test the range",
      "4. Perform a 'wiggle test' on the cable to check for internal breaks"
    ],
    toolsRequired: ["Multimeter", "Feeler gauge"],
    safetyWarnings: "Ensure correct polarity (Brown+, Blue-) to avoid damaging the sensor.",
    preventiveMeasures: ["Use rigid mounting brackets to prevent vibration shift", "Check for cable fatigue in moving arms"]
  },

  // ==================== 4-CORE ARMOURED CABLE ====================
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

  // ==================== NYY FLEXIBLE POWER CABLE ====================
  {
    id: "f51",
    componentId: "cable-nyy-flexible",
    title: "Sheath Puncture / Mechanical Damage",
    category: "Electrical & Winding Faults",
    symptoms: "Visible copper strands; intermittent tripping of RCD; sparking in cable trays.",
    causes: ["Sharp edges on cable trays", "Cable pulled too hard around corners", "Accidental cutting during construction"],
    troubleshootingSteps: [
      "1. Visually inspect the entire length of the run",
      "2. Perform an insulation resistance test (Megger) between cores and to earth",
      "3. Use electrical tape as a temporary fix only; replace damaged section for permanent repair",
      "4. Install edge protection on cable trays"
    ],
    toolsRequired: ["Insulation tester (Megger)", "Flashlight", "Cable stripper"],
    safetyWarnings: "Exposed copper is a high shock risk. Isolate power before inspection.",
    preventiveMeasures: ["Use conduit in high-traffic areas", "Ensure minimum bending radius is maintained"]
  },
  {
    id: "f52",
    componentId: "cable-nyy-flexible",
    title: "Cable 'Cold Flow' / Insulation Crushing",
    category: "Overheating & Thermal Issues",
    symptoms: "Insulation becomes thin or brittle at support points; eventual short circuit.",
    causes: ["Cable ties pulled too tight", "Cable crushed under heavy equipment", "Ambient temperature exceeding 70°C"],
    troubleshootingSteps: [
      "1. Inspect points where cable ties or clamps are applied",
      "2. Loosen overtightened ties—insulation should not be 'pinched'",
      "3. Measure ambient temperature near the cable run",
      "4. Check for 'flat spots' in the cable profile"
    ],
    toolsRequired: ["Infrared thermometer", "Side cutters"],
    safetyWarnings: "Structural damage to insulation can lead to fire under high-load conditions.",
    preventiveMeasures: ["Use wide-base cable hangers", "Avoid stacking too many cables in one duct"]
  },

  // ==================== XLPE ARMOURED POWER CABLE ====================
  {
    id: "f53",
    componentId: "cable-xlpe-armoured",
    title: "Armor Corrosion / High Earth Resistance",
    category: "Protection & Tripping Problems",
    symptoms: "Rust visible on SWA; Earth fault loop impedance (Ze/Zs) readings are too high.",
    causes: ["Water ingress into the outer sheath", "Chemical reactions in acidic soil", "Lack of protective shroud on glands"],
    troubleshootingSteps: [
      "1. Measure the continuity of the armor from end to end",
      "2. Inspect the outer PVC/LSF sheath for tears allowing moisture in",
      "3. Clean armor wires at the termination point to ensure good contact",
      "4. Use a Loop Impedance Tester to verify safety limits"
    ],
  toolsRequired: ["Earth loop impedance tester", "Wire brush", "Multimeter"],
    safetyWarnings: "Corroded armor may fail to clear a fault, leaving equipment frames live.",
    preventiveMeasures: ["Use galvanized armor", "Apply denso tape or shrouds in corrosive environments"]
  },
  {
    id: "f54",
    componentId: "cable-xlpe-armoured",
    title: "Internal Conductor Voids / Treeing",
    category: "Electrical & Winding Faults",
    symptoms: "Partial discharge noise (crackling) in high-voltage versions; sudden insulation failure.",
    causes: ["Manufacturing defect", "Moisture ingress at the cable ends before sealing", "Voltage surges/Lightning"],
    troubleshootingSteps: [
      "1. Perform a VLF (Very Low Frequency) Tan Delta test for HV cables",
      "2. Inspect end-terminations for 'tracking' marks",
      "3. Ensure stress cones are properly installed in HV kits",
      "4. Check surge arrestor functionality"
    ],
    toolsRequired: ["VLF Tester", "Insulation tester", "Thermal camera"],
    safetyWarnings: "Internal insulation breakdown in XLPE is irreversible and leads to explosive failure.",
    preventiveMeasures: ["Always seal cable ends with heat-shrink caps", "Avoid 'nicking' the XLPE during stripping"]
  },

  // ==================== INDUSTRIAL CABLE GLAND ====================
  {
    id: "f55",
    componentId: "cable-gland-brass",
    title: "Loss of Earth Continuity (Banjo/Earth Tag)",
    category: "Protection & Tripping Problems",
    symptoms: "The enclosure is grounded but the cable armor is not; 'Floating' armor voltage.",
    causes: ["Loose locknut", "Corrosion between the gland and the enclosure", "Painting over the gland entry hole"],
    troubleshootingSteps: [
      "1. Test continuity between the cable armor and the main earth bar",
      "2. Tighten the gland locknut and the 'Banjo' bolt",
      "3. Scrape away paint or rust from the enclosure entry point",
      "4. Use serrated washers (shake-proof) for better contact"
    ],
    toolsRequired: ["Multimeter", "Spanner set", "Sandpaper"],
    safetyWarnings: "Ungrounded armor can become live during an internal cable fault.",
    preventiveMeasures: ["Use nickel-plated glands to resist oxidation", "Regularly torque check glands"]
  },
  {
    id: "f56",
    componentId: "cable-gland-brass",
    title: "Water Ingress / IP Rating Failure",
    category: "Environmental Issues",
    symptoms: "Moisture or condensation found inside the motor terminal box or junction box.",
    causes: ["Incorrect gland size for cable OD", "Missing or damaged inner seal (CW gland)", "Missing 'O-ring' at the enclosure interface"],
    troubleshootingSteps: [
      "1. Check if the gland seal is compressed correctly around the cable",
      "2. Inspect the IP washer/O-ring between the gland and the box",
      "3. Ensure the cable is entering from below (drip loop) to prevent water tracking",
      "4. Replace the rubber shroud if it has perished"
    ],
    toolsRequired: ["Adjustable wrench", "Flashlight"],
    safetyWarnings: "Water ingress can cause phase-to-phase short circuits and fire.",
    preventiveMeasures: ["Use IP68 rated glands for outdoor use", "Always install a PVC shroud"]
  },

  // ==================== COPPER COMPRESSION LUG ====================
  {
    id: "f57",
    componentId: "cable-lug-crimping",
    title: "Under-Crimping (High Resistance Joint)",
    category: "Overheating & Thermal Issues",
    symptoms: "Lug is discolored (blue/black); insulation near lug is melting; voltage drop under load.",
    causes: ["Wrong die size used in crimper", "Manual crimping tool not fully closed", "Using a lug size larger than the cable"],
    troubleshootingSteps: [
      "1. Use a thermal camera to check the joint temperature under load",
      "2. Perform a 'pull test' (if possible) or visual check for 'loose' strands",
      "3. Measure the milli-volt drop across the joint",
      "4. Cut off the lug and re-terminate using the correct die"
    ],
    toolsRequired: ["Hydraulic crimper", "Infrared thermometer", "Micro-ohmmeter"],
    safetyWarnings: "High-resistance joints are a primary cause of industrial electrical fires.",
    preventiveMeasures: ["Match the die code to the lug code", "Always perform a double crimp on large lugs"]
  },
  {
    id: "f58",
    componentId: "cable-lug-crimping",
    title: "Galvanic Corrosion (Bimetallic Action)",
    category: "Electrical & Winding Faults",
    symptoms: "White powdery buildup (aluminum oxide) or green crust (copper oxide) at the connection.",
    causes: ["Connecting a copper lug directly to an aluminum busbar without a bi-metal washer", "Moisture in the environment"],
    troubleshootingSteps: [
      "1. De-energize and disassemble the connection",
      "2. Clean all contact surfaces until shiny",
      "3. Use a Bimetallic (Al/Cu) washer or a friction-welded Al/Cu lug",
      "4. Apply neutral petroleum jelly or anti-oxidant paste"
    ],
    toolsRequired: ["Wire brush", "Bimetal washers", "Antioxidant grease"],
    safetyWarnings: "Oxidation creates an insulating layer that leads to rapid overheating.",
    preventiveMeasures: ["Use tin-plated lugs", "Avoid mixing metals in damp locations"]
  },

  // ==================== 100A MOLDED CASE CIRCUIT BREAKER (MCCB) ====================
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

  // ==================== RESIDUAL CURRENT CIRCUIT BREAKER (RCCB/RCD) ====================
  {
    id: "f59",
    componentId: "rccb-residual-current",
    title: "Nuisance Tripping (Intermittent)",
    category: "Protection & Tripping Problems",
    symptoms: "The RCCB trips randomly without a clear appliance fault; often happens during rain or when multiple devices are on.",
    causes: ["Cumulative leakage from multiple electronic devices", "Neutral-to-Earth fault in the wiring", "Moisture in outdoor sockets/lights", "Faulty RCD mechanism"],
    troubleshootingSteps: [
      "1. Perform a 'Ramp Test' using an RCD tester to see at what mA it actually trips",
      "2. Disconnect all appliances and plug them in one by one to identify the culprit",
      "3. Use an insulation tester to check for Neutral-to-Earth leakage",
      "4. Check for 'Shared Neutrals' between different RCD-protected circuits"
    ],
    toolsRequired: ["RCD Tester", "Insulation tester (Megger)", "Multimeter"],
    safetyWarnings: "Do not bypass a tripping RCCB. It is reacting to a potentially lethal current leakage.",
    preventiveMeasures: ["Split circuits across multiple RCDs (RCBOs)", "Ensure outdoor equipment is IP65 rated"]
  },
  {
    id: "f60",
    componentId: "rccb-residual-current",
    title: "RCCB Fails to Trip on Test",
    category: "Operational Faults",
    symptoms: "Pressing the 'T' (Test) button does nothing; the lever stays in the 'ON' position.",
    causes: ["Mechanical seizing due to dust/corrosion", "Internal resistor for the test circuit is blown", "Incorrect wiring (Phase/Neutral swapped)", "End of device life"],
    troubleshootingSteps: [
      "1. Verify that the incoming supply is present on the line terminals",
      "2. Use an external RCD tester to check if the device trips at its rated mA",
      "3. Inspect for dust or moisture ingress inside the unit",
      "4. Replace the RCCB immediately if it fails both internal and external tests"
    ],
    toolsRequired: ["RCD Tester", "Multimeter"],
    safetyWarnings: "A non-tripping RCCB provides zero protection against electrocution. Replace it immediately.",
    preventiveMeasures: ["Press the test button once a month", "Install in a clean, dry distribution board"]
  },

  // ==================== SURGE PROTECTIVE DEVICE (SPD) ====================
  {
    id: "f61",
    componentId: "spd-surge-protection",
    title: "End-of-Life (Indicator turned Red)",
    category: "Protection & Tripping Problems",
    symptoms: "Visual inspection window shows 'Red' instead of 'Green'; no longer protecting equipment.",
    causes: ["Major lightning strike handled successfully", "Cumulative small surges over time", "Overvoltage from a lost Neutral in the system"],
    troubleshootingSteps: [
      "1. Check the status indicator on the front of the SPD module",
      "2. Check if the backup MCB or fuse for the SPD has tripped",
      "3. Replace the plug-in cartridge (for modular types) or the whole unit",
      "4. Verify the integrity of the main Earth connection"
    ],
    toolsRequired: ["Replacement SPD cartridge", "Screwdriver"],
    safetyWarnings: "When the indicator is Red, your sensitive electronics are completely exposed to the next surge.",
    preventiveMeasures: ["Check indicators after every thunderstorm", "Install Type 1+2 units in lightning-prone areas"]
  },
  {
    id: "f62",
    componentId: "spd-surge-protection",
    title: "Thermal Runaway / Overheating",
    category: "Overheating & Thermal Issues",
    symptoms: "Burning smell from the DB; SPD housing is discolored or deformed.",
    causes: ["Sustained overvoltage (e.g., 400V on a 230V line)", "MOV (Varistor) internal short circuit", "Loose terminal connections"],
    troubleshootingSteps: [
      "1. Isolate the DB immediately and measure the incoming line voltage",
      "2. Check for a loose or broken main Neutral wire (Neutral displacement)",
      "3. Remove the damaged SPD and inspect the busbar for heat damage",
      "4. Ensure the SPD has the correct Voltage rating (Uc) for the local grid"
    ],
    toolsRequired: ["Multimeter", "Thermal camera", "Torque wrench"],
    safetyWarnings: "SPDs can catch fire if subjected to sustained high voltage. Ensure backup fusing is installed.",
    preventiveMeasures: ["Use SPDs with internal thermal disconnectors", "Ensure tight cable terminations"]
  },

  // ==================== MOTOR PROTECTION CIRCUIT BREAKER (MPCB) ====================
  {
    id: "f63",
    componentId: "motor-protection",
    title: "MPCB Trips on Phase Loss",
    category: "Protection & Tripping Problems",
    symptoms: "Motor stops; MPCB trips even though the current setting is correct; motor was running 'loud' before stopping.",
    causes: ["One phase fuse blown upstream", "Loose connection on one terminal", "Broken wire in the motor cable", "Internal contact failure in the MPCB"],
    troubleshootingSteps: [
      "1. Measure voltage at the input terminals (L1-L2, L2-L3, L3-L1) to check for 415V",
      "2. Check the continuity of the motor windings",
      "3. Tighten all power terminals on the MPCB and motor terminal box",
      "4. Test for 'single-phasing' using a phase rotation/sequence meter"
    ],
    toolsRequired: ["Multimeter", "Phase sequence meter", "Screwdriver"],
    safetyWarnings: "Running a 3-phase motor on 2 phases (single-phasing) will burn out the windings quickly.",
    preventiveMeasures: ["Check terminal tightness every 6 months", "Use a phase-failure relay for critical motors"]
  },
  {
    id: "f64",
    componentId: "motor-protection",
    title: "Nuisance Tripping during Start-up",
    category: "Starting & Running Problems",
    symptoms: "MPCB trips immediately when the motor starts, but the motor is fine.",
    causes: ["Current dial set below the motor FLC", "Trip Class is too low for high-inertia loads", "MPCB internal mechanism worn out"],
    troubleshootingSteps: [
      "1. Verify the motor Full Load Current (FLC) on the nameplate",
      "2. Adjust the MPCB dial to match the nameplate FLC (1.0x)",
      "3. Use a clamp meter to capture 'Peak Inrush' current",
      "4. If tripping persists at the correct setting, replace the MPCB"
    ],
    toolsRequired: ["Clamp meter (with Inrush/Min-Max mode)", "Motor nameplate data"],
    safetyWarnings: "Do not set the dial higher than the motor FLC to stop tripping; find the root cause.",
    preventiveMeasures: ["Ensure MPCB matches the motor's power rating", "Consider a Soft Starter for large loads"]
  },

  // ==================== HRC FUSE ====================
  {
    id: "f65",
    componentId: "fuse-hrc-industrial",
    title: "Intermittent Contact / Arcing at Base",
    category: "Overheating & Thermal Issues",
    symptoms: "Fuse link is hot; buzzing noise from the fuse holder; discoloration of the copper clips.",
    causes: ["Weak spring tension in the fuse holder", "Oxidation/corrosion on the fuse blades", "Undersized fuse holder for the load"],
    troubleshootingSteps: [
      "1. Isolate power and remove the fuse using a puller",
      "2. Inspect the clips for 'pitting' or carbon deposits",
      "3. Clean contact surfaces with a fine abrasive or contact cleaner",
      "4. Tension the clips or replace the fuse base if the fit is loose"
    ],
    toolsRequired: ["Fuse puller", "Wire brush", "Contact cleaner"],
    safetyWarnings: "Loose fuse connections cause high resistance, leading to localized heating and potential fires.",
    preventiveMeasures: ["Apply a thin layer of electrical joint compound", "Check fuse tightness during PMs"]
  },
  {
    id: "f66",
    componentId: "fuse-hrc-industrial",
    title: "Fuse Blown (Short Circuit Fault)",
    category: "Protection & Tripping Problems",
    symptoms: "Total loss of power on the circuit; continuity test shows open circuit.",
    causes: ["Direct Phase-to-Phase or Phase-to-Earth short", "Severe overloading", "Internal insulation failure in the transformer/motor"],
    troubleshootingSteps: [
      "1. Test continuity across the fuse ends (0 Ohms = OK, OL = Blown)",
      "2. Megger the load-side cable to check for shorts before replacing",
      "3. Inspect the equipment for 'burn marks' or smell of ozone",
      "4. Replace with a fuse of the EXACT same rating and speed (gG/aM)"
    ],
    toolsRequired: ["Multimeter", "Insulation tester", "Fuse puller"],
    safetyWarnings: "Never 'link' a blown fuse with copper wire. This creates an explosive hazard.",
    preventiveMeasures: ["Always keep a set of spare fuses of the correct rating", "Investigate the fault before re-fusing"]
  },

  // ==================== CURRENT TRNASFORMER ====================
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

  // ==================== DIGITAL MULTIMETER (DMM) ====================
  {
    id: "f67",
    componentId: "instrument-digital-multimeter",
    title: "Zero Current Reading (A/mA)",
    category: "Instrumentation",
    symptoms: "The meter shows 0.00 even when connected in series with a live load; other functions (Voltage) work fine.",
    causes: ["Blown internal ceramic fuse (10A or 440mA)", "Test lead plugged into the wrong port", "Open circuit within the test leads"],
    troubleshootingSteps: [
      "1. Check the internal fuses by using another meter to test continuity across the DMM's own ports",
      "2. Ensure the red lead is in the '10A' or 'mA' jack, not the 'V' jack",
      "3. Inspect the test lead tips for carbon buildup or oxidation",
      "4. Perform a continuity test on the leads themselves by touching them together in Ohm mode"
    ],
    toolsRequired: ["Spare Ceramic Fuses", "Second Multimeter", "Contact cleaner"],
    safetyWarnings: "Always replace fuses with the exact high-rupture capacity (HRC) rating specified by the manufacturer.",
    preventiveMeasures: ["Never measure voltage while the leads are in the 'Amps' ports", "Avoid measuring current beyond the meter's rated limit"]
  },
  {
    id: "f68",
    componentId: "instrument-digital-multimeter",
    title: "Erratic or Ghost Voltages",
    category: "Instrumentation",
    symptoms: "The display shows fluctuating millivolt readings even when leads are not touching anything.",
    causes: ["Low battery affecting the ADC reference voltage", "Electromagnetic interference (EMI) from nearby VFDs or motors", "High-impedance input picking up 'Stray' induction"],
    troubleshootingSteps: [
      "1. Replace the 9V or AA batteries immediately",
      "2. Use the 'LoZ' (Low Impedance) mode if your meter has it to bleed off ghost voltages",
      "3. Move away from high-power transformers or radio transmitters",
      "4. Ensure the probe handles are clean and dry"
    ],
    toolsRequired: ["Fresh Batteries", "Cleaning cloth"],
    safetyWarnings: "A low battery can cause a DMM to under-read actual dangerous voltages. Trust the 'Low Batt' icon.",
    preventiveMeasures: ["Remove batteries if the tool is stored for long periods", "Keep the meter in its protective holster"]
  },

  // ==================== 3-PHASE DIGITAL ENERGY METER ====================
  {
    id: "f69",
    componentId: "instrument-energy-meter-3phase",
    title: "Negative or Incorrect Power Reading",
    category: "Instrumentation",
    symptoms: "The meter shows negative kW or extremely low kWh despite a heavy load; 'Reverse' indicator is on.",
    causes: ["One or more CTs (Current Transformers) installed backwards (P1/P2 swapped)", "Phase sequence mismatch (V1 connected to CT2, etc.)", "Incorrect CT ratio programmed into the meter settings"],
    troubleshootingSteps: [
      "1. Check the arrow direction on the CTs; it must point toward the Load",
      "2. Verify that Voltage Phase 1 and CT Phase 1 are on the same conductor",
      "3. Access the setup menu and confirm the CT Ratio (e.g., 200:5)",
      "4. Use a clamp meter to verify the actual current against the meter's display"
    ],
    toolsRequired: ["Clamp meter", "Precision screwdriver", "Programming manual"],
    safetyWarnings: "DANGER: Never disconnect CT secondary wires while the primary is live. High voltage arcing will occur.",
    preventiveMeasures: ["Mark CT wires with color-coded ferrules during installation", "Always perform a secondary injection test during commissioning"]
  },

  // ==================== DIGITAL FREQUENCY METER ====================
  {
    id: "f70",
    componentId: "instrument-frequency-meter",
    title: "Display shows '0.0' or '---'",
    category: "Instrumentation",
    symptoms: "The meter is powered on but does not show the Hz reading of the AC supply.",
    causes: ["Input voltage is below the meter's sensing threshold (e.g., <50V)", "Blown sensing fuse on the rear panel", "Harmonic noise distorting the zero-crossing detection"],
    troubleshootingSteps: [
      "1. Measure the AC voltage at the meter's input terminals",
      "2. Check the control fuses protecting the frequency meter circuit",
      "3. If used on a VFD output, ensure the meter is compatible with PWM signals",
      "4. Check for loose crimp terminals on the back of the meter"
    ],
    toolsRequired: ["Multimeter", "Small screwdriver"],
    safetyWarnings: "Ensure the meter is rated for the system voltage (e.g., 415V) before connecting.",
    preventiveMeasures: ["Use twisted-pair wiring for sensing lines to reduce noise", "Install a basic LC filter if harmonics are high"]
  },

  // ==================== DIGITAL EARTH RESISTANCE TESTER ====================
  {
    id: "f71",
    componentId: "instrument-earth-tester",
    title: "High Resistance Reading (OL / Error)",
    category: "Instrumentation",
    symptoms: "Meter displays 'OL' (Over Limit) or an impossibly high Ohm value (e.g., >2000Ω).",
    causes: ["Dry or rocky soil with poor conductivity", "Broken internal wire in the long test lead reels", "Poor spike-to-soil contact"],
    troubleshootingSteps: [
      "1. Pour water or a salt-water solution around the test spikes to dampen the soil",
      "2. Drive the spikes deeper or use multiple spikes in parallel",
      "3. Perform a 'Lead Zero' test by shorting all leads together at the ends",
      "4. Ensure the spikes are spaced according to the '62% Rule' (Fall of Potential)"
    ],
    toolsRequired: ["Water/Brine solution", "Hammer", "Lead continuity tester"],
    safetyWarnings: "Ensure the earthing system is disconnected from the main supply to avoid measuring parallel paths through the grid.",
    preventiveMeasures: ["Clean rust off spikes with a wire brush after use", "Test during the dry season for 'worst-case' resistance values"]
  },
  {
    id: "f72",
    componentId: "instrument-earth-tester",
    title: "Unstable / Jumpy Display",
    category: "Instrumentation",
    symptoms: "The Ohm reading fluctuates rapidly and won't settle.",
    causes: ["Stray ground currents from nearby heavy machinery", "Interference from buried high-voltage cables", "Loose clips on the test spikes"],
    troubleshootingSteps: [
      "1. Switch the tester to a different frequency (if the model allows frequency selection)",
      "2. Change the axis of the test spikes by 90 degrees to minimize induction",
      "3. Turn off nearby VFDs or motors temporarily",
      "4. Firmly clamp the alligator clips to the spikes and wiggle to ensure a bite"
    ],
    toolsRequired: ["Wire brush", "Fresh batteries"],
    safetyWarnings: "Fluctuating readings can mask a dangerously high earth resistance. Do not average the results manually.",
    preventiveMeasures: ["Keep test leads as straight as possible and avoid coiling them during a test", "Perform tests during low-demand periods"]
  }
];

export const getFaultsByComponentId = (componentId: string): Fault[] => {
  return faults.filter(fault => fault.componentId === componentId);
};