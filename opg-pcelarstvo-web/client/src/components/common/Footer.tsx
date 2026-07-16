export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-brown-light">
            © {new Date().getFullYear()} OPG Pčelarstvo. Sva prava pridržana.
          </p>


          <p className="text-sm text-brown-light">
            Prirodni proizvodi iz Slavonije 🍯
          </p>

        </div>

      </div>

    </footer>
  );
}