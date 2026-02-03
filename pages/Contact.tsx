import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-display font-black leading-tight tracking-tight mb-4">Contact & Location</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl font-normal leading-relaxed">
          Modern student living redefined. Visit our offices in Madaraka, conveniently located near Strathmore University.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
        {/* Form Section */}
        <div className="flex flex-col">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-3xl">mail</span>
              Send us a message
            </h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-200 text-sm font-bold uppercase tracking-wide">Full Name</span>
                <input
                  className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 px-4 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-200 text-sm font-bold uppercase tracking-wide">Email Address</span>
                  <input
                    className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 px-4 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-200 text-sm font-bold uppercase tracking-wide">Phone Number</span>
                  <input
                    className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 px-4 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="0742 337 991"
                    type="tel"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-200 text-sm font-bold uppercase tracking-wide">Message</span>
                <textarea
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 min-h-[140px] p-4 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none transition-all"
                  placeholder="Tell us more about your requirements..."
                  required
                ></textarea>
              </label>
              <button className="mt-4 w-full h-14 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[22px]">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Info & Map Section */}
        <div className="flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Visit Parallel Four</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Drop by our leasing office for a personalized tour of our premium student facilities.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-secondary text-2xl group-hover:text-white transition-colors">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">0742 337 991</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-secondary text-2xl group-hover:text-white transition-colors">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Madaraka Estate, Nairobi</p>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Near Strathmore University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 bg-slate-100">
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Parallel+Four+Building,Nairobi+Kenya&center=-1.315855,36.816532&zoom=17"
              style={{ border: 0 }}
              title="Map showing Parallel Four building location"
              width="100%"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/9hZsin9FTn8Bcget8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-slate-900 dark:text-white hover:scale-105 transition-transform border border-slate-200 dark:border-slate-700 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              View larger map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;