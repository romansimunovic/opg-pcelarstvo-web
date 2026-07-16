import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar(){


const [open,setOpen]=useState(false);


const links=[
["Početna","#home"],
["Proizvodi","#products"],
["O nama","#about"],
["Galerija","#gallery"],
["Kontakt","#contact"]
];


return (

<nav

className="
fixed
top-0
z-50
w-full
bg-white/90
backdrop-blur
shadow-sm
"

>


<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
"

>


<h1

className="
font-heading
text-3xl
font-bold
text-[#3A2415]
"

>

Smješka 🍯

</h1>



<button

className="md:hidden"

onClick={()=>setOpen(!open)}

>

{

open ?

<X/>

:

<Menu/>

}

</button>



<div

className="
hidden
gap-8
md:flex
"

>

{

links.map(([name,url])=>(

<a

key={name}

href={url}

className="
font-medium
hover:text-[#EB9605]
"

>

{name}

</a>

))

}

</div>


</div>


{

open &&

<div

className="
flex
flex-col
gap-5
border-t
px-6
py-6
md:hidden
"

>

{

links.map(([name,url])=>(

<a

key={name}

href={url}

onClick={()=>setOpen(false)}

>

{name}

</a>

))

}


</div>

}


</nav>

)

}