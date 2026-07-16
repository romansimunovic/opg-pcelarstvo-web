export function createWhatsAppLink(product:string){

const phone =
import.meta.env.VITE_WHATSAPP_NUMBER;


const message =
`Pozdrav, zainteresiran/a sam za ${product}. Molim više informacija.`;


return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}