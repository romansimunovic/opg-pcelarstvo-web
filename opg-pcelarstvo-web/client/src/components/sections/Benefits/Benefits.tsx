import {
  Flower2,
  Heart,
  Leaf,
} from "lucide-react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";


const benefits = [
  {
    icon: Leaf,
    title: "100% prirodno",
    description:
      "Prirodni proizvodi bez nepotrebnih dodataka."
  },
  {
    icon: Flower2,
    title: "Lokalna proizvodnja",
    description:
      "Med nastaje uz pažljiv rad naših pčela."
  },
  {
    icon: Heart,
    title: "S ljubavlju prema pčelama",
    description:
      "Svaka staklenka nosi dio naše priče."
  },
];


export default function Benefits() {

  return (
    <Section
className="bg-cream"
>

      <Container>

        <SectionTitle
          eyebrow="Zašto naš med?"
          title="Priroda u svakoj kapljici"
          description="
          Tradicija, kvaliteta i pažljiv odnos prema prirodi
          ono su što naše proizvode čini posebnima.
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

          {benefits.map((item) => {

            const Icon = item.icon;


            return (

              <article
                key={item.title}
                className="
                rounded-3xl
                border
                border-border
                bg-white
                p-8
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-honey/10
                  text-honey
                  "
                >
                  <Icon size={28}/>
                </div>


                <h3
                  className="
                  mt-6
                  font-heading
                  text-2xl
                  font-bold
                  text-brown
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                  mt-3
                  text-brown-light
                  "
                >
                  {item.description}
                </p>

              </article>

            );

          })}

        </div>

      </Container>

    </Section>
  );
}