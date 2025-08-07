"use client";
import React from "react";
import { type CartItems } from "./Cart";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  type DeliveryZone = { name: string; price: number };
  const deliveryZones: DeliveryZone[] = [
    { name: "NORTH", price: 3000 },
    { name: "SOUT", price: 4000 },
    { name: "EAST", price: 5000 },
    { name: "WEST", price: 6500 },
  ];
  const [selectedZone, setSelectedZone] = React.useState<DeliveryZone>(
    deliveryZones[0]
  );
  const [form, setForm] = React.useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    street: "",
    city: "",
    telNum: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const sub = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = selectedZone.price;
  console.log(cart);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const router = useRouter();

  // const handleCheckout = async (e: any) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/orders", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       items: cart.map((item) => ({
  //         productId: item.id.toLocaleString(),
  //         quantity: item.quantity,
  //         size: item.size,
  //         color: item.color,
  //         price: item.price,
  //       })),
  //       fullName: form.fullName,
  //       email: form.emailAddress,
  //       phone: form.telNum,
  //       street: form.street,
  //       city: form.city,
  //       deliveryZone: selectedZone.name,
  //       totalAmount: sub,
  //     }),
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     clearCart(); // from context
  //     router.push("/success");
  //   } else {
  //     alert("Order failed");
  //   }
  // };
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Turn on loader

    setTimeout(() => {
      setLoading(false); // Turn off loader after 3 seconds
      router.push("/success"); // Redirect
    }, 3000); // 3000ms = 3 seconds
  };

  return (
    <div className="pt-20 w-[90%] mx-auto max-w-[1440px] lg:text-2xl">
      <h1 className="uppercase lg:capitalize text-3xl lg:text-4xl text-center font-bold my-10">
        Billing Details
      </h1>
      <form
        onSubmit={handleCheckout}
        className="min-[1240px]:flex min-[1240px]:gap-[120px]"
      >
        <div className="flex mb-10 flex-col gap-8 min-[1240px]:mb-[140px]">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="leading-[24px] font-medium">
              Full Name<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailAddress"
              className="leading-[24px] font-medium"
            >
              Email<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={form.emailAddress}
              onChange={handleChange}
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="street" className="leading-[24px] font-medium">
              Street Address<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="leading-[24px] font-medium">
              Town/City<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="telNum" className="leading-[24px] font-medium">
              Phone Number<span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              name="telNum"
              value={form.telNum}
              onChange={handleChange}
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="deliveryZone"
              className="leading-[24px] font-medium"
            >
              Delivery Zone<span className="text-red-700">*</span>
            </label>
            <select
              name="deliveryZone"
              value={selectedZone.name}
              onChange={(e) =>
                setSelectedZone(
                  deliveryZones.find((z) => z.name === e.target.value) ||
                    deliveryZones[0]
                )
              }
              className="outline-none h-12 px-3 rounded min-[1240px]:w-[520px] bg-gray-400 mt-2"
            >
              {deliveryZones.map((zone) => (
                <option key={zone.name} value={zone.name}>
                  {zone.name} (₦{zone.price.toLocaleString()})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="lg:w-[490px]">
          <div className="flex flex-col gap-8">
            {cart.map((item, i) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="w-[80%] flex items-center gap-2">
                  <Image
                    src={item.img}
                    alt=""
                    className="size-14"
                    width={192}
                    height={192}
                    priority
                  />
                  <p className="max-w-full font-medium truncate">{item.name}</p>
                </div>
                <p>{item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="border-b-2  py-3 px-2 border-b-gray-400 flex items-center justify-between">
              <p>Subtotal</p>
              <p>&#8358;{sub.toLocaleString()}</p>
            </div>
            <div className="border-b-2  py-3 px-2 border-b-gray-400 flex items-center justify-between">
              <p>Delivery fee</p>
              <p>&#8358;{deliveryFee.toLocaleString()}</p>
            </div>
            <div className="py-3 px-2 flex items-center justify-between">
              <p>Total</p>
              <p>&#8358;{(sub + deliveryFee).toLocaleString()}</p>
            </div>
            <button
              className="text-center h-12 bg-[#ff66d1] w-full text-white mb-[100px] lg:mb-0 rounded"
              type="submit"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
