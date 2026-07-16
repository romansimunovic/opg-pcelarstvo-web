import { motion } from "framer-motion";
import heroImage from "../../../assets/images/hero-image.jpg";

import Container from "../../ui/Container";


export default function Hero() {


return (

<section

id="home"

className="
relative
min-h-screen
overflow-hidden
"

>


<img

src={heroImage}

alt="Prirodni domaći med i pčelarstvo"

fetchPriority="high"


className="
absolute
inset-0
h-full
w-full
object-cover
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-r
from-[#3A2415]/90
via-[#3A2415]/60
to-transparent
"

/>


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top_right,rgba(235,150,5,0.35),transparent_40%)]
"

/>




<Container>


<div

className="
relative
flex
min-h-screen
items-center
"

>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
max-w-3xl
text-white
"

>


<span

className="
inline-flex
rounded-full
bg-[#EB9605]
px-5
py-2
text-sm
font-semibold
"

>

Od košnice do vaše obitelji 🍯

</span>



<h1

className="
mt-8
font-heading
text-5xl
font-bold
leading-tight
sm:text-7xl
"

>

Prirodni med
koji čuva okus Slavonije

</h1>



<p

className="
mt-6
max-w-xl
text-lg
leading-relaxed
text-white/85
"

>

Ručno proizveden domaći med iz vlastitog
pčelinjaka. Prirodan okus, pažljiv rad i
tradicija u svakoj teglici.

</p>




<div

className="
mt-10
flex
flex-wrap
gap-4
"

>


<a

href="#products"

className="
rounded-full
bg-[#EB9605]
px-8
py-4
font-semibold
text-white
transition
hover:bg-[#C87900]
"

>

Pogledaj proizvode

</a>



<a

href="#contact"

className="
rounded-full
border
border-white/40
px-8
py-4
font-semibold
text-white
transition
hover:bg-white
hover:text-[#3A2415]
"

>

Kontakt

</a>


</div>


</motion.div>


</div>


</Container>


</section>


);

}