import Tab from './Tab';
import './style.scss';

interface TabsProps {
    tabs: string[]
    current?: number
    select: (index: number) => void
    children?: React.ReactNode
}

export default function Tabs(props: TabsProps) {
    function tabs() {
        return props.tabs.map((tab, index) => (
            <Tab label={tab} select={props.select} selected={props.current === index} index={index} key={index}/>
        ))
    }

    return (
        <div className="cp-tabs">
            {tabs()}
        </div>
   )
}