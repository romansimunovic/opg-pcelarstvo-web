import { Leaf, Heart, ShieldCheck } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";

const benefits = [
  {
    icon: Leaf,
    title: "100% prirodno",
    text: "Med proizveden bez ikakvih dodataka, šećera ili konzervansa. Baš onako kako su ga pčele pripremile.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: Heart,
    title: "Briga prema pčelama",
    text: "Naše pčele i njihovo zdravlje su nam uvijek na prvom mjestu. Radimo isključivo održivo i humano pčelarstvo.",
    color: "bg-rose-50 text-rose-500 border-rose-100"
  },
  {
    icon: ShieldCheck,
    title: "Domaća kvaliteta",
    text: "Svaka teglica je plod pažljivog ručnog rada, punjena na našem OPG-u u srcu Slavonije uz strogu kontrolu.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  }
];

export default function Benefits() {
  return (
    <Section className="bg-cream py-20 border-y border-border/50">
      <Container>
        <SectionTitle
          eyebrow="Zašto mi?"
          title="Više od običnog meda"
          description="Prirodni proizvod iza kojeg stoji trud, obiteljsko znanje i istinska ljubav prema pčelarstvu i očuvanju prirode."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-honey/30"
            >
              {/* Ikona s krugom u boji teme prednosti */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream text-honey border border-border transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-8 h-8 stroke-[1.75]" />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-bold text-brown leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-brown-light font-body text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}