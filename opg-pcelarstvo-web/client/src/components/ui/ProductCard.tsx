import type { Product } from "../../types/Product";


interface ProductCardProps {
  product: Product;
}


export default function ProductCard({
  product,
}: ProductCardProps) {

  return (

    <article
      className="
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-white
      transition
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      <img
        src={product.image}
        alt={product.name}
        className="
        h-56
        sm:h-64
        w-full
        object-cover
        "
      />


      <div className="p-6">

        <h3
          className="
          font-heading
          text-3xl
          font-bold
          text-brown
          "
        >
          {product.name}
        </h3>


        <p
          className="
          mt-3
          text-brown-light
          "
        >
          {product.description}
        </p>


        <div
          className="
          mt-6
          flex
          items-center
          justify-between
          "
        >

          <div>

            <p className="text-sm text-brown-light">
              {product.weight}
            </p>

            <p
              className="
              text-2xl
              font-bold
              text-honey
              "
            >
              {product.price.toFixed(2)} €
            </p>

          </div>


          <button
            className="
            rounded-full
            bg-honey
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            hover:bg-honey-light
            "
          >
            Naruči
          </button>

        </div>

      </div>

    </article>

  );
}