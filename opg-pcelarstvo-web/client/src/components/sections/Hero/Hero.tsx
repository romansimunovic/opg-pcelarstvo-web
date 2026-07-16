import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      bg-background
      pt-20
      "
    >

      <div className="
      mx-auto
      grid
      max-w-7xl
      gap-12
      px-6
      lg:grid-cols-2
      lg:px-8
      ">


        <motion.div
          initial={{
            opacity:0,
            x:-30
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.6
          }}
        >

          <span
            className="
            inline-block
            rounded-full
            bg-honey/10
            px-4
            py-2
            text-sm
            font-medium
            text-honey
            "
          >
            100% prirodni proizvodi
          </span>


          <h1
            className="
            mt-6
            font-heading
            text-5xl
            font-bold
            leading-tight
            text-brown
            lg:text-7xl
            "
          >
            Prirodni med iz srca Slavonije
          </h1>


          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-relaxed
            text-brown-light
            "
          >
            Pažljivo proizveden med iz vlastitog pčelinjaka,
            uz tradiciju, prirodu i ljubav prema pčelama.
          </p>


          <div className="mt-8 flex gap-4">

            <button
              className="
              rounded-full
              bg-honey
              px-7
              py-3
              font-semibold
              text-white
              transition
              hover:bg-honey-light
              "
            >
              Pogledaj proizvode
            </button>


            <button
              className="
              rounded-full
              border
              border-honey
              px-7
              py-3
              font-semibold
              text-honey
              "
            >
              Kontakt
            </button>

          </div>

        </motion.div>


        <div
          className="
          flex
          items-center
          justify-center
          "
        >

          <div
            className="
            h-96
            w-full
            rounded-3xl
            bg-cream
            "
          />

        </div>


      </div>

    </section>
  );
}