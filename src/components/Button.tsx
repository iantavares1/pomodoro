import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-secondary hover:bg-hover_secondary w-24 px-8 py-3 rounded-md text-white transition-all flex justify-center"
    />
  )
}
