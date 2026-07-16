import {
  Leaf,
  Heart,
  ShieldCheck
} from "lucide-react";


import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";



const benefits=[

{
icon:Leaf,
title:"100% prirodno",
text:"Med proizveden bez nepotrebnih dodataka."
},

{
icon:Heart,
title:"Briga prema pčelama",
text:"Pčele i priroda uvijek su na prvom mjestu."
},

{
icon:ShieldCheck,
title:"Domaća kvaliteta",
text:"Pažljiv rad i provjerena kvaliteta proizvoda."
}

];



export default function Benefits(){


return (

<Section
className="
bg-[#FFF9EF]
"
>


<Container>


<SectionTitle

eyebrow="Zašto mi?"

title="Više od običnog meda"

description="
Prirodni proizvod iza kojeg stoji trud,
znanje i ljubav prema pčelarstvu.
"

/>



<div

className="
mt-16
grid
gap-8
md:grid-cols-3
"

>


{

benefits.map((item)=>(


<div

key={item.title}

className="
rounded-[2rem]
border
border-[#E8D7BA]
bg-[#FFFCF8]
p-8
text-center
shadow-sm
transition
hover:-translate-y-2
"

>


<div

className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-[#FFF4DC]
text-[#EB9605]
"

>

<item.icon size={32}/>

</div>



<h3

className="
mt-6
font-heading
text-3xl
font-bold
"

>

{item.title}

</h3>



<p

className="
mt-4
text-[#765538]
"

>

{item.text}

</p>


</div>


))


}


</div>


</Container>


</Section>


)

}