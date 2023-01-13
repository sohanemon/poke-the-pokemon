import Image from "next/image";
import image from "@/assets/media/image04.png";
import Link from "next/link";

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  console.log(pokemon.image);
  return (
    <Link href={"/bulbasaur"}>
      <div className=' bg-white p-[10px] rounded-md hover:bg-primary anim cursor-pointer group relative sim-card'>
        <div className='group-hover:bg-white bg-[#F2F2F2] rounded-md'>
          <Image
            className='w-full group-hover:scale-110 anim '
            src={pokemon.image as string}
            width={1000}
            height={1000}
            alt=''
          />
        </div>
        <p className='text-sm absolute inset-4'>#010</p>
        <p className='mt-3 mb-1 group-hover:text-white anim'>{pokemon.name}</p>
        <div className='flex gap-2 2xl:gap-2 p-[6px] mr-4'>
          <button className='bg-grass btn'>Grass</button>
          <button className='bg-poison btn'>Poison</button>
        </div>
      </div>
    </Link>
  );
}
