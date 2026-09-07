import "./globals.css";

export const metadata = {
  title: "RePromptsQuest",
  description: "RePromptsQuest website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
