import type { ReactNode } from 'react';
import type { CourseLevel } from '../types';

export type BadgeVariant = 'neutral' | 'accent' | 'soon' | `level-${CourseLevel}`;

export default function Badge({
  variant = 'neutral',
  children,
}: {
  variant?: BadgeVariant;
  children: ReactNode;
}) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
