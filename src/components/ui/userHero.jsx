export default function UserHero() {
  return (
    <div className="py-10 flex justify-center items-center">
      <div className="w-[1200px] h-[600px] relative rounded-3xl overflow-hidden">
        {/* Image */}
        <img
          src="/images/hero/hero.png"
          alt="Artiselo Hero Images"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6 gap-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-2">
            Discover Authentic Craftsmanship
          </h1>
          <p className="text-white text-lg md:text-2xl mb-5">
            Connect with skilled artisans and find unique, handcrafted goods.
          </p>
          <button className="bg-[#6d4c41] text-white text-lg px-6 py-3 rounded-lg font-semibold hover:bg-[#856051] transition-all duration-300 hover:cursor-pointer">
            Explore Artisans
          </button>
        </div>
      </div>
    </div>
  );
}
