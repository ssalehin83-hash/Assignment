import Image from "next/image";

const Banner = () => {
    return (
        <div className="container mx-auto mx-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-12 py-8 mx-10 bg-[#14161b] rounded-xl border border-gray-800">

  {/* Left Side */}
  <div className="flex-1">
    <span className="text-sm font-bold text-lime-400 tracking-wide">
      WORKOUT LIBRARY
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-[0.95]">
      TRAIN WITH INTENT. LOG
      <br />
      EVERY SET.
    </h2>

    <p className="mt-4 max-w-xl text-sm md:text-base text-white ] inline-block px-1">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      <br />
      into today plan, and watch the week work add up.
    </p>

    <div className="mt-6">
      <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-5 py-3 rounded-md text-sm">
        BROWSE WORKOUTS
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex-1 flex items-justify-center">
    <Image
      src="/banner.png"
      alt="Banner Image"
      width={350}
      height={350}
      className="object-contain"
    />
  </div>

</div>
</div>
    );
};

export default Banner;