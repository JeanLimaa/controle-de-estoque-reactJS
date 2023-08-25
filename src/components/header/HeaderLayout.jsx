import { Link, Outlet, useLocation } from "react-router-dom"

export default function HeaderLayout() {
    const location = useLocation()
    const home = location.pathname === "/"
    const stockItens = location.pathname === "/stock-itens"
    const newItem = location.pathname === "/new-item"

    return (
        <>
            <header>
                <section id="section-default-header">
                    <div>
                        <h4>REACT STOCK</h4>
                        <h1 className="title">Dashboard</h1>
                    </div>
                    <nav>
                        <Link to={'/'} className={home && "active"}>Inicio</Link>
                        <Link to={'stock-itens'} className={stockItens || newItem ? "active" : null}>Itens</Link>
                    </nav>
                </section>
                
                {stockItens || newItem ? (
                    <section id='title-new-all-item'>
                        <Link to="stock-itens" className={stockItens && "active"}>Todos os itens</Link>
                        <Link to="new-item" className={newItem && "active"}>Novos itens</Link>
                    </section>
                ) : null}
            </header>
            <Outlet />
        </>
    )
}