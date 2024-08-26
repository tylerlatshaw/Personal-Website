import "./../globals.css";
import Navigation from "@/components/global-components/navigation";
import Footer from "@/components/global-components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <body className="leading-normal tracking-normal text-white bg-cover bg-fixed min-h-screen" suppressHydrationWarning={true}>
        <main>
          <Navigation />
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}