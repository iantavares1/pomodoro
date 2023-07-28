import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  color?: 'primary' | 'secondary'
}

export const Button = ({ color, ...props }: ButtonProps) => {
  const bgColorOnScreenMD =
    color === 'primary' ? 'md:bg-primary' : 'md:bg-secondary'

  const hoverBgColorOnScreenMD =
    color === 'primary'
      ? 'md:hover:bg-hover_primary'
      : 'md:hover:bg-hover_secondary'

  return (
    <button
      {...props}
      className={`bg-white w-24 px-8 py-2 rounded-md text-black transition-all flex justify-center
       ${bgColorOnScreenMD} ${hoverBgColorOnScreenMD} md:text-white 
       xl:w-32 xl:py-4 xl:px-12 xl:text-2xl`}
    />
  )
}
