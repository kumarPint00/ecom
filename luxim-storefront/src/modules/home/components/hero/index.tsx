import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center bg-no-repeat " style={{
    //   backgroundImage: "url('/hero-bg.jpg')",
    // }}>
    //   <div className="absolute inset-0 z-10 flex flex-col justify-end items-center text-center small:p-32 gap-6">
    //     <span>
    //       <Heading
    //         level="h1"
    //         className="text-5xl text-gray-400 leading-loose font-extrabold"
    //       >
    //         Aluxim Ecommerce Store
    //       </Heading>

    //     </span>
    //   </div>
    // </div>
    <section
      className="relative bg-[url(https://images.pexels.com/photos/4920471/pexels-photo-4920471.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Aluxim Clothings

            <strong className="block font-extrabold text-rose-700"> Ecommerce</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Explore
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
