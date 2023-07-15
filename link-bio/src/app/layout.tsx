import './globals.css'

export const metadata = {
  title: 'Olá, eu sou Maxson Almeida',
  description: 'Aqui você encontra todos os meus links para as minhas redes sociais e contatos',
  favicon: 'code-solid.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='h-full min-h-screen bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800'>  {children}</body>
    </html>
  )
}
