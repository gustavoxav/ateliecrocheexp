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

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!mainApi) return

    setCount(mainApi.scrollSnapList().length)
    setCurrent(mainApi.selectedScrollSnap())

    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap())
    })
  }, [mainApi])

  return (
    <div className="flex flex-col gap-3">
      {/* Main image carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <Carousel
          setApi={setMainApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-square">
                  <Image
                    src={image}
                    alt={`${productName} - imagem ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {count > 1 && (
            <>
              <button
                onClick={() => mainApi?.scrollPrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-card hover:shadow-md"
                aria-label="Imagem anterior"
              >
                <svg
                  width="18"
                  height="18"
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
                onClick={() => mainApi?.scrollNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-card hover:shadow-md"
                aria-label="Próxima imagem"
              >
                <svg
                  width="18"
                  height="18"
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

        {/* Dots indicator */}
        {count > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === current
                    ? "w-6 bg-card"
                    : "w-2 bg-card/50"
                )}
                onClick={() => mainApi?.scrollTo(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => mainApi?.scrollTo(index)}
              className={cn(
                "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 md:h-20 md:w-20",
                index === current
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              )}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${productName} - miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
