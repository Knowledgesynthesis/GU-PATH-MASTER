import { Link, useLocation } from 'react-router-dom';
import { Menu, Settings, Home } from 'lucide-react';
import { Button } from './ui/Button';

interface NavigationProps {
  onMenuClick: () => void;
}

export default function Navigation({ onMenuClick }: NavigationProps) {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">GU</span>
              </div>
              <span className="hidden font-semibold sm:inline-block">
                GU Path Master
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Link to="/">
              <Button
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                size="sm"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/assessment">
              <Button
                variant={
                  location.pathname === '/assessment' ? 'default' : 'ghost'
                }
                size="sm"
              >
                Assessment
              </Button>
            </Link>
            <Link to="/settings">
              <Button
                variant={
                  location.pathname === '/settings' ? 'default' : 'ghost'
                }
                size="sm"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Link to="/settings">
              <Button
                variant={
                  location.pathname === '/settings' ? 'default' : 'ghost'
                }
                size="icon"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
