import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero-image.jpg";
import Container from "../../ui/Container";


export default function Hero() {

  return (

    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      "
    >


      {/* Background image */}

      <img
        src={heroImage}
        alt="Prirodni domaći med i pčelarstvo"
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        "
      />


      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-brown/80
        via-brown/50
        to-transparent
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
              y:30
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
              bg-honey/90
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              "
            >
              100% prirodni domaći med
            </span>



            <h1
              className="
              mt-8
              text-5xl
              leading-tight
              text-white
              sm:text-6xl
              lg:text-8xl
              "
            >

              Slatki dar prirode
              iz našeg pčelinjaka

            </h1>



            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-white/90
              sm:text-xl
              "
            >

              Ručno proizveden med vrhunske kvalitete,
              nastao pažljivim radom i ljubavlju prema
              pčelama i prirodi.

            </p>



            <div
              className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              "
            >


              <a
                href="#products"
                className="
                rounded-full
                bg-honey
                px-8
                py-4
                text-center
                font-semibold
                text-white
                transition
                hover:bg-honey-dark
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
                text-center
                font-semibold
                text-white
                backdrop-blur
                transition
                hover:bg-white/10
                "
              >
                Kontaktiraj nas
              </a>


            </div>



            <div
              className="
              mt-12
              grid
              grid-cols-3
              gap-6
              "
            >

              <div>

                <p
                  className="
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  100%
                </p>

                <p
                  className="
                  text-sm
                  text-white/80
                  "
                >
                  prirodno
                </p>

              </div>



              <div>

                <p
                  className="
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  Domaće
                </p>

                <p
                  className="
                  text-sm
                  text-white/80
                  "
                >
                  podrijetlo
                </p>

              </div>



              <div>

                <p
                  className="
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  Premium
                </p>

                <p
                  className="
                  text-sm
                  text-white/80
                  "
                >
                  kvaliteta
                </p>

              </div>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>

  );
}