import Hero from "./components/hero";

export default function App() {
  return (
    <div className=" min-h-screen w-full flex-col justify-center items-center inline-flex">
      <Hero />
      <div className="self-stretch grow shrink basis-0 bg-white rounded-[15px] border border-zinc-300"></div>
    </div>
  );
}
