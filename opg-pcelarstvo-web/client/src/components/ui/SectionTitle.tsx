interface Props {

eyebrow:string;

title:string;

description:string;

}



export default function SectionTitle({

eyebrow,
title,
description

}:Props){


return (

<div

className="
mx-auto
max-w-3xl
text-center
"

>


<p

className="
text-sm
font-semibold
uppercase
tracking-[0.25em]
text-[#EB9605]
"

>

{eyebrow}

</p>




<h2

className="
mt-5
font-heading
text-4xl
font-bold
leading-tight
text-[#3A2415]
sm:text-5xl
"

>

{title}

</h2>




<div

className="
mx-auto
mt-6
h-1
w-20
rounded-full
bg-[#EB9605]
"

/>




<p

className="
mt-6
text-lg
leading-relaxed
text-[#765538]
"

>

{description}

</p>


</div>


)

}