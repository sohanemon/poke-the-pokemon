"use client";
import bg from "@/assets/media/Background.png";
import { useQuery } from "@apollo/client";
// import bg from "../assets/media/Background.png";

import Logo from "../components/logo";
import { GET_10_POKEMONS } from "../graphql/pokemon-queries";
import Card from "./card";
import Loader from "../components/loader";
import Image from "next/image";
import texture from "../assets/media/Texture.png";
import Web from "./web";
import Mobile from "./mobile";
import { useEffect, useState } from "react";
export default function Hero() {
  const { loading, error, data } = useQuery(GET_10_POKEMONS);
  const [sm, setSm] = useState<boolean>();
  function isSm() {
    window.innerWidth < 641 ? setSm(true) : setSm(false);
  }
  useEffect(() => {
    isSm();
    window.addEventListener("resize", () => isSm());
  }, []);

  if (error) {
    return <div className='text-7xl text-center'>Unexpected Error</div>;
  }
  return (
    <section
      className='min-h-screen bg-no-repeat w-full bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Image src={texture} alt='texture' className='absolute h-full bg-cover' />
      <div className='flex flex-col items-center '>
        {/* done: logo */}
        <div className='pointer-events-none'>
          <Logo />
        </div>
        {/* done: card */}
        {sm ? (
          <Mobile results={data?.pokemons?.results} />
        ) : (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-5/6 xl:w-4/5 2xl:w-2/3 items-center mb-40'>
            {loading ? (
              <Loader />
            ) : (
              <>{<Web results={data?.pokemons?.results} />}</>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
