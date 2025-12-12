export default function Skills() {
  const categories = [
    {
      title: "Microsoft Power Platform",
      skills: ["Power Apps", "Power Automate", "Power BI", "Copilot Studio", "AI Builder"],
      bg: "bg-blue-50",
      text: "text-blue-700"
    },
    {
      title: "Desarrollo Low-Code",
      skills: ["Mendix", "SharePoint Lists", "ServiceNow Integration", "Dataverse"],
      bg: "bg-purple-50",
      text: "text-purple-700"
    },
    {
      title: "Data Science & AI",
      skills: ["Python", "Machine Learning", "Modelos Predictivos", "Vector Databases", "GPT Integration"],
      bg: "bg-orange-50",
      text: "text-orange-700"
    },
    {
      title: "Habilidades Blandas",
      skills: ["Comunicación Efectiva", "Resolución de Problemas", "Trabajo en Equipo", "Gestión del Tiempo"],
      bg: "bg-green-50",
      text: "text-green-700"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Stack Tecnológico</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <h3 className={`text-lg font-bold mb-4 ${cat.text}`}>{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm font-medium">
                    <span className={`w-2 h-2 rounded-full mr-2 ${cat.bg.replace('bg-', 'bg-').replace('50', '400')}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}