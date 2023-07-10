import "./style.scss"

interface PageProps {
    direction?: "row" | "column"
    children: React.ReactNode
}

export default function Page(props: PageProps) {
    return (
        <div className={`
            cp-page ${props.direction === "row" ? 'flex-row' : 'flex-col'}
        `} >
            {props.children}
        </div>
    )
}