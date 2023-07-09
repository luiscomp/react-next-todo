import './style.scss'

interface ButtonProps {
    label: string
    type?: "submit" | "button" | "reset" | undefined
    color?: "primary" | "secondary"
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({label, type = "button", className, onClick, color = "primary"}: ButtonProps) {
    return (
        <button className={`cp-button ${className} -${color}`} type={type} onClick={onClick}>
            <span>{label}</span>
        </button>
    )
}