"use client";
import image from "@/assets/media/image04.png";
import Logo from "@/components/logo";
import Image from "next/image";
import Progress from "./progress";
import GradientCard from "./gradient-card";
import home from "@/assets/icon/home.png";

export default function Page() {
  return (
    <div className='flex flex-col items-center w-3/4 mx-auto mb-'>
      <Logo />
      <main className='grid grid-cols-3 2xl:gap-28 gap-16'>
        {/* done: left */}
        <div>
          <p className='2xl:text-5xl text-3xl font-medium text-blue-600'>
            Bulbasaur #001
          </p>
          <p className='2xl:text-xl'>
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
          <GradientCard />
        </div>
        {/* done: middle */}
        <div>
          <Image className='w-full hover:scale-110 anim' src={image} alt='' />
        </div>
        {/* todo: right */}
        <div className='space-y-10'>
          {/* each items */}
          <div className='space-y-4'>
            <p className='text-xl'>Type</p>
            <div className='2xl:space-x-5 space-x-3'>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
            </div>
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
          <div>
            <p className='text-xl mb-8'>Stats</p>
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
            <Progress statName='HP' value={60} />
          </div>
        </div>
      </main>
      <div>
        <button className='bg-[#FFCB05] flex items-center gap-3 py-4 px-8 border-4  rounded border-primary'>
          <Image src={home} alt='i' />
          <p className='text-xl text-white'>Back to Homepage</p>
        </button>
      </div>
    </div>
  );
}
