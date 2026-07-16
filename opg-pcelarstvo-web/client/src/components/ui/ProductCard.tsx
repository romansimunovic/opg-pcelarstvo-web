import { useState } from "react";
import { useCart } from "../../context/CartContext";
import QuantitySelector from "./QuantitySelector";

interface Product {
  id: string; // Dodan id
  name: string;
  description: string;
  image: string;
  weight: string; // Dodana gramaža
  price: number; 
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Funkcija koja pretvara broj u format "10,00 €" prema hrvatskim standardima
  const formattedPrice = new Intl.NumberFormat('hr-HR', {
    style: 'currency',
    currency: 'EUR'
  }).format(product.price);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Resetiramo selektor na 1 nakon uspješnog dodavanja u košaricu
    setQuantity(1); 
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col h-full">
      
      {/* Kontejner za sliku s fiksnim omjerom stranica */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-cream relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        {/* Prikaz gramaže na slici */}
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-brown shadow-xs">
          {product.weight}
        </span>
      </div>

      {/* Sadržaj kartice */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brown">
            {product.name}
          </h3>
          <p className="font-body text-sm leading-relaxed text-brown-light">
            {product.description}
          </p>
        </div>

        {/* Selektor količine i cijena */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="font-body text-xs font-semibold text-brown-light uppercase tracking-wider">
              Količina:
            </span>
            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <span className="text-xs text-brown-light">Ukupno:</span>
              <span className="font-body text-xl font-bold text-honey">
                {formattedPrice}
              </span>
            </div>

            {/* Za demo, gumb može direktno dodati u naš React Context košarice */}
            <button
              onClick={handleAddToCart}
              type="button"
              className="rounded-lg bg-brown hover:bg-honey px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 cursor-pointer"
            >
              U košaricu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}