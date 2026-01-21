export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased min-h-screen bg-background text-foreground">
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
