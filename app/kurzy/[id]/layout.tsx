import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#008630',
};

export default function KurzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 