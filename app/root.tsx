import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Meta tags for SEO and social media sharing */}
        <meta name="description" content="A blog website built with React Router Framework Mode" />
        <meta name="keywords" content="React, React Router, Blog, Framework Mode, Static Rendering" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph Meta tags for social sharing */}
        <meta property="og:title" content="React Router Blog" />
        <meta property="og:description" content="Learn about React Router Framework Mode for building modern web apps" />
        <meta property="og:image" content="https://example.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta tags */}
        <meta name="twitter:title" content="React Router Blog" />
        <meta name="twitter:description" content="Learn about React Router Framework Mode for building modern web apps" />
        <meta name="twitter:image" content="https://example.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
