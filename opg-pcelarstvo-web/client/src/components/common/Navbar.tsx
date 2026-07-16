import { navigation } from "../../constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="/"
          className="font-heading text-3xl font-bold text-brown"
        >
          Pčelarstvo
        </a>


        <div className="hidden items-center gap-8 md:flex">

          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brown-light transition hover:text-honey"
            >
              {item.label}
            </a>
          ))}

        </div>


        <button
          className="
          rounded-full
          bg-honey
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-honey-light
          "
        >
          Kontakt
        </button>

      </nav>
    </header>
  );
}