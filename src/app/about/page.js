"use client";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Story Section */}
      <div className="flex flex-col max-lg:pt-20 lg:flex-row w-[90%] items-center justify-between lg:gap-16 m-auto my-8">
        <div>
          <h1 className="text-[50px] font-semibold text-pink-600 max-[1170px]:text-center">
            Our Story
          </h1>
          <p className="mt-10 mb-6 text-xl text-black">
            Launched in 2015, Adora Sparkles is Nigeria’s premier online jewelry
            brand, founded by two passionate entrepreneurs. We blend tradition
            and innovation to empower women and celebrate beauty.
          </p>
          <p className="text-[14px] max-[1170px]:w-[81.25%] max-[1170px]:mx-auto max-[1170px]:text-center text-black">
            Adora Sparkles offers a diverse assortment of handcrafted jewelry
            and accessories, growing rapidly and serving thousands of happy
            customers nationwide.
          </p>
        </div>
        <Image
          className="h-[400px] w-[400px] mt-12 rounded-xl border-4 border-pink-600 object-cover"
          src="/images/abt-side-img.png"
          alt="Adora Sparkles Team"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* Mission & Values Section */}
      <div className="w-[90%] mx-auto my-12 p-8 rounded-xl bg-white border border-pink-200 text-center shadow">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Mission</h2>
        <p className="text-lg mb-6 text-black">
          To empower and beautify lives through unique, handcrafted jewelry and
          accessories, celebrating creativity, culture, and confidence. We
          believe every woman deserves to shine.
        </p>
        <h3 className="text-2xl font-semibold text-pink-600 mb-2">
          Our Values
        </h3>
        <ul className="list-disc pl-6 text-base text-left inline-block text-black">
          <li>
            Quality Craftsmanship: Every piece is made with care and attention
            to detail.
          </li>
          <li>
            Customer Satisfaction: We go above and beyond for our customers.
          </li>
          <li>
            Empowerment & Inclusion: Supporting women and celebrating diversity.
          </li>
          <li>
            Innovation & Creativity: Always evolving our designs and services.
          </li>
          <li>Integrity & Trust: Honest business, transparent practices.</li>
        </ul>
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-pink-600 text-white font-bold shadow hover:bg-pink-700 transition"
          >
            Contact Us
          </a>
          <a
            href="/products"
            className="px-6 py-3 rounded-full bg-black text-white font-bold shadow hover:bg-pink-600 hover:text-white transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Timeline/History Section */}
      <div className="w-[90%] mx-auto my-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Our Journey</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">
              2015
            </div>
            <p className="text-center max-w-xs text-black">
              Adora Sparkles founded by CEO Jane Doe, inspired by a passion for
              handcrafted jewelry and empowering women.
            </p>
          </div>
          <div className="border-t-4 border-pink-600 w-16 md:w-32 mx-4 md:mx-8"></div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">
              2021
            </div>
            <p className="text-center max-w-xs text-black">
              Technical Officer John Smith joins, expanding our digital
              presence, product range, and customer experience.
            </p>
          </div>
          <div className="border-t-4 border-pink-600 w-16 md:w-32 mx-4 md:mx-8"></div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">
              2025
            </div>
            <p className="text-center max-w-xs ">
              Reached 25k annual sales, serving thousands of happy customers and
              growing our community nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Team Carousel Section */}
      <div className="w-[90%] mx-auto my-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">
          Meet Our Team
        </h2>
        <TeamCarousel />
      </div>

      {/* FAQ Section */}
      <div className="w-[90%] mx-auto my-12">
        <h2 className="text-3xl font-bold  mb-8 text-center text-pink-600">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </div>

      <div className="w-[81.25vw] mx-auto grid grid-cols-4 gap-[30px] mb-[140px] max-[1264px]:grid-cols-2 max-[580px]:w-[95vw] max-[470px]:grid-cols-1">
        <div className="flex flex-col justify-center items-center gap-6 rounded border-2 border-black/30 h-[230px]">
          <Image
            src="/images/store-icon.png"
            className="w-20 h-20"
            alt=""
            width={192}
            height={192}
            priority
          />
          <div className="">
            <h3 className="text-[32px] font-semibold text-center">10.5k</h3>
            <p className="text-[14px] mt-2 text-center">
              Sellers active our site
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 rounded border-2 border-black/30 h-[230px]">
          <Image
            src="/images/gaurantee.png"
            className="w-20 h-20"
            alt=""
            width={192}
            height={192}
            priority
          />
          <div className="">
            <h3 className="text-[32px] font-semibold text-center">33k</h3>
            <p className="text-[14px] mt-2 text-center">
              Monthly Produduct Sale
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 rounded border-2 border-black/30 h-[230px]">
          <Image
            src="/images/bag-icon.png"
            className="w-20 h-20"
            alt=""
            width={192}
            height={192}
            priority
          />
          <div className="">
            <h3 className="text-[32px] font-semibold text-center">45.5k</h3>
            <p className="text-[14px] mt-2 text-center">
              Customer active in our site
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 rounded border-2 border-black/30 h-[230px]">
          <Image
            src="/images/money-bag-icon.png"
            className="w-20 h-20"
            alt=""
            width={192}
            height={192}
            priority
          />
          <div className="">
            <h3 className="text-[32px] font-semibold text-center">25k</h3>
            <p className="text-[14px] mt-2 text-center">
              Annual gross sale in our site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Carousel Component
