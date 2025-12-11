'use client'
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Patric Spusta",
    role: "Director of Sales, Gardens of Babylon Landscape",
    image: "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfd564adc46a29625f4_Patrick%20Spusta.avif",
    rating: 5, 
    text: "By far the best Landscape Industry Measuring Platform! This software is best and class and our account manager Satya provides a top shelf experience!!!",
  },
  {
    name: "Michael Pickel",
    role: "President, Pickel  Group",
    image: "https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfdbee5be613a3911ce_Michael%20Pickel.avif",
    rating:5,
    text: "We began documenting properties through SiteRecon during 2023. Satya and his team have been very patient and helpful teaching us how to use the Plato app and service our clients better.",
  },
  {
    name: "Brad Poor",
    role: "Business Developer, Yellowstone Landscape",
    image: "http://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfdf8df6c90f68de2a6_Brad%20Poor.avif",
    rating:5,
    text: "Site Recon and Plato have made a world of difference for me. The time it saves me lets me use my time more efficiently and the Plato App is something that customers love!",
  },
  {
    name:"John Williams",
    role:"Account Manager, Mulhall's",
    image:"https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfd7e6f4b2bd8df3c3b_John%20Williams.avif",
    rating:5,
    text:"This app has changed the entire process of how we manage our commercial maintenance properties. Start to finish, from sale to management/execution to renewal. The ability to make site specific, gps located notes with photos, has dramatically changed the way we think about sites internally. Thanks to the SiteRecon team for always being willing to work together to solve problems. Amazing customer service and relationship."
  },
  {
    name:"Johann Fiallo",
    role:"Estimating Manager, Down2Earth Landscape and Irrigation",
    image:"https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfd4a7b48cbbeaa287a_Johann%20Fiallo.avif",
    rating:5,
    text:"With SiteRecon my estimating team has had a noticeable increase in efficiency and accuracy. This has helped increase throughput with less difficulty and has increased the quality of the output. The team at SiteRecon have gone far above and beyond to help my estimating team meet deadlines and perfect their craft."
  },
  {
    name:"Marion Delano",
    role:"Director of Technology and Marketing, Level Green Landscaping",
    image:"https://cdn.prod.website-files.com/646325fb8656cad4b713ce3f/68885cfd19c38a3acedba747_Marion%20Delano.avif",
    rating:5,
    text:"SiteRecon is a Mapping Software That Improves Every Part of Your Landscape Business.Their takeoff application has saved an incalculable amount of time and money for our management staff. And their mobile app allows us to send detailed reports to our production team, streamlining our communication process and reducing mistakes and rework. We're also using it to send professional property reports to the customers, taking our customer service to the next level."
  }
];

function Review() {
  return (
    <div className="my-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12">
        Why Landscaping pros love SiteRecon
      </h1>

      <div className="space-y-16">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Left side */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-3 object-cover"
              />
              <h2 className="font-semibold">{review.name}</h2>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>

            {/* Right side */}
           <div className="w-full md:w-2/3">
    {/* Star rating */}
    <div className="flex mb-2 text-yellow-400">
      {Array.from({ length: review.rating }).map((_, i) => (
        <span key={i}>★</span>
      ))}
      {Array.from({ length: 5 - review.rating }).map((_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
    </div>

    {/* Review description */}
    <p className="text-gray-700 text-lg">{review.text}</p>
  </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Review;
