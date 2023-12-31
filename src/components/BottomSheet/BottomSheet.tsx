'use client';

import "./style.scss";

interface BottomSheetProps {
    title: string,
    children: React.ReactNode,
    className?: string,
    open: boolean,
    onClose: () => void
}

export default function BottomSheet({ title, children, className, open, onClose }: BottomSheetProps) {
    return (
        <div className={`cp-bottom-sheet ${className} ${open ? "-open" : ""}`}>
            <div className={`cp-bottom-sheet__overlay ${open ? "-open" : ""}`} onClick={onClose}/>
            <div className={`cp-bottom-sheet__content ${open ? "-open" : ""}`} onClick={(e) => e.stopPropagation()}>
                <header>
                    <span className="title">{title}</span>
                    <button className="close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}