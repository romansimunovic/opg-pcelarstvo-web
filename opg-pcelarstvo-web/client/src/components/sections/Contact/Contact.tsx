import Container from "../../ui/Container";
import Section from "../../ui/Section";


export default function Contact(){


return (

<Section

id="contact"

className="
bg-[#EB9605]
"

>


<Container>


<div

className="
rounded-[3rem]
bg-[#3A2415]
p-10
text-center
text-white
md:p-16
"

>


<h2

className="
font-heading
text-5xl
font-bold
"

>

Želite probati pravi domaći med?

</h2>



<p

className="
mx-auto
mt-6
max-w-xl
text-white/80
"

>

Kontaktirajte nas i naručite svoje
omiljene proizvode direktno iz našeg
pčelinjaka.

</p>



<a

href="https://wa.me/3859XXXXXXXX"

target="_blank"

className="
mt-8
inline-flex
rounded-full
bg-[#EB9605]
px-10
py-4
font-semibold
text-white
transition
hover:bg-[#F4B642]
"

>

Pošalji upit

</a>


</div>


</Container>


</Section>

)

}