import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='w-full flex justify-center'>
      <div className='w-full flex-col gap-4 md:max-w-xl mx-4 py-8 bg-white my-8 rounded-xl px-4'>
        <div className='flex items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/10967077?s=400&u=d55c7b01f12d90611e5138e4d12dc572bc7f3834&v=4'
            width={150}
            height={150}
            alt='Imagem do Perfil de Maxson Ferovante'
            className='rounded-full'
          />
          <div className='ml-4'>
            <h1 className='text-2xl text-blue-800'>Olá, sou Maxson Almeida</h1>
            <p className='italic text-blue-800'>Desenvolvedor Back-End com Node.JS e estudante de Filosofia.</p>
          </div>
        </div>
        <div className='flex w-full justify-around py-8 border-b mb-4'>
          <a href='https://github.com/maxsonferovante'
            className='p-8 bg-blue-500 rounded-full text-white'>
            <FaGithub />
          </a>

          <a href='https://www.linkedin.com/in/maxson-almeida-501065260/'
            className='p-8 bg-blue-500 rounded-full text-white'>
            <FaLinkedin />
          </a>

          <a href='https://www.instagram.com/maxalmeida.dev/'
            className='p-8 bg-blue-500 rounded-full text-white'>
            <FaInstagram />
          </a>

          <a href='https://wa.me/5591982299627'
            className='p-8 bg-blue-500 rounded-full text-white'>
            <FaWhatsapp />
          </a>
        </div>

        <a href='https://maxsonalmeida-dev.vercel.app/'
          className='w-full rounded-full border-2 border-blue-800 text-blue-800 p-4 flex items-center justify-between mb-4'>
          Portfólio - Maxson Almeida - Desenvolvedor Back-End
          <FaExternalLinkAlt className='ml-4' />
          _blank
        </a>

        <div className=' flex items-center justify-center'>
          <span className='text-blue-800 min-full text-center mt-4'>
            Criado por <a href='https://www.linkedin.com/in/maxson-almeida-501065260/'
              className='text-blue-500'>
              Maxson Almeida
            </a> </span>
        </div>

      </div>
    </main>
  )
}
