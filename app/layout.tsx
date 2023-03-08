import './globals.css'

export const metadata = {
  title: 'Unleashed',
  description: 'Unleash your thoughts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
