import Image from "next/image";
import Link from "next/link";

const LibraryCard = ({ card }) => {
  return (
    <div className="py-7 group overflow-hidden rounded-2xl border border-gray-800 bg-[#17191f] shadow-lg transition duration-300 hover:-translate-y-2 hover:border-lime-400/50 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-lime-400 backdrop-blur-sm">
          {card.difficulty}
        </div>

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17191f] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-white">
            {card.name}
          </h2>

          <div className="flex shrink-0 items-center gap-1 text-sm text-yellow-400">
            <span>★</span>
            <span className="text-white">{card.rating}</span>
          </div>
        </div>

        {/* Muscle Groups */}
        <div className="mt-3 flex flex-wrap gap-2">
          {card.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-400">
          {card.description}
        </p>

        {/* Workout Info */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-800 py-4">

          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 font-semibold text-white">
              {card.duration} min
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 font-semibold text-white">
              {card.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Sets</p>
            <p className="mt-1 font-semibold text-white">
              {card.sets}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Reps</p>
            <p className="mt-1 font-semibold text-white">
              {card.reps}
            </p>
          </div>

        </div>

        {/* Equipment */}
        <div className="mt-4">
          <p className="text-xs text-gray-500">Equipment</p>
          <p className="mt-1 text-sm text-gray-300">
            {card.equipment}
          </p>
        </div>

        {/* Button */}
      <Link href={`/Cards/${card.id}`} className="mt-5 block w-full rounded-lg bg-lime-400 px-4 py-2 text-center text-sm font-semibold text-black transition duration-300 hover:bg-lime-500">
        View Workout
      </Link>

      </div>
    </div>
  );
};

export default LibraryCard;