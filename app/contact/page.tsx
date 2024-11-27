import Contact from "@/components/contact/page";


export default function Contacto() {
  return (
    <main className='flex flex-col w-full justify-items-center  min-h-screen px-10 justify-start items-center '>
       <h1 className="mb-10 sm:ml-20 lg:mb-10 text-4xl font-bold  bg-clip-text text-gray-100 md:text-6xl ">Contactame</h1>
      <Contact/>
    </main>
  );
}