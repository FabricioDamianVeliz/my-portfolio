import { Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sobre mí</h2>
            <div className="prose text-slate-600 leading-relaxed mb-8">
              <p className="mb-4">
                Ingeniero en Informática en formación con una trayectoria sólida en <strong>Practia Global</strong>. 
                Mi enfoque es pragmático: utilizo la tecnología para resolver problemas de negocio reales.
              </p>
              <p className="mb-4">
                Mi diferencial radica en mi perfil híbrido. Como <strong>Data Scientist</strong>, entiendo el valor de los datos; 
                como <strong>Power Platform Developer</strong>, tengo la capacidad técnica para construir las herramientas que gestionan y explotan esos datos.
              </p>
              <p>
                Actualmente, estoy enfocado en la integración de <strong>IA Generativa (Copilot Studio) </strong> 
                en flujos de trabajo empresariales.
              </p>
            </div>

            {/* Datos Rápidos */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-2xl font-bold text-blue-600">+2 Años</p>
                <p className="text-sm text-slate-500">Experiencia Profesional</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-2xl font-bold text-purple-600">Catamarca</p>
                <p className="text-sm text-slate-500">Argentina (Remoto)</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-600" /> Trayectoria
            </h3>
            
            <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
              
              {/* Trabajo Actual */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></span>
                <h4 className="text-lg font-bold text-slate-900">Power Platform Developer Jr</h4>
                <p className="text-blue-600 font-medium mb-2">Practia Global | Ene 2024 - Presente</p>
                <p className="text-slate-600 text-sm">
                  Desarrollo de apps críticas para gestión de emergencias y viajes corporativos. 
                  Implementación de bots en Copilot Studio y automatización de flujos complejos en Power Automate.
                </p>
              </div>

              {/* Trabajo Anterior */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-300 rounded-full border-4 border-white"></span>
                <h4 className="text-lg font-bold text-slate-900">Data Scientist</h4>
                <p className="text-slate-500 font-medium mb-2">Practia Global | Ago 2023 - Ene 2024</p>
                <p className="text-slate-600 text-sm">
                  Creación de modelos predictivos de Churn Rate y desarrollo de chatbots internos con tecnología GPT y bases vectoriales.
                </p>
              </div>

               {/* Educación */}
               <div className="relative pt-4">
                <span className="absolute -left-[42px] top-5 w-6 h-6 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center">
                    <GraduationCap size={14} className="text-slate-400" />
                </span>
                <h4 className="text-lg font-bold text-slate-900">Ingeniería en Informática</h4>
                <p className="text-slate-500 text-sm">Universidad Nacional de Catamarca | 2015 - Actualidad</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}