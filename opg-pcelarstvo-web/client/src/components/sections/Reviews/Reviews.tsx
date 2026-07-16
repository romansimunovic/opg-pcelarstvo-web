import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

import { reviews } from "../../../data/reviews";


function Stars({ rating }: { rating: number }) {

  return (
    <div className="flex gap-1 text-honey">

      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>
          ★
        </span>
      ))}

    </div>
  );
}



export default function Reviews() {

  return (

    <Section>

      <Container>

        <SectionTitle
          eyebrow="Recenzije"
          title="Što naši kupci kažu"
          description="
          Zadovoljni kupci najbolja su potvrda kvalitete.
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

          {reviews.map((review) => (

            <article
              key={review.id}
              className="
              rounded-3xl
              border
              border-border
              bg-white
              p-8
              "
            >

              <Stars rating={review.rating}/>


              <p
                className="
                mt-6
                leading-relaxed
                text-brown-light
                "
              >
                "{review.comment}"
              </p>


              <p
                className="
                mt-6
                font-semibold
                text-brown
                "
              >
                {review.author}
              </p>


            </article>

          ))}

        </div>


      </Container>

    </Section>

  );
}