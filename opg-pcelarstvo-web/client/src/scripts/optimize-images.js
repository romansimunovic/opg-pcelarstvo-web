import sharp from "sharp";
import fs from "fs";


const folder="./src/assets/images";


function optimize(dir){

const files=fs.readdirSync(dir);


files.forEach(async(file)=>{


if(file.endsWith(".jpg")){


await sharp(`${dir}/${file}`)
.resize(
1200,
1200,
{
fit:"inside"
}
)
.jpeg({
quality:75
})
.toFile(
`${dir}/optimized-${file}`
);


console.log(
"Optimized:",
file
);


}


});


}


optimize(folder);