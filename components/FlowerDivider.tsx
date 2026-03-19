export function FlowerDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full my-2 ${className}`}>
      <div className="h-px bg-foreground flex-grow max-w-[30%] md:block"></div>
      
      {/* Central Flower Motif (Simplified representation of the reference) */}
      <svg 
        width="60" 
        height="30" 
        viewBox="0 0 60 30" 
        fill="currentColor" 
        className="mx-4 text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 0 C30 0 20 10 10 10 C20 10 25 15 30 25 C35 15 40 10 50 10 C40 10 30 0 30 0 Z" />
        <path d="M30 30 C30 30 25 20 15 20 C25 20 28 15 30 10 C32 15 35 20 45 20 C35 20 30 30 30 30 Z" />
        <path d="M5 15 C5 15 15 12 20 15 C15 18 5 15 5 15 Z" />
        <path d="M55 15 C55 15 45 12 40 15 C45 18 55 15 55 15 Z" />
      </svg>
      
      <div className="h-px bg-foreground flex-grow max-w-[30%] md:block"></div>
    </div>
  );
}
