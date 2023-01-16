import Brush from "@/assets/media/Brush.png";
import Image from "next/image";

export default function Blog() {
  return (
    <section className='py-8 px-5'>
      {/* done: heading */}
      <div className='relative' style={{ backgroundImage: `url(${Brush})` }}>
        <Image src={Brush} alt='brush' className='scale-50' />
        <div className='absolute top-6 flex w-full justify-center'>
          <p className='text-2xl font-bold text-center text-primary '>
            Ash & Pikachu Arrive in <br />
            Pokémon Universe
          </p>
        </div>
      </div>
      {/* todo: details */}
      <p className=' text-justify'>
        Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
        ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus
        risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin
        pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et.
        Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium
        lorem elementum. Iaculis sit maecenas sodales mi convallis justo
        aliquam. Tincidunt semper ut ornare vivamus lectus.
      </p>
    </section>
  );
}
