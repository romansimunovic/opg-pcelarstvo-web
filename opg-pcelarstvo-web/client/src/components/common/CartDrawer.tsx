import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import QuantitySelector from "../ui/QuantitySelector";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  // Formatiranje cijene
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("hr-HR", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  // Generiranje WhatsApp poruke s narudžbom
  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = "Pozdrav! Želim naručiti sljedeće proizvode iz Vašeg pčelinjaka:\n\n";
    
    cart.forEach((item) => {
      message += `🐝 *${item.name}* (${item.weight}) — ${item.quantity} kom x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\n*Ukupno za platiti:* ${formatPrice(cartTotal)}`;
    message += "\n\nMolim Vas potvrdu narudžbe i informacije o dostavi. Hvala!";

    // Kreiranje WhatsApp poveznice (koristi tvoj broj telefona umjesto X-eva)
    const phoneNumber = "385XXXXXXXXX"; // Zamijeni s pravim brojem klijenta
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Tamna pozadina iza košarice */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform bg-white shadow-2xl flex flex-col h-full">
          
          {/* Zaglavlje košarice */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
            <h2 className="text-xl font-bold text-brown flex items-center gap-2">
              <ShoppingBag size={22} className="text-honey" />
              Vaša košarica
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-brown transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Popis artikala */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingBag size={64} className="text-neutral-200" />
                <p className="text-neutral-500 font-medium">Vaša košarica je prazna.</p>
                <button
                  onClick={onClose}
                  className="text-sm font-semibold text-honey hover:underline cursor-pointer"
                >
                  Nastavi kupovinu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover bg-cream flex-shrink-0"
                  />
                  <div className="flex flex-col flex-1 min-w-0 justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-semibold text-brown truncate">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          aria-label="Ukloni proizvod"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.weight}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <QuantitySelector
                        quantity={item.quantity}
                        onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                        onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      />
                      <span className="font-bold text-honey">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Podnožje košarice s ukupnim iznosom i gumbom */}
          {cart.length > 0 && (
            <div className="border-t border-neutral-100 px-6 py-6 bg-neutral-50 space-y-4">
              <div className="flex justify-between text-base font-bold text-brown">
                <span>Ukupno za platiti:</span>
                <span className="text-lg text-honey">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-neutral-400">
                Klikom na gumb bit ćete preusmjereni na WhatsApp s pripremljenom porukom za narudžbu.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={clearCart}
                  type="button"
                  className="rounded-lg border border-neutral-200 bg-white text-xs font-semibold text-neutral-500 hover:bg-neutral-100 transition-colors py-3 cursor-pointer"
                >
                  Isprazni
                </button>
                <button
                  onClick={handleCheckout}
                  type="button"
                  className="rounded-lg bg-brown hover:bg-honey text-xs font-semibold text-white transition-colors py-3 text-center cursor-pointer"
                >
                  Pošalji narudžbu
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}