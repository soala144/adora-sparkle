"use client";
import Image from "next/image";
import React from "react";
import { FaStar, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Fashion Designer",
    review:
      "Absolutely stunning beads! They fit perfectly and the quality is amazing. I've never felt more confident and beautiful. The craftsmanship is exceptional.",
    image: "/images/woman1.jpg",
    rating: 5,
    verified: true,
  },
  {
    name: "Grace John",
    role: "Entrepreneur",
    review:
      "I love how elegant these waist beads look. The attention to detail is incredible and they're so comfortable to wear. Will definitely order again!",
    image: "/images/waist-beads.jpg",
    rating: 5,
    verified: true,
  },
  {
    name: "Sophia Lee",
    role: "Model",
    review:
      "Beautiful craftsmanship. These beads made my outfit stand out and I received so many compliments. The quality is top-notch and delivery was fast.",
    image: "/images/waist-beads.jpg",
    rating: 5,
    verified: true,
  },
  {
    name: "Amara Okafor",
    role: "Student",
    review:
      "Incredible quality and beautiful designs. I love how each piece tells a story. The customer service was amazing and the packaging was so elegant.",
    image: "/images/waist-beads.jpg",
    rating: 5,
    verified: true,
  },
  {
    name: "Zara Williams",
    role: "Artist",
    review:
      "These beads are a work of art! The colors are vibrant and they're so well-made. I love supporting handcrafted products and this exceeded my expectations.",
    image: "/images/waist-beads.jpg",
    rating: 5,
    verified: true,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <IoSparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real customers who have experienced the magic of
            Adora Sparkles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="p-6 pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full flex items-center justify-center mb-4">
                  <FaQuoteLeft className="w-5 h-5 text-gray-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({testimonial.rating}.0)
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>

              {/* Customer Info */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Reviews
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
