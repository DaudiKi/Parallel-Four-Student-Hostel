import React from 'react';

const Amenities: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
       {/* Hero */}
       <div 
        className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-cover bg-center attachment-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920")` }}
       >
        <div className="text-center px-4 relative z-10 max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl font-display font-black leading-tight tracking-tight mb-4 drop-shadow-xl">
                Amenities & Lifestyle
            </h1>
            <p className="text-slate-100 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
                Experience premium student living designed for your comfort, safety, and academic success.
            </p>
        </div>
      </div>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-2 block">Premium Features</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Everything You Need</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    We've thoughtfully curated our amenities to provide a balance of academic focus and social relaxation.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: 'wifi', title: 'High-Speed Wi-Fi', desc: 'Fast, reliable fiber optic internet available throughout the building.' },
                    { icon: 'security', title: '24/7 Biometric Security', desc: 'Fingerprint access control and round-the-clock CCTV monitoring.' },
                    { icon: 'cleaning_services', title: 'Housekeeping', desc: 'Scheduled room cleaning and on-site modern laundry facilities.' },
                    { icon: 'menu_book', title: 'Quiet Study Lounges', desc: 'Dedicated quiet zones with ergonomic furniture for deep work.' },
                    { icon: 'restaurant', title: 'Nearby Dining', desc: 'Located near popular student-friendly cafeterias and restaurants.' },
                    { icon: 'bolt', title: 'Backup Generator', desc: 'Never worry about power outages. Automatic backup ensures you stay online.' },
                ].map((item, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0c1319]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Photo Gallery</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">Get a glimpse of life at Parallel Four.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                 {/* Large Item */}
                <div className="group md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                    <img alt="Student Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-1 block">Interior</span>
                        <h3 className="text-white text-2xl font-bold">Premium Student Room</h3>
                    </div>
                </div>

                {/* Small Items */}
                {[
                    { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600', title: 'Exterior View' },
                    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600', title: 'Study Lounge' },
                ].map((img, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                        <img alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img.src} />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                        </div>
                    </div>
                ))}
                
                 {/* Wide Item */}
                <div className="group md:col-span-2 relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                    <img alt="Common Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1200" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-1 block">Student Life</span>
                        <h3 className="text-white text-xl font-bold">Collaborative Spaces</h3>
                    </div>
                </div>

                 {/* Last Item */}
                 <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                    <img alt="Bathroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Amenities;