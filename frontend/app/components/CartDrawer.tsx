import { X, Trash2, Shield, Heart, Sparkles, Compass } from 'lucide-react';
import { CustomJewelry } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CustomJewelry[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" id="cart-drawer-overlay">
      
      {/* Black backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        
        {/* Drawer container panel - premium glassmorphism */}
        <div className="w-screen max-w-md bg-white/85 backdrop-blur-xl border-l border-white/20 flex flex-col justify-between shadow-2xl relative z-10 animate-slide-in">
          
          {/* Header segment of lookbook drawer */}
          <div className="px-6 py-5 border-b border-stone-100/60 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-display text-lg font-extrabold text-black uppercase tracking-tight flex items-center space-x-1.5">
                <span>Custom Designs Cart</span>
                <span className="text-[10px] font-mono font-black py-0.5 px-2 bg-stone-100 rounded text-stone-500">
                  {cartItems.length}
                </span>
              </h2>
              <p className="font-sans text-[11px] text-stone-400">
                Storing your custom YOUniverse jewelry drafts
              </p>
            </div>

            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:bg-white/50 hover:text-black focus:outline-none transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List items core area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="h-16 w-16 rounded-full bg-stone-50 flex items-center justify-center border-2 border-dashed border-stone-300 text-stone-400">
                  <Sparkles className="h-6 w-6 animate-twinkle" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-stone-800 uppercase">
                    No custom designs yet
                  </h3>
                  <p className="font-sans text-xs text-stone-400 max-w-xs mx-auto">
                    Experience our 3-step "How to Build Your YOUniverse" customizer on the homepage to handcraft your own lucky charm!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => {
                  
                  // Map custom colors with premium borders and glass styles
                  const accentColorClass = {
                    blue: 'border-blue-200/60 bg-blue-50/20 text-blue-600 hover:border-blue-400/50',
                    yellow: 'border-amber-200/60 bg-amber-50/20 text-amber-600 hover:border-amber-400/50',
                    red: 'border-rose-200/60 bg-rose-50/20 text-rose-600 hover:border-rose-400/50',
                    indigo: 'border-indigo-200/60 bg-indigo-50/20 text-indigo-600 hover:border-indigo-400/50'
                  }[item.vibeColor] || 'border-stone-200 bg-stone-50/30';

                  return (
                    <div 
                      key={index}
                      className={`relative border rounded-2xl p-4 flex items-start justify-between gap-4 transition-all duration-300 shadow-sm ${accentColorClass}`}
                    >
                      
                      <div className="space-y-2 text-left">
                        {/* Type card metadata banner */}
                        <div className="flex items-center space-x-1">
                          <span className="text-[9px] font-mono font-black uppercase text-stone-400 tracking-wider">
                            Vibe: {item.vibeColor}
                          </span>
                          <span className="text-stone-300">•</span>
                          <span className="text-[9px] font-mono font-bold text-stone-500 block uppercase">
                            Base: {item.baseType}
                          </span>
                        </div>

                        {/* ENGRAVED CHOSEN INSCRIPTION TITLE */}
                        <h4 className="font-display text-base font-extrabold text-black uppercase tracking-wide">
                          Engraved Core: &ldquo;<span className="underline decoration-2 decoration-amber-500">{item.customName}</span>&rdquo;
                        </h4>

                        {/* Active charms badges attached */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.selectedCharms.map((charm, cIdx) => (
                            <span 
                              key={cIdx}
                              className="inline-flex items-center gap-1 bg-white/95 border border-stone-150 px-2 py-0.5 rounded-full text-[10px] font-mono text-stone-600 shadow-sm"
                            >
                              {charm === 'astra' && <Sparkles className="h-3 w-3 text-blue-500" />}
                              {charm === 'sirius' && <Heart className="h-3 w-3 text-amber-500" />}
                              {charm === 'polaris' && <Compass className="h-3 w-3 text-red-500" />}
                              <span className="capitalize">{charm}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Remove item action */}
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="p-1.5 rounded-lg border border-stone-200 bg-white/90 hover:border-red-500 hover:text-red-500 text-stone-400 hover:bg-stone-50 focus:outline-none transition-all duration-305 shrink-0 cursor-pointer shadow-sm"
                        title="Delete Configuration"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Footer segment: Submit Pre-Order */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-stone-100/60 bg-stone-50/50 backdrop-blur-md space-y-4 relative z-20">
              
              <div className="flex items-start space-x-2 text-left">
                <Shield className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="font-sans text-[11px] text-stone-500 leading-normal">
                  Visual design customizer supports local draft saving. Submit your design query to the ISB Event Team to schedule physical handcrafting.
                </p>
              </div>

              <button
                onClick={onCheckout}
                className="w-full rounded-full bg-stone-950 hover:bg-black text-white py-4 font-display text-xs font-bold tracking-widest uppercase transition-all duration-350 border border-stone-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] cursor-pointer animate-pulse-glow"
              >
                Submit Custom Design Order
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
