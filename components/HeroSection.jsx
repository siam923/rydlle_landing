const HeroSection = () => {
  return (
    <div
      id="home"
      className="boreder-2 w-full bg-cover bg-center py-24 px-10 object-fill"
      style={{ backgroundImage: "url('/jute_bg.jpg')" }}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-white uppercase">Welcome to RydllE</p>
        <h1 className="font-bold text-white text-5xl mb-4">
          The Road to Save the Planet
        </h1>
        <p className="text-white mb-10">
          Go with the best Golden Fiber in the world.
        </p>
        <a
          href="#contact"
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
