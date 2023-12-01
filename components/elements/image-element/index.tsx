import Image from 'next/image'
import { useState } from 'react'

interface ImageElementData {
  path: string
  alt: string
  width: number
  height: number
  priority: boolean
}
export default function ImageElement({
  path,
  alt,
  width,
  height,
  priority
}: ImageElementData) {
  const [imageSrc, setImageSrc] = useState(
    `/images/weapons/${path || 'loading.png'}`
  )

  const hndleImageError = () => {
    setImageSrc('/images/weapons/not_found.png')
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      priority={priority}
      onError={hndleImageError}
      width={width}
      height={height}
    />
  )
}
