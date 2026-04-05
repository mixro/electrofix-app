# ElectroFix - Electrical Problem Solver

**A powerful offline-first mobile application** for electrical engineering students, technicians, electricians, and industrial professionals in Tanzania and beyond.


## ✨ About the App

ElectroFix is a comprehensive mobile app that bridges theoretical electrical knowledge with real-world practical application. It provides instant access to component information, intelligent fault diagnosis, trusted suppliers, and verified technicians — all designed to improve safety, efficiency, and productivity.

## 🚀 Key Features

- **Rich Component Library** — Detailed information including function, working principle, ratings, applications, advantages, limitations, maintenance tips, and safety precautions.
- **Advanced Fault Solver** — Step-by-step troubleshooting with symptoms, causes, tools required, safety warnings, and preventive measures.
- **Supplier Directory** — Find trusted electrical suppliers with contact details and available products.
- **Verified Technicians** — Connect with experienced electricians and automation professionals.
- **Fully Offline Support** — Core data works completely offline (images load from internet when available).
- **Professional UI** — Clean industrial design with dark/light theme support.
- **Powerful Search** — Fast search across components and faults.

## 🛠 Tech Stack

- **Frontend**: React Native + Expo
- **Navigation**: Expo Router (Drawer + Tabs + Stack)
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS) + StyleSheet
- **State Management**: React Context
- **Data**: Offline-first static TypeScript data
- **Icons**: Expo Vector Icons

## 📁 Project Structure

```bash
electrofux-electrofux-app/
├── app/                          # Expo Router routes
│   ├── (tabs)/                   # Main bottom tabs
│   │   ├── index.tsx             # Home Screen
│   │   ├── components.tsx
│   │   ├── problem-solver.tsx
│   │   ├── suppliers.tsx
│   │   └── technicians.tsx
│   ├── component/[id].tsx        # Component Detail
│   ├── category/[slug].tsx       # Category listing
│   ├── problem-solver/
│   │   ├── [componentId].tsx
│   │   └── solution/[faultId].tsx
│   └── suppliers/[id].tsx
├── src/
│   ├── components/ui/            # Reusable UI components
│   ├── data/                     # All offline data
│   │   ├── components.ts
│   │   ├── faults.ts
│   │   ├── suppliers.ts
│   │   ├── technicians.ts
│   │   └── categories.ts
│   ├── context/                  # ThemeContext
│   ├── types/                    # TypeScript interfaces
│   └── hooks/
├── assets/photos/                # Local images
└── README.md
📊 App Modules
```
## 🧪 Target Users

* Electrical Engineering Students
* Industrial Maintenance Technicians
* Electricians & Contractors
* Automation Engineers
* Vocational Trainees
* Electrical Shop Owners

## 🔧 Data & Offline Support

All critical data is bundled with the app for true offline functionality:
* **6+** Component Categories
* Detailed Component Specifications
* Fault Diagnosis Database
* Suppliers & Technicians Directory

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18+)
* **Expo CLI**
* **Android Studio / Xcode** (optional for local simulation)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/mixro/electrofix-app.git](https://github.com/mixro/electrofix-app.git)
    ```

2.  **Navigate to project**
    ```bash
    cd electrofix-app
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Start development server**
    ```bash
    npx expo start
    ```

### Run on Device
* Open the **Expo Go** app on your phone.
* Scan the QR code shown in the terminal.

---

## 📈 Future Roadmap

* [ ] Firebase backend synchronization.
* [ ] AI-powered image fault diagnosis.
* [ ] SQLite for advanced offline caching.
* [ ] Swahili language support.
* [ ] Technician booking & marketplace.
* [ ] Certification learning paths.

## 🤝 Contributing

We welcome contributions from the community!

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

---
*Developed with ⚡ by the MicepDev Team.*