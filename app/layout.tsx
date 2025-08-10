import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className="pt-22 bg-base-200">
        <div className="navbar fixed top-0 bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="pl-3 text-xl">Abax.BG</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="btn btn-accent">Всички екскурзии</a>
              </li>
            </ul>
          </div>
        </div>
        <main className="w-full min-h-screen flex items-center justify-center">
          {children}
        </main>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Разработено от Никола Андреев и Владимир Пасев за{" "}
              <strong>Abax.BG</strong>
            </p>
            <p className="text-sm opacity-65 -mt-1.5">
              със съдействието на Петя Грудева
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
