import React, { useEffect, useState } from 'react';
import { 
  Star, ShieldCheck, BrainCircuit, Video, CheckCircle, GraduationCap, 
  Users, Trophy, ArrowRight, DollarSign, Wallet, ArrowUpRight
} from 'lucide-react';

// --- GLOBAL STYLES ---
const AppStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
    
    :root { 
      --font-serif: 'Playfair Display', serif; 
      --font-sans: 'Plus Jakarta Sans', sans-serif; 
      --gold: #D4AF37;
    }
    
    body { 
      font-family: var(--font-sans); 
      background-color: #020617; 
      overflow-x: hidden; 
      margin: 0;
      color: #e2e8f0;
    }
    
    .font-serif { font-family: var(--font-serif); }
    
    /* Animations */
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    
    @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
    .animate-ken-burns { animation: kenBurns 25s ease-out infinite alternate; }
    
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
    .animate-float { animation: float 6s ease-in-out infinite; }
    
    @keyframes shine { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
    .animate-shine { background-size: 200% auto; animation: shine 4s linear infinite; }

    /* Utilities */
    .glass-nav { background: rgba(2, 6, 23, 0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
    
    .glass-card { 
      background: rgba(255, 255, 255, 0.03); 
      backdrop-filter: blur(10px); 
      border: 1px solid rgba(255, 255, 255, 0.05); 
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .glass-card:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px);
    }

    .text-gold { color: var(--gold); }
    .bg-gold { background-color: var(--gold); }
    
    .gradient-text {
      background: linear-gradient(to right, #ffffff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .gold-gradient-text {
      background: linear-gradient(to right, #fbbf24, #d97706, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
      animation: shine 5s linear infinite;
    }

    /* CSS Generated Patterns (No External Images) */
    .bg-dots {
      background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    .bg-noise {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    }
  `}</style>
);

// --- HELPER COMPONENTS ---
const BrandLogo = ({ size = 32, variant = "dark" }) => {
  const isLight = variant === "light";
  // Determine pixel size based on props for text scaling
  const dim = typeof size === 'number' ? size : (size === 'xl' ? 64 : 32);
  // Logo image size is 2x the base dimension
  const logoDim = dim * 2;

  return (
    <div className="flex items-center gap-3 select-none max-w-full">
      <img 
        src="https://i.imgur.com/cavxhZs.png" 
        alt="GH Home Tutors Logo" 
        style={{ width: logoDim, height: logoDim, objectFit: 'contain', flexShrink: 0 }} 
      />
      <div className="flex flex-col leading-none">
        <span className={`font-serif font-bold ${isLight ? 'text-white' : 'text-slate-900'} whitespace-nowrap tracking-tight`} style={{ fontSize: dim * 0.65 }}>GH Home</span>
        <span className={`font-sans font-bold uppercase tracking-[0.25em] ${isLight ? 'text-emerald-500' : 'text-emerald-600'} whitespace-nowrap`} style={{ fontSize: dim * 0.22 }}>Tutors</span>
      </div>
    </div>
  );
};

// Optimized StatItem for Mobile Grid
const StatItem = ({ label, value, icon: Icon, className }) => (
  <div className={`flex items-center gap-3 md:gap-4 px-4 py-4 md:px-6 border-white/10 ${className}`}>
    <div className="p-2 md:p-3 rounded-full bg-white/5 text-emerald-400 shrink-0">
      <Icon size={18} className="md:w-5 md:h-5" />
    </div>
    <div className="min-w-0">
      <div className="text-lg md:text-2xl font-serif font-bold text-white truncate">{value}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-wider text-slate-400 font-medium truncate">{label}</div>
    </div>
  </div>
);

// --- LANDING PAGE ---
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'py-4 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="scale-75 md:scale-100 origin-left transition-transform shrink-0">
            <BrandLogo size={40} variant="light" />
          </div>
          
          <div className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            {['Expert Tutors', 'How it Works', 'Success Stories'].map((item) => (
              <button key={item} onClick={() => document.getElementById('tutors').scrollIntoView({behavior:'smooth'})} className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all">
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => document.getElementById('download').scrollIntoView({behavior:'smooth'})} className="bg-white text-slate-950 px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-bold hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] tracking-wide whitespace-nowrap shrink-0">
            Download App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-center bg-cover animate-ken-burns" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80)' }}></div>
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-[#020617]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_120%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center pt-28 pb-24 md:py-0">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">The Gold Standard of Tutoring</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] md:leading-[1] tracking-tight text-white">
              Academic <br/>
              <span className="gold-gradient-text italic pr-2">Mastery.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-lg font-light border-l-0 lg:border-l-2 border-emerald-500/50 pl-0 lg:pl-6 mx-auto lg:mx-0">
              Connect with Ghana's most elite educators. We provide personalized home and online tuition specifically designed for the WASSCE, BECE, and Cambridge curriculums.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center lg:items-start justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900 overflow-hidden">
                      <img src={src} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-left">
                  <div className="flex text-amber-400 mb-0.5"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                  <span className="text-slate-400 font-medium">Trusted by 5,000+ parents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Card - 3D Effect */}
          <div className="relative hidden lg:block animate-float perspective-2000 group">
             <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
             <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl transform rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-0 transition-all duration-700 ease-out">
                {/* Simulated App Screen */}
                <div className="bg-slate-950 rounded-[1.5rem] overflow-hidden border border-slate-800 relative h-[600px] w-[320px] mx-auto flex flex-col">
                   <div className="h-40 bg-[url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md mb-2 w-fit">Live Session</div>
                        <div className="text-white font-bold">Mathematics (Core)</div>
                      </div>
                   </div>
                   <div className="p-4 space-y-4">
                      <div className="flex items-center gap-3">
                         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" className="w-10 h-10 rounded-full border border-slate-700" alt="Tutor" />
                         <div className="flex-1">
                            <div className="h-2 w-24 bg-slate-800 rounded mb-1.5"></div>
                            <div className="h-2 w-16 bg-slate-800 rounded"></div>
                         </div>
                         <div className="text-emerald-500"><Video size={20} /></div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                         <div className="flex justify-between text-xs text-slate-400 mb-2"><span>Progress</span><span>85%</span></div>
                         <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div className="bg-emerald-500 w-[85%] h-full"></div></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                            <div className="text-amber-400 font-bold text-lg">4.9</div>
                            <div className="text-[10px] text-slate-500 uppercase">Rating</div>
                         </div>
                         <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                            <div className="text-blue-400 font-bold text-lg">120+</div>
                            <div className="text-[10px] text-slate-500 uppercase">Hours</div>
                         </div>
                      </div>
                   </div>
                   {/* Floating Elements */}
                   <div className="absolute top-10 right-[-20px] bg-white text-slate-900 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
                      <div className="bg-green-100 p-1.5 rounded-full"><CheckCircle size={16} className="text-green-600"/></div>
                      <div>
                         <div className="text-[10px] text-slate-500 font-bold uppercase">Result</div>
                         <div className="text-sm font-bold">A1 in Core Math</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Stats Strip - Mobile Optimized Grid */}
        <div className="relative md:absolute bottom-0 w-full border-t border-white/5 bg-slate-950/80 md:bg-slate-950/50 backdrop-blur-md z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:flex md:divide-x divide-white/5">
            {/* On Mobile: Item 1 has right border and bottom border. Item 2 has bottom border. Item 3 has right border. Item 4 has no borders. */}
            <StatItem icon={Users} value="100+" label="Active Students" className="border-r border-b md:border-b-0" />
            <StatItem icon={GraduationCap} value="50+" label="Verified Tutors" className="border-b md:border-b-0 md:border-r" />
            <StatItem icon={Trophy} value="98%" label="Pass Rate" className="border-r md:border-none" />
            <StatItem icon={ShieldCheck} value="100%" label="Safety Verified" className="" />
          </div>
        </div>
      </header>

      {/* Features - Image Cards */}
      <div id="features" className="py-20 md:py-32 relative bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Why We Are Different</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">We don't just provide tutors; we provide a structured pathway to academic success using technology and human expertise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Strictly Verified Identity", 
                desc: "Every tutor undergoes Ghana Card & Background checks. Zero compromise on safety.", 
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              },
              { 
                title: "AI-Powered Curriculum", 
                desc: "Our system generates personalized lesson plans tailored to your child's weak points.", 
                img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              },
              { 
                title: "Hybrid Learning Model", 
                desc: "Seamlessly switch between in-person home tuition and secure HD video classes.", 
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              }
            ].map((f, i) => (
              <div key={i} className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${f.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-1 bg-emerald-500 mb-4 md:mb-6 rounded-full"></div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-300 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 text-sm md:text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutor Showcase - Glass Cards */}
      <section id="tutors" className="py-20 md:py-32 px-4 md:px-6 relative bg-gradient-to-b from-[#020617] to-slate-950">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="text-center md:text-left w-full">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Elite Educators</h2>
              <p className="text-slate-400 max-w-xl text-base md:text-lg mx-auto md:mx-0">We accept less than 5% of tutor applicants. Access the finest minds in Ghana.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Emmanuel O.", subject: "Mathematics", rate: "60", img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", role: "WASSCE Examiner" },
              { name: "Sarah K.", subject: "English Lit", rate: "50", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", role: "Cambridge Certified" },
              { name: "David A.", subject: "Physics", rate: "70", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", role: "Engineering Grad" },
              { name: "Ama S.", subject: "French", rate: "55", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", role: "Native Speaker" },
            ].map((t, i) => (
              <div key={i} className="glass-card p-4 rounded-[2rem] hover:border-emerald-500/30 transition-all group">
                <div className="h-64 md:h-72 rounded-[1.5rem] mb-5 overflow-hidden relative">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/20">
                    <Star size={10} className="fill-amber-400 text-amber-400" /> 5.0
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">{t.role}</p>
                    <h3 className="font-bold text-white text-xl">{t.name}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2 pb-2">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase">Subject</p>
                    <p className="text-slate-300 text-sm">{t.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-xs font-bold uppercase">Hourly</p>
                    <p className="text-white font-bold text-lg">GH₵{t.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section id="download" className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl border border-emerald-500/20 group">
          {/* Animated Grain/Texture */}
          <div className="absolute inset-0 opacity-10 bg-noise"></div>
          
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-block mb-8 md:mb-10 transform transition-transform group-hover:scale-110 duration-500">
                <BrandLogo size={80} variant="light" />
            </div>
            
            <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
              Education Reimagined.
            </h2>
            <p className="text-slate-300 mb-8 md:mb-12 max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed">
              Join the platform that is transforming the academic landscape of Ghana. Download the app today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <button className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold hover:bg-emerald-50 transition-all hover:scale-105 shadow-2xl hover:shadow-emerald-500/20 w-full sm:w-auto">
                <svg viewBox="0 0 384 512" fill="currentColor" width="24"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Download on the</div>
                  <div className="text-base md:text-lg font-bold leading-none mt-0.5">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md border border-white/10 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-105 w-full sm:w-auto">
                <svg viewBox="0 0 512 512" fill="currentColor" width="24"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2-60.1-60.1L47 499z"/></svg>
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Get it on</div>
                  <div className="text-base md:text-lg font-bold leading-none mt-0.5">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#01040f] py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-serif text-slate-300">&copy; 2025 GH Home Tutors</span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
            <span className="uppercase text-xs tracking-widest">Accra, Ghana</span>
          </div>
          <div className="flex gap-6 md:gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
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
