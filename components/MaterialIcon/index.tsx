import clsx from 'clsx'
interface IconProps {
  iconName: string
  onClick?: () => void
  className?: string
  color?: string
}

const MaterialIcon: React.FC<IconProps> = ({ iconName, onClick, className }) => {
  // FIXME: hover colors

  return (
    <span className={clsx('material-icons w-6 h-6 transition duration-75', className)}>
      {iconName}
    </span>
  )
}
export default MaterialIcon
