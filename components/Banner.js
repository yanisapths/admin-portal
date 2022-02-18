import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px] font-noto ">
          <Image  src="/tree.jpg" 
           layout="fill"
           objectFit="cover"
           className="opacity-90"
           />
           <div className="absolute top-1/4 md:top-1/3 w-full text-center">
             <p className="text-white text-3xl md:text-5xl  font-black shadow-4xl opacity-100 p-3">สร้างนัดกับศูนย์ดูแล</p>
             <button className="text-teal-500 bg-white px-10 py-4 shadow-xl rounded-full font-bold my-3 hover:shadow-xl xl:text-3xl md:text-2xl ">เริ่มต้น</button>
           </div>
    </div>
  )
}

export default Banner