const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    img: "/images/logo.jpg",
    bio: "Jane is the creative force behind Adora Sparkles, dedicated to empowering women through beautiful, handcrafted jewelry.",
  },
  {
    name: "John Smith",
    role: "Technical Officer",
    img: "/images/logo.jpg",
    bio: "John brings innovation and technical expertise, helping Adora Sparkles reach new heights online.",
  },
];

function TeamCarousel() {
  // Show both members on desktop, swipe on mobile
  const [current, setCurrent] = React.useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
        {(isMobile ? [teamMembers[current]] : teamMembers).map(
          (member, idx) => (
            <div
              key={member.name}
              className="bg-white border border-pink-200 rounded-xl shadow p-8 flex flex-col items-center transition hover:scale-105"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-pink-600 object-cover"
              />
              <h3 className="text-xl font-bold text-pink-600 mb-1">
                {member.name}
              </h3>
              <p className="text-black font-semibold mb-2">{member.role}</p>
              <p className="text-center text-base mb-4 text-black">
                {member.bio}
              </p>
            </div>
          )
        )}
      </div>
      {/* Carousel controls for mobile only */}
      {isMobile && (
        <div className="flex gap-4 mt-4 justify-center">
          <button
            className={`px-4 py-2 rounded-full bg-pink-600 text-white font-bold ${
              current === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrent(current - 1)}
            disabled={current === 0}
          >
            Prev
          </button>
          <button
            className={`px-4 py-2 rounded-full bg-pink-600 text-white font-bold ${
              current === teamMembers.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => setCurrent(current + 1)}
            disabled={current === teamMembers.length - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// FAQ Accordion Component
const faqs = [
  {
    question: "What makes Adora Sparkles unique?",
    answer:
      "Adora Sparkles stands out for our dedication to quality, creativity, and empowerment. Every piece is handcrafted with love, blending traditional Nigerian artistry with modern design. We support women, celebrate diversity, and ensure every customer feels special and valued. Our jewelry is more than an accessory—it's a statement of confidence and culture.",
  },
  {
    question: "How can I contact Adora Sparkles?",
    answer:
      "You can reach us via our contact page, email us at info@adorasparkles.com, or connect on social media. Our team is always ready to help with inquiries, custom orders, and support. We pride ourselves on fast, friendly customer service and love hearing from our community!",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we serve customers across Nigeria, with plans to expand internationally soon. We offer reliable delivery, secure payment options, and keep you updated every step of the way. Stay tuned for global shipping announcements!",
  },
  {
    question: "Can I request custom jewelry?",
    answer:
      "Absolutely! We love custom orders and enjoy collaborating with customers to create unique, personalized pieces. Share your ideas, inspirations, or special occasions, and we'll work with you to design jewelry that truly reflects your style and story.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border border-pink-200 rounded-xl bg-white shadow transition-all`}
          >
            <button
              className="w-full flex items-center justify-between text-left px-6 py-4  cursor-pointer duration-500 transition-all font-semibold text-pink-600 focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {isOpen ? (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#e91e63"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-4 text-base text-black animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default page;
