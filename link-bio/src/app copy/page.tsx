import Image from 'next/image';

export default function Home() {
  return (
    <main >
      <div>
        <Image
          src='https://github.com/maxsonferovante.png'
          width={150}
          height={150}
          alt='Imagem do Perfil de Maxson Ferovante'
          className='rounded-full'
        />
      </div>
    </main>
  )
}
