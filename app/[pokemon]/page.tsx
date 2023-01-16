"use client";
import home from "@/assets/icon/home.png";
import Loader from "@/components/loader";
import Logo from "@/components/logo";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { lazy, Suspense } from "react";
import { useArt } from "../../contexts/art-context";
import { GET_POK_DETAILS } from "../../graphql/pokemon-queries";
import useTypes from "../../hooks/use-types";
import { randomTypes } from "../../utils/random-element";
import GradientCard from "./gradient-card";
import { motion } from "framer-motion";
import Progress from "./progress";

const Button = lazy(() => import("../../components/button"));
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
  const type = useTypes(poke?.types as [Type]);

  return (
    <div className='flex flex-col items-center w-3/4 mx-auto '>
      <Logo />
      <main className='grid grid-cols-1 sm:grid-cols-3 2xl:gap-28 gap-16'>
        {/* done: left */}
        <div>
          <p className='2xl:text-5xl text-3xl font-medium text-blue-600 capitalize'>
            {poke?.name} #{poke?.id}
          </p>
          <p className='2xl:text-xl'>
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
          {!loading ? (
            <GradientCard
              abilities={poke?.abilities!}
              category={poke?.types!}
              height={poke?.height!}
              weight={poke?.weight!}
            />
          ) : (
            <Loader />
          )}
        </div>
        {/* done: middle */}
        <motion.div
          className='order-first sm:order-none'
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Image
            placeholder='blur'
            blurDataURL='none'
            className='w-full hover:scale-110 anim'
            src={art!}
            alt=''
            width={500}
            height={500}
          />
        </motion.div>
        {/* todo: right */}
        <div className='space-y-10'>
          {/* each items */}
          <div className='space-y-4'>
            <p className='text-xl'>Type</p>
            {!loading && (
              <div className='2xl:space-x-5 space-x-3'>
                {poke?.types?.map((type) => (
                  <Suspense fallback='loading' key={type.type.id}>
                    <Button type={type} />
                  </Suspense>
                ))}
              </div>
            )}
          </div>
          <div className='space-y-4'>
            <p className='text-xl'>Weaknesses</p>
            <div className='2xl:space-x-5 space-x-3'>
              {randomTypes(type!)
                ?.slice(0, 3)
                .map((_) => (
                  <>
                    {_ !== "flying" ? (
                      <button key={_} className={`bg-${_} btn capitalize`}>
                        {_}
                      </button>
                    ) : (
                      <button className={` capitalize  two-color-btn btn`}>
                        {_}
                      </button>
                    )}
                  </>
                ))}
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
