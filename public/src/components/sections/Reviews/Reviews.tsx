import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";
import { reviews } from "../../../data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-honey text-lg">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index} className="drop-shadow-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <Section className="bg-background py-20 border-t border-border/40">
      <Container>
        <SectionTitle
          eyebrow="Recenzije"
          title="Što naši kupci kažu"
          description="Zadovoljni kupci i prazne teglice najbolja su potvrda naše kvalitete."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Stars rating={review.rating} />
                <p className="mt-5 font-body text-base leading-relaxed text-brown-light italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-heading text-xl font-bold text-brown">
                  {review.author}
                </p>
                <span className="text-xs text-honey font-semibold uppercase tracking-wider">Provjereni kupac</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}