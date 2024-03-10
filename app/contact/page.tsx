import Contact from "@/components/contact/page";


export default function Home() {
  return (
    <main className='flex flex-col w-full  h-full px-10 justify-center items-center '>
       <h1 className="mb-10 lg:mb-20 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 md:text-6xl ">Contactame</h1>
      <Contact/>
    </main>
  );
}