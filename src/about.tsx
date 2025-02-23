import React from "react";

const AboutUs = () => {
  const team = [
    { name: "Jaime Ramos Polz", role: "CEO", img: "assets/trex.png" },
    { name: "Rodigo Garcia San Martín", role: "Gerente General", img: "assets/triceratops.avif" },
  ];

  return (
    <section className="bg-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Somos un equipo apasionado por la innovación y la excelencia, ofreciendo soluciones de calidad para nuestros clientes.
        <br/>
        Nuestra garantia es la satisfacción de nuestros clientes
      </p>
      <div className="flex justify-center gap-8 flex-wrap">
        {team.map((member, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md w-60">
            {/*
            <img src={member.img} alt={member.name} className="w-full h-40 object-cover rounded-md mb-4" />
            */}
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;