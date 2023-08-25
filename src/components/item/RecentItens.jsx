import LinkBtn from '../link-btn/LinkBtn'
import useRecentItens from '../../hooks/useRecentItens'

export default function RecentItens() {

    const { recentItens } = useRecentItens()

    return (
        <>
            {recentItens.length>0 ? recentItens.map((item) => (
                <tr className="item-row" key={item.id}>
                    <td>{item.name}</td>
                    <td>{}</td>
                    <td>
                        <LinkBtn content="Ver" to={`/stock-itens/${item.id}/${item.name}`} />
                    </td>
                </tr>
            )
            ) :
                <>
                    <h4 style={{ margin: "1rem" }}>Não há nada aqui.</h4>
                </>
            }
        </>
    )
}