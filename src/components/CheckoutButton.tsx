"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [
            { name: "Product 1", price: 50, quantity: 1 },
            { name: "Product 2", price: 25, quantity: 2 },
          ],
          success_url: "http://localhost:3000/success",
          cancel_url: "http://localhost:3000/cancel",
        }),
      });

      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {loading ? "Processing..." : "Checkout"}
    </button>
  );
}
