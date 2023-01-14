import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Button from "../components/button";
import { useArt } from "../contexts/art-context";
import { GET_POK_TYPE } from "../graphql/pokemon-queries";

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  console.log();
  const { loading, data } = useQuery(GET_POK_TYPE, {
    variables: {
      name: pokemon.name,
    },
  });
  console.log(data);
  const { setArt } = useArt();
  return (
    <Link
      onClick={() => setArt?.(pokemon.artwork as string)}
      href={{
        pathname: `/${pokemon.name}`,
      }}
    >
      <div className='max-w-[256px] min-w-[220px] bg-white p-[10px] rounded-md hover:bg-primary anim cursor-pointer group relative sim-card'>
        <div className='group-hover:bg-white bg-[#F2F2F2] rounded-md p-5'>
          <Image
            className='w-full group-hover:scale-110 anim h-28'
            src={pokemon.dreamworld as string}
            width={500}
            height={500}
            alt=''
          />
        </div>
        <p className='text-sm absolute inset-4'>
          #{data?.pokemon?.id.toString().padStart(3, 0)}
        </p>
        <p className='mt-3 mb-1 group-hover:text-white anim capitalize'>
          {pokemon.name}
        </p>
        <div className='flex gap-2 2xl:gap-2 p-[6px] mr-4'>
          <div className='2xl:space-x-3 space-x-1'>
            {data?.pokemon?.types?.map((type: Type) => (
              <Suspense fallback='loading' key={type.type.id}>
                <Button type={type} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
