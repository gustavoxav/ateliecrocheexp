import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "1",
    slug: "brinco-copa-brasil",
    name: "Brinco Copa Brasil",
    description: "Brincos artesanais em crochê nas cores do Brasil",
    longDescription:
      "Brincos delicados feitos totalmente à mão em crochê, com as cores vibrantes da bandeira brasileira. Cada par é único, confeccionado com linha de algodão premium e acabamento em metal dourado antialérgico. Perfeitos para torcer com estilo durante a Copa do Mundo.",
    price: 45.0,
    currency: "BRL",
    images: [
      "/images/products/earring-brazil-1.jpg",
      "/images/products/earring-brazil-2.jpg",
    ],
    category: "earrings",
    tags: ["copa", "brasil", "brinco", "verde-amarelo"],
    madeToOrder: true,
    handmade: true,
  },
  {
    id: "2",
    slug: "cropped-canarinho",
    name: "Cropped Canarinho",
    description: "Cropped em crochê amarelo e verde inspirado na seleção",
    longDescription:
      "Cropped feminino em crochê feito à mão, inspirado nas cores da seleção brasileira. Confeccionado em fio de algodão macio e confortável, com detalhes em verde e amarelo. Ideal para o dia a dia e para torcer nos jogos. Peça sob encomenda — cada peça é única.",
    price: 189.0,
    currency: "BRL",
    images: [
      "/images/products/croptop-brazil-1.jpg",
      "/images/products/croptop-brazil-2.jpg",
    ],
    category: "crop-top",
    tags: ["copa", "brasil", "cropped", "canarinho"],
    madeToOrder: true,
    handmade: true,
  },
  {
    id: "3",
    slug: "top-azul-celeste",
    name: "Top Azul Celeste",
    description: "Top em crochê azul e branco com detalhes delicados",
    longDescription:
      "Top feminino em crochê nas cores azul celeste e branco, com acabamento artesanal impecável. Feito com linha de algodão premium, oferece conforto e elegância. O design versátil permite usar tanto no dia a dia quanto em ocasiões especiais. Peça feita sob encomenda.",
    price: 159.0,
    currency: "BRL",
    images: [
      "/images/products/top-brazil-1.jpg",
      "/images/products/top-brazil-2.jpg",
    ],
    category: "top",
    tags: ["copa", "brasil", "top", "azul"],
    madeToOrder: true,
    handmade: true,
  },
  {
    id: "4",
    slug: "brinco-bandeira",
    name: "Brinco Bandeira",
    description: "Brincos em crochê com as cores da bandeira brasileira",
    longDescription:
      "Brincos artesanais que celebram as cores da bandeira do Brasil. Feitos com técnica de crochê fino, cada par combina verde, amarelo, azul e branco em um design exclusivo. Acabamento em metal antialérgico. Peça sob encomenda — prazo de confecção de 5 a 7 dias úteis.",
    price: 55.0,
    currency: "BRL",
    images: [
      "/images/products/earring-flag-1.jpg",
      "/images/products/earring-flag-2.jpg",
    ],
    category: "earrings",
    tags: ["copa", "brasil", "brinco", "bandeira"],
    madeToOrder: true,
    handmade: true,
  },
  {
    id: "5",
    slug: "cropped-selecao-verde",
    name: "Cropped Seleção Verde",
    description: "Cropped em crochê verde com detalhes em amarelo",
    longDescription:
      "Cropped em crochê verde vibrante com acabamentos em amarelo ouro, inspirado na energia da seleção brasileira. Confeccionado artesanalmente em algodão, com ajuste confortável e caimento perfeito. Uma peça exclusiva feita à mão, sob encomenda, para você brilhar na Copa.",
    price: 199.0,
    currency: "BRL",
    images: [
      "/images/products/croptop-green-1.jpg",
      "/images/products/croptop-green-2.jpg",
    ],
    category: "crop-top",
    tags: ["copa", "brasil", "cropped", "verde"],
    madeToOrder: true,
    handmade: true,
  },
  {
    id: "6",
    slug: "top-dourado",
    name: "Top Dourado",
    description: "Top em crochê dourado com toque elegante e artesanal",
    longDescription:
      "Top em crochê na cor dourada, perfeito para quem busca elegância com toque artesanal. Feito à mão com linha de algodão premium, possui design delicado que valoriza a silhueta. Ideal para combinar com saias e shorts no clima de Copa. Peça sob encomenda.",
    price: 169.0,
    currency: "BRL",
    images: [
      "/images/products/top-yellow-1.jpg",
      "/images/products/top-yellow-2.jpg",
    ],
    category: "top",
    tags: ["copa", "brasil", "top", "dourado"],
    madeToOrder: true,
    handmade: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProducts(): Product[] {
  return products
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter((p) => p.category === category)
}

export function formatPrice(price: number, currency: string = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(price)
}
