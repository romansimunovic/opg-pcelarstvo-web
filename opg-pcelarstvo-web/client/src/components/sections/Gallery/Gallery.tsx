import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import image1 from "../../../assets/images/gallery/honey-1.jpg";
import image2 from "../../../assets/images/gallery/honey-2.jpg";
import image3 from "../../../assets/images/gallery/honey-3.jpg";
import image4 from "../../../assets/images/gallery/honey-4.jpg";


const images = [
  {
    src: image1,
    alt: "Prirodni med",
  },
  {
    src: image2,
    alt: "Pčelinjak",
  },
  {
    src: image3,
    alt: "Rad s pčelama",
  },
  {
    src: image4,
    alt: "Proizvodnja meda",
  },
];


export default function Gallery() {

  return (
    <Section id="gallery">

      <Container>

        <SectionTitle
          eyebrow="Galerija"
          title="Pogled u naš svijet pčela"
          description="
          Trenuci iz pčelinjaka, prirode i procesa
          stvaranja naših proizvoda.
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

          {images.map((image) => (

            <div
              key={image.src}
              className="
              group
              overflow-hidden
              rounded-3xl
              "
            >

              <img
                src={image.src}
                alt={image.alt}
                className="
                h-72
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>


      </Container>

    </Section>
  );
}