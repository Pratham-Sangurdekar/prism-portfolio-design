import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import backgroundContact from "@/assets/background-contact.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pratham.savi0412@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly at pratham.savi0412@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundContact})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Navigation />

      <main className="relative z-10 flex-1 flex items-center py-20 md:py-32 px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="w-full max-w-[500px] mx-auto">
          <div className="mb-10 md:mb-16">
            <h1 
              className="font-black leading-[0.85] tracking-tight mb-4 md:mb-6"
              style={{
                fontSize: "clamp(48px, 12vw, 100px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#dadadaff",
              }}
            >GET IN TOUCH!
            </h1>
            <p className="text-center text-[#C0C0C0] text-xs md:text-sm uppercase tracking-wider">
              LEAVE A MESSAGE AT THE BEEP
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-base"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-base"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors resize-none text-base"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white/95 text-black font-semibold py-4 px-8 rounded-md hover:bg-white transition-all duration-300 text-base uppercase tracking-wide mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
