import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Module } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link to={module.path} className="block group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${module.color} text-2xl`}
            >
              {module.icon}
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <CardTitle className="text-xl mt-4">{module.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {module.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
