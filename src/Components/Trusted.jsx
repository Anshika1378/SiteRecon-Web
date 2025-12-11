function Trusted() {
  const logos = [
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe48a9c11c71afdbaa3a31_greenscape-logo-on-time.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad3f9769ecc0f5922fc_MHA%20Logo%20for%20Website_20250315%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad36a77da06f8090a97_mulhalls-logo-2024%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad314815d95b029bb95_Mariani_Landscapes_Logo%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad5b3415e5ee0b749ac_Logo%20with%20text-01%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad3ffbf48ed897e174b_Down-To-Earth-Logo-1%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad3c32d33fd860b8d07_ym_color_logo_notagline_04_27_2015%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad33bfe95e48b8df0de_cropped-50YrLogo%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad3c4e68f39d2e9154d_cropped-cropped-Priority%201.avif",
    "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67fe0ad3fa7163732d71d940_environment-control-logo-color-full%201.avif",
    ""
  ];

  return (
    <div className="bg-white mt-5 py-10">
      <h1 className="text-black font-medium text-center text-xl mb-8">
        Trusted By leading landscapers across the world
      </h1>

      {/* Scrolling Logos */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap gap-10">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Trusted;
