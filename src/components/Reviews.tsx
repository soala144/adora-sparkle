"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    review:
      "Absolutely stunning beads! They fit perfectly and the quality is amazing.",
    image: "/images/woman1.jpg",
    rating: 5,
  },
  {
    name: "Grace John",
    review:
      "I love how elegant these waist beads look. Will definitely order again!",
    image: "/images/waist-beads.jpg",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    review: "Beautiful craftsmanship. These beads made my outfit stand out.",
    image: "/images/waist-beads.jpg",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 w-80 flex-shrink-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                    width={130}
                    height={80}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
