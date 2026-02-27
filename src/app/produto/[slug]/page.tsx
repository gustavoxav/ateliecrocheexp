import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getAllProducts, formatPrice } from "@/lib/products";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGallery } from "@/components/product-gallery";
import { WhatsAppButton } from "@/components/whatsapp-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: `${product.name} | Ateliê Crochê`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-6 md:py-10">
          {/* Breadcrumb */}
          <nav
            className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-foreground">
              Início
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Gallery */}
            <div className="w-full md:w-1/2">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Product Info */}
            <div className="flex w-full flex-col gap-5 md:w-1/2 md:sticky md:top-24 md:self-start">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {product.handmade && (
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Feito à mão
                    </span>
                  )}
                  {product.madeToOrder && (
                    <span className="inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                      Sob encomenda
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {product.name}
                </h1>

                <p className="text-2xl font-semibold text-foreground md:text-3xl">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-base font-semibold text-foreground">
                  Sobre a peça
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {product.longDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-base font-semibold text-foreground">
                  Detalhes
                </h2>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    100% feito à mão em crochê
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    Linha de algodão premium
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    Peça única — feita sob encomenda
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    Prazo de confecção: 5 a 7 dias úteis
                  </li>
                </ul>
              </div>

              <div className="mt-2">
                <WhatsAppButton productName={product.name} className="w-full" />
              </div>

              <p className="text-center text-xs text-muted-foreground/60">
                Ao clicar, você será redirecionada para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
