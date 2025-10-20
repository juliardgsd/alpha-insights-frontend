import './globals.css'

export const metadata = {
  title: 'Alpha Insights',
  description: 'Assistente de análise de vendas com IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
