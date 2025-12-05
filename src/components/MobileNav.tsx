import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { modules } from '@/data/modules';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-background border-r shadow-lg">
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <span className="font-semibold">Modules</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-4rem)] p-4">
          <div className="space-y-1">
            {modules.map((module) => (
              <Link key={module.id} to={module.path} onClick={onClose}>
                <Button variant="ghost" className="w-full justify-start">
                  {module.title}
                </Button>
              </Link>
            ))}
            <Link to="/assessment" onClick={onClose}>
              <Button variant="ghost" className="w-full justify-start">
                Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
