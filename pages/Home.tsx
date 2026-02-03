import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative flex min-h-[600px] lg:min-h-[700px] flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 py-20 text-center sm:px-6 lg:px-8"
          style={{ backgroundImage: `linear-gradient(rgba(16, 26, 34, 0.65) 0%, rgba(16, 26, 34, 0.75) 100%), url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1920")` }}
        >
          <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in-up">
            <h1 className="text-4xl font-display font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-xl">
              Live Your Best Student <br className="hidden md:block" /> Life at <span className="text-primary-light">Parallel Four</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-slate-100 sm:text-xl md:text-2xl leading-relaxed drop-shadow-md">
              The premium student accommodation just steps away from Strathmore University. Comfort, community, and convenience designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact" className="h-14 w-full sm:w-auto min-w-[180px] flex items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-blue-600 hover:-translate-y-1 shadow-lg shadow-primary/30">
                Book a Visit
              </Link>
              <Link to="/rooms" className="h-14 w-full sm:w-auto min-w-[180px] flex items-center justify-center rounded-xl bg-white/10 border border-white/30 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:-translate-y-1">
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Benefits</span>
            <h2 className="mt-2 text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Why Choose Parallel Four?</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Everything you need to thrive academically and socially in a secure environment.</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'directions_walk', title: 'Walking Distance', desc: 'Just a 5-minute walk to Strathmore University campus. Save time on commute and sleep in longer.' },
              { icon: 'water_drop', title: 'Reliable Utilities', desc: 'Uninterrupted water supply with large reserves and backup power generators for study sessions.' },
              { icon: 'wifi', title: 'Student Focused', desc: 'Dedicated quiet study lounges and high-speed fiber internet throughout the building.' },
            ].map((feature, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-150 group-hover:bg-primary/10"></div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Snippet */}
      <section className="py-24 bg-surface-light dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white sm:text-4xl">Our Rooms</h2>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Modern spaces designed for privacy and community.</p>
            </div>
            <Link to="/rooms" className="group flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors">
              See all room types 
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {/* Preview Card 1 */}
             <div className="group rounded-2xl bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800" alt="Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">Best Value</div>
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Standard Single</h3>
                   <p className="text-primary font-bold mt-1">KES 18,000<span className="text-sm font-normal text-slate-500">/mo</span></p>
                   <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-sm text-slate-500">Shared Amenities</span>
                      <Link to="/rooms" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors">Details</Link>
                   </div>
                </div>
             </div>
              {/* Preview Card 2 */}
              <div className="group rounded-2xl bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800" alt="Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Premium Twin</h3>
                   <p className="text-primary font-bold mt-1">KES 14,000<span className="text-sm font-normal text-slate-500">/mo</span></p>
                   <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-sm text-slate-500">En-suite Bathroom</span>
                      <Link to="/rooms" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors">Details</Link>
                   </div>
                </div>
             </div>
             {/* Preview Card 3 */}
             <div className="group rounded-2xl bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1522771753035-48497c2f6e5c?auto=format&fit=crop&q=80&w=800" alt="Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm">Premium</div>
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Studio Apartment</h3>
                   <p className="text-primary font-bold mt-1">KES 25,000<span className="text-sm font-normal text-slate-500">/mo</span></p>
                   <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-sm text-slate-500">Private Kitchenette</span>
                      <Link to="/rooms" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors">Details</Link>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary/5 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-10 shadow-lg text-center dark:bg-slate-900 min-w-[280px]">
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-slate-900 dark:text-white">4.4</span>
                <span className="material-symbols-outlined text-yellow-400 text-5xl fill-current">star</span>
              </div>
              <p className="text-lg font-bold text-slate-600 dark:text-slate-300">Google Rating</p>
              <p className="text-sm text-slate-400">Based on 200+ Reviews</p>
            </div>
            
            <div className="max-w-2xl text-center md:text-left relative">
               <span className="absolute -top-10 -left-6 material-symbols-outlined text-8xl text-primary/10 select-none">format_quote</span>
              <blockquote className="relative z-10 text-2xl md:text-3xl font-medium leading-relaxed text-slate-900 dark:text-white">
                "Parallel Four isn't just a hostel, it's a community. The proximity to Strathmore makes morning classes a breeze, and the study rooms are a lifesaver during exam season."
              </blockquote>
              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" 
                  alt="Student" 
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-800"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Sarah Wanjiku</div>
                  <div className="text-sm text-primary font-medium">Strathmore Student, 3rd Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl font-display font-black text-white sm:text-4xl md:text-5xl">Ready to secure your space?</h2>
          <p className="mb-10 text-blue-50 text-xl max-w-2xl mx-auto font-light">Rooms fill up fast before the semester starts. Book a viewing today to choose your perfect spot.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="h-14 flex items-center justify-center rounded-xl bg-white px-8 text-lg font-bold text-primary transition hover:bg-slate-100 shadow-xl">
              Book a Visit
            </Link>
            <Link to="/contact" className="h-14 flex items-center justify-center rounded-xl border-2 border-white px-8 text-lg font-bold text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;