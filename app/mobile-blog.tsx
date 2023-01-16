import Image from "next/image";
import img3 from "@/assets/media/Image03.png";
import img4 from "@/assets/media/Image04.png";
import img5 from "@/assets/media/Image05.png";
import img1 from "@/assets/media/Image01.png";
import img2 from "@/assets/media/Image02.png";

export default function MobileBlog() {
  return (
    <>
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
      {/* todo: grid image section */}
      <div className='grid grid-cols-3 grid-rows-5 gap-3 my-5'>
        <Image
          className='col-start-2 row-span-2 object-cover h-full'
          src={img1}
          alt='img'
        />

        <Image
          className='col-start-1 row-span-2 object-cover h-full'
          src={img2}
          alt='img'
        />
        <Image
          className='row-span-2 h-full object-cover'
          src={img3}
          alt='img'
        />
        <Image
          className='row-span-2 h-full object-cover'
          src={img4}
          alt='img'
        />
        <Image
          className='col-start-3 row-span-2 h-full object-cover'
          src={img5}
          alt='img'
        />
      </div>
      {/* second details */}
      <p className='text-justify'>
        Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
        ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus
        risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin
        pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et.
        Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit pretium
        lorem elementum. Iaculis sit maecenas sodales mi convallis justo
        aliquam. Tincidunt semper ut ornare vivamus lectus.
      </p>
    </>
  );
}
