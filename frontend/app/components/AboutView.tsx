import { useState, useEffect } from 'react';
import { Star, Quote, Eye, Flame, Sparkles, Phone } from 'lucide-react';
import { CORE_VALUES, TEAM_MEMBERS } from '../data';
import { PageType } from '../types';

interface AboutViewProps {
  onNavigate: (page: PageType) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  // Mouse position state for interactive cursor neon glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('about-us-view');
      if (container) {
        const rect = container.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pb-24 space-y-24 text-stone-800 relative overflow-hidden" id="about-us-view">
      
      {/* Technical Background Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      {/* Blurred Floating Accent energy blobs */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] rounded-full bg-blue-500/3 filter blur-[100px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-[60%] right-[-15%] w-[400px] h-[400px] rounded-full bg-amber-500/3 filter blur-[100px] pointer-events-none z-0 animate-pulse-glow duration-5000" />

      {/* Interactive Mouse-Follow Glow Halo (Desktop only) */}
      <div 
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[85px] opacity-35 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${mousePos.x - 175}px`,
          top: `${mousePos.y - 175}px`,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
        }}
      />

      {/* 1. Page Header Block */}
      <section className="relative overflow-hidden h-48 sm:h-64 cursor-default rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto mt-6 shadow-sm border border-stone-850 bg-black flex items-center justify-center z-10">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-banner.png" 
            alt="YOUniverse About Banner" 
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/85" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        </div>

        {/* Technical Corner Markers */}
        <div className="absolute top-4 left-6 hidden sm:block font-mono text-[8px] text-stone-500 uppercase tracking-widest pointer-events-none select-none z-10">
          [ 10.7626° N, 106.6602° E // HCMC_NODE ]
        </div>
        <div className="absolute bottom-4 right-6 hidden sm:block font-mono text-[8px] text-stone-500 uppercase tracking-widest pointer-events-none select-none z-10">
          [ SYS_VER // ABOUT_DOSS ]
        </div>

        <div className="mx-auto max-w-xl text-center space-y-3 relative z-10 px-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            ABOUT YOUNIVERSE
          </h1>
          <p className="font-sans text-stone-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            A project weaving unique identity and aesthetics from UEH.ISB. Championing the right to be yourself for everyone.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info box (Big Headline) */}
          <div className="lg:col-span-5 space-y-4 text-left lg:sticky lg:top-28">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black uppercase tracking-tight leading-tight">
              From cookie-cutter molds to a free universe.
            </h2>
            <div className="h-1 w-20 bg-amber-500 mt-4 rounded animate-pulse-glow" />
            
            {/* Ambient ornament graphics background */}
            <div className="hidden lg:block pt-10">
              <div className="relative p-6 border border-stone-200/60 rounded-2xl bg-white/85 backdrop-blur-md flex items-center space-x-4 text-stone-600 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-200">
                <div className="absolute top-2 right-4 font-mono text-[8px] text-stone-400 tracking-wider font-bold">
                  [ INSP_NODE // 01 ]
                </div>
                
                {/* Rotating orbit path */}
                <div className="absolute inset-0 border border-dashed border-stone-150/80 rounded-2xl pointer-events-none animate-pulse-glow" />
                
                <Quote className="h-7 w-7 text-amber-500 shrink-0 animate-float" />
                <p className="text-[11px] font-mono leading-relaxed text-stone-600 text-left">
                  &ldquo;We long to break rigid stereotypes, allowing Gen Z to express their truest, most authentic selves.&rdquo;
                </p>
                {/* Decorative stars */}
                <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-amber-400 animate-twinkle" />
              </div>
            </div>
          </div>

          {/* Right info text paragraph */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="relative bg-white/85 border border-stone-200/60 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.04)] hover:border-stone-350 transition-all duration-500 backdrop-blur-md overflow-hidden group">
              
              {/* Subtle Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />

              <div className="absolute top-4 right-4 text-stroke-current text-stone-200/40 font-display text-8xl font-black select-none pointer-events-none transition-all duration-700 group-hover:text-amber-500/25 group-hover:scale-105 z-0">
                UEH
              </div>
              
              <div className="space-y-6 text-stone-600 text-sm leading-relaxed font-sans relative z-10">
                <p className="first-letter:text-4xl first-letter:font-extrabold first-letter:text-black first-letter:mr-2 first-letter:float-left">
                  Originating from a passionate team at <strong className="text-black font-semibold">UEH.ISB</strong>, YOUniverse was born out of a question that kept us restless: Gen Z's inner world is vibrant and multi-faceted, so why do we have to constrain ourselves to generic, mass-produced accessories?
                </p>
                
                <p>
                  YOUniverse was created to completely break those boundaries. We present you with an infinite space for creativity: a miniature &quot;universe&quot; where each sparkling, starry charm speaks for you in the most authentic way possible.
                </p>
                
                <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200/80 font-mono text-xs text-stone-850 flex items-center space-x-2">
                  <span className="text-amber-500 animate-pulse">⚡</span>
                  <span>Without saying a single word, the world around you will immediately know who you are, what passions you carry, and how unique your identity truly is.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3 & 4. Our Mission & Our Vision (Bento layout layout with flowing gradient borders) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-1.5 cursor-default flex flex-col justify-between hover:shadow-[0_20px_45px_-5px_rgba(59,130,246,0.12)]">
            {/* Flowing Gradient Border (on hover) */}
            <div className="absolute -inset-[1.5px] rounded-[25px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-flow-gradient" />
            
            {/* Inner Card Background Mask */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/10 via-white to-white border border-stone-200/80 z-10 pointer-events-none group-hover:border-transparent transition-all duration-500" />

            {/* Content Wrapper */}
            <div className="relative z-20 p-8 space-y-4">
              <div className="absolute top-3 right-4 font-mono text-[8px] text-stone-400 tracking-widest font-bold group-hover:text-blue-500 transition-colors duration-300">
                [ SYS_VAL // MISSION ]
              </div>
              <div className="absolute top-0 right-0 h-20 w-20 bg-blue-500/5 rounded-bl-full pointer-events-none z-0" />
              
              <div className="flex items-center space-x-3 relative z-10">
                <span className="p-2 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center">
                  <Flame className="h-5 w-5 animate-pulse" />
                </span>
                <h3 className="font-display text-xl font-extrabold text-black uppercase tracking-tight">
                  Our Mission
                </h3>
              </div>
              
              <p className="font-sans text-stone-700 text-sm leading-relaxed relative z-10">
                The mission of YOUniverse is not just to sell standard accessories. We sell <strong className="text-black font-bold">&ldquo;the right to be yourself&rdquo;</strong>. By creating highly symbolic charm lines, we help you carry your simple hobbies and reliable spiritual anchors wherever you go.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-1.5 cursor-default flex flex-col justify-between hover:shadow-[0_20px_45px_-5px_rgba(234,179,8,0.12)]">
            {/* Flowing Gradient Border (on hover) */}
            <div className="absolute -inset-[1.5px] rounded-[25px] bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-flow-gradient" />
            
            {/* Inner Card Background Mask */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-50/10 via-white to-white border border-stone-200/80 z-10 pointer-events-none group-hover:border-transparent transition-all duration-500" />

            {/* Content Wrapper */}
            <div className="relative z-20 p-8 space-y-4">
              <div className="absolute top-3 right-4 font-mono text-[8px] text-stone-400 tracking-widest font-bold group-hover:text-amber-500 transition-colors duration-300">
                [ SYS_VAL // VISION ]
              </div>
              <div className="absolute top-0 right-0 h-20 w-20 bg-amber-500/5 rounded-bl-full pointer-events-none z-0" />

              <div className="flex items-center space-x-3 relative z-10">
                <span className="p-2 bg-amber-50 text-amber-600 border border-amber-100 rounded-xl flex items-center justify-center">
                  <Eye className="h-5 w-5 animate-float" />
                </span>
                <h3 className="font-display text-xl font-extrabold text-black uppercase tracking-tight">
                  Our Vision
                </h3>
              </div>

              <p className="font-sans text-stone-700 text-sm leading-relaxed relative z-10">
                We aim to become the leading personalized accessory brand for Gen Z, founded and owned by <strong className="text-black font-bold">UEH.ISB-ers</strong>. We aspire to be an inspiring lifestyle gift brand, empowering every customer to confidently depict their independent individual signature.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Our Core Values (3 columns with premium letter hover mechanics) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-black uppercase tracking-tight">
            Our Core Values (Y.O.U)
          </h2>
          <p className="font-sans text-stone-500 text-xs max-w-sm mx-auto">
            Core values that construct the soul of our cosmic jewelry styling.
          </p>
        </div>

        {/* 3 Column Grid of Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((val) => {
            // Give specific letters distinct layout designs (Y: Blue, O: Yellow, U: Red)
            const colorSetup = val.letter === 'Y' 
              ? { 
                  text: 'text-blue-500', 
                  glow: 'bg-blue-500/5', 
                  border: 'border-stone-200/80 hover:border-blue-200/80', 
                  hoverShadow: 'hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]', 
                  strokeClass: 'text-stroke-current text-blue-200/30 group-hover:text-blue-500/50',
                  gradient: 'from-blue-400 via-indigo-400 to-cyan-400'
                }
              : val.letter === 'O'
              ? { 
                  text: 'text-amber-500', 
                  glow: 'bg-amber-500/5', 
                  border: 'border-stone-200/80 hover:border-amber-200/80', 
                  hoverShadow: 'hover:shadow-[0_20px_40px_rgba(234,179,8,0.1)]', 
                  strokeClass: 'text-stroke-current text-amber-200/30 group-hover:text-amber-500/50',
                  gradient: 'from-amber-400 via-yellow-400 to-orange-500'
                }
              : { 
                  text: 'text-rose-500', 
                  glow: 'bg-rose-500/5', 
                  border: 'border-stone-200/80 hover:border-rose-200/80', 
                  hoverShadow: 'hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)]', 
                  strokeClass: 'text-stroke-current text-rose-200/30 group-hover:text-rose-500/50',
                  gradient: 'from-rose-400 via-red-500 to-pink-505'
                };

            return (
              <div
                key={val.letter}
                className={`group relative rounded-[28px] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between cursor-default ${colorSetup.hoverShadow}`}
              >
                {/* Flowing Gradient Border (on hover) */}
                <div className={`absolute -inset-[1.5px] rounded-[29px] bg-gradient-to-r ${colorSetup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-flow-gradient`} />
                
                {/* Inner Card Background Mask */}
                <div className="absolute inset-0 rounded-[28px] bg-white border border-stone-200/60 z-10 pointer-events-none group-hover:border-transparent transition-all duration-500" />

                {/* Content Wrapper */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full w-full">
                  {/* Decorative Giant background letter */}
                  <span className={`absolute -top-6 -right-2 font-display text-[150px] font-black select-none pointer-events-none transition-all duration-550 group-hover:scale-108 group-hover:rotate-6 ${colorSetup.strokeClass}`}>
                    {val.letter}
                  </span>

                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-2">
                      <span className={`h-8 w-8 rounded-full ${colorSetup.text} ${colorSetup.glow} flex items-center justify-center font-display text-lg font-black`}>
                        {val.letter}
                      </span>
                      <h3 className="font-display text-lg font-extrabold text-black tracking-tight uppercase">
                        {val.title}
                      </h3>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display text-xs font-bold text-stone-900 uppercase tracking-widest">
                        {val.subtitle}
                      </h4>
                      <p className={`font-mono text-[11px] font-bold ${colorSetup.text}`}>
                        {val.vietnameseTitle}
                      </p>
                    </div>

                    <p className="font-sans text-stone-500 text-xs leading-relaxed pt-2 border-t border-stone-100">
                      {val.description}
                    </p>
                  </div>

                  {/* Star icon decoration */}
                  <div className="flex justify-end pt-4">
                    <Star className={`h-4 w-4 ${colorSetup.text} animate-twinkle opacity-30 group-hover:opacity-100`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 5.5 Team Members Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono font-black uppercase text-amber-500 tracking-widest block">
            03 / Team & Creators
          </span>
          <h2 className="font-display text-3xl font-extrabold text-black uppercase tracking-tight">
            Meet Our Team
          </h2>
          <p className="font-sans text-stone-500 text-xs max-w-sm mx-auto">
            The creative UEH.ISB team behind the YOUniverse brand concept.
          </p>
        </div>

        {/* 4 Column Grid of Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member) => {
            // Helper to get initials from member name (e.g. "Nguyen Linh Chi" -> "LC", "Tran Ngoc Thu" -> "NT")
            const cleanName = member.name.replace(/^(Mr\.|Ms\.)\s+/i, '');
            const nameParts = cleanName.split(' ');
            const initials = nameParts.length >= 2 
              ? `${nameParts[nameParts.length - 2][0]}${nameParts[nameParts.length - 1][0]}` 
              : nameParts[0].substring(0, 2);

            return (
              <div
                key={member.name}
                className="group relative rounded-[28px] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between cursor-default hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] border border-stone-200/60 bg-white/80 backdrop-blur-md p-6 overflow-hidden"
              >
                {/* Tech coordinates grid backdrop (reveals slightly on hover) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                
                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Stellar Avatar frame representing the "introvert" theme (Star orbit placeholder) */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-stone-900 to-stone-950 flex items-center justify-center border border-stone-850 shadow-inner group-hover:border-amber-500/40 transition-colors duration-500 mb-4 overflow-hidden">
                    
                    {/* Pulsing star dust effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] animate-pulse-glow" />
                    
                    {/* Rotating coordinate lines */}
                    <div className="absolute inset-1.5 rounded-full border border-dashed border-stone-800/80 animate-spin-slow group-hover:border-stone-750" />
                    
                    {/* Initials display */}
                    <span className="font-display text-lg font-black tracking-wider text-stone-250 select-none uppercase">
                      {initials}
                    </span>

                    {/* Subtle "Incognito/Private Core" visual marker */}
                    <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center text-[7px] font-mono text-stone-500" title="Introverted (Identity Hidden)">
                      👤
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="space-y-1 text-center">
                    <h3 className="font-display text-sm font-black text-stone-900 uppercase tracking-wide group-hover:text-amber-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="font-sans text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-none">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Technical contact row */}
                <a
                  href={`tel:${member.phone}`}
                  className="relative z-10 flex items-center justify-center space-x-1.5 pt-3 mt-4 border-t border-stone-100/60 font-mono text-[10px] text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Phone className="h-3 w-3 text-stone-400 group-hover:text-amber-500 transition-colors" />
                  <span>{member.phone}</span>
                </a>
              </div>
            );
          })}
        </div>

      </section>

      {/* 6. Active Call-to-Action (CTA Capsule Section) */}
      <section className="mx-auto max-w-4xl px-4 text-center relative z-10">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col items-center space-y-6 shadow-xl border border-stone-850 group">
          
          <div className="absolute inset-0 bg-stone-900/30 opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />
          
          <div className="absolute top-4 left-4 text-amber-400 text-xl animate-twinkle">✦</div>
          <div className="absolute bottom-6 right-6 text-blue-400 text-lg animate-twinkle duration-2000">✦</div>
          <div className="absolute top-3 right-4 font-mono text-[8px] text-stone-500 tracking-widest pointer-events-none select-none">[ REDIRECT // CORE_PROD ]</div>

          <div className="space-y-2 relative z-10">
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold block">
              Make Your Own Set
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white uppercase leading-tight max-w-xl mx-auto">
              So are you ready to create your own universe?
            </h3>
            <p className="font-sans text-stone-400 text-xs max-w-sm mx-auto">
              Click below to explore our products catalog and check out our custom-crafted charms!
            </p>
          </div>

          {/* Button "nhấn vào thì ra trang chi tiết sản phẩm" */}
          <button
            id="cta-about-btn"
            onClick={() => onNavigate('products')}
            className="relative z-10 w-full sm:w-auto rounded-full bg-white hover:bg-stone-100 text-black font-display text-xs font-black tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 text-center flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Explore Products Now</span>
            <Sparkles className="h-4 w-4 text-amber-500 animate-twinkle" />
          </button>

        </div>
      </section>

    </div>
  );
}
