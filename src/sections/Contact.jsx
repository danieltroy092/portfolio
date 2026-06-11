import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="contact"
            className="text-secondary-foreground font-mono tracking-tight intersect:motion-preset-slide-up motion-duration-1000 motion-delay-300"
          >
            05. What's Next?
          </span>
          <h2 className="font-calibre-bold text-white mt-4 text-5xl intersect:motion-preset-slide-up motion-duration-1000 motion-delay-500">
            Get In Touch
          </h2>

          <p className="text-primary lg:w-1/2 mt-4 m-auto text-pretty intersect:motion-preset-slide-up motion-duration-1000 motion-delay-700">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/40 glow-border">
            <div className="glass rounded-3xl p-8 border border-primary/10 intersect:motion-preset-slide-up motion-duration-1000 motion-delay-300">
              {" "}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-primary font-semibold">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-pretty">
                I'm currently seeking new opportunities and exciting projects.
                If you're looking for a full-time developer or a freelance
                consultant, feel free to reach out!
              </p>
            </div>

            <form className="form space-y-6 mt-8" onSubmit={handleSubmit}>
              <div className="form-group intersect:motion-preset-slide-up motion-duration-1000">
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

              <div className="form-group intersect:motion-preset-slide-up motion-duration-1000">
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

              <div className="form-group intersect:motion-preset-slide-up motion-duration-1000">
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all resize-none intersect:motion-preset-slide-up motion-duration-1000"
                />
              </div>

              <Button
                className="block m-auto button bordered focus:bg-highlight intersect:motion-preset-slide-up motion-duration-1000"
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
        </div>
      </div>
    </section>
  );
};
