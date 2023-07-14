import './globals.css'

export const metadata = {
  title: 'Olá, eu sou Maxson Almeida',
  description: 'Aqui você encontra todos os meus links para as minhas redes sociais e contatos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body> {children}</body>
    </html>
  )
}
