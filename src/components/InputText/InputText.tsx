import "./style.scss"

interface InputTextProps {
    id: string,
    label: string,
    name?: string,
    value: string,
    type?: "text" | "email" | "password",
    autoComplete?: "on" | "off",
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}

export default function InputText({id, label, name, value, type = "text", onInput, className, autoComplete}: InputTextProps) {
    return (
        <div className={`cp-input-text ${className}`}>
            <input type={type} name={name} id={id} value={value} onInput={onInput} autoComplete={autoComplete} />
            <label htmlFor="input">{label}</label>
        </div>
    )
}