import Brush from "@/assets/media/Brush.png";
import Image from "next/image";
export default function Blog() {
  return (
    <section className='py-8 px-5'>
      {/* done: heading */}
      <div className='relative flex justify-center'>
        <Image src={Brush} alt='brush' className='scale-50' />
        <div className='absolute top-6 flex w-full justify-center'>
          <p className='text-2xl font-bold text-center text-primary '>
            Ash & Pikachu Arrive in <br />
            Pokémon Universe
          </p>
        </div>
      </div>
    </section>
  );
}
