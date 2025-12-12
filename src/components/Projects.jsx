import { ExternalLink, Layers, Bot, BarChart3, CreditCard } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Gestión de Tarjetas AMEX (PoC)',
      description: 'Prueba de concepto en Mendix replicando un sistema .NET para gestión de solicitudes AMEX. Incluye flujo de firmas digitales, dashboards dinámicos y notificaciones automatizadas.',
      tech: ['Mendix', 'Low-Code', '.NET Replication', 'Workflow'],
      icon: <CreditCard size={32} className="text-white" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Bot Inteligente para ServiceNow',
      description: 'Desarrollo de un agente virtual en Copilot Studio integrado con Power Automate. Permite a los usuarios crear, editar y consultar tickets de incidentes mediante lenguaje natural.',
      tech: ['Copilot Studio', 'Power Automate', 'ServiceNow', 'GenAI'],
      icon: <Bot size={32} className="text-white" />,
      color: 'bg-purple-600'
    },
    {
      title: 'Predicción de Churn Rate',
      description: 'Modelo de Machine Learning diseñado para anticipar la deserción de clientes en telecomunicaciones, permitiendo al negocio tomar acciones proactivas de retención.',
      tech: ['Python', 'Scikit-learn', 'Data Science', 'Analytics'],
      icon: <BarChart3 size={32} className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'App de Gestión de Emergencias',
      description: 'Aplicación productiva end-to-end en Power Apps para el reporte y seguimiento de emergencias corporativas. Integrada con SharePoint para almacenamiento seguro.',
      tech: ['Power Apps', 'SharePoint', 'UX/UI', 'Mobile First'],
      icon: <Layers size={32} className="text-white" />,
      color: 'bg-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Una selección de soluciones tecnológicas aplicadas a problemas de negocio reales, desde automatización hasta inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`${project.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  {/* Link simulado a tu repositorio principal */}
                  <a href="https://github.com/FabricioDamianVeliz?tab=repositories" target="_blank" className="text-slate-300 hover:text-blue-600 transition">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}