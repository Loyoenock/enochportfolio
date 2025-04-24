import { useState } from "react";
import { ShowOnScroll } from "../ShowOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.VITE_SERVICE_ID, 
        import.meta.VITE_TEMPLATE_ID, e.target, 
        import.meta.VITE_PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert('Oops! Something went wrong, Please try again'));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <ShowOnScroll>
        <div className="px-4 w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name..."
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#0b0b0b] border border-blue-500 text-white placeholder:text-gray-400 rounded-md px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#0b0b0b] border border-blue-500 text-white placeholder:text-gray-400 rounded-md px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#0b0b0b] border border-blue-500 text-white placeholder:text-gray-400 rounded-md px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send a Message
            </button>
          </form>
        </div>
      </ShowOnScroll>
    </section>
  );
};
