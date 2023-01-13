import bg from "@/assets/media/Background.png";
// import bg from "../assets/media/Background.png";
import logo from "@/assets/media/logo.png";
import Image from "next/image";
import Card from "./card";
export default function Hero() {
  return (
    <section
      className='min-h-screen bg-no-repeat w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className='flex flex-col items-center '>
        {/* done: logo */}
        <Image src={logo} alt='Logo' className='my-16' />
        {/* todo: card */}
        <div className='grid lg:grid-cols-4 xl:grid-cols-5 gap-10 w-5/6 items-center'>
          {[...Array(10).keys()].map((card, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
