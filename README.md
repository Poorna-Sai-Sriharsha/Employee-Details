##  Employee Details Dashboard

## 🔍 Overview
**Employee Details Dashboard** is a modern, interactive web application designed to visually manage, analyze, and document employee information. Built with **React**, **Vite**, **Recharts**, **React-Leaflet**, and **React-Webcam**, this project transforms standard employee directories into an engaging, feature-rich experience—including geographical map plotting, statistical graph insights, and live photo capture capabilities directly from the browser. 
Perfect for HR personnel, managers, or developers looking to build full-featured, modular React applications.

## 📸 Screenshot
![Employee Dashboard Preview](screenshot.png) *(Note: Please add a screenshot of your app here and name it `screenshot.png`)*

## ✨ Features
  -  **Interactive Employee List** – Clean, responsive table view of all personnel with core details.
  -  **Live Photo Capture** – Integrated WebRTC-based camera feed to take and attach employee profile pictures on the fly.
  -  **Geographical Map View** – Visual representation of employee locations across different cities using Leaflet maps.
  -  **Analytical Graph Dashboard** – Beautiful, interactive charts visualizing employee demographics and salary distributions using Recharts.
  -  **Detailed Profiles** – Dedicated view for individual employee statistics, IDs, and attached media.
  -  **Clean Routing** – Seamless Single Page Application (SPA) navigation powered by React Router.
  -  **Beautiful UI Icons** – Polished, modern interface utilizing Lucide React icons.
  -  **Fully Responsive Design** – Clean CSS layout that works natively on both desktop and mobile browsers.
    
## 🧠 How It Works
  - The app uses **Vite** as a lightning-fast build tool to serve the React application.
  - State is managed natively and shared across routes (List, Details, Map, Graph) to maintain application context without a complex global store.
  - The **React-Webcam** library requests browser camera permissions to snap a base64 encoded picture for immediate in-app rendering.
  - An interactive **React-Leaflet** map dynamically reads employee city locations and plots corresponding markers.
  - The **Recharts** integration aggregates employee numeric data (like salaries) into intuitive bar/pie visual formats.
    
## 🛠️ Built With
  - **React 18** – Core frontend UI library
  - **Vite** – Next-generation frontend tooling and bundler
  - **React Router** – Declarative routing for React SPAs
  - **Recharts** – Composable charting library built on React components
  - **React-Leaflet & Leaflet** – Interactive maps and geographic overlays
  - **React Webcam** – Access webcams and take screenshots directly in the browser
  - **Lucide React** – Clean, SVGs-based iconography
    
## 🧰 Getting Started
To run the Employee Details Dashboard locally:

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation & Run
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Poorna-Sai-Sriharsha/Employee-Details.git
   ```
2. **Navigate to the Project Directory:**
  ```bash
   cd Employee-Details
  ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the App:**
   ```bash
   npm run dev
   ```
5. **Open Your Browser:**
   Go to → `http://localhost:5173` (or the port specified by Vite in your terminal).
   You now have a fully functional Employee Details dashboard running locally!

## 🧪 Testing
  - Tested on modern environments (Node >= 16)
  - Verified rendering in Chrome, Firefox, Edge, and Safari
  - Fully responsive design confirmed on mobile and tablet screens
  - Cross-tested webcam permissions functionality across major browsers

## 📖 What I Learned
  - Integrating and managing webcam APIs within a functional React component lifecycle.
  - Building interactive, map-based geographic visualizations with Leaflet in a modern React application.
  - Rendering data-driven SVG charts using Recharts for business intelligence aesthetics.
  - Structuring a modular Single Page Application (SPA) with React Router passing state across deeply nested navigations.
  - Creating a polished, cohesive UI using Lucide icons and clean CSS.

## 🤝 Contributing
Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
