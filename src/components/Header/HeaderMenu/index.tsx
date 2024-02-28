import { NavigationLink } from '@/api/queries/getPage';
import Link from 'next/link';
import { FC } from 'react';

interface HeaderMenuProps {
  navigation: NavigationLink[];
}

const HeaderMenu: FC<HeaderMenuProps> = ({ navigation }) => (
  <div className="py-6 lg:py-24">
    <nav>
      <ul className="sm:pl-8">
        {navigation.map(link => {
          return (
            <li key={link.id} className="mb-1 lg:mb-3">
              <Link
                href={`/#${link.anchorId}`}
                className="text-xl lg:text-3xl font-bold text-white inline-block w-full py-0.5 transition-all duration-300 [text-shadow:_0_2px_5px_rgb(0_0_0_/_80%)] hover:text-gray-400 hover:scale-105"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
);

export default HeaderMenu;
