import { useEffect, useState } from "react";

const ServiceCard = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/Service.json")
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
      {service.map(service => (
        <div key={service.id} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
