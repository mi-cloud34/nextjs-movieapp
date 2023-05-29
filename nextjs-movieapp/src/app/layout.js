import Header from '@/components/Header'
import './global.css'
import Providers from './Providers'
import Tabs from '@/components/Tabs'
export default function Layout({ children }) {
 return (
    <html lang="en">
     
      <body>
    
      <Providers>
        <Header/>
        <Tabs/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
