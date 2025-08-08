export const products: {
  id: string;
  name: string;
  image: string;
  price: string;
  size: string;
  color: string;
  description: string;
  featured?: boolean; // Optional property for featured products
}[] = [
  {
    id: "a1fdd4f5-4d12-46c4-9b6a-1ed7b65c1e91",
    name: "Kouya Waist Bead",
    image: "/images/waist-beads.jpg",
    price: "77900",
    size: "M",
    color: "Red",
    description:
      "Handcrafted waist bead with vibrant red accents for a bold, elegant look.",
    featured: false,
  },
  {
    id: "d2a6e1f8-27a3-4f91-9c68-3f22e0531b1f",
    name: "Classic Bracelet",
    image: "/images/bracelets.jpg",
    price: "2500",
    size: "S",
    color: "Gold",
    description:
      "Timeless gold bracelet designed for everyday wear and special occasions.",
    featured: true,
  },
  {
    id: "c45bb925-fd5e-4312-9ac2-8ac587fcb5ef",
    name: "Elegant Anklet",
    image: "/images/anklets.jpg",
    price: "1850",
    size: "L",
    color: "Silver",
    description:
      "Stylish silver anklet that adds a touch of charm to your outfit.",
    featured: true,
  },
  {
    id: "8d75e210-f11e-4b44-9f80-bda9f23503c0",
    name: "Phone Charm",
    image: "/images/phone-charms.jpg",
    price: "10000",
    size: "M",
    color: "Pink",
    description: "Cute pink charm to personalize and accessorize your phone.",
    featured: true,
  },
  {
    id: "7fb70657-6aeb-4535-95ff-cbb5e272c7ab",
    name: "Gift Box",
    image: "/images/gift-box.jpg",
    price: "5000",
    size: "One Size",
    color: "Black",
    description:
      "Elegant black gift box perfect for presenting jewelry and keepsakes.",
    featured: false,
  },
  {
    id: "c7e2ec67-c123-472f-a5d0-e849d79346e3",
    name: "Thigh Beads",
    image: "/images/thigh-beads.jpg",
    price: "22000",
    size: "L",
    color: "Blue",
    description:
      "Bold blue thigh beads for a fashionable and cultural statement.",
    featured: false,
  },
  {
    id: "eb65b9d9-e6d4-4f03-b14c-301aa3c0e03f",
    name: "Jewelry Beads",
    image: "/images/jewelry-beads.jpg",
    price: "30000",
    size: "S",
    color: "Green",
    description:
      "Green beaded jewelry perfect for layering or wearing as a statement.",
    featured: false,
  },
  {
    id: "5b6cb1ed-0475-465e-86db-d58f6c8a0b4d",
    name: "Product Special",
    image: "/images/product.jpg",
    price: "50000",
    size: "M",
    color: "Purple",
    description:
      "Exclusive purple-themed product crafted for a unique and luxurious feel.",
    featured: false,
  },
];
