"use client"

import Link from "next/link"
import type { Product } from "@/types/product"
import { formatPrice } from "@/lib/products"
import { ProductCarousel } from "@/components/product-carousel"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean
}

export function ProductCard({
  product,
  className,
  priority = false,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group/card flex flex-col animate-in fade-in duration-500",
        className
      )}
    >
      <Link
        href={`/produto/${product.slug}`}
        className="block overflow-hidden rounded-xl"
      >
        <ProductCarousel
          images={product.images}
          productName={product.name}
          aspectRatio="portrait"
          showArrows={true}
          showDots={true}
        />
      </Link>

      <div className="flex flex-col gap-1 px-0.5 pt-3">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-serif text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover/card:text-primary md:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-1 text-xs text-muted-foreground md:text-sm">
          {product.description}
        </p>
        <p className="mt-0.5 font-sans text-sm font-semibold text-foreground md:text-base">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
