import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../common/CartDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  const links = [
    ["Početna", "#home"],
    ["Proizvodi", "#products"],
    ["O nama", "#about"],
    ["Galerija", "#gallery"],
    ["Kontakt", "#contact"],
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          {/* Logo */}
          <h1 className="font-heading text-3xl font-bold text-[#3A2415]">
            Medenjak 🍯
          </h1>

          {/* Desni dio: Navigacija i Košarica */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Linkovi */}
            <div className="hidden gap-8 md:flex">
              {links.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  className="font-medium hover:text-[#EB9605] transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>

            {/* Gumb za košaricu (Vidljiv svugdje) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#3A2415] hover:text-[#EB9605] transition-colors cursor-pointer"
              aria-label="Otvori košaricu"
            >
              <ShoppingBag size={24} />
              {/* Dinamični bedž koji pulsira kada ima artikala */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#EB9605] text-[10px] font-bold text-white ring-2 ring-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobilni Menu Gumb */}
            <button
              className="md:hidden p-2 text-[#3A2415]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobilni Menu padajući izbornik */}
        {open && (
          <div className="flex flex-col gap-5 border-t px-6 py-6 md:hidden bg-white">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="font-medium text-[#3A2415] hover:text-[#EB9605] transition-colors"
                onClick={() => setOpen(false)}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Klizna košarica */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}