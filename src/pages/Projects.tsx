import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  { id: 1, title: "Commercial Poultry Farm — Phase I", category: "Agriculture", desc: "Broiler and layer production facility with modern housing and biosecurity systems.", color: "from-green-900 to-emerald-900" },
  { id: 2, title: "Corporate Website — HealthBridge Clinic", category: "Web Development", desc: "Full professional website with appointment booking and patient information portal.", color: "from-blue-900 to-cyan-900" },
  { id: 3, title: "Business Proposal — Real Estate Firm", category: "Writing & Content", desc: "Winning investment proposal that secured ₦50M in funding for a property developer.", color: "from-amber-900 to-yellow-900" },
  { id: 4, title: "Brand Identity — TasteHouse Restaurant", category: "Design & Branding", desc: "Complete brand refresh including logo, menu design, and social media kit.", color: "from-purple-900 to-fuchsia-900" },
  { id: 5, title: "Airxence Collection — Urban Elegance", category: "Fashion (Airxence)", desc: "Premium ready-to-wear collection blending West African aesthetics with contemporary streetwear.", color: "from-rose-900 to-pink-900" },
  { id: 6, title: "Admin Support — Community Health Centre", category: "Health Support", desc: "Complete administrative restructuring and patient record management system implementation.", color: "from-teal-900 to-cyan-900" },
  { id: 7, title: "E-Commerce Platform — Agro Supplies Co.", category: "Web Development", desc: "Full-featured online store for agricultural inputs with inventory management.", color: "from-blue-900 to-indigo-900" },
  { id: 8, title: "Poultry Feed Supply Chain", category: "Agriculture", desc: "Established reliable feed sourcing and storage network for 3 partner farms.", color: "from-green-900 to-lime-900" },
  { id: 9, title: "Content Strategy — EdTech Startup", category: "Writing & Content", desc: "12-month content calendar with blog articles, newsletters, and social media copy.", color: "from-orange-900 to-amber-900" },
  { id: 10, title: "Corporate Branding — Abubakar Holdings", category: "Design & Branding", desc: "Full corporate identity suite: logo, letterhead, business cards, and brand guidelines.", color: "from-violet-900 to-purple-900" },
  { id: 11, title: "Airxence Event Wear — Wedding Collection", category: "Fashion (Airxence)", desc: "Custom designed attire for a high-profile corporate and wedding event clientele.", color: "from-pink-900 to-rose-900" },
  { id: 12, title: "Health Facility Support — Maternity Clinic", category: "Health Support", desc: "Patient scheduling coordination and administrative process optimization for busy clinic.", color: "from-emerald-900 to-teal-900" },
  { id: 13, title: "Social Media Campaign — Fashion Brand", category: "Marketing", desc: "Full 3-month Instagram and TikTok campaign that grew follower count by 420% and tripled online sales.", color: "from-orange-900 to-red-900" },
  { id: 14, title: "Product Launch Campaign — Food Brand", category: "Marketing", desc: "Multi-channel launch strategy combining influencer marketing, paid ads, and street activations across Lagos.", color: "from-yellow-900 to-orange-900" },
];

const categories = ["All", "Agriculture", "Web Development", "Writing & Content", "Design & Branding", "Fashion (Airxence)", "Health Support", "Marketing"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="gold" className="mb-4">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Work <span className="text-primary">in Action</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of projects, clients, and deliverables across all seven of our service areas.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border bg-background sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-background shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-border cursor-pointer bg-card"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-opacity duration-500 group-hover:opacity-80`} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-white/20 mb-3 text-white">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-serif font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
