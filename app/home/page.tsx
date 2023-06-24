import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center sm:text-center items-center ">
      <div className=" text-cat-text text-7xl font-bold text-center md:text-left lg:text-center ">
        Tobi
      </div>
      <div className="text-cat-peach300 text-4xl mt-8 font-bold text-center md:text-left lg:text-center ">
        Time-lock Omni Bridge Interface
      </div>
      <div className="mt-8">
        <Link passHref href="/deposit" className="text-cat-neutral500 text-xl ">
          <div className=" py-2 px-4 hover:bg-cat-slate700 text-cat-text bg-cat-base border-solid border-2 rounded-md border-cat-neutral500">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
