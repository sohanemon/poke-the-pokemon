"use client";
import home from "@/assets/icon/home.png";
import Logo from "@/components/logo";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useArt } from "../../contexts/art-context";
import { GET_POK_DETAILS } from "../../graphql/pokemon-queries";
import GradientCard from "./gradient-card";
import Progress from "./progress";

// note: 👇
/* --------------------------------------------------------------------- */
/*                      no more query from useRouter                     */
/* --------------------------------------------------------------------- */

export default function Page({ params: { pokemon } }: Props) {
  const { art } = useArt();
  const { loading, data } = useQuery(GET_POK_DETAILS, {
    variables: { name: pokemon },
  });
  const poke = data?.pokemon as Stats;
  console.log(poke?.types);
  return (
    <div className='flex flex-col items-center w-3/4 mx-auto '>
      <Logo />
      <main className='grid grid-cols-3 2xl:gap-28 gap-16'>
        {/* done: left */}
        <div>
          <p className='2xl:text-5xl text-3xl font-medium text-blue-600 capitalize'>
            {poke?.name} #{poke?.id}
          </p>
          <p className='2xl:text-xl'>
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
          {!loading && (
            <GradientCard
              abilities={poke?.abilities!}
              category={poke?.types!}
              height={poke?.height!}
              weight={poke?.weight!}
            />
          )}
        </div>
        {/* done: middle */}
        <div>
          <Image
            className='w-full hover:scale-110 anim'
            src={art!}
            alt=''
            width={500}
            height={500}
          />
        </div>
        {/* todo: right */}
        <div className='space-y-10'>
          {/* each items */}
          <div className='space-y-4'>
            <p className='text-xl'>Type</p>
            {!loading && (
              <div className='2xl:space-x-5 space-x-3'>
                {poke?.types?.map((type) => (
                  <button
                    key={type.type.id}
                    className={` capitalize !bg-${
                      type.type.name && type.type.name
                    } btn`}
                  >
                    {type.type.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className='space-y-4'>
            <p className='text-xl'>Weaknesses</p>
            <div className='2xl:space-x-5 space-x-3'>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
            </div>
          </div>
          {/* stats */}
          <div className='capitalize'>
            <p className='text-xl mb-8'>Stats</p>
            {poke?.stats?.map((stat) => (
              <Progress
                key={stat.stat.id}
                statName={stat.stat.name as string}
                value={stat.base_stat}
              />
            ))}
          </div>
        </div>
      </main>
      <div>
        <Link
          href={"/"}
          className='bg-[#FFCB05] flex items-center gap-3 py-4 px-8 border-4  rounded border-primary my-16'
        >
          <Image src={home} alt='i' />
          <p className='text-xl text-white'>Back to Homepage</p>
        </Link>
      </div>
    </div>
  );
}

type Props = {
  params: {
    pokemon: string;
  };
};
