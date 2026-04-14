interface VideosCarouselProps {
  videos: string[];
}

export function VideosCarousel({ videos }: VideosCarouselProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {videos.map((src, idx) => (
        <div key={idx} className="min-w-[300px] w-[80vw] md:min-w-[450px] md:w-[450px] aspect-video snap-center bg-black/10 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title={`Video player ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
