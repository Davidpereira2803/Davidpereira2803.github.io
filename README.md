# Modern Developer Portfolio

A high-performance, visually striking portfolio website built for computer science students and software engineers. Designed to be professional, innovative, and memorable.

![Portfolio Preview](https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop)

## ✨ Features

-   **Modern Tech Stack:** Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
-   **Smooth Animations:** Powered by Framer Motion for scroll-linked interactions and page transitions.
-   **Responsive Design:** Fully mobile-first layout that looks great on any device.
-   **Dark Mode Default:** A polished, engineer-focused aesthetic with deep zinc backgrounds and vibrant accents.
-   **Reusable Components:** Modular UI architecture for easy scalability.
-   **Performance Focused:** Optimized images, fonts (`next/font`), and code splitting.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** Inter & JetBrains Mono

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 🎨 Customization

-   **Content:** Edit the data files in `src/data/` to update your projects, experience, and social links.
-   **Theme:** Modify `tailwind.config.ts` and `globals.css` to change colors and fonts.
-   **Components:** Add new sections in `src/components/sections/`.

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/           # Reusable base components (Button, Card, etc.)
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── layout/       # Global layout components (Navbar, Footer)
├── data/             # Content data (easy to update)
├── lib/              # Utilities
└── types/            # TypeScript definitions
```

## 📄 License

MIT License. Free to use for your own portfolio!
