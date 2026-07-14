import type { ReactNode } from 'react';

export default function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={className ? `container ${className}` : 'container'}>{children}</div>;
}
