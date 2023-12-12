import Image from 'next/image'

interface WeaponData {
  title: string
  path: string
  value: string | number | React.ReactNode | null
}

export default function WeaponTable({
  name,
  data
}: {
  name: string
  data: WeaponData[]
}) {
  return (
    <div>
      <h3 className='font-black text-center my-2'>{name}</h3>
      <div className='flex flex-col sm:flex-row flex-wrap border'>
        {data &&
          data.map((element, i) => (
            <div className='flex-1 basis-1/2 flex flex-col' key={i}>
              <div className='border flex flex-col items-center justify-center p-1 md:p-3'>
                <span>{element.title}</span>
                <Image
                  src={`/images/icons/${element.path}`}
                  alt={`${element.title}`}
                  width='45'
                  height='45'
                />
              </div>
              <div className='flex justify-center grow items-center border p-1 md:p-3'>
                {element.value || '0'}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
