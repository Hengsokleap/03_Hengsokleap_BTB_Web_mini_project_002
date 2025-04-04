"use client"; // ✅ Ensures this is a client component

import React, { useState } from "react";
import { Star } from "lucide-react";

function TopHeader({ id, title, isFavorite = false }) {
  const [favorite, setFavorite] = useState(isFavorite);

  // Function to toggle favorite status
  const toggleFavorite = async () => {
    try {
      const newFavoriteStatus = !favorite; // Toggle status
      const res = await fetch(
        `http://96.9.81.187:8080/api/v1/workspace/${id}/favorite?favorite=${newFavoriteStatus}`,
        {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        setFavorite(newFavoriteStatus); 
      } else {
        console.error("Failed to update favorite status");
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return (
    <>
      <p className="font-bold text-2xl">{title}</p>
      <input type="hidden" name="id" value={id} />
      <div
        className={`stars rating w-[30px] h-[30px] rounded-sm flex items-center justify-center cursor-pointer ${
          favorite ? "bg-yellow-400" : "bg-gray-200"
        }`}
        onClick={toggleFavorite} // Click to toggle favorite
      >
        <Star strokeWidth={2} fill={favorite ? "yellow" : "none"} />
      </div>
    </>
  );
}

export default TopHeader;
