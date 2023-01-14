import Image from "next/image";
import logo from "../assets/media/Logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className='z-50'>
      <Image src={logo} alt='Logo' className='my-16' />
    </Link>
  );
}
