import { useState } from "react";
import React from "react";

import { toast } from "react-toastify";

const CarForm = ({ addCar }) => {
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://urbancars-app2.onrender.com/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newCar) => {
        addCar(newCar);
        toast.success("Car added successfully!");
        setFormData({ name: "", image: "", price: "" });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} className="border p-2 w-full" required />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border p-2 w-full" required />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-2 w-full" required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Car</button>
    </form>
  );
};

export default CarForm;
