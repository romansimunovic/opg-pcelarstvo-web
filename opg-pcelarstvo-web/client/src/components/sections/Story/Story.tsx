import storyImage from "../../../assets/images/story/beekeeping.jpg";
import Container from "../../ui/Container";
import Section from "../../ui/Section";

export default function Story() {
  return (
    <Section id="about" className="bg-brown text-white py-20 lg:py-28 overflow-hidden relative">
      {/* Suptilna tekstura pčelinjeg saća u pozadini (opcionalno, preko CSS gradijenta) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(235,150,5,0.1),transparent_40%)]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Slika s lijeve strane */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-3 rounded-2xl border border-dashed border-honey/40 pointer-events-none -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5]">
              <img
                src={storyImage}
                alt="Pčelarstvo i briga o pčelama"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Tekst s desne strane */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-honey bg-honey/10 border border-honey/20 px-3 py-1 rounded-full">
              Naša priča
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-white">
              Tradicija, priroda <br />& ljubav prema pčelama
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg leading-relaxed text-white/80">
              <p>
                Pčelarstvo Smješka nastalo je iz čiste ljubavi prema prirodi i želje da se ljudima ponudi pravovjeran, kvalitetan domaći med proizveden na tradicionalan način.
              </p>
              <p>
                Svaka naša teglica predstavlja pažljiv ručni rad, duboko poštovanje prema pčelama i predanost očuvanju prirodnog procesa proizvodnje bez prečaca.
              </p>
            </div>

            {/* Statistika/Ikone */}
            <div className="pt-6 flex gap-10 border-t border-white/10">
              <div>
                <p className="font-heading text-4xl font-bold text-honey">100%</p>
                <p className="font-body text-sm text-white/70 mt-1">Prirodni med</p>
              </div>

              <div className="<div>">
                <p className="font-heading text-4xl font-bold text-honey">∞</p>
                <p className="font-body text-sm text-white/70 mt-1">Posvećenost tradiciji</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}