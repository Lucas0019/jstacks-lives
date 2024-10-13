import { Checkout } from "./Checkout";
import List from "./List";

export default function Home() {
  return (
    <main>
      <Checkout content={<List />} />
    </main>
  );
}
