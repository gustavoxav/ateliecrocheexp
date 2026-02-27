"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
  images: string[]
  productName: string
  aspectRatio?: "square" | "portrait"
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export function ProductCarousel({
  images,
  productName,
  aspectRatio = "portrait",
  showDots = true,
  showArrows = true,
  className,
}: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className={cn("group relative", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  aspectRatio === "square" ? "aspect-square" : "aspect-[3/4]"
                )}
              >
                <Image
                  src={image}
                  alt={`${productName} - imagem ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showArrows && count > 1 && (
          <>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-card/80 text-card-foreground opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
              aria-label="Imagem anterior"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-card/80 text-card-foreground opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
              aria-label="Próxima imagem"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </Carousel>

      {showDots && count > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === current
                  ? "w-4 bg-card"
                  : "w-1.5 bg-card/50"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
