import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Award, Shield, TrendingUp, Globe, Lightbulb, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Page Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <Badge variant="gold" className="mb-6">Who We Are</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              About <span className="text-primary">Splinfluence</span> Enterprise
            </h1>
            <p className="text-xl text-muted-foreground">
              A versatile, innovative enterprise delivering excellence across agriculture, technology, creative industries, health support, and fashion — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Splinfluence Enterprise was born from a bold belief — that a truly impactful business doesn't have to be limited to one industry. We saw gaps across multiple sectors and asked: why not fill them all, and fill them well?
                </p>
                <p>
                  Starting with agricultural services and growing to encompass web development, content creation, graphic design, health sector support, and the Airxence fashion brand, we have built a company that thrives on versatility and excellence. Each service we offer is delivered with the same level of professionalism, creativity, and commitment to results.
                </p>
                <p>
                  Today, Splinfluence Enterprise is a trusted name for clients across Nigeria who need quality service from a team that understands both the digital and physical world. We are not just a service company — we are growth partners, creative collaborators, and industry innovators.
                </p>
                <p>
                  Our story is still being written — and every client we serve adds a new and powerful chapter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/about-vision.png`}
                alt="Splinfluence Enterprise Vision"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver high-quality, innovative, and reliable services across agriculture, technology, creative industries, health support, and fashion — empowering businesses and communities to grow and thrive.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become a leading multi-industry enterprise recognized for excellence, innovation, and impact across Africa and beyond — a company that proves versatility and quality can coexist at the highest level.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Narrative */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-8 border-primary text-primary">Leadership</Badge>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              "I refused to be boxed into one industry. I saw needs everywhere — in agriculture, in digital, in design, in health — and I built a team that could answer all of them, brilliantly."
            </h2>

            <div className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                The founder of Splinfluence Enterprise started with very little but carried an extraordinary vision. Navigating the challenges of building across multiple industries — from setting up agricultural operations to launching digital services and the Airxence fashion brand — required resilience, adaptability, and an unshakeable belief in the power of quality work.
              </p>
              <p className="mt-4">
                That journey taught one defining lesson: the future belongs to those who refuse to be ordinary. Splinfluence Enterprise exists to be exceptional — and to help every client we work with become the same.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-16 h-16 rounded-full bg-card border-2 border-primary overflow-hidden flex items-center justify-center text-primary font-bold text-xl font-serif">
                SE
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">The Founder</div>
                <div className="text-primary text-sm font-medium">CEO & Founder, Splinfluence Enterprise</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-4">What Drives Us</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: Award, label: "Excellence" },
              { icon: Lightbulb, label: "Innovation" },
              { icon: Shield, label: "Integrity" },
              { icon: TrendingUp, label: "Growth" },
              { icon: Zap, label: "Versatility" },
            ].map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-white">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-muted-foreground mb-8">Reach out today and let's start building something great together.</p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-primary text-background font-semibold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
