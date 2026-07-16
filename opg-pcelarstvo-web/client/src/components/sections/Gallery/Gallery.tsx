import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import image1 from "../../../assets/images/gallery/honey-1.jpg";
import image2 from "../../../assets/images/gallery/honey-2.jpg";
import image3 from "../../../assets/images/gallery/honey-3.jpg";
import image4 from "../../../assets/images/gallery/honey-4.jpg";


const images=[
 image1,
 image2,
 image3,
 image4,
];


export default function Gallery(){


return (

<Section
id="gallery"
className="bg-cream"
>


<Container>


<SectionTitle

eyebrow="Galerija"

title="Pogled u naš pčelinjak"

description="
Trenuci iz prirode i svakodnevnog rada s pčelama.
"

/>



<div

className="
mt-16
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"

>


{
images.map((image,index)=>(


<img

key={index}

src={image}

alt="Pčelarstvo"

className={`
rounded-3xl
object-cover
transition
duration-500
hover:scale-105

${
index===0 || index===3
?
"h-96"
:
"h-72"
}

`}

/>


))

}


</div>


</Container>


</Section>

)

}