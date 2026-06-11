# React Portfolio

A personal portfolio website built with React and Vite. It includes sections for hero, about, skills, projects, and a contact form powered by EmailJS.

## Prerequisites

Before you run this project, make sure you have:

| Requirement | Recommended version |
|-------------|---------------------|
| [Node.js](https://nodejs.org/) | 18.x or newer (LTS) |
| npm | Comes with Node.js |

To check if they are installed, open a terminal and run:

```bash
node -v
npm -v
```

## Step-by-step: run locally

### 1. Clone or download the project

If you use Git:

```bash
git clone <your-repository-url>
cd "React Portfolio"
```

Or open the project folder in your terminal if you already have it on your machine.

### 2. Install dependencies

From the project root (the folder that contains `package.json`):

```bash
npm install
```

This downloads React, Vite, and all other packages listed in `package.json`.

### 3. Configure environment variables (contact form)

The contact form uses [EmailJS](https://www.emailjs.com/). Create a file named `.env` in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**How to get these values:**

1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Create an **Email Service** and copy the **Service ID**.
3. Create an **Email Template** and copy the **Template ID**.
4. Open **Account → API Keys** and copy your **Public Key**.

> **Note:** The site will still run without `.env`, but the contact form will fail when you submit it until these variables are set.

### 4. Start the development server

```bash
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`). Open that URL in your browser.

The page reloads automatically when you edit files.

### 5. Stop the server

In the terminal where the dev server is running, press `Ctrl + C`.

## Other useful commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally (run `build` first) |
| `npm run lint` | Run ESLint on the project |

### Production build

```bash
npm run build
npm run preview
```

After `build`, deploy the `dist` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project structure

```
React Portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   ├── App.jsx       # Main layout
│   ├── App.css
│   ├── main.jsx      # React entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
├── vite.config.js
└── .env              # Your EmailJS keys (not committed to Git)
```

## Tech stack

- **React** — UI
- **Vite** — dev server and build tool
- **react-scroll** — smooth section navigation
- **react-icons** — icons
- **AOS** — scroll animations

## Troubleshooting

- **`npm install` fails** — Update Node.js to 18+ and try again.
- **Port already in use** — Vite may pick another port; check the terminal output for the correct URL.
- **Contact form errors** — Confirm `.env` exists, variable names start with `VITE_`, and you restarted `npm run dev` after creating or editing `.env`.
