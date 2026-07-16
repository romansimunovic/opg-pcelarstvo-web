import { Hexagon } from "lucide-react";


export default function Logo() {

  return (

    <div
      className="
      flex
      items-center
      gap-3
      "
    >

      <div
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#EB9605]
        text-white
        shadow-md
        "
      >

        <Hexagon size={26}/>

      </div>


      <div>

        <p
          className="
          font-heading
          text-2xl
          font-bold
          leading-none
          "
        >
          Medenjak
        </p>


        <span
          className="
          text-xs
          tracking-widest
          uppercase
          opacity-70
          "
        >
          Pčelarstvo
        </span>


      </div>


    </div>

  );
}