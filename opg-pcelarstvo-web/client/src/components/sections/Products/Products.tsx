import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../ui/ProductCard";

import { products } from "../../../data/products";



export default function Products(){


return (

<Section

id="products"

className="
bg-[#FFF4DC]
"

>


<Container>


<SectionTitle

eyebrow="Naši proizvodi"

title="Prirodni med iz vlastitog pčelinjaka"

description="
Odabrani proizvodi nastali pažljivim radom
i brigom prema pčelama.
"

/>



<div

className="
mt-16
grid
gap-10
md:grid-cols-2
"

>


{

products.map(product=>(

<ProductCard

key={product.id}

product={{ ...product, price: String(product.price) }}

/>

))

}


</div>


</Container>


</Section>


)

}