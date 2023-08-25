import LinkBtn from '../link-btn/LinkBtn'
import useEnougthItens from '../../hooks/useEnougthItens'

export default function EnougthItens() {

    const { enougthItens } = useEnougthItens()

    return (
        <>
            {enougthItens.length>0 ? enougthItens.map((item) => (
                <tr className="item-row" key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.inStock}</td>
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