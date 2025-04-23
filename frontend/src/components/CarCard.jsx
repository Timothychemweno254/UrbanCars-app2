import React from "react";
import Swal from "sweetalert2";

const CarCard = ({ car }) => {
  const showAlert = () => {
    Swal.fire(`${car.name}`, `Price: ${car.price}`, "info");
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
      <h3 className="font-bold text-lg mt-2">{car.name}</h3>
      <p>{car.price}</p>
      <button
             className="bg-blue-500 text-white px-4 py-2 rounded"
             onClick={() => window.open(`/car/${car.id}`, '_blank')}
              >
             View Car Details
     </button>

    </div>
  );
};

export default CarCard;
