import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  color?: 'primary' | 'secondary'
}

export const Button = ({ color, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-white w-24 px-8 py-2 rounded-md text-black transition-all flex justify-center
       md:bg-${color} md:hover:bg-hover-${color} md:text-white
       xl:w-32 xl:py-4 xl:px-12 xl:text-2xl`}
    />
  )
}
