import React, { useState, useEffect } from 'react';
import { Building2, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import AboutUs from './about';

const images = [
  'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    //const timer = setInterval(() => {
      //setCurrentImage((prev) => (prev + 1) % images.length);
    //}, 5000);
    //return () => clearInterval(timer);
  }, []);
  const textShadowStyle: React.CSSProperties = {
    textShadow: '2px 2px 0px rgba(0, 0, 0, 1)' // Valid style with a string value
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/*<Building2 size={32} />*/}
            <img src="assets/ingerev_bordes_negros.png"></img>
            <span className="text-2xl font-bold"></span>
          </div>
          <nav className="hidden md:flex gap-6">
            {/*
            <a href="#servicios" className="hover:text-blue-200">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-200">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-200">Contacto</a>
            */}
          </nav>
        </div>
      </header>

      {/* Hero Carousel */}
      <div className="relative h-[900px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.05)] flex items-center justify-center">
          <div className="text-center text-white px-4 ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={textShadowStyle}>
              Expertos en Impermeabilización
            </h1>
            <p className="text-xl md:text-2xl mb-8  " style={textShadowStyle}>
              Soluciones profesionales para cubiertas, losas y tratamiento de grietas
            </p>
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors  "
              //style={textShadowStyle}
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* Services */}
      <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Impermeabilización de Cubiertas</h3>
              <p className="text-gray-600">
                Protección completa para techos y azoteas con los mejores materiales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Tratamiento de Grietas</h3>
              <p className="text-gray-600">
                Reparación y sellado profesional de fisuras y grietas estructurales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Mantenimiento de Losas</h3>
              <p className="text-gray-600">
                Servicios especializados para el cuidado y protección de losas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <AboutUs/>
      {/*
      <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Impermeabilización de Cubiertas</h3>
              <p className="text-gray-600">
                Protección completa para techos y azoteas con los mejores materiales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Tratamiento de Grietas</h3>
              <p className="text-gray-600">
                Reparación y sellado profesional de fisuras y grietas estructurales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg  ">
              <h3 className="text-xl font-semibold mb-4">Mantenimiento de Losas</h3>
              <p className="text-gray-600">
                Servicios especializados para el cuidado y protección de losas.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer id="contacto" className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>+1 234 567 890</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  <span>info@Ingerev.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>Calle Principal 123, Ciudad</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horario</h3>
              <p>Lunes a Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-200">Facebook</a>
                <a href="#" className="hover:text-blue-200">Instagram</a>
                <a href="#" className="hover:text-blue-200">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>© 2024 Ingerev. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;