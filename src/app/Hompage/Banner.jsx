import Image from "next/image";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-12 py-8 mx-10 bg-[#14161b] rounded-xl border border-gray-800">

  {/* Left Side */}
  <div>
    <span className="text-sm font-bold text-lime-400 tracking-wide">
      WORKOUT LIBRARY
    </span>

    {/* FIXED HERE: Changed classname to className */}
    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-[0.95]">
      TRAIN WITH INTENT. LOG
      <br />
      EVERY SET.
    </h2>

    <p className="mt-4 max-w-xl text-sm md:text-base text-white">
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
  <div className="flex justify-center items-center">
    <Image
      src="/banner.png"
      alt="Banner Image"
      width={350}
      height={350}
      className="object-contain"
    />
  </div>

</div>
    );
};

export default Banner;