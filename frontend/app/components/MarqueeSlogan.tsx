import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface MarqueeSloganProps {
  onSloganClick: () => void;
}

export default function MarqueeSlogan({ onSloganClick }: MarqueeSloganProps) {
  // Single slogan text
  const sloganText = "A galaxy to hold, a story to be told • 💫";
  
  // States to track cursor coordinates and hover state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Estimate tooltip width to prevent it from going off the screen edges
    const estimatedTooltipHalfWidth = 120; // 240px total width / 2
    const padding = 16; // Safety margin from screen edge
    
    // Clamp the X coordinate within the viewport boundaries
    const minX = estimatedTooltipHalfWidth + padding;
    const maxX = window.innerWidth - (estimatedTooltipHalfWidth + padding);
    const clampedX = Math.max(minX, Math.min(maxX, e.clientX));

    setMousePos({ x: clampedX, y: e.clientY });
  };

  return (
    <div
      className="relative block w-full overflow-hidden border-y border-black bg-[#FAF6EE] py-3.5"
    >
      <div className="relative flex w-full overflow-hidden">
        {/* Clickable single text button with forced max-content width to prevent stretching */}
        <button
          onClick={onSloganClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="w-max inline-block animate-marquee-single whitespace-nowrap text-xs font-display font-black uppercase tracking-widest text-black py-0.5 hover:text-amber-500 focus:outline-none cursor-pointer transition-colors duration-300"
        >
          {sloganText}
        </button>
      </div>

      {/* Premium custom tooltip that follows the mouse cursor without wrapping or overflowing */}
      {isHovered && (
        <div
          className="fixed pointer-events-none bg-black text-white text-[10px] md:text-xs font-sans font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl border border-stone-800 z-[9999] -translate-x-1/2 whitespace-nowrap"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y + 18}px`,
          }}
        >
          <span>Khám phá câu chuyện của chúng tôi!</span>
          <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-twinkle" />
        </div>
      )}
    </div>
  );
}
