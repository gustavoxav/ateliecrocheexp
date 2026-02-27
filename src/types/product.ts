export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  currency: string
  images: string[]
  category: "earrings" | "crop-top" | "top"
  tags: string[]
  madeToOrder: boolean
  handmade: boolean
}
