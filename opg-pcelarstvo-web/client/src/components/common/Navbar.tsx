import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "../../constants/navigation";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <header
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-border
      bg-white/80
      backdrop-blur
      "
    >

      <nav
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
        lg:px-8
        "
      >


        <a
          href="/"
          className="
          font-heading
          text-3xl
          font-bold
          text-brown
          "
        >
          Pčelarstvo
        </a>



        {/* Desktop menu */}

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {navigation.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="
              text-sm
              font-medium
              text-brown-light
              transition
              hover:text-honey
              "
            >
              {item.label}
            </a>

          ))}


          <a
            href="#contact"
            className="
            rounded-full
            bg-honey
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            "
          >
            Kontakt
          </a>


        </div>




        {/* Mobile button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          rounded-xl
          p-2
          text-brown
          md:hidden
          "
        >

          {open
            ? <X size={28}/>
            : <Menu size={28}/>
          }

        </button>



      </nav>



      {/* Mobile menu */}

      {open && (

        <div
          className="
          border-t
          border-border
          bg-white
          px-6
          py-6
          md:hidden
          "
        >

          <div
            className="
            flex
            flex-col
            gap-5
            "
          >

            {navigation.map((item)=>(

              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                text-brown
                "
              >
                {item.label}
              </a>

            ))}


          </div>


        </div>

      )}


    </header>

  );
}