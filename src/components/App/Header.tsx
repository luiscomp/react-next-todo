export default function Header() {
    return (
        <header className="flex items-center mb-4">
            <div className="flex-1 flex flex-col">
              <span className="font-normal text-gray-500 text-sm">
                {new Date().toLocaleDateString("pt-BR")}
              </span>
              <h1 className="font-normal text-2xl">Today Tasks</h1>
            </div>
            <div className="bg-[var(--primary-color)] rounded-full h-10 w-10 shadow-[0_2px_8px_rgba(255,255,255,0.8)] shadow-[var(--primary-color-shadow)]"></div>
        </header>
    )
}