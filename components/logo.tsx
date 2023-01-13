import Image from "next/image";
import logo from "../assets/media/Logo.png";

export default function Logo() {
  return (
    <>
      <Image src={logo} alt='Logo' className='my-16' />
    </>
  );
}
