import Image from "next/image";
import image from "@/assets/media/image04.png";
import Link from "next/link";

export default function Card() {
  return (
    <Link href={"/bulbasaur"}>
      <div
        className=' bg-white p-[10px] rounded-md hover:bg-primary anim cursor-pointer group relative'
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)",
        }}
      >
        <Image className='w-full hover:scale-110 anim' src={image} alt='' />
        <p className='text-sm absolute inset-4'>#010</p>
        <p className='mt-3 mb-1 group-hover:text-white anim'>Bulbasaur</p>
        <div className='flex gap-2 2xl:gap-2 p-[6px] mr-4'>
          <button className='bg-grass btn'>Grass</button>
          <button className='bg-poison btn'>Poison</button>
        </div>
      </div>
    </Link>
  );
}
