import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'] 
});

export const metadata: Metadata = {
  title: 'Valuvis - Premium-Immobilien in Frankfurt',
  description: 'Der Wegweiser zu Premium-Immobilien in Frankfurt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de"> 
      <body className={roboto.className}>{children}</body>
    </html>
  )
}