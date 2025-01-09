import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import "./styles/fonts.css";
import { Footer } from "./components/global/Footer";

/**
 * The `links` function is part of Remix's API for adding custom links to the <head> of your HTML document.
 *
 * Why is this needed?
 * 1. Performance Optimization: Preloading the font file tells the browser to start downloading it as soon as possible,
 *    even before it encounters the font in the CSS. This can significantly reduce the time it takes for the font to be
 *    available and applied to your text.
 *
 * 2. Preventing FOUT/FOIT: By preloading, we can minimize or eliminate the "Flash of Unstyled Text" (FOUT) or
 *    "Flash of Invisible Text" (FOIT) that occurs when text is rendered before the custom font is loaded.
 *
 * 3. Improved User Experience: Faster font loading leads to a smoother, more consistent visual experience for users,
 *    especially on slower connections.
 *
 * 4. Resource Prioritization: The `preload` directive gives the browser a hint about the importance of this resource,
 *    potentially prioritizing it over other, less critical resources.
 *
 * Note: Ensure that the font file path is correct and that the font is actually used in your CSS and Tailwind configuration.
 */
// export const links: LinksFunction = () => [
//   {
//     rel: "preload",
//     href: "/fonts/FTPolar-Book.woff2",
//     as: "font",
//     type: "font/woff2",
//     crossOrigin: "anonymous",
//   },
// ];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
