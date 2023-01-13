import bg from "@/assets/media/Background.png";
// import bg from "../assets/media/Background.png";
import logo from "@/assets/media/logo.png";
import Image from "next/image";
import Card from "./card";
export default function Hero() {
  return (
    <section
      className='min-h-screen w-full !bg-cover'
      style={{ background: `url(${bg.src})`, backgroundRepeat: "no-repeat" }}
    >
      <div className='flex flex-col items-center '>
        {/* done: logo */}
        <Image src={logo} alt='Logo' className='my-16' />
        {/* todo: card */}
        <div className='grid grid-cols-5 gap-24 '>
          {[...Array(10).keys()].map((card, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
