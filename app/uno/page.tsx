import Link from "next/link"
import Props from "./props"
export default function Uno() {
  return (
    <div >
      <Link href="/">Boton home</Link>
      <Link href="/uno">Boton uno</Link>
      <Link href="/dos">Boton dos</Link>

      <Props nombre = "este es un props"></Props>
    </div>
  );
}
