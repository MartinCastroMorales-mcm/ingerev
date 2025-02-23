import React from "react";

const AboutUs = () => {
  const team = [
    { name: "CEAT", role: "", img: "assets/ceat_logo.png" },
    { name: "Universidad San Sebastian", role: "", img: "assets/escudo_uss.png" },
    { name: "Inacap", role: "", img: "assets/inacap_logo.png" },
    { name: "Mall Del Centro Concepción", role: "", img: "assets/mall_cc_logo.png" },
  ];

  return (
    <section className="bg-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Nuestros Clientes</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {team.map((member, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md w-60">
            <img src={member.img} alt={member.name} className="" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;