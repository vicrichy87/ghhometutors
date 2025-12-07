import React from 'react';
import { 
  Star, ShieldCheck, BrainCircuit, Video, CheckCircle, GraduationCap
} from 'lucide-react';

// --- GLOBAL STYLES ---
const AppStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    :root { --font-serif: 'Playfair Display', serif; --font-sans: 'Plus Jakarta Sans', sans-serif; }
    body { font-family: var(--font-sans); background-color: #020617; overflow-x: hidden; }
    .font-serif { font-family: var(--font-serif); }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .perspective-2000 { perspective: 2000px; }
    .transform-style-3d { transform-style: preserve-3d; }
  `}</style>
);

// --- HELPER COMPONENTS ---
const BrandLogo = ({ size = 32, variant = "dark" }) => {
  const isLight = variant === "light";
  return (
    <div className="flex items-center gap-3 select-none">
      <img 
        src="https://i.imgur.com/cavxhZs.png" 
        alt="GH Home Tutors Logo" 
        style={{ width: size, height: size, objectFit: 'contain' }} 
      />
      <div className="flex flex-col leading-none">
        <span className={`font-serif font-bold ${isLight ? 'text-white' : 'text-slate-900'}`} style={{ fontSize: size * 0.6 }}>GH Home</span>
        <span className={`font-sans font-bold uppercase tracking-widest ${isLight ? 'text-emerald-400' : 'text-emerald-600'}`} style={{ fontSize: size * 0.25 }}>Tutors</span>
      </div>
    </div>
  );
};

// --- LANDING PAGE (THE WEBSITE) ---
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <BrandLogo size={80} variant="light" />
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-400 items-center bg-slate-900/50 backdrop-blur-md px-6 py-2 rounded-full border border-slate-800">
          <button onClick={() => document.getElementById('features').scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Features</button>
          <button onClick={() => document.getElementById('tutors').scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Tutors</button>
          <button onClick={() => document.getElementById('download').scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Download App</button>
        </div>

        {/* Action Button (Download Only) */}
        <div>
           <button onClick={() => document.getElementById('download').scrollIntoView({behavior:'smooth'})} className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get the App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">#1 Rated Tutoring Platform in Ghana</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-white tracking-tight">
              Unlock Academic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic pr-2">Excellence.</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-light">
              Connect with verified expert tutors for WASSCE, BECE, and specialized subjects. Premium home and online tuition, now at your fingertips.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Apple Store Button */}
              <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl transition-all hover:bg-slate-200 hover:scale-105 active:scale-95 group">
                <svg viewBox="0 0 384 512" fill="currentColor" width="24" className="group-hover:text-black"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase leading-none opacity-60">Download on the</div>
                  <div className="text-sm font-bold leading-none mt-1">App Store</div>
                </div>
              </button>
              {/* Play Store Button */}
              <button className="flex items-center gap-3 bg-slate-800 text-white border border-slate-700 px-6 py-3.5 rounded-xl transition-all hover:bg-slate-700 hover:scale-105 active:scale-95 group">
                <svg viewBox="0 0 512 512" fill="currentColor" width="24" className="text-emerald-500 group-hover:text-emerald-400"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2-60.1-60.1L47 499z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase leading-none opacity-60">Get it on</div>
                  <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* 3D-ish Phone Mockup using CSS */}
          <div className="relative animate-fade-in-up delay-200 hidden lg:block perspective-2000">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-blue-500/30 blur-[80px] rounded-full"></div>
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl rotate-y-[-12deg] rotate-x-[10deg] hover:rotate-0 transition-all duration-700 ease-out transform-style-3d group">
                {/* Screen Content */}
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative">
                    <div className="bg-emerald-600 h-32 p-6 pt-12 text-white">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="h-6 w-32 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 w-48 bg-white/20 rounded"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-20 bg-white shadow-sm rounded-xl w-full p-3 flex gap-3 items-center">
                         <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                         <div className="flex-1 space-y-2">
                           <div className="h-3 w-24 bg-slate-200 rounded"></div>
                           <div className="h-2 w-16 bg-slate-100 rounded"></div>
                         </div>
                      </div>
                      <div className="h-20 bg-white shadow-sm rounded-xl w-full p-3 flex gap-3 items-center opacity-70">
                         <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                         <div className="flex-1 space-y-2">
                           <div className="h-3 w-24 bg-slate-200 rounded"></div>
                           <div className="h-2 w-16 bg-slate-100 rounded"></div>
                         </div>
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-emerald-500" size={24} />
                            <div>
                                <div className="text-xs text-slate-400 font-bold uppercase">Tutor Verified</div>
                                <div className="font-bold text-slate-900">Kwame Mensah</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Strip */}
      <div id="features" className="bg-slate-900/50 border-y border-slate-800/50 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Verified Identity", desc: "Safety first. Every tutor undergoes strict Ghana Card & background checks." },
              { icon: BrainCircuit, title: "AI Lesson Plans", desc: "Smart curriculums generated instantly for BECE & WASSCE prep." },
              { icon: Video, title: "Hybrid Learning", desc: "Choose between in-person home tuition or secure online video classes." }
            ].map((f, i) => (
              <div key={i} className="flex gap-4 items-start group hover:bg-slate-800/50 p-4 rounded-2xl transition-colors">
                <div className="bg-slate-800 p-4 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/20">
                  <f.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2 font-serif">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutor Showcase */}
      <section id="tutors" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Elite Educators</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We accept less than 5% of tutor applicants. Only the best for your child.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Emmanuel O.", subject: "Mathematics", rate: "60", initial: "E", color: "bg-blue-500" },
              { name: "Sarah K.", subject: "English Lit", rate: "50", initial: "S", color: "bg-rose-500" },
              { name: "David A.", subject: "Physics", rate: "70", initial: "D", color: "bg-purple-500" },
              { name: "Ama S.", subject: "French", rate: "55", initial: "A", color: "bg-amber-500" },
            ].map((t, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group cursor-default">
                <div className={`h-48 ${t.color} rounded-2xl mb-5 overflow-hidden relative flex items-center justify-center`}>
                  <span className="text-6xl font-serif font-bold text-white/20">{t.initial}</span>
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/20">
                    <Star size={12} className="fill-amber-400 text-amber-400" /> 4.9
                  </div>
                </div>
                <h3 className="font-bold text-white text-xl">{t.name}</h3>
                <p className="text-emerald-400 text-sm font-medium mb-3">{t.subject}</p>
                <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Starting at</span>
                  <span className="text-white font-bold text-lg">GH₵{t.rate}<span className="text-sm font-normal text-slate-500">/hr</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Download Section */}
      <section id="download" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-emerald-500/20 shadow-2xl">
          {/* Background texture */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          
          <div className="relative z-10">
            <div className="inline-block mb-6"><BrandLogo size={120} variant="light" /></div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to start learning?</h2>
            <p className="text-slate-300 mb-12 max-w-lg mx-auto text-lg font-light">Download the GH Home Tutors app today for iOS and Android. Your first lesson is just a tap away.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-transform hover:scale-105 shadow-xl">
                <svg viewBox="0 0 384 512" fill="currentColor" width="24"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                App Store
              </button>
              <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-transform hover:scale-105">
                <svg viewBox="0 0 512 512" fill="currentColor" width="24"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2-60.1-60.1L47 499z"/></svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#01040f] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>&copy; 2025 GH Home Tutors.</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Accra, Ghana.</span>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- ROOT APP ---
export default function App() {
  return (
    <>
      <AppStyles />
      <LandingPage />
    </>
  );
}
