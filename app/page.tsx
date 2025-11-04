import InfiniteGallery from "@/components/InfiniteGallery"

export default function Home() {
  const sampleImages = [
    { src: "/1.webp", alt: "Brand Meme 1" },
    { src: "/2.webp", alt: "Brand Meme 2" },
    { src: "/3.webp", alt: "Brand Meme 3" },
    { src: "/4.webp", alt: "Brand Meme 4" },
    { src: "/5.webp", alt: "Brand Meme 5" },
    { src: "/6.webp", alt: "Brand Meme 6" },
    { src: "/7.webp", alt: "Brand Meme 7" },
    { src: "/8.webp", alt: "Brand Meme 8" },
  ]

  return (
    <main className="min-h-screen ">
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
          <span className="italic">Memes drive;</span> brands thrive
        </h1>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
        <p>Viral brand meme gallery • 60% higher engagement than traditional marketing</p>
        <p className=" opacity-60">Use mouse wheel, arrow keys, or touch to navigate</p>
      </div>
    </main>
  )
}
