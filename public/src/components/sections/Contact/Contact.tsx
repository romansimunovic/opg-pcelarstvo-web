import Container from "../../ui/Container";
import Section from "../../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="bg-background py-16 md:py-24">
      <Container>
        <div className="relative rounded-[2rem] bg-brown p-8 md:p-16 text-center text-white shadow-xl overflow-hidden border border-honey/20">
          
          {/* Organski svjetlosni krugovi unutar kartice */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-honey/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-honey/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-honey">Naručite jednostavno</span>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
              Želite probati pravi domaći med?
            </h2>

            <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
              Kontaktirajte nas brzo i jednostavno. Javite nam se na WhatsApp i naručite svoje omiljene pčelinje proizvode direktno iz našeg pčelinjaka.
            </p>

            <div className="pt-4">
              <a
                href="https://wa.me/3859XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-honey px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:bg-honey-light hover:scale-[1.02] shadow-lg shadow-honey/10"
              >
                <span>💬</span> Pošalji upit na WhatsApp
              </a>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}