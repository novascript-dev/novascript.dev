import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'py-2 px-4 rounded font-bold',
  variants: {
    variant: {
      static: 'bg-secondary text-natural-pink-700 border border-natural-pink-700',
      dynamic: 'bg-transparent hover:bg-natural-pink-500 text-natural-pink-700 font-semibold hover:text-white border border-natural-pink-700 hover:border-transparent',
      important: 'bg-natural-pink-500 hover:bg-natural-pink-500/80 text-white border-b-4 border-natural-pink-700 hover:border-natural-pink-500'
    },
  },
  defaultVariants: {
    variant: 'static',
  },
});


interface ButtonProps {
    title: string
    variant?: "dynamic" | "static" | "important"
}

export default function Button({ title, variant }: ButtonProps) {
  return <button className={buttonVariants({ variant })}>{title}</button>
}