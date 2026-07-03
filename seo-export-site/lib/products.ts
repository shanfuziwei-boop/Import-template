export interface Product {
  id: string
  name: string
  description: string
  price: number
  slug: string
}

export async function getProducts(): Promise<Product[]> {
  // TODO: Fetch products from database or API
  return []
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  // TODO: Fetch product by slug from database or API
  return null
}
