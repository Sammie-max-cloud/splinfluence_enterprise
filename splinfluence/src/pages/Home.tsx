import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "wouter";
import { ArrowRight, Download, Handshake, TrendingUp, Target, Globe, ChevronDown, CheckCircle2, Egg, Monitor, FileText, Palette, Heart, Sparkles, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const { toast } = useToast();

  const handleDownloadPdf = () => {
    const content = `SPLINFLUENCE ENTERPRISE
Company Profile & Service Overview

Splinfluence Enterprise is a multi-industry company delivering excellence across Agriculture, Technology, Creative Services, Health Support, and Fashion.

OUR SERVICES:
1. Livestock & Agricultural Services (Poultry)
2. Web Development & Digital Solutions
3. Writing & Content Services
4. Graphic Design & Branding
5. Health Sector Support Services (Non-Clinical)
6. Fashion Design & Brand Development (Airxence)

CONTACT:
Email: info@splinfluence.com
Phone: +234 812 345 6789
Location: Nigeria

[End of Company Profile Document]`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Splinfluence_Enterprise_Profile.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Download Started",
      description: "Your company profile is downloading.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Abstract Corporate Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-10" />
          <div className="absolute inset-0 bg-hero-glow z-10" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-6 flex flex-wrap gap-2 items-center text-primary font-medium tracking-widest text-sm uppercase">
              <span>AGRICULTURE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>TECHNOLOGY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>CREATIVITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>HEALTH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>FASHION</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-8">
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Innovation</span> Across Industries.<br />
              Delivering Excellence Everywhere.
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              A versatile multi-industry enterprise delivering premium services across agriculture, digital technology, creative services, health support, and fashion.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="inline-block">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact" className="inline-block">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-background/50 backdrop-blur-sm">
                  Work With Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Credibility Strip */}
      <section className="border-y border-border bg-card/30 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { label: "Multi-Industry Expertise", icon: Globe },
              { label: "Result-Driven Approach", icon: Target },
              { label: "Scalable Service Delivery", icon: TrendingUp },
              { label: "Innovation & Creativity", icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center py-4 px-4 gap-3">
                <item.icon className="w-7 h-7 text-primary" />
                <p className="text-white font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge variant="gold" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seven powerful service lines — one exceptional enterprise. We deliver quality across every industry we touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Livestock & Agricultural Services", icon: Egg, desc: "Scalable poultry farming, sustainable food production, and modern agricultural systems." },
              { title: "Web Development & Digital Solutions", icon: Monitor, desc: "Professional websites, digital platforms, and online presence that drive real business growth." },
              { title: "Writing & Content Services", icon: FileText, desc: "Compelling proposals, brand copy, articles, and content that informs, persuades, and converts." },
              { title: "Graphic Design & Branding", icon: Palette, desc: "Visual identity, marketing materials, and brand design that make lasting impressions." },
              { title: "Health Sector Support Services", icon: Heart, desc: "Non-clinical administrative and coordination support for healthcare facilities and practitioners." },
              { title: "Fashion Design & Branding (Airxence)", icon: Sparkles, desc: "Distinctive clothing design, brand identity, and fashion innovation under the Airxence label." },
              { title: "Advertisement & Marketing Services", icon: Megaphone, desc: "Targeted campaigns, social media strategy, paid ads, and brand activations that grow your audience and generate leads." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className="h-full bg-card border-border card-hover-effect group flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-background" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base">{service.desc}</CardDescription>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Link href="/services" className="inline-flex items-center text-primary font-medium hover:underline text-sm mt-4">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Badge variant="gold" className="mb-4">The Splinfluence Advantage</Badge>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why Choose Splinfluence Enterprise</h2>
                <p className="text-muted-foreground mb-10 text-lg">
                  We don't just offer services — we deliver outcomes. Every project is approached with precision, creativity, and a deep commitment to excellence.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { title: "Multi-Sector Expertise", icon: Globe, desc: "We operate across six distinct industries with the depth of a specialist in each." },
                  { title: "Creative & Technical Excellence", icon: Sparkles, desc: "Blending creativity with technical skill to produce results that stand out." },
                  { title: "Reliable & Scalable Solutions", icon: TrendingUp, desc: "Our systems and services are built to grow with your ambition." },
                  { title: "Strong Focus on Quality & Results", icon: Target, desc: "We are accountable to outcomes — your success is our benchmark." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-background border border-primary/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border border-border group"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=1600&fit=crop"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-card/80 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-white font-serif text-xl italic">
                  "Excellence is not a goal — it is our standard. Across every industry, every project, every client."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Block */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { num: 6, suffix: "", label: "Service Industries" },
              { num: 100, suffix: "+", label: "Clients Served" },
              { num: 5, suffix: "+", label: "Years of Excellence" },
              { num: 98, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-2">
                  <CountUp end={stat.num} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-background/80 font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-4">Client Feedback</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Amaka Osei", role: "Business Owner, Lagos", quote: "Splinfluence built our website from scratch and the result was beyond professional. Our online inquiries tripled within the first month. Outstanding digital work." },
              { name: "Dr. Emeka Okonkwo", role: "Medical Practitioner, Abuja", quote: "Their health sector support team helped us streamline our administrative processes significantly. Reliable, professional, and thorough in everything they do." },
              { name: "Mr. Seun Babatunde", role: "Brand Manager, Ibadan", quote: "The graphic design and branding work was exceptional. They captured our brand's essence perfectly. I've recommended them to five other business owners already." },
            ].map((t, i) => (
              <Card key={i} className="bg-card/50 border-border/50">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-6 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg italic mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-serif text-lg">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{t.name}</h5>
                      <p className="text-sm text-primary">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Download */}
      <section className="py-24 relative bg-card border-y border-border">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4">Work With Us</Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Engage Our Services?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Download our company profile to learn more about our service offerings, capacity, and what sets Splinfluence Enterprise apart.
          </p>
          <Button size="lg" onClick={handleDownloadPdf} className="h-14 px-8 text-base">
            <Download className="mr-2 h-5 w-5" />
            Download Company Profile
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
            Let's Build Something <span className="text-primary">Impactful</span> Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Whether you need a website, a brand identity, agricultural support, or something in between — we are ready to deliver.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full h-14 px-8 text-base">
                Hire Us
              </Button>
            </Link>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-14 px-8 text-base">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full h-14 px-8 text-base text-primary hover:text-primary">
                Contact <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
