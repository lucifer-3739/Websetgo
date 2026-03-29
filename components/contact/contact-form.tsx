"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus("success");
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      const errText = error.message || "Something went wrong. Please try again later.";
      setErrorMessage(errText);
      toast.error(errText);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-4xl border border-green-500/20 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[500px]">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 font-bold shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Message Sent!</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8">
          Thank you for reaching out. We've received your message and will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-xl font-bold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-2rem border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none relative">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Send us a message</h2>
      
      {status === "error" && (
        <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl mb-6 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">First Name</label>
          <input 
            type="text" 
            name="firstName"
            required
            placeholder="John" 
            className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Last Name</label>
          <input 
            type="text" 
            name="lastName"
            required
            placeholder="Doe" 
            className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
        <input 
          type="email" 
          name="email"
          required
          placeholder="john@company.com" 
          className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
        />
      </div>

      <div className="space-y-2 mb-6">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">What are you interested in?</label>
        <select 
          name="service"
          title="Service Type"
          required
          className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="web-dev">Web Development</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="seo">SEO & Marketing</option>
          <option value="ui-design">UI/UX Design</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2 mb-8">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Message</label>
        <textarea 
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..." 
          className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(249,115,22,0.3)] text-lg active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 shrink-0" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
