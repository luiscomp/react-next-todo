import './style.scss'

interface ListProps {
    children: React.ReactNode,
    className?: string
}

export default function List({ children, className }: ListProps) {
    return (
        <ul className={`cp-list ${className}`}>
            {children}
        </ul>
    )
}