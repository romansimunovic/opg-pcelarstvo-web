import storyImage from "../../../assets/images/story/beekeeping.jpg";
import Container from "../../ui/Container";
import Section from "../../ui/Section";


export default function Story(){


return (

<Section
id="about"
className="
bg-[#3A2415]
text-white
"
>


<Container>


<div

className="
grid
items-center
gap-12
lg:grid-cols-2
"

>


<div>


<img

src={storyImage}

alt="Pčelarstvo i briga o pčelama"

loading="lazy"

className="
rounded-[2.5rem]
shadow-2xl
"

/>


</div>




<div>


<p

className="
text-sm
font-semibold
uppercase
tracking-[0.25em]
text-[#EB9605]
"

>

Naša priča

</p>



<h2

className="
mt-5
font-heading
text-5xl
font-bold
"

>

Tradicija, priroda
i ljubav prema pčelama

</h2>




<p

className="
mt-6
text-lg
leading-relaxed
text-white/80
"

>

Pčelarstvo Smješka nastalo je iz ljubavi
prema prirodi i želje da se ljudima ponudi
kvalitetan domaći med proizveden na
prirodan način.

</p>



<p

className="
mt-5
text-lg
leading-relaxed
text-white/80
"

>

Svaka teglica predstavlja pažljiv rad,
brigu prema pčelama i poštovanje prema
prirodnom procesu proizvodnje.

</p>




<div

className="
mt-8
flex
gap-6
"

>


<div>

<p
className="
text-3xl
font-bold
text-[#EB9605]
"
>
100%
</p>

<p>
Prirodno
</p>

</div>



<div>

<p
className="
text-3xl
font-bold
text-[#EB9605]
"
>
∞
</p>

<p>
Posvećenost
</p>

</div>


</div>


</div>


</div>


</Container>


</Section>

)

}