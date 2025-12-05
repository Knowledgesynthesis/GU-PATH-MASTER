import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

interface ModuleTemplateProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  children: ReactNode;
}

export default function ModuleTemplate({
  title,
  description,
  icon,
  color,
  children,
}: ModuleTemplateProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-2xl`}
          >
            {icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'highlight';
}

export function Section({ title, children, variant = 'default' }: SectionProps) {
  return (
    <Card className={variant === 'highlight' ? 'border-primary' : ''}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-sm dark:prose-invert max-w-none">
        {children}
      </CardContent>
    </Card>
  );
}

interface HighlightBoxProps {
  title?: string;
  children: ReactNode;
  type?: 'info' | 'warning' | 'pitfall';
}

export function HighlightBox({ title, children, type = 'info' }: HighlightBoxProps) {
  const colors = {
    info: 'bg-blue-500/10 border-blue-500/20',
    warning: 'bg-yellow-500/10 border-yellow-500/20',
    pitfall: 'bg-red-500/10 border-red-500/20',
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    pitfall: '🚨',
  };

  return (
    <div className={`rounded-lg border p-4 ${colors[type]}`}>
      {title && (
        <div className="font-semibold mb-2 flex items-center gap-2">
          <span>{icons[type]}</span>
          {title}
        </div>
      )}
      <div className="text-sm">{children}</div>
    </div>
  );
}

interface KeyPointsProps {
  points: string[];
}

export function KeyPoints({ points }: KeyPointsProps) {
  return (
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
