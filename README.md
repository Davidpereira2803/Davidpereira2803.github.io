<p align="center">
  <b>David Pereira — Portfolio</b>
</p>

<p align="center">
  A modern, high-performance portfolio website to showcase my projects, experience, and skills
</p>

<p align="center">
  <a href="https://github.com/Davidpereira2803/Davidpereira2803.github.io/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/Davidpereira2803/Davidpereira2803.github.io?style=flat" />
  </a>
  <a href="https://github.com/Davidpereira2803/Davidpereira2803.github.io/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/Davidpereira2803/Davidpereira2803.github.io" />
  </a>
  <a href="https://davidpereira2803.github.io/">
    <img alt="Live" src="https://img.shields.io/badge/live-demo-0057D9" />
  </a>
</p>

# Personal Portfolio v2.0

A high-performance, visually striking portfolio website built for computer science students and software engineers. Designed to be professional, innovative, and memorable.

![Portfolio Preview](https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/dev/public/websitescreenshot.png)

## Features

-   **Modern Tech Stack:** Built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.
-   **Smooth Animations:** Powered by Framer Motion for scroll-linked interactions and page transitions.
-   **Responsive Design:** Fully mobile-first layout that looks great on any device.
-   **Dark Mode Default:** A polished, engineer-focused aesthetic with deep zinc backgrounds and vibrant accents.
-   **Reusable Components:** Modular UI architecture for easy scalability.
-   **Performance Focused:** Optimized images, fonts (`next/font`), and code splitting.
-   **Automated CV Updates:** Integrated pipeline that automatically syncs the latest CV versions (EN/FR) from the LaTeX source.


# David Pereira — Portfolio Website

A modern, high-performance portfolio website to showcase my projects, experience, and skills as a computer science student and software engineer.

## Overview

This site is designed to present my academic background, technical expertise, and personal projects in a professional and engaging way. It features:

- **About Me** — Introduction and background
- **Experience** — Timeline of relevant roles and achievements
- **Projects** — Dynamic, data-driven project gallery with detail pages
- **Curriculum Vitae** — Dedicated download section for English and French versions with automated updates
- **Contact** — Easy way to reach out
- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Dark Theme** — Clean, modern look with subtle animations

## Built With

- [Next.js 16 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)

## CV Automation Pipeline

This project features a specialized automation for CV management:
1. **Source Sync:** The CV is maintained as LaTeX (often via Overleaf).
2. **Auto-Compile:** A GitHub Action in the CV repository compiles the LaTeX source into PDF.
3. **Auto-Push:** The compiled PDFs are pushed to the `assets/cv/` directory of this portfolio.
4. **Deploy Sync:** During the portfolio's deployment (GitHub Actions), the latest `cv-latest.pdf` and `cv-latest-fr.pdf` are automatically copied to the `public/cv` folder, ensuring the download links on the live site always point to the most recent version.

## Live Demo

[davidpereira2803.github.io](https://davidpereira2803.github.io/)

---

© David Pereira. All rights reserved.
