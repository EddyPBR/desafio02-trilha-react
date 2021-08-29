import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
  title: string;
}

export function Content({ children, title }: SideBarProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  )
}