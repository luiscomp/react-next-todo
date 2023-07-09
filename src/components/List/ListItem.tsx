interface ListItemProps {
    children: React.ReactNode
}

export default function ListItem({ children }: ListItemProps) {
    return (
        <li className="cp-list-item">
            {children}
        </li>
    )
}
