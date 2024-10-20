import { Suspense } from "react";
import { Demo1 } from "./components/Demos/Demo1";

export function App() {
  return (
    <div className="p-4 w-full min-h-screen">
      <Suspense fallback={'Carregando...'}>
        <Demo1 />
      </Suspense>
    </div>
  );
}
