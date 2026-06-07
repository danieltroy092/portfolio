import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactData = [
  {
    icon: Mail,
    label: "email",
    value: "danieltroy092@gmail.com",
    href: "mailto:danieltroy092@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+447737 240210",
    href: "tel:+447737240210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Newport, Wales",
    href: "https://maps.app.goo.gl/Ku1jYPb2Npsz62o86",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // success or error
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email JS configuration missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative px-6 z-10">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="contact"
            className="text-secondary-foreground font-mono tracking-tight"
          >
            05. What's Next?
          </span>
          <h2 className="font-calibre-bold text-white mt-4 text-5xl">
            Get In Touch
          </h2>

          <p className="text-primary lg:w-1/2 mt-4 m-auto text-pretty">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="glass p-8 rounded-3xl border border-primary/30"
          >
            <form className="form space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="block text-xs font-mono mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block font-mono text-xs mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="block m-auto button bordered focus:bg-highlight"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? <>Sending...</> : <>Send Message</>}
              </Button>

              {/** submit message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="contact space-y-4">
                {contactData.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-item flex items-center gap-4 p-4 rounded-xl hover:bg-surface focus:outline-none transition-colors group"
                  >
                    <div className="item-icon w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-primary font-mono">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-3xl p-8 border border-primary/30 mt-8">
                {" "}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-primary">
                    Currently Available
                  </span>
                </div>
                <p className="text-sm text-pretty">
                  I'm currently seeking new opportunities and exciting projects.
                  If you're looking for a full-time developer or a freelance
                  consultant, feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
