import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aimploy - Job Application Portal',
  description: 'Submit your job application with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f0f4f8]`}>
        <nav className="bg-white border-b border-[#bfd6f6] py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-[#1e40af]">
              Aimploy
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-[#475569] hover:text-[#1e40af]">
                Apply
              </Link>
              <Link href="/applications" className="text-[#475569] hover:text-[#1e40af]">
                Applications
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
