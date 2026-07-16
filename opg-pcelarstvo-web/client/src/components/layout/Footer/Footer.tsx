import {
Phone,
Mail,
MapPin
} from "lucide-react";


import {
FaFacebook,
FaInstagram
} from "react-icons/fa";


import Container from "../../ui/Container";



export default function Footer(){


return (

<footer

className="
bg-[#24160D]
text-white
"

>


<Container>


<div

className="
grid
gap-10
py-14
md:grid-cols-3
"

>


<div>

<h3

className="
font-heading
text-4xl
font-bold
"

>
Medenjak
</h3>


<p

className="
mt-4
text-white/70
"

>

Prirodni domaći med iz vlastitog
pčelinjaka.

</p>


</div>





<div>

<h4 className="font-semibold">
Kontakt
</h4>


<div className="mt-5 space-y-3 text-white/70">


<p className="flex gap-3">

<Phone size={18}/>

+385 XX XXX XXXX

</p>


<p className="flex gap-3">

<Mail size={18}/>

email@example.com

</p>



<p className="flex gap-3">

<MapPin size={18}/>

Slavonija

</p>


</div>

</div>





<div>

<h4 className="font-semibold">
Pratite nas
</h4>


<div

className="
mt-5
flex
gap-4
"

>

<a
href="#"
className="
rounded-full
bg-white/10
p-3
hover:bg-[#EB9605]
"
>

<FaFacebook/>

</a>


<a
href="#"
className="
rounded-full
bg-white/10
p-3
hover:bg-[#EB9605]
"
>

<FaInstagram/>

</a>


</div>


</div>



</div>




<div

className="
border-t
border-white/10
py-6
text-center
text-sm
text-white/60
"

>

© {new Date().getFullYear()} Pčelarstvo Medenjak

</div>


</Container>


</footer>

)

}