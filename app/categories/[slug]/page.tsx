import CategoryPage from './category-page'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  return <CategoryPage slug={slug} />
}
