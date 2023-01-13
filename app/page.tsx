// import Hero from "@/components/hero";
import { Inter, Ubuntu } from "@next/font/google";
import Hero from "components/hero";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={ubuntu.className}>
      <Hero />
    </main>
  );
}
