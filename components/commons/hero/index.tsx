import ImageElement from '@/components/elements/image-element'

interface HeroData {
  name: string
  image: string
  slug: string
}
export default function Hero({ name, image, slug }: HeroData) {
  return (
    <>
      <section className='flex flex-col md:flex-row items-center justify-center pt-2 md:pt-0 pb-4'>
        <ImageElement
          path={image}
          alt={slug}
          width={80}
          height={90}
          priority={true}
        />
        <h2 className='text-3xl underline text-center ml-0 md:ml-4 pt-2 md:pt-0'>
          {name}
        </h2>
      </section>
    </>
  )
}
