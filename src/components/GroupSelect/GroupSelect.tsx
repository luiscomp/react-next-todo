import GroupSelectItem from './GroupSelectItem';
import './style.scss';

interface GroupSelectProps {
    title: string
    items: string[]
    current?: number
    select: (index: number) => void
    children?: React.ReactNode
    className?: string
}

export default function GroupSelect(props: GroupSelectProps) {
    function items() {
        return props.items.map((item, index) => (
            <GroupSelectItem label={item} select={props.select} selected={props.current === index} index={index} key={index}/>
        ))
    }

    return (
        <div className={`cp-group-select ${props.className}`}>
            <span className="title">{props.title}</span>
            <div className="group-select">
                {items()}
            </div>
        </div>
   )
}