export const metadata = {
  title: "Contact | Adora Sparkles",
  description: "Contact Adora Sparkles for inquiries, support, or custom orders. We're here to help you shine!",
  keywords: "contact, support, help, Adora Sparkles, Nigeria, jewelry, beads, accessories, customer service",
  openGraph: {
    title: "Contact | Adora Sparkles",
    description: "Contact Adora Sparkles for inquiries, support, or custom orders. We're here to help you shine!",
    url: "https://adorasparkles.com/contact",
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
    title: "Contact | Adora Sparkles",
    description: "Contact Adora Sparkles for inquiries, support, or custom orders. We're here to help you shine!",
    images: ["/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://adorasparkles.com/contact",
  },
};
import ContactUs from "@/components/ContactUs";
import React from "react";
// import Image from "next/image";

const page = () => {
  return (
    <div>
        <ContactUs />
    </div>
  );
};

export default page;
