import { useState } from "react";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("⚠️ Please fill in all fields!");
      return;
    }

    toast.success("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 ">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />

      {/* Header */}
      <div className="max-w-2xl text-center mb-10">
        <p className="text-gray-600 mt-2">
          We'd love to hear from you. Fill out the form below or reach us through our contact details.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-10  w-full px-4">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none "
          ></textarea>
          <button
            type="submit"
            className="bg-red-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-red-900 transition"
          >
            <Icon icon="mdi:send" className="text-white" width="20" />
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <div className="flex items-center gap-3 text-gray-700">
            <Icon icon="mdi:map-marker" className="text-red-700" width="22" />
            <span>123 Main Street, Your City</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Icon icon="mdi:phone" className="text-red-700" width="22" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Icon icon="mdi:email" className="text-red-700" width="22" />
            <span>info@example.com</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Icon icon="mdi:facebook" width="26" style={{color:"#b91c1c"}} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600">
              <Icon icon="mdi:instagram" width="26" style={{color:"#b91c1c"}} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <Icon icon="mdi:linkedin" width="26" style={{color:"#b91c1c"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
