import { FC, memo, ReactNode } from 'react'
import clsx from 'clsx'
import { Marker } from '@icons/Marker'

interface ButtonProps {
  icon?: string
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => Promise<void> | void
  markerFill?: string
}

const Inner: FC<{ icon?: string; children: ReactNode; markerFill?: string }> =
  memo(({ icon, children, markerFill }) => (
    <>
      <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
        <span className='absolute -left-[1px]'>
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt='button icon'
            className='size-10 mr-5 object-contain z-10'
          />
        )}

        <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>
          {children}
        </span>
      </span>

      <span className='glow-before glow-after' />
    </>
  ))

const Button: FC<ButtonProps> = ({
  icon,
  children,
  href,
  className,
  onClick,
  markerFill,
}) => {
  return href ? (
    <a
      className={clsx(
        'relative p-0.5 g5 rounded-2xl shadow-500 group',
        className
      )}
      href={href}
      rel='noopener noreferrer'
    >
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </a>
  ) : (
    <button
      aria-label={children ? children.toString() : 'Button'}
      className={clsx(
        'relative p-0.5 g5 rounded-2xl shadow-500 group',
        className
      )}
      onClick={onClick}
    >
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </button>
  )
}

export default Button
