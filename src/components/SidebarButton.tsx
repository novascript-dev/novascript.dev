import Link from 'next/link';
import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex w-full py-2 px-4 rounded font-bold ',
  variants: {
    variant: {
      static: 'bg-white text-natural-pink-700 border border-natural-pink-700',
      dynamic: 'bg-white hover:bg-natural-pink-500 text-natural-pink-700 font-semibold hover:text-white border border-natural-pink-700 hover:border-transparent',
      important: 'bg-white hover:bg-natural-pink-500/80 text-white border-b-4 border-natural-pink-700 hover:border-natural-pink-500'
    },
  },
  defaultVariants: {
    variant: 'static',
  },
});


interface SidebarButtonProps {
    title: string
    variant?: "dynamic" | "static" | "important"
    href: string
}

export default function SidebarButton({ title, variant, href }: SidebarButtonProps) {
  return <Link href={href} className={buttonVariants({ variant })}>{title}</Link>
}