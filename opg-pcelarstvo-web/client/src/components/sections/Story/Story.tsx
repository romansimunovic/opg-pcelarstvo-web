import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import storyImage from "../../../assets/images/story/beekeeping.jpg";


export default function Story() {
  return (
    <Section id="about">

      <Container>

        <div
          className="
          grid
          items-center
          gap-12
          lg:grid-cols-2
          "
        >

          <div
            className="
            overflow-hidden
            rounded-[2rem]
            "
          >

            <img
              src={storyImage}
              alt="Pčelarstvo i rad s pčelama"
              className="
              h-full
              min-h-[450px]
              w-full
              object-cover
              "
            />

          </div>


          <div>

            <SectionTitle
              eyebrow="Naša priča"
              title="Više od meda, tradicija i ljubav prema prirodi"
              description="
              Naš pčelinjak nastaje iz želje da ponudimo
              kvalitetan prirodni proizvod uz poštovanje
              prema pčelama i okolišu.
              "
            />


            <p
              className="
              mt-8
              leading-relaxed
              text-brown-light
              "
            >
              Svaka teglica meda rezultat je pažljivog rada,
              prirodnog procesa i vremena koje je potrebno
              da priroda napravi svoje.
            </p>


            <div
              className="
              mt-8
              grid
              grid-cols-2
              gap-6
              "
            >

              <div
                className="
                rounded-2xl
                bg-cream
                p-5
                "
              >

                <p
                  className="
                  text-3xl
                  font-bold
                  text-honey
                  "
                >
                  100%
                </p>

                <p className="text-sm text-brown-light">
                  prirodno
                </p>

              </div>


              <div
                className="
                rounded-2xl
                bg-cream
                p-5
                "
              >

                <p
                  className="
                  text-3xl
                  font-bold
                  text-honey
                  "
                >
                  Lokalno
                </p>

                <p className="text-sm text-brown-light">
                  iz Slavonije
                </p>

              </div>


            </div>


          </div>

        </div>

      </Container>

    </Section>
  );
}