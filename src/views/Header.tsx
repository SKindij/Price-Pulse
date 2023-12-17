// @/views/Header.tsx
import { Navigation } from './components/Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/categories' },
  { label: 'Cocktails', href: '/cocktails' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { Header };