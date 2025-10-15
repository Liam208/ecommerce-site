export default function HeroCard() {
  return (
    <>
      <div className="container mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
          Your New Favorite Gear.
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-white">
          Discover the best products curated just for you. From tech gadgets to
          stylish apparel, we've got you covered.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-block transform hover:-translate-y-1 text-lg"
        >
          Shop Now
        </a>
      </div>
    </>
  );
}
