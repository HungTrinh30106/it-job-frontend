import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";

export const metadata: Metadata = {
  title: "Project-6",
  description: "Website tuyển dụng IT",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
