import { useState } from 'react';

const faqItems = [
  {
    id: 1,
    title: 'Automated takeoffs to bid faster',
    description:'Utilize siterecon powerful takeoff tools to mesaure properties quickly and accurately, and knonk proposal faster',
    image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67c5aaadf8f0e416776c710f_Image.avif',
  },
  {
    id: 2,
    title: 'Done for your estimate',
    description:'Meet and exceed your sales target with green industry only done-for-you estimates services',
    image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67c5aab738c8ac6e3090a6c1_Image.avif',
  },
  {
    id: 3,
    title: 'Enhancment Reports for faster approvals',
    description:
      'Create visually engaging enhancement proposal on autopilot and drive enhancement sales.',
    image: 'https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/67c5aac30cff9ac5890a3fec_Image.avif',
  },
];

function Mapping() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-medium text-black mb-4">
        Grow your landscaping business with easy-to-use mapping tools
      </h2>
      <p className="text-center text-lg md:text-xl mb-12">
        SiteRecon takes decades of industry expertise and converts them into plug and play tools
        that you can inject into your business and grow faster
      </p>

      <div className="space-y-6">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
            {/* Accordion header */}
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium text-lg">{item.title}</span>
              <span className="text-2xl">{activeId === item.id ? '−' : '+'}</span>
            </button>

            {/* Accordion content */}
            {activeId === item.id && (
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white">
                {/* Left: description */}
                <div className="md:w-1/2">
                  <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>

                {/* Right: image */}
                <div className="md:w-1/2">
                  <img src={item.image} alt={item.title} className="rounded-xl shadow-lg w-full" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 bg-black h-[300px] flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-white font-bold text-2xl md:text-3xl">
    Get Started <span className="text-yellow-300 font-bold">Today</span>
  </h1>
  <p className="text-white mt-2 text-lg md:text-xl">
    Want to scale your business, control your margins, and get rid of chaos? <br />
    Get started today!
  </p>
  <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl mt-5 hover:bg-yellow-400 transition">
    Book Your Demo
  </button>
</div>

    </div>
  );
}

export default Mapping;
