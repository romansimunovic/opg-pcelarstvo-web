import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../ui/ProductCard";
import { products } from "../../../data/products";

export default function Products() {
  return (
    <Section id="products" className="bg-cream py-20">
      <Container>
        <SectionTitle
          eyebrow="Naši proizvodi"
          title="Prirodni med iz vlastitog pčelinjaka"
          description="Odabrani proizvodi nastali pažljivim radom i brigom prema pčelama. Izravno s pčelinjaka do vašeg stola."
        />

        {/* Promijenjen grid s boljim razmakom i 3 stupca na desktopu */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, price: String(product.price) }}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}