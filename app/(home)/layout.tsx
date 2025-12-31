// app/layout.tsx
import { ModeSwitcher } from "@/components/modeSwitch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased min-h-screen bg-background text-foreground">
      <div className="relative">
        {/* top-right floating mode switcher, above navbar */}
        <div className="pointer-events-auto fixed right-6 top-4 z-60">
          <ModeSwitcher />
        </div>
        {children}
      </div>
    </div>
  );
}
