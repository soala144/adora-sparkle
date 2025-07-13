
import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import React from "react";

export const metadata = {
  title: "Adora Sparkles | Handcrafted Beads, Jewelry & Accessories",
  description:
    "Shop Adora Sparkles for premium handcrafted waist beads, bracelets, anklets, and more. Discover unique African-inspired jewelry and accessories, made with love and designed to empower.",
  keywords:
    "waist beads, handcrafted jewelry, African beads, anklets, bracelets, phone charms, Adora Sparkles, gift box, thigh beads, jewelry beads, accessories, Nigeria, women, fashion, sparkle",
  openGraph: {
    title: "Adora Sparkles | Handcrafted Beads, Jewelry & Accessories",
    description:
      "Shop Adora Sparkles for premium handcrafted waist beads, bracelets, anklets, and more. Discover unique African-inspired jewelry and accessories, made with love and designed to empower.",
    url: "https://adorasparkles.com/",
    siteName: "Adora Sparkles",
    images: [
      {
        url: "/images/logo.jpg",
        width: 400,
        height: 400,
        alt: "Adora Sparkles Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adora Sparkles | Handcrafted Beads, Jewelry & Accessories",
    description:
      "Shop Adora Sparkles for premium handcrafted waist beads, bracelets, anklets, and more. Discover unique African-inspired jewelry and accessories, made with love and designed to empower.",
    images: ["/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://adorasparkles.com/",
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Product />
      <Newsletter />
      <Reviews />
    </div>
  );
};

export default page;
