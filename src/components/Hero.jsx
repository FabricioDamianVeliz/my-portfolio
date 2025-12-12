import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/50 rounded-full border border-blue-700/50">
            Disponible para nuevos desafíos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Transformando datos en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              soluciones automatizadas
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Soy <strong>Fabricio Veliz</strong>, Power Platform Developer & Data Scientist. 
            Ayudo a las empresas a optimizar procesos mediante <strong>Low-Code</strong> e 
            <strong> Inteligencia Artificial</strong>, cerrando la brecha entre la operación y la estrategia de datos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
              Ver Casos de Éxito <ArrowRight size={20} />
            </a>
            <a href="/cv-fabricio.pdf" target="_blank" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
              Descargar CV <Download size={20} />
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-slate-400">
            <a href="https://www.linkedin.com/in/fabricio-damian-veliz/" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:fabricio.damian.veliz@gmail.com" className="hover:text-white transition transform hover:scale-110">
              <Mail size={24} />
            </a>
            {/* LINK DE GITHUB ACTUALIZADO AQUI */}
            <a href="https://github.com/FabricioDamianVeliz?tab=repositories" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <Github size={24} />
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
}