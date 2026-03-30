import { motion } from "framer-motion";
import { Link } from "wouter";
import { Egg, Monitor, FileText, Palette, Heart, Sparkles, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    id: "agriculture",
    title: "Livestock & Agricultural Services (Poultry)",
    icon: Egg,
    tag: "Core Operations",
    desc: "Our agricultural arm focuses on scalable poultry farming — from day-old chick management to fully grown broiler and layer production. We apply modern husbandry techniques alongside sustainable practices to ensure healthy flocks, high yields, and consistent food supply for our markets.",
    stats: [
      { label: "Primary Focus", value: "Poultry Farming" },
      { label: "Capacity", value: "Scalable Systems" },
      { label: "Approach", value: "Modern & Sustainable" },
      { label: "Output", value: "Meat & Eggs" },
    ],
    benefits: ["Consistent, quality food production", "Scalable farm systems", "Sustainable practices", "Market-ready supply chain"],
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop",
  },
  {
    id: "web-dev",
    title: "Web Development & Digital Solutions",
    icon: Monitor,
    tag: "Digital Services",
    desc: "We build clean, fast, and professional websites and digital systems tailored to your business. From landing pages to full e-commerce platforms and corporate portals, our development team creates digital experiences that convert visitors into clients and establish powerful online presence.",
    stats: [
      { label: "Service Type", value: "Websites & Platforms" },
      { label: "Stack", value: "Modern Technologies" },
      { label: "Delivery", value: "Fast & Reliable" },
      { label: "Support", value: "Ongoing Maintenance" },
    ],
    benefits: ["Responsive design for all devices", "SEO-optimized builds", "Custom business solutions", "E-commerce & booking systems"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: "writing",
    title: "Writing & Content Services",
    icon: FileText,
    tag: "Creative Services",
    desc: "Words are powerful business tools. Our writing team crafts compelling proposals, professional reports, blog articles, website copy, brand scripts, and marketing content designed to communicate your value clearly and persuasively. We write content that works — content that wins clients.",
    stats: [
      { label: "Content Types", value: "10+ Categories" },
      { label: "Industries", value: "All Sectors" },
      { label: "Turnaround", value: "Fast & Accurate" },
      { label: "Quality", value: "Professional Grade" },
    ],
    benefits: ["Business proposals & tenders", "Website & marketing copy", "Brand storytelling", "Reports & documentation"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
  },
  {
    id: "design",
    title: "Graphic Design & Branding",
    icon: Palette,
    tag: "Visual Identity",
    desc: "Your brand is the face of your business. Our design team creates striking visual identities — logos, brand guides, social media graphics, marketing materials, product packaging, and more. We turn ideas into visuals that communicate professionalism, credibility, and originality.",
    stats: [
      { label: "Specialization", value: "Brand Identity" },
      { label: "Deliverables", value: "All Formats" },
      { label: "Style", value: "Modern & Versatile" },
      { label: "Tools", value: "Industry Standard" },
    ],
    benefits: ["Logo & brand identity design", "Social media kits", "Marketing & print materials", "Product packaging & labels"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "health",
    title: "Health Sector Support Services (Non-Clinical)",
    icon: Heart,
    tag: "Support Services",
    desc: "Healthcare facilities need more than clinical excellence — they need seamless administrative systems, reliable coordination, and organized operations. We provide non-clinical support services including administrative management, patient records coordination, scheduling support, and health facility assistance.",
    stats: [
      { label: "Service Type", value: "Non-Clinical Support" },
      { label: "Focus", value: "Admin & Coordination" },
      { label: "Compliance", value: "Standards-Aligned" },
      { label: "Clients", value: "Clinics & Facilities" },
    ],
    benefits: ["Administrative management", "Patient record coordination", "Scheduling & logistics support", "Health facility operations"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: "fashion",
    title: "Fashion Design & Brand Development (Airxence)",
    icon: Sparkles,
    tag: "Fashion & Lifestyle",
    desc: "Airxence is our fashion brand — a creative powerhouse focused on distinctive clothing design, brand-driven collections, and fashion identity development. Whether for individuals, events, or commercial brands, Airxence creates fashion pieces that blend African inspiration with global style sensibility.",
    stats: [
      { label: "Brand", value: "Airxence" },
      { label: "Category", value: "Fashion & Lifestyle" },
      { label: "Style", value: "Modern & Bold" },
      { label: "Market", value: "Nigeria & Beyond" },
    ],
    benefits: ["Custom clothing design", "Brand-driven collections", "Corporate & event wear", "Fashion identity development"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "marketing",
    title: "Advertisement & Marketing Services",
    icon: Megaphone,
    tag: "Growth & Visibility",
    desc: "Visibility is everything in today's competitive market. Our marketing team crafts targeted campaigns — from social media strategy and paid advertising to influencer partnerships, flyer campaigns, and brand activations. We help businesses grow their audience, generate leads, and build lasting brand recognition across digital and physical channels.",
    stats: [
      { label: "Channels", value: "Digital & Physical" },
      { label: "Focus", value: "Leads & Awareness" },
      { label: "Approach", value: "Data-Driven" },
      { label: "Coverage", value: "Nigeria & Online" },
    ],
    benefits: ["Social media management & campaigns", "Paid ads (Meta, Google)", "Brand activations & promotions", "Influencer & community marketing"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Page Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="gold" className="mb-4">What We Offer</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-primary">Services</span> & Ventures
          </h1>
          <p className="text-xl text-muted-foreground">
            Seven powerful service lines. One unwavering standard of excellence. Explore the full breadth of what Splinfluence Enterprise delivers.
          </p>
        </div>
      </section>

      {/* Detailed Sector Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {sectors.map((sector, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={sector.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <sector.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">{sector.tag}</Badge>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{sector.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{sector.desc}</p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {sector.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-6 p-6 rounded-xl bg-card border border-border">
                    <h4 className="col-span-2 text-sm uppercase tracking-wider text-white font-semibold border-b border-border/50 pb-2">
                      Service Details
                    </h4>
                    {sector.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                        <div className="font-semibold text-primary">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border group">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-background text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to engage one of our services?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Whether you need a website, a brand identity, agricultural support, or creative content — our team is ready to deliver excellence.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-background text-primary border-transparent hover:bg-background/90 h-14 px-8 text-base">
              Contact Our Team <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
