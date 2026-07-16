import { createWhatsAppLink } from "../../utils/whatsapp";

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
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

        {/* Cijena i gumb */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="font-body text-xl font-bold text-honey">
            {product.price}
          </span>

          <a
            href={createWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brown hover:bg-honey px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300"
          >
            Naruči
          </a>
        </div>
      </div>
    </div>
  );
}