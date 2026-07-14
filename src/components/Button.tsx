import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeProps;

/** Renders an `<a>` when `href` is given, otherwise a `<button>`. */
export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const cls = ['btn', `btn-${variant}`, size === 'lg' && 'btn-lg', className]
    .filter(Boolean)
    .join(' ');

  if (typeof (rest as { href?: string }).href === 'string') {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>
      {children}
    </button>
  );
}
