import Logo from "@/components/logo";
import image from "@/assets/media/image04.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className='flex flex-col items-center w-3/4 mx-auto'>
      <Logo />
      <main className='grid grid-cols-3'>
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
        <div>
          {/* each items */}
          <div>
            <p className='text-xl'>Type</p>
            <div className='2xl:space-x-5 space-x-3'>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
            </div>
          </div>
          <div>
            <p className='text-xl'>Weaknesses</p>
            <div className='2xl:space-x-5 space-x-3'>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
              <button className='bg-grass btn'>Grass</button>
              <button className='bg-poison btn'>Poison</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const GradientCard = () => {
  return (
    <>
      <div className='rounded-lg w-full h-64 mx-auto  mt-10 gradient p-1 sim-card '>
        <div className='flex flex-col justify-between h-full bg-white rounded-lg p-4 sim-card'></div>
      </div>
    </>
  );
};
