import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link
      href={{
        pathname: `/${pokemon.name}`,
        query: { url: pokemon.artwork as string },
      }}
    >
      <div className=' bg-white p-[10px] rounded-md hover:bg-primary anim cursor-pointer group relative sim-card'>
        <div className='group-hover:bg-white bg-[#F2F2F2] rounded-md p-5'>
          <Image
            className='w-full group-hover:scale-110 anim h-28'
            src={pokemon.dreamworld as string}
            width={500}
            height={500}
            alt=''
          />
        </div>
        <p className='text-sm absolute inset-4'>#010</p>
        <p className='mt-3 mb-1 group-hover:text-white anim capitalize'>
          {pokemon.name}
        </p>
        <div className='flex gap-2 2xl:gap-2 p-[6px] mr-4'>
          <button className='bg-grass btn'>Grass</button>
          <button className='bg-poison btn'>Poison</button>
        </div>
      </div>
    </Link>
  );
}
