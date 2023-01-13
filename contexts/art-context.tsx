import { ReactNode } from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
const Art = createContext<
  Partial<{
    art: string;
    setArt: Dispatch<SetStateAction<string>>;
  }>
>({});
export const useArt = () => useContext(Art);
export default function ArtContext({ children }: { children: ReactNode }) {
  const [art, setArt] = useState("");
  return <Art.Provider value={{ art, setArt }}>{children}</Art.Provider>;
}
