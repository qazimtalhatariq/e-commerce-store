# Next.js E-Commerce Store

## Project Overview

This repository contains the source code for a modern e-commerce platform built using Next.js 14. The application leverages TypeScript for type safety and React components for building reusable UI elements. Styling is handled by Tailwind CSS, and content is managed by Sanity, a headless CMS that provides a flexible and scalable backend.

## Key Features
 
 - ``Server-Side Rendering (SSR) with Next.js`` for enhanced SEO and performance.
 - ``Static Site Generation (SSG)`` for faster page loads and a better user experience.
 - ``Dynamic Routing`` to handle product pages, categories, and other dynamic content.
 - ``API Routes`` for handling server-side logic, such as product searches and user authentication.
 - ``TypeScript`` ensures code quality with type checking and auto-completion in IDEs.
 - ``Tailwind CSS`` provides utility-first styling, making it easy to create custom designs with a mobile-first  approach.
 - ``Sanity CMS integration`` for easy content management, allowing updates to products, categories, and other content without touching the codebase.
 - ``Responsive Design`` that works seamlessly across devices, from desktops to mobile phones.
 - ``Hover Effects`` with Tailwind's utility classes, enhancing user engagement.
## Technology Stack
 - ``Next.js:`` React framework for server-side rendering and route-based code splitting.
 - ``TypeScript:`` Superset of JavaScript for static typing.
 - ``Tailwind CSS:`` Utility-first CSS framework.
 - ``Sanity.io:`` Headless CMS for real-time collaboration and structured content.
## Getting Started
 ## Prerequisites
     Ensure you have the following installed on your system:

     Node.js (version 14 or later)
     npm (version 6 or later) or yarn as the package manager
     A Sanity project set up with your required datasets
 ## Installation Instructions
 1. Clone the Repository
```bash
Copy code
git clone https://github.com/yourusername/nextjs-ecommerce-store.git
cd nextjs-ecommerce-store
```
 2. Install Dependencies

```bash
Copy code
npm install
```
3. Set Up Environment Variables

Create a `.env.local` file in the root of your project directory:

```bash
Copy code
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=v2023-10-10
```
Replace your_sanity_project_id with your actual Sanity project ID.

Run the Development Server

```bash
Copy code
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## Sanity Setup
 1. Create a Sanity Project: Go to the Sanity website and create a new project.
 2. Configure Datasets: Ensure your project has a production dataset.
 3. Connect Sanity to Next.js: Use the project ID and dataset name in your .env.local file.
Refer to the official Sanity documentation for more details on setting up and configuring Sanity.

Project Structure
```plaintext
Copy code
├── public/               # Static files like images, fonts, etc.
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Next.js pages and API routes
│   ├── styles/           # Global styles and Tailwind CSS configuration
│   ├── utils/            # Utility functions and helpers
│   └── sanity/           # Sanity configuration and queries
├── .env.local            # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```
- `public/:` Contains static assets like images, fonts, and other files that will be served as-is.
- `src/components/:` Contains all the React components used throughout the project.
- `src/pages/:` Includes Next.js pages, which map to routes in the application. This directory also contains API routes under pages/api/.
- `src/styles/:` Houses global styles and the Tailwind CSS configuration file.
- `src/utils/:` Contains utility functions that are used across the project.
- `src/sanity/:` Contains Sanity-specific configuration, schema definitions, and GROQ queries for fetching data.

## Contact Information
For any inquiries, feel free to reach out:

Email: qazimtalhatariq@gmail.com
LinkedIn: [Visit My Profile](https://www.linkedin.com/in/qazimtalhatariq/)
