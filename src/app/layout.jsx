import './globals.css'
import Header from './components/Header.jsx' 

export const metadata = {
  title: 'IMDb',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Header*/}
         <Header></Header>
      {/* Navbar */}

      {/* SearchBar */}
      <body>{children}</body>
    </html>
  )
}