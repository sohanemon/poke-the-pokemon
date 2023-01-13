import Image from "next/image";
import image from "@/assets/media/image04.png";

export default function Card() {
  return (
    <div className='w-60 h-80 bg-white p-[10px]'>
      <Image className='w-full h-52' src={image} alt='' />
      <p className='text-base'>Bulbasaur</p>
    </div>
  );
}
