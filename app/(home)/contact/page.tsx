import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

export const metadata = {
  title: "Contact | Websetgo",
  description: "Get in touch with us to start your next digital project. Our team is ready to help you grow.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden pt-20 bg-white dark:bg-neutral-950">
      <Navbar />

      <section className="relative pt-24 pb-32 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Drop us a message, and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@websetgo.com", desc: "For general inquiries" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", desc: "Mon-Fri from 9am to 6pm PST" },
                    { icon: MapPin, label: "Studio", value: "123 Innovation Drive", desc: "San Francisco, CA 94105" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/10 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 shadow-sm border border-orange-200 dark:border-orange-500/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.label}</p>
                        <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-orange-500 transition-colors drop-shadow-xs">{item.value}</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800/80">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Not ready yet?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Join our newsletter to receive the latest updates, tips, and strategies for digital growth.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-white shadow-sm"
                  />
                  <button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 px-5 rounded-xl transition-colors flex items-center justify-center shrink-0 shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="p-8 md:p-12 bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Send us a message</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John" 
                      className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">What are you interested in?</label>
                  <select 
                    title="Service Type"
                    className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
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
                    rows={5}
                    placeholder="Tell us about your project..." 
                    className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(249,115,22,0.3)] text-lg"
                >
                  <Send className="w-5 h-5 shrink-0" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
