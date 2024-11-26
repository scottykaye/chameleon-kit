import { Sandbox } from "~/libraries/Sandbox";

export default function Home() {
  return (
    <>
      <h3 className="mx-auto max-w-screen-lg mt-5 font-bold tracking-tight text-[clamp(2rem,5vw,5rem)] text-pretty leading-tight text-center">
        A <span className="text-[#acfa70]">component UI library</span> for{" "}
        <span className="text-[#00a3a4]">React</span> &{" "}
        <span className="text-[#00d493]">Next.js</span> applications.
      </h3>
      <div className="mt-[50vh] min-h-[200svh] p-5">
        <Sandbox />
      </div>
    </>
  );
}
