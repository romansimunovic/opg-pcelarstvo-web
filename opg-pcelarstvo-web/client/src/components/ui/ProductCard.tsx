import { createWhatsAppLink } from "../../utils/whatsapp";

interface Product {

name:string;

description:string;

image:string;

price:string;

}



interface Props {

product:Product;

}



export default function ProductCard({

product

}:Props){



return (

<div

className="
overflow-hidden
rounded-[2rem]
border
border-[#E8D7BA]
bg-[#FFFCF8]
shadow-lg
transition
duration-300
hover:-translate-y-2
"

>


<div

className="
h-80
overflow-hidden
"

>


<img

src={product.image}

alt={product.name}

loading="lazy"

className="
h-full
w-full
object-cover
transition
duration-500
hover:scale-110
"

/>


</div>



<div

className="
p-8
"

>


<h3

className="
font-heading
text-3xl
font-bold
text-[#3A2415]
"

>

{product.name}

</h3>




<p

className="
mt-4
leading-relaxed
text-[#765538]
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


<span

className="
text-2xl
font-bold
text-[#EB9605]
"

>

{product.price}

</span>



<a


href={createWhatsAppLink(product.name)}

target="_blank"

rel="noopener noreferrer"

className="
rounded-full
bg-[#3A2415]
px-5
py-3
text-sm
font-semibold
text-white
transition
hover:bg-[#EB9605]
"

>

Naruči

</a>


</div>


</div>


</div>


)

}