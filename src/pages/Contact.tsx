import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Our team will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="gold" className="mb-4">Reach Out</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to hire us, partner with us, or simply learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Full Name</label>
                      <Input required placeholder="Your Name" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email Address</label>
                      <Input required type="email" placeholder="you@example.com" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Phone Number</label>
                    <Input type="tel" placeholder="+234 ..." className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Service of Interest</label>
                    <select className="flex h-12 w-full rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary appearance-none">
                      <option>Livestock & Agricultural Services</option>
                      <option>Web Development & Digital Solutions</option>
                      <option>Writing & Content Services</option>
                      <option>Graphic Design & Branding</option>
                      <option>Health Sector Support Services</option>
                      <option>Fashion Design (Airxence)</option>
                      <option>Advertisement & Marketing Services</option>
                      <option>Partnership Proposal</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Message</label>
                    <Textarea required placeholder="Tell us about your project or inquiry..." className="bg-background min-h-[150px]" />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                We are based in Nigeria and available to serve clients across Africa and internationally. Reach us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nigeria (Serving clients nationwide & internationally)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-primary hover:underline cursor-pointer">splinfluenceenterprise@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 803 794 1915</p>
                    <p className="text-muted-foreground">+234 806 566 4487</p>
                    <p className="text-muted-foreground">+234 814 019 9546</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/40 to-transparent border border-green-900/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Chat on WhatsApp</h4>
                  <p className="text-sm text-muted-foreground mb-3">Quickest way to discuss your project needs directly.</p>
                  <a
                    href="https://wa.me/2349115029166"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="border-green-500 text-green-500 hover:bg-green-500/10">
                      Chat with us <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Hire Us", desc: "Start a project" },
                { label: "Partnership", desc: "Collaborate with us" },
                { label: "Media Inquiry", desc: "Press & coverage" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center cursor-pointer">
                  <h5 className="font-semibold text-white text-sm mb-1">{item.label}</h5>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
