'use client';

interface GroupSelectItemProps {
    label: string
    selected?: boolean
    select: (index: number) => void
    index: number
}

export default function GroupSelectItem({label, select, selected = false, index}: GroupSelectItemProps) {
    return (
        <button type="button" className="cp-group-select-item" custom-current={selected.toString()} onClick={() => select(index)}>
            <span>{label}</span>
        </button>
    )
}