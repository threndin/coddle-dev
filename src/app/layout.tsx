import type { Metadata } from "next";
import "./globals.css";

const title = "Coddle Developers — Build with Coddle";
const description = "The developer hub for the Coddle ecosystem. Explore Coddle, Coddle Workspace, and Coddle Learn.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coddle.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

const themeScript = `try {
  const theme = localStorage.getItem("coddle-theme");
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
} catch {}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
