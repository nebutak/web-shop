import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Heart, 
  Compass, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Paintbrush, 
  Bookmark, 
  Gem,
} from 'lucide-react';
import { PageType, CustomJewelry } from '../types';
import { CHARM_PRODUCTS } from '../data';
import MarqueeSlogan from './MarqueeSlogan';
import { CORE_VALUES } from '../data';

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
  onAddCustomToCart: (jewelry: CustomJewelry) => void;
}

export default function HomeView({ onNavigate, onAddCustomToCart }: HomeViewProps) {
  // Mouse position state for interactive cursor neon glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('home-view');
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

  // Product Line Showcase states
  const [activeCharmIndex, setActiveCharmIndex] = useState<number | null>(null);

  // Customizer live preview state representing the "How to Build Your YOUniverse" 3-step engine
  const [jewelryType, setJewelryType] = useState<'bracelet' | 'necklace' | 'cord'>('bracelet');
  const [vibeColor, setVibeColor] = useState<string>('blue'); // 'blue' | 'yellow' | 'red' | 'indigo'
  const [selectedCharms, setSelectedCharms] = useState<string[]>(['astra', 'sirius']);
  const [customName, setCustomName] = useState<string>('UNI');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Dynamic glow border/shadow based on selected atmosphere
  const glowShadows = {
    blue: 'shadow-[0_20px_50px_rgba(59,130,246,0.06)] border-blue-200/50',
    yellow: 'shadow-[0_20px_50px_rgba(245,158,11,0.06)] border-amber-200/50',
    red: 'shadow-[0_20px_50px_rgba(239,68,68,0.06)] border-rose-200/50',
    indigo: 'shadow-[0_20px_50px_rgba(99,102,241,0.06)] border-indigo-200/50',
  }[vibeColor] || 'shadow-[0_20px_50px_rgba(0,0,0,0.04)] border-stone-200';

  // Vibe options mapping
  const vibeOptions = [
    { id: 'blue', label: 'Azure Nebula', colorClass: 'bg-blue-400 ring-blue-500/30 text-blue-600', glow: 'shadow-blue-500/10' },
    { id: 'yellow', label: 'Golden Solar', colorClass: 'bg-amber-400 ring-amber-500/30 text-amber-600', glow: 'shadow-yellow-500/10' },
    { id: 'red', label: 'Aurora Flame', colorClass: 'bg-rose-400 ring-rose-500/30 text-rose-600', glow: 'shadow-red-500/10' },
    { id: 'indigo', label: 'Cosmic Royal', colorClass: 'bg-indigo-400 ring-indigo-500/30 text-indigo-600', glow: 'shadow-indigo-500/10' },
  ];

  // Quick charm catalog details for the customizer
  const charmOptions = [
    { id: 'astra', label: 'Astra Star', icon: Sparkles, color: 'text-blue-500' },
    { id: 'sirius', label: 'Sirius Heart', icon: Heart, color: 'text-yellow-500' },
    { id: 'polaris', label: 'Polaris Compass', icon: Compass, color: 'text-red-500' },
  ];

  const handleAddCharm = (charmId: string) => {
    if (selectedCharms.length >= 6) return; // Limit to 6 charms max
    setSelectedCharms([...selectedCharms, charmId]);
  };

  const handleRemoveCharm = (indexToRemove: number) => {
    setSelectedCharms(selectedCharms.filter((_, idx) => idx !== indexToRemove));
  };

  const resetCustomizer = () => {
    setJewelryType('bracelet');
    setVibeColor('blue');
    setSelectedCharms(['astra', 'sirius']);
    setCustomName('UNI');
    setSuccessMessage(null);
  };

  const handleCreateAndAdd = () => {
    const creation: CustomJewelry = {
      baseType: jewelryType,
      selectedCharms: [...selectedCharms],
      customName: customName.trim() || 'YOU',
      vibeColor: vibeColor
    };
    onAddCustomToCart(creation);
    
    setSuccessMessage(`Successfully added your custom design "${customName}" to your cart!`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4500);
  };

  return (
    <div className="space-y-16 pb-24 relative overflow-hidden" id="home-view">
      
      {/* Technical Background Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      {/* Blurred Floating Accent energy blobs */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-blue-500/5 filter blur-[100px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-[50%] right-[-15%] w-[450px] h-[450px] rounded-full bg-amber-500/4 filter blur-[100px] pointer-events-none z-0 animate-pulse-glow duration-5000" />
      <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-rose-500/4 filter blur-[100px] pointer-events-none z-0 animate-pulse-glow duration-4000" />

      {/* Interactive Mouse-Follow Glow Halo */}
      <div 
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[80px] opacity-40 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${mousePos.x - 175}px`,
          top: `${mousePos.y - 175}px`,
          background: vibeColor === 'blue' 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)'
            : vibeColor === 'yellow'
            ? 'radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, transparent 70%)'
            : vibeColor === 'red'
            ? 'radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* 1. Hero Block / Banner Section */}
      <section className="relative overflow-hidden bg-black py-20 px-4 md:px-8 tracking-wide rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto mt-6 shadow-sm border border-stone-850 z-10">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home-banner.png" 
            alt="YOUniverse Home Banner" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
        </div>
        
        {/* Decorative blinking stars */}
        <div className="absolute top-12 left-10 text-amber-300 animate-twinkle z-10">✦</div>
        <div className="absolute top-24 right-1/4 text-red-300 animate-twinkle duration-1000 z-10">✦</div>
        <div className="absolute bottom-16 left-1/3 text-blue-300 animate-twinkle duration-2000 z-10">✦</div>
        <div className="absolute bottom-1/2 right-12 text-stone-300 animate-twinkle z-10">✦</div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left intro text info */}
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300 animate-spin-slow" />
                <span>Launch Edition 2026</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none uppercase">
                CREATE YOUR <br className="hidden sm:inline" />
                <span className="text-stroke-current text-stone-200/50 tracking-widest">OWN TINY</span> <br />
                UNIVERSE.
              </h1>
              
              <p className="font-sans text-stone-300 text-base md:text-lg leading-relaxed max-w-lg">
                Personalized charms that carry your name, your passion, and the story only you can tell.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-go-products"
                  onClick={() => onNavigate('products')}
                  className="rounded-full bg-white hover:bg-stone-100 border-2 border-white text-black font-display text-sm font-bold tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0] text-center cursor-pointer"
                >
                  Explore Our UNIverse
                </button>
                <a
                  href="#customizer-workshop"
                  className="rounded-full bg-transparent hover:bg-white/10 border-2 border-stone-300 text-stone-200 font-display text-sm font-bold tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[0] text-center"
                >
                  Build Yours 3 Steps ↓
                </a>
              </div>
            </div>

            {/* Right aesthetic visual interactive card (The missing banner is replaced with stellar craft) */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border-blue-200/80 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-amber-200 to-transparent opacity-40 rounded-bl-full pointer-events-none" />
                
                {/* Visual Header of Card */}
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[9px] text-stone-400 uppercase tracking-widest">
                    YOUniverse Accessory Co.
                  </div>
                  <span className="bg-amber-500/10 text-amber-700 text-[9px] font-mono uppercase font-bold py-0.5 px-2.5 rounded-full border border-amber-500/20">
                    Blink Blink
                  </span>
                </div>

                {/* Central Celestial Ornament Graphic */}
                <div className="my-auto flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {/* Ring Path Orbit */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-stone-200 animate-spin-slow" />
                    
                    {/* Inner glowing core space elements */}
                    <div className="absolute h-32 w-32 rounded-full bg-stone-50/50 border border-stone-100/85 flex items-center justify-center animate-pulse-glow" />
                    
                    {/* Center Charm visual design */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      <Sparkles className="h-10 w-10 text-amber-500 animate-twinkle" />
                      <span className="mt-2 font-display text-sm font-extrabold tracking-widest uppercase text-black">
                        ASTRA CORE
                      </span>
                      <span className="text-[8px] font-mono text-stone-400 capitalize">
                        Your Energy Spark
                      </span>
                    </div>

                    {/* Orbiting small charms */}
                    <div className="absolute top-2 left-6 h-8 w-8 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-blue-500 animate-float hover:scale-115 transition-transform duration-300">
                      <Heart className="h-3.5 w-3.5" />
                    </div>
                    <div className="absolute bottom-6 right-2 h-8 w-8 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-red-500 animate-float duration-1500 hover:scale-115 transition-transform duration-300">
                      <Compass className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>

                {/* Visual Footer of Card */}
                <div className="space-y-1 text-left">
                  <p className="font-display text-lg font-extrabold text-black uppercase tracking-tight">
                    CLASSIC ORBIT CORE
                  </p>
                  <p className="font-sans text-xs text-stone-500 line-clamp-2">
                    Custom modular jewelry allows you to combine Star sign initials with sweet heart elements.
                  </p>
                </div>
              </div>

              {/* Backing structural highlights */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-blue-500/10 rounded-full filter blur-2xl opacity-60 -z-10 animate-pulse-glow" />
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-amber-500/10 rounded-full filter blur-2xl opacity-70 -z-10 animate-pulse-glow duration-3000" />
            </div>

          </div>
        </div>
      </section>

      {/* Slogan marquee right below Hero Banner */}
      <MarqueeSlogan onSloganClick={() => onNavigate('about-us')} />

      {/* 2. Khám Phá Các Hành Tinh: Charm Lines Products Showcase */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10" id="charm-lines-section">
        
        <div className="text-center space-y-3">
          <span className="inline-block bg-amber-500/10 text-amber-600 border border-amber-500/20 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full">
            Product Line
          </span>
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-stone-900 uppercase">
            Explore the Planets
          </h3>
          <p className="font-sans text-stone-500 text-xs tracking-wider max-w-lg mx-auto">
            Embark on a celestial journey through our Astra, Sirius, and Polaris charm collections.
          </p>
        </div>

        {/* Carousel of 3 Images (Responsive swipeable carousel on mobile, 3-column grid on desktop) */}
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none scroll-smooth">
          
          {CHARM_PRODUCTS.map((charm, index) => {
            const isHovered = activeCharmIndex === index;
            
            // Color borders depending on brand color code
            const borderColors = {
              blue: 'hover:border-blue-300/80 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)]',
              yellow: 'hover:border-amber-300/80 hover:shadow-[0_20px_50px_rgba(234,179,8,0.12)]',
              red: 'hover:border-rose-300/80 hover:shadow-[0_20px_50px_rgba(244,63,94,0.12)]',
            }[charm.brandColor];

            const textColors = {
              blue: 'text-blue-600',
              yellow: 'text-amber-500',
              red: 'text-red-500',
            }[charm.brandColor];

            const bgGlows = {
              blue: 'from-blue-50/10 via-white/80 to-white/60',
              yellow: 'from-amber-50/10 via-white/80 to-white/60',
              red: 'from-rose-50/10 via-white/80 to-white/60',
            }[charm.brandColor];

            const gradientColors = {
              blue: 'from-blue-400 via-indigo-400 to-cyan-400',
              yellow: 'from-amber-400 via-yellow-400 to-orange-500',
              red: 'from-rose-400 via-red-500 to-pink-500',
            }[charm.brandColor] || 'from-blue-400 via-amber-400 to-rose-400';

            return (
              <div
                key={charm.id}
                id={`charm-card-${charm.id}`}
                onMouseEnter={() => setActiveCharmIndex(index)}
                onMouseLeave={() => setActiveCharmIndex(null)}
                onClick={() => onNavigate('products')}
                className={`group shrink-0 w-[88%] md:w-auto snap-center md:snap-align-none relative h-[420px] rounded-[32px] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer shadow-sm ${borderColors}`}
              >
                {/* Flowing Gradient Border (on hover) */}
                <div className={`absolute -inset-[1.5px] rounded-[33px] bg-gradient-to-r ${gradientColors} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-flow-gradient`} />

                {/* Inner Card Background Mask */}
                <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-b ${bgGlows} backdrop-blur-md border border-stone-200/60 z-10 pointer-events-none group-hover:border-transparent transition-all duration-500`} />

                {/* Card Content Wrapper */}
                <div className="relative z-20 flex flex-col justify-between h-full w-full p-6">
                  {/* Card Icon & Top indicator */}
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold uppercase">
                      [ SYS_CLL_0{index + 1} ]
                    </span>
                    
                    {/* Icon mapped beautifully */}
                    <div className={`p-2.5 rounded-full bg-white/90 border border-stone-100 shadow-sm ${textColors}`}>
                      {charm.id === 'astra' && <Sparkles className="h-5 w-5 animate-twinkle" />}
                      {charm.id === 'sirius' && <Heart className="h-5 w-5 animate-float" />}
                      {charm.id === 'polaris' && <Compass className="h-5 w-5 animate-spin-slow" />}
                    </div>
                  </div>

                  {/* Mid Section: Styled Illustration placeholder */}
                  <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-stone-200 animate-spin-slow opacity-60 pointer-events-none" />
                    <div className="text-stone-300 font-display text-[9px] font-bold uppercase tracking-widest mt-12 text-center select-none">
                      [ {charm.name} Image ]
                    </div>
                    {/* Decorative orbital stars blinking */}
                    <span className={`absolute top-4 right-4 ${textColors} text-lg animate-twinkle`}>✦</span>
                    <span className={`absolute bottom-4 left-4 ${textColors} text-[10px] animate-twinkle`}>✦</span>
                  </div>

                  {/* Content: sliding reveal on hover, cleanly handled via CSS transitions */}
                  <div className="space-y-1 text-left relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200/50 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-stone-400">
                        {charm.badge}
                      </span>
                    </div>
                    
                    <h4 className="font-display text-lg font-black text-black uppercase tracking-tight">
                      {charm.name}
                    </h4>
                    
                    {/* Hover effect text reveal */}
                    <div className="max-h-48 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-48 md:group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className={`font-mono text-xs italic font-semibold leading-relaxed ${textColors} mt-2 mb-1`}>
                        &ldquo;{charm.tagline}&rdquo;
                      </p>
                      <p className="font-sans text-stone-500 text-[11px] leading-relaxed">
                        {charm.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom line decorator */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-150/60 text-xs font-mono font-medium text-stone-400">
                    <span>Explore Details</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </section>

      {/* 3. How to Build Your YOUniverse (Hướng dẫn 3 bước - Customized Workshop) */}
      <section 
        id="customizer-workshop" 
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16"
      >
        
        {/* Header segment of workshop instructions */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-blue-500/10 text-blue-600 border border-blue-500/20 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full">
            Interactive Customizer
          </span>
          <h3 className="font-display text-3xl font-extrabold text-stone-900 uppercase tracking-tight">
            How to Build Your YOUniverse
          </h3>
          <p className="font-sans text-stone-500 text-xs tracking-wider max-w-xl mx-auto">
            Learn smart design with a 3-step personalization. Create your own distinct aesthetic and a one-of-a-kind cosmic vibe.
          </p>
        </div>

        {/* Orbit Timeline (5A: Visual 3 steps planets flow) */}
        <div className="relative py-4">
          {/* Dashed Orbit Line (Desktop only) */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] border-t border-dashed border-stone-200 -translate-y-1/2 hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 Card */}
            <div className="group flex flex-col items-center text-center space-y-4 bg-white/60 backdrop-blur-md border border-stone-200/60 p-6 rounded-[28px] hover:border-blue-300 hover:shadow-[0_15px_35px_-10px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-1">
              <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold uppercase">[ STEP_01 // ATMOSPHERE ]</span>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100/40 border border-blue-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                {/* Orbiting halo effect */}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-blue-400/30 animate-spin-slow group-hover:border-blue-400/80 transition-colors duration-500" />
                <Sparkles className="h-7 w-7 text-blue-500 animate-twinkle" />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-black text-white shadow-md">1</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-sm font-black uppercase tracking-wider text-stone-900">1. Set Your Vibe</h4>
                <p className="font-sans text-xs text-stone-600 leading-relaxed max-w-[245px] mx-auto">
                  Start with your mood, your energy, and the little details that make you feel like you.
                </p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="group flex flex-col items-center text-center space-y-4 bg-white/60 backdrop-blur-md border border-stone-200/60 p-6 rounded-[28px] hover:border-amber-300 hover:shadow-[0_15px_35px_-10px_rgba(234,179,8,0.15)] transition-all duration-500 hover:-translate-y-1">
              <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold uppercase">[ STEP_02 // CHARM_ARRAY ]</span>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-50 to-amber-100/40 border border-amber-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                {/* Orbiting halo effect */}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-amber-400/30 animate-spin-slow group-hover:border-amber-400/80 transition-colors duration-500" style={{ animationDirection: 'reverse' }} />
                <Heart className="h-7 w-7 text-amber-500 animate-float" />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow-md">2</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-sm font-black uppercase tracking-wider text-stone-900">2. Mix & Match</h4>
                <p className="font-sans text-xs text-stone-600 leading-relaxed max-w-[245px] mx-auto">
                  Choose the charm line that speaks for your name, your passion, or your guiding quote.
                </p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="group flex flex-col items-center text-center space-y-4 bg-white/60 backdrop-blur-md border border-stone-200/60 p-6 rounded-[28px] hover:border-rose-300 hover:shadow-[0_15px_35px_-10px_rgba(244,63,94,0.15)] transition-all duration-500 hover:-translate-y-1">
              <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold uppercase">[ STEP_03 // ENGRAVE ]</span>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-rose-50 to-rose-100/40 border border-rose-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                {/* Orbiting halo effect */}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-rose-400/30 animate-spin-slow group-hover:border-rose-400/80 transition-colors duration-500" />
                <Compass className="h-7 w-7 text-rose-500 animate-spin-slow" />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white shadow-md">3</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-sm font-black uppercase tracking-wider text-stone-900">3. Tell Your Story</h4>
                <p className="font-sans text-xs text-stone-600 leading-relaxed max-w-[245px] mx-auto">
                  Carry your tiny universe with you and let it say what words sometimes cannot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Workshop Widget (5B: Glassmorphism Customizer UI) */}
        <div className={`bg-white/70 backdrop-blur-xl border border-stone-200/80 p-6 md:p-10 rounded-[36px] transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 relative overflow-hidden ${glowShadows}`}>
          
          {/* LEFT 5 columns: Interactive controls structured inside 3 standard steps */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between order-2 lg:order-1">
            
            <div className="space-y-6">
              {/* Step 1: Set Your Vibe */}
              <div className="border-l-2 border-blue-500 pl-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-black text-white shrink-0">
                      1
                    </span>
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-stone-800">
                      Set Your Vibe
                    </h4>
                  </div>
                  <span className="text-[8px] font-mono text-stone-400 font-bold uppercase">[ VIBE_CORE ]</span>
                </div>
                
                <p className="font-sans text-xs text-stone-500">
                  Select the light aura for your cosmic atmosphere:
                </p>

                {/* Vibe selection swatches */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {vibeOptions.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVibeColor(v.id)}
                      className={`flex items-center space-x-1.5 px-3 py-2 rounded-full border text-xs font-mono font-semibold transition-all duration-300 ${
                        vibeColor === v.id
                          ? 'border-stone-900 bg-stone-900 text-white shadow-md shadow-stone-900/10'
                          : 'border-stone-200 bg-white/60 text-stone-600 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <span className={`h-3.5 w-3.5 rounded-full ${v.colorClass}`} />
                      <span>{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Mix & Match Astra, Sirius, Polaris */}
              <div className="border-l-2 border-amber-500 pl-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shrink-0">
                      2
                    </span>
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-stone-800">
                      Mix & Match
                    </h4>
                  </div>
                  <span className="text-[8px] font-mono text-stone-400 font-bold uppercase">[ CHARM_ARRAY_CONFIG ]</span>
                </div>
                
                <p className="font-sans text-xs text-stone-500">
                  Click to add up to 6 unique charms to your chain:
                </p>

                <div className="flex gap-2 pt-1 flex-wrap">
                  {charmOptions.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleAddCharm(c.id)}
                      className="group flex items-center space-x-1.5 border border-stone-200 bg-white/60 hover:border-stone-900 hover:bg-white p-2.5 rounded-xl text-xs font-mono font-semibold transition-all shadow-sm cursor-pointer"
                      title={`Add ${c.label}`}
                    >
                      <c.icon className={`h-4 w-4 ${c.color}`} />
                      <span className="text-stone-700 font-sans">{c.label}</span>
                      <Plus className="h-3.5 w-3.5 text-stone-400 group-hover:text-black" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Tell your story */}
              <div className="border-l-2 border-rose-500 pl-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white shrink-0">
                      3
                    </span>
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-stone-800">
                      Tell Your Story
                    </h4>
                  </div>
                  <span className="text-[8px] font-mono text-stone-400 font-bold uppercase">[ INITIALS_ENGRAVER ]</span>
                </div>
                
                <p className="font-sans text-xs text-stone-500">
                  Enter your initials (engraved on Astra charm) to preview:
                </p>

                <div className="relative">
                  <input
                    type="text"
                    maxLength={10}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full border border-stone-200/85 rounded-xl px-4 py-2.5 text-sm font-mono tracking-widest font-extrabold text-black focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none placeholder-stone-400 bg-white/80 transition-all z-10 relative"
                    placeholder="E.g. ANA / ALEX..."
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-stone-400 font-mono z-10">
                    {customName.length}/10
                  </span>
                </div>

                {/* Hologram Terminal Screen */}
                <div className="mt-3 bg-stone-950 text-emerald-400 border border-emerald-500/20 rounded-xl p-4 font-mono text-[10px] leading-relaxed space-y-1.5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden select-none">
                  {/* Glowing scanlines overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none" />
                  
                  <div className="flex items-center space-x-1.5 text-emerald-500/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYS_STATUS: READY // ONLINE</span>
                  </div>
                  <div>&gt; ENGINE_AURA: {vibeColor.toUpperCase()}_PULSE</div>
                  <div className="flex items-center">
                    <span>&gt; ENGRAVE_TEXT: [ {customName.toUpperCase() || '...'} ]</span>
                    <span className="ml-1 h-3.5 w-1.5 bg-emerald-450 animate-terminal-blink" />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="pt-4 border-t border-stone-150 space-y-3 text-left">
              <button
                onClick={handleCreateAndAdd}
                className="w-full rounded-2xl bg-black hover:bg-stone-900 border border-black text-white py-4 px-6 font-display text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Gem className="h-4 w-4 text-yellow-300 animate-spin-slow" />
                <span>Add Custom Design to Cart</span>
              </button>

              <button
                onClick={resetCustomizer}
                className="w-full text-center text-xs font-mono text-stone-400 hover:text-red-500 transition-colors py-1 cursor-pointer"
              >
                Reset Customizer
              </button>
            </div>

          </div>

          {/* RIGHT 7 columns: High-performance live rendering preview box */}
          <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
            
            {/* Live Preview Display Box */}
            <div className="flex-1 min-h-[300px] border border-stone-200/80 bg-white/95 backdrop-blur-md rounded-[28px] p-6 relative flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
              
              {/* Background ambient lighting based on selected pulse vibe color */}
              <div 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  vibeColor === 'blue' ? 'bg-blue-500/10' : 
                  vibeColor === 'yellow' ? 'bg-amber-500/10' : 
                  vibeColor === 'red' ? 'bg-rose-500/10' : 
                  'bg-indigo-500/10'
                }`} 
              />
              
              {/* Grid guide markings to mimic design workshop look */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

              {/* Status Header of Workshop Canvas */}
              <div className="flex justify-between items-center relative z-10 text-[9px] font-mono tracking-widest text-stone-400 font-bold">
                <span className="flex items-center space-x-1.5 uppercase">
                  <span className={`h-2 w-2 rounded-full ${
                    vibeColor === 'blue' ? 'bg-blue-500' :
                    vibeColor === 'yellow' ? 'bg-yellow-500' :
                    vibeColor === 'red' ? 'bg-red-500' :
                    'bg-indigo-500'
                  } animate-ping`} />
                  <span>[ RADAR_PREVIEW // ONLINE ]</span>
                </span>
                <span className="uppercase bg-stone-100 border border-stone-200/60 py-0.5 px-2.5 rounded-full text-stone-600 font-bold">
                  VIBE: {vibeColor}
                </span>
              </div>

              {/* Jewelry chain preview base rendering */}
              <div className="relative my-auto flex items-center justify-center p-8">
                
                {/* Simulated Glow ring behind */}
                <div className={`absolute h-48 w-48 rounded-full filter blur-2xl opacity-20 animate-pulse-glow ${
                  vibeColor === 'blue' ? 'bg-blue-400' :
                  vibeColor === 'yellow' ? 'bg-amber-400' :
                  vibeColor === 'red' ? 'bg-rose-400' :
                  'bg-indigo-400'
                }`} />

                {/* Jewelry selection graphic core */}
                <div className="relative w-full max-w-[280px] h-32 flex items-center justify-center">
                  
                  {/* Necklace hook loop */}
                  {jewelryType === 'necklace' && (
                    <div className="absolute top-0 w-28 h-40 rounded-full border-t border-stone-300 group-hover:scale-105 duration-300" />
                  )}

                  {/* Bracelet / Jewelry Base Chain bar line */}
                  <div className="h-2 w-full rounded-full bg-stone-200 border border-stone-300 shadow-sm relative flex items-center justify-around px-8">
                    {/* Metal clamps */}
                    <div className="absolute left-1 h-3.5 w-1.5 rounded-sm bg-stone-400" />
                    <div className="absolute right-1 h-3.5 w-1.5 rounded-sm bg-stone-400" />
                    
                    {/* Active item charms array visualization */}
                    {selectedCharms.length === 0 ? (
                      <span className="absolute text-[10px] font-mono font-medium text-stone-400 animate-pulse tracking-wide italic">
                        No charms on chain. Choose charms above!
                      </span>
                    ) : (
                      <div className="absolute inset-x-4 sm:inset-x-8 flex justify-center items-center gap-1.5 sm:gap-2">
                        {selectedCharms.map((charmId, charmIdx) => {
                          const matchingCharm = CHARM_PRODUCTS.find((cp) => cp.id === charmId);
                          const isAstra = charmId === 'astra';
                          
                          let charmIconColor = 'text-blue-500';
                          let charmBgColor = 'bg-blue-50 border-blue-200';
                          
                          if (charmId === 'sirius') {
                            charmIconColor = 'text-amber-500';
                            charmBgColor = 'bg-amber-50 border-amber-200';
                          } else if (charmId === 'polaris') {
                            charmIconColor = 'text-rose-500';
                            charmBgColor = 'bg-rose-50 border-rose-200';
                          }

                          return (
                            <div 
                              key={charmIdx}
                              className={`group/charm relative flex flex-col items-center bg-white border ${charmBgColor} p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-md cursor-pointer hover:scale-110 active:scale-95 transition-all text-center animate-float`}
                              style={{ animationDelay: `${charmIdx * 0.4}s` }}
                            >
                              <button 
                                onClick={() => handleRemoveCharm(charmIdx)}
                                className="absolute -top-1.5 -right-1.5 hidden group-hover/charm:flex h-4 w-4 bg-red-500 text-white rounded-full items-center justify-center p-0.5 hover:bg-red-600 shadow"
                                title="Remove Charm"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>

                              {charmId === 'astra' && <Sparkles className={`h-4.5 w-4.5 ${charmIconColor} animate-twinkle`} />}
                              {charmId === 'sirius' && <Heart className={`h-4.5 w-4.5 ${charmIconColor}`} />}
                              {charmId === 'polaris' && <Compass className={`h-4.5 w-4.5 ${charmIconColor}`} />}

                              {/* Live Custom named engraving display on Astra */}
                              {isAstra && (
                                <span className="mt-0.5 text-[8px] font-mono font-bold uppercase tracking-tight text-black max-w-[40px] truncate">
                                  {customName || 'Astra'}
                                </span>
                              )}
                              {!isAstra && (
                                <span className="mt-0.5 text-[6px] font-sans tracking-wide text-stone-400 capitalize">
                                  {matchingCharm?.badge}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>

                </div>

              </div>

              {/* Success Notification overlay inside panel */}
              {successMessage && (
                <div className="absolute top-4 inset-x-4 bg-emerald-500 text-white p-3 rounded-xl border border-emerald-400 shadow-xl flex items-center space-x-2 animate-fade-in relative z-50 text-xs">
                  <Bookmark className="h-4.5 w-4.5 shrink-0" />
                  <span className="font-sans font-semibold text-left">{successMessage}</span>
                </div>
              )}

              {/* Mini visual summary of custom options */}
              <div className="pt-4 border-t border-stone-150 flex flex-wrap justify-between items-center text-[10px] font-mono text-stone-500 relative z-10 gap-2">
                <div className="flex gap-2">
                  <span className="bg-stone-100/80 py-0.5 px-2 rounded">
                    Charms: {selectedCharms.length}/6
                  </span>
                  <span className="bg-stone-100/80 py-0.5 px-2 rounded">
                    Engraving: &ldquo;{customName || 'None'}&rdquo;
                  </span>
                </div>
                
                <span className="font-bold text-stone-700">
                  Custom base: {jewelryType.toUpperCase()}
                </span>
              </div>

            </div>

            {/* Selector of Jewelry Core Type */}
            <div className="mt-6 bg-white/50 border border-stone-200/60 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-left shadow-sm backdrop-blur">
              <div>
                <h5 className="font-display text-xs font-bold text-stone-700 uppercase tracking-widest flex items-center space-x-1">
                  <Paintbrush className="h-3.5 w-3.5 text-stone-500" />
                  <span>Select Core Jewelry</span>
                </h5>
                <p className="font-sans text-[11px] text-stone-400">
                  Base chain or cord (Classy Silver Bracelet, Orbit Necklace, Cord):
                </p>
              </div>

              <div className="flex gap-2 bg-white/80 p-1 rounded-xl border border-stone-150 shadow-inner">
                {(['bracelet', 'necklace', 'cord'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setJewelryType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-display font-extrabold tracking-wide uppercase transition-all ${
                      jewelryType === type
                        ? 'bg-black text-white shadow-sm'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {type === 'bracelet' && 'Bracelet'}
                    {type === 'necklace' && 'Necklace'}
                    {type === 'cord' && 'Cord'}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
