import ModuleCard from '@/components/ModuleCard';
import { modules } from '@/data/modules';
import { Book, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          GU Path Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master Genitourinary Pathology through structured, pattern-based learning
        </p>
        <p className="text-sm text-muted-foreground">
          Educational platform for pathology residents • Synthetic cases only • Not for clinical use
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/assessment">
          <Button size="lg">
            <GraduationCap className="h-5 w-5 mr-2" />
            Start Assessment
          </Button>
        </Link>
        <Link to="/cases">
          <Button size="lg" variant="outline">
            <Book className="h-5 w-5 mr-2" />
            Browse Cases
          </Button>
        </Link>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Learning Modules</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <div className="bg-muted/50 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-xl">⚠️</span> Educational Use Only
          </h3>
          <p className="text-sm text-muted-foreground">
            This platform uses synthetic educational content only. All cases, images, and descriptions are illustrative.
            Not intended for diagnosis, clinical decision-making, or patient care.
          </p>
        </div>
      </div>
    </div>
  );
}
