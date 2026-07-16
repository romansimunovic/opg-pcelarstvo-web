import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";


const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+385 91 000 0000",
  },

  {
    icon: Mail,
    title: "Email",
    value: "info@pcelarstvo-smjeska.hr",
  },

  {
    icon: MapPin,
    title: "Lokacija",
    value: "Slavonija, Hrvatska",
  },
];


export default function Contact() {

  return (
    <Section id="contact">

      <Container>

        <SectionTitle
          eyebrow="Kontakt"
          title="Naručite svoj prirodni med"
          description="
          Javite nam se i rezervirajte svježi domaći med.
          "
        />


        <div
          className="
          mt-16
          grid
          gap-8
          lg:grid-cols-2
          "
        >


          <div
            className="
            rounded-3xl
            bg-cream
            p-8
            "
          >

            <h3
              className="
              font-heading
              text-3xl
              font-bold
              text-brown
              "
            >
              Kontakt informacije
            </h3>


            <div
              className="
              mt-8
              space-y-6
              "
            >

              {contactItems.map((item) => {

                const Icon = item.icon;


                return (
                  <div
                    key={item.title}
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-honey
                      "
                    >
                      <Icon size={22}/>
                    </div>


                    <div>

                      <p
                        className="
                        text-sm
                        text-brown-light
                        "
                      >
                        {item.title}
                      </p>


                      <p
                        className="
                        font-semibold
                        text-brown
                        "
                      >
                        {item.value}
                      </p>

                    </div>

                  </div>
                );

              })}

            </div>


            <a
              href="#"
              className="
              mt-10
              flex
              w-fit
              items-center
              gap-2
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

              <MessageCircle size={20}/>

              WhatsApp narudžba

            </a>


          </div>


          <form
            className="
            rounded-3xl
            border
            border-border
            bg-white
            p-8
            "
          >

            <div className="space-y-5">


              <input
                type="text"
                placeholder="Ime i prezime"
                className="
                w-full
                rounded-xl
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-honey
                "
              />


              <input
                type="email"
                placeholder="Email"
                className="
                w-full
                rounded-xl
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-honey
                "
              />


              <textarea
                placeholder="Vaša poruka"
                rows={5}
                className="
                w-full
                rounded-xl
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-honey
                "
              />


              <button
                type="submit"
                className="
                w-full
                rounded-full
                bg-honey
                py-3
                font-semibold
                text-white
                transition
                hover:bg-honey-light
                "
              >
                Pošalji upit
              </button>


            </div>


          </form>


        </div>


      </Container>

    </Section>
  );
}