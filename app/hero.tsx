"use client";
import bg from "@/assets/media/Background.png";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import texture from "../assets/media/Texture.png";
import Loader from "../components/loader";
import Logo from "../components/logo";
import { GET_10_POKEMONS } from "../graphql/pokemon-queries";
import useSm from "../hooks/use-sm";
import Mobile from "./mobile";
import Web from "./web";
export default function Hero() {
  const { loading, error, data } = useQuery(GET_10_POKEMONS);
  const sm = useSm();
  if (error) {
    return <div className='text-7xl text-center'>Unexpected Error</div>;
  }
  return (
    <section
      className='sm:min-h-screen pb-10 sm:pb-0 bg-no-repeat w-full bg-cover bg-center relative'
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
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-5/6 xl:w-4/5 2xl:w-2/3 items-center mb-10'>
            {loading ? (
              <Loader />
            ) : (
              <>{<Web results={data?.pokemons?.results} />}</>
            )}
          </div>
        )}
        {/* <Pagination /> */}
      </div>
    </section>
  );
}
