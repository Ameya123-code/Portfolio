# Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Ameya123-code/Portfolio)

This repository contains the source code for my personal portfolio website. It's a dynamic and interactive single-page application built with React, Vite, and Tailwind CSS, featuring 3D models and advanced animations to showcase my skills, projects, and professional experience.

## Features

*   **Interactive 3D Hero Section:** A captivating hero section with a parallax background and a floating 3D astronaut model, powered by React Three Fiber.
*   **Animated "About Me" Section:** Features an interactive 3D globe using `cobe` and an orbiting display of technical skills.
*   **Dynamic UI Components:** Includes animated text with `FlipWords`, a scrolling `Marquee`, and background `Particles` that react to mouse movement.
*   **Custom Page Loader:** A unique "Minecraft-style" loading animation provides an engaging user experience while assets are loading.
*   **Functional Contact Form:** Integrated with EmailJS to enable visitors to send messages directly from the website.
*   **Responsive Design:** A fully responsive layout that is optimized for both desktop and mobile devices.

## Tech Stack

*   **Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **3D & Animation:** React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Maath, Framer Motion, Motion, Cobe
*   **Services:** EmailJS

## Project Structure

The codebase is organized into a modular structure for clarity and maintainability.

```
/
├── public/               # Static assets, including 3D models and images
├── src/
│   ├── components/       # Reusable UI components (Globe, Particles, Loader, etc.)
│   ├── constants/        # Static data for projects, experiences, and socials
│   ├── sections/         # Major page sections (Hero, About, Contact, etc.)
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point of the application
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/ameya123-code/portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.


## Acknowledgements

*   The 3D astronaut model, "Neversong Peet," was created by [wallmasterr](https://sketchfab.com/wallmasterr) and is licensed under [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/).
