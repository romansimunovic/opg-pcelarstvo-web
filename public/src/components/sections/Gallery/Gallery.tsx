import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import image1 from "../../../assets/images/gallery/honey-1.jpg";
import image2 from "../../../assets/images/gallery/honey-2.jpg";
import image3 from "../../../assets/images/gallery/honey-3.jpg";
import image4 from "../../../assets/images/gallery/honey-4.jpg";

const galleryItems = [
  { img: image1, alt: "Svježi bagremov med" },
  { img: image2, alt: "Prirodni cvjetni med" },
  { img: image3, alt: "Lipov med" },
  { img: image4, alt: "Med s aromom cvjetova" },
];

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-cream py-20 border-t border-border/40">
      <Container>
        <SectionTitle
          eyebrow="Galerija"
          title="Pogled u naš pčelinjak"
          description="Zavirite u naš svakodnevni rad, prekrasnu slavonsku prirodu i trenutke s našim marljivim pčelama."
        />

        {/* 
          Apsolutno čist, simetričan i moderan grid. 
          Sve slike su jednake visine (h-80), a na desktopu (lg) stoje u savršene 4 kolone.
          Ovo garantira nula "rupa" na bilo kojoj širini ekrana!
        */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md h-80"
            >
              {/* Slika s glatkim zumiranjem na hover */}
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Suptilni tamni sloj i tekst koji se pojave tek kad se prijeđe mišem */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-white/80 text-xs font-semibold tracking-wider uppercase">OPG Smješka</p>
                  <p className="text-white font-heading text-lg font-bold mt-1 leading-snug">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}