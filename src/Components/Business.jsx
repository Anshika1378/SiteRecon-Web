function Business() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
        SiteRecon Improves Every Part of Your Landscape Business
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67ff9f9e62f3efdd40ab9d08_Untitled%20design%20(8)%201.avif"
            alt="SiteRecon"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side: Paragraph */}
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            SiteRecon is a Mapping Software That Improves Every Part of Your Landscape Business.
            Their takeoff application has saved an incalculable amount of time and money for our
            management staff. And their mobile app allows us to send detailed reports to our
            production team, streamlining our communication process and reducing mistakes and
            rework. We're also using it to send professional property reports to the customers,
            taking our customer service to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
