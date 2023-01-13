import bg from "@/assets/media/Background.png";
// import bg from "../assets/media/Background.png";
import logo from "@/assets/media/logo.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      className='min-h-screen w-full !bg-cover'
      style={{ background: `url(${bg.src})`, backgroundRepeat: "no-repeat" }}
    >
      {/* done: logo */}
      <div className='flex justify-center '>
        <Image src={logo} alt='Logo' className='my-16' />
      </div>
    </section>
  );
}
