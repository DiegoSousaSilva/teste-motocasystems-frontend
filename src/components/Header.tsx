import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='py-7'> 
      <nav>
        <ul className="flex flex-row items-center space-x-4">
          {/* Link para a página inicial */}
          <li className="ml-auto">
            <Link href="/">
              <Image src="/icons/home.png"  alt='home-icon' width="33" height="28"/> 
            </Link>
          </li>
          {/* Ícone do avatar do usuário */}
          <li className="ml-auto relative">
            <Image src="/icons/avatar.png"  alt='user-avatar' width="44" height="44" className="rounded-full"/> 
            {/* Indicador de status online */}
            <div className="absolute bg-[#04F81C] size-3 border border-[#342B4A] rounded-full right-1 bottom-0"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
