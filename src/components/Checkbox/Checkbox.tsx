import "./style.scss";

interface CheckboxProps {
    id: string
    name?: string
    label?: string
    className?: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({id, name, label, className, checked, onChange}: CheckboxProps) {
    return (
        <div className={`cp-checkbox ${className || ''}`}>
            <input type="checkbox" name={name} id={id} checked={checked} onChange={onChange}/>
            {label && (<label htmlFor={name}>{label}</label>)}
        </div>
    )
}