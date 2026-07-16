export function createWhatsAppLink(product:string){

const phone="3859XXXXXXXX";

const message=
`Pozdrav, zainteresiran/a sam za ${product}. Molim više informacija.`;

return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}