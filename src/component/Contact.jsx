import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://portfoliobackend-4gyn.onrender.com/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Contact <span className="text-gray-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-black mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-8 leading-8">
            Have a project in mind or want to collaborate? Feel free to
            contact me. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Let's Talk
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">
                    kd96668@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">
                    +91 0000000000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-600">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <a
                 href="https://github.com/KausikDas2000"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                 href="https://www.linkedin.com/in/kausik-das-444a36399"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
               href="https://www.instagram.com/kausik_official__/"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition hover:scale-105"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;