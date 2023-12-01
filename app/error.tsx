'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <h2 className='title-font animate-bounce text-center text-2xl md:text-4xl mt-10 md:mt-16'>
      An Error Occured!
    </h2>
  )
}
