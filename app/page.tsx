// import Hero from "@/components/hero";
import Hero from "@/app/hero";
import { Ubuntu } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={ubuntu.className}>
      <Hero />
    </main>
  );
}
