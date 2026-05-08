import Link from "next/link"
import Props from "./props"
import { useAppContext

 } from "../contexto/AppContex";
export default function Uno() {
    const { nombre } = useAppContext();
  return (
    <div >
      <Link href="/">Boton home</Link>
      <Link href="/uno">Boton uno</Link>
      <Link href="/dos">Boton dos</Link>

      <Props nombre = "este es un props"></Props>
    </div>
  );
}
