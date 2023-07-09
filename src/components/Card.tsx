export interface CardProps {
    title?: string,
    children?: React.ReactNode
    className?: string
}


export default function Card(props: CardProps) {

    function titleText() {
        if(props.title) {
            return (
                <h2>{props.title}</h2>
            )
        }
    }

    return (
        <div className={`
            flex flex-col p-4
            bg-white bg-opacity-90 text-black
            shadow-md
            text-md
            rounded-3xl
            ${props.className}
        `}>
            {titleText()}
            {props.children}
        </div>
    )
}