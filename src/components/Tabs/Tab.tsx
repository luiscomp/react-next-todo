'use client';

interface TabProps {
    label: string
    selected?: boolean
    select: (index: number) => void
    index: number
}

export default function Tab({label, select, selected = false, index}: TabProps) {
    return (
        <button className="cp-tab" custom-current={selected.toString()} onClick={() => select(index)}>
            <span>{label}</span>
        </button>
    )
}