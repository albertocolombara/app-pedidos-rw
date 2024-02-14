import { useState } from 'react'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
  
    return (
        <header className="py-10">
          <nav className="container mx-auto flex justify-between items-center px-2">
            <a href="https://www.realwines.com.br">
              <img src="/logo.png" alt="Logo Realwines" width={150}></img>
            </a>  
            <ul id='menu' className={`flex md:flex ${menuOpen ? '' : "hidden"} fixed top-1/2 -translate-y-1/2 right-4 md:-translate-y-0 bg-red-3 md:bg-no-color md:w-auto md:h-auto h-[90vh] px-8 md:px-0 z-10 md:static gap-4 text-red-7 font-semibold md:flex-row flex-col rounded items-center justify-center shadow-md shadow-red-5 md:shadow-none`}>
              <Cross2Icon id='closeMenu' className='md:hidden cursor-pointer absolute top-4 right-4' onClick={toggleMenu} width={24} height={24} />
              <li><a href="https://www.realwines.com.br">Página Inicial</a></li>
              <li><a href="https://www.catalogo.realwines.com.br">Catálogo Online</a></li>
              <li><a href="#pedido">Faça seu pedido</a></li>
            </ul>
            <HamburgerMenuIcon className='md:hidden cursor-pointer' onClick={toggleMenu} width={24} height={24} />
          </nav>
        </header> 
    )
}