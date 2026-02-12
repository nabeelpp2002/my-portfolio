import React, { useState } from "react";
import {
    FaLinkedin,
    FaTwitter,
    FaTelegram,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaHeart,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

const socials = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nabeel-p-p-a68b40239",
        icon: FaLinkedin,
        color: "hover:bg-blue-500/15 hover:border-blue-500/30 hover:text-blue-400",
        iconColor: "text-blue-400",
    },
    {
        name: "X (Twitter)",
        url: "https://twitter.com/nabeel_pp__",
        icon: FaTwitter,
        color: "hover:bg-sky-500/15 hover:border-sky-500/30 hover:text-sky-400",
        iconColor: "text-sky-400",
    },
    {
        name: "Telegram",
        url: "https://t.me/nabeelpp2002",
        icon: FaTelegram,
        color: "hover:bg-blue-400/15 hover:border-blue-400/30 hover:text-blue-300",
        iconColor: "text-blue-400",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/nab__el_?igsh=aWg4c3VjaWMzc25n",
        icon: FaInstagram,
        color: "hover:bg-pink-500/15 hover:border-pink-500/30 hover:text-pink-400",
        iconColor: "text-pink-400",
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/917736674340",
        icon: FaWhatsapp,
        color:
            "hover:bg-emerald-500/15 hover:border-emerald-500/30 hover:text-emerald-400",
        iconColor: "text-emerald-400",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date().toLocaleString(),
            };

            await emailjs.send(
                "service_vde914s",
                "template_usmm2b7",
                templateParams,
                "QpAtby7-3EZeRe9lL"
            );

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding relative">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                        Let's Connect
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from
                        you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left — Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className={`group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-xl transition-all duration-300 relative overflow-hidden ${status === "sending"
                                    ? "bg-gray-700 cursor-not-allowed"
                                    : status === "success"
                                        ? "bg-emerald-600 shadow-emerald-500/25"
                                        : status === "error"
                                            ? "bg-rose-600 shadow-rose-500/25"
                                            : "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-indigo-500/25 hover:shadow-indigo-500/40"
                                    }`}
                            >
                                <span className={`absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 transition-opacity duration-300 ${status === "idle" ? "group-hover:opacity-100" : ""}`} />

                                {status === "idle" && (
                                    <>
                                        <FaPaperPlane className="relative z-10 text-xs group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                                        <span className="relative z-10">Send Message</span>
                                    </>
                                )}

                                {status === "sending" && (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
                                        <span className="relative z-10">Sending...</span>
                                    </>
                                )}

                                {status === "success" && (
                                    <span className="relative z-10">Message Sent!</span>
                                )}

                                {status === "error" && (
                                    <span className="relative z-10">Error. Try Again.</span>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <p className="text-emerald-400 text-xs text-center font-medium animate-fadeInUp">
                                    Thanks! Your message has been sent successfully.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-rose-400 text-xs text-center font-medium animate-fadeInUp">
                                    Something went wrong. Please try again later.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right — Contact Info & Socials */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Email Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <FaEnvelope className="text-white text-sm" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Email me at</p>
                                    <a
                                        href="mailto:nabeelpp2002@gmail.com"
                                        className="text-white text-sm font-medium hover:text-indigo-300 transition-colors"
                                    >
                                        nabeelpp2002@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-white text-sm" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Based in</p>
                                    <p className="text-white text-sm font-medium">
                                        Kannur, Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6">
                            <h3 className="text-white font-semibold text-sm mb-4">
                                Connect on Social
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-400 transition-all duration-300 ${social.color}`}
                                        >
                                            <Icon className={`text-lg ${social.iconColor}`} />
                                            <span className="text-sm font-medium">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="glass-card p-4 border-emerald-500/20 border">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                </span>
                                <span className="text-emerald-300 text-sm font-medium">
                                    Currently available for freelance & full-time roles
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 pt-8 border-t border-white/[0.04]">
                    <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                        Built with <FaHeart className="text-indigo-400 text-[10px]" /> by
                        Nabeel PP • © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
