import Image from "next/image";
import image from "@/assets/media/image04.png";

export default function Card() {
  return (
    <div
      className=' bg-white p-[10px] rounded-md'
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)",
      }}
    >
      <Image className='w-full ' src={image} alt='' />
      <p className='mt-3 mb-1'>Bulbasaur</p>
      <div className='flex gap-2 2xl:gap-2 p-[6px] mr-4'>
        <button className='bg-grass btn'>Grass</button>
        <button className='bg-poison btn'>Poison</button>
      </div>
    </div>
  );
}
