function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Contact Section */}
        <div className="md:col-span-1 space-y-4">
            <img src="https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/6581623038523e75124c51ab_Siterecon%20Logo%20white-p-2000.webp" alt="" />
          <p className="text-gray-300 text-sm">The GIS Platform for Property Maintenance</p>
          <p className="text-gray-300 text-sm">info@siterecon.ai</p>
          <p className="text-gray-300 text-sm">+1 (945) 253-3203</p>
          <p className="text-gray-300 text-sm">300 Delaware Ave. Suite 210, Wilmington, DE 19801</p>
          <div className="mt-4">
          <h1 className="text-4xl">PLATO</h1>
            <p className="text-gray-400 text-xs">Your scribe in the field</p>
          </div>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h2 className="font-bold">Solutions</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Sales</li>
            <li>Onboardings</li>
            <li>Account Management</li>
            <li>Site Audits</li>
            <li>Enhancement Sales</li>
            <li>Renewals</li>
          </ul>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h2 className="font-bold">Features</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Takeoffs</li>
            <li>Estimates</li>
            <li>SQAs</li>
            <li>Site Inspection Dashboard</li>
            <li>Crew Performance Dashboard</li>
          </ul>
        </div>

        {/* Products */}
        <div className="space-y-2">
          <h2 className="font-bold">Products</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Siterecon app</li>
            <li>Plato mobile app</li>
          </ul>
        </div>

        {/* Comparisons */}
        <div className="space-y-2">
          <h2 className="font-bold">Comparisons</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Siterecon vs Attentive</li>
            <li>Siterecon vs PropertyIntel</li>
            <li>Siterecon vs Deep Lawn</li>
            <li>Siterecon vs Go iLawn</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <h2 className="font-bold">Resources</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Landscaping templates</li>
            <li>Case studies</li>
            <li>Newsletter</li>
            <li>Webinars</li>
            <li>Help Center</li>
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Button */}
      <div className="mt-8 text-center">
        <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
          Subscribe to the newsletter
        </button>
      </div>
    </footer>
  );
}

export default Footer;
