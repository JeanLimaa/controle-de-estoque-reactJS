import LinkBtn from '../components/link-btn/LinkBtn';
import useCreateItens from '../hooks/useCreateItens';

export default function StockItens() {
    const { itens, setItens } = useCreateItens()

    function handledDeleteItem(itemId) {
        const newItens = itens.filter(itens => itens.id != itemId)
        setItens(newItens)
        localStorage.setItem('item-lib', JSON.stringify(newItens))
    }


    return (
        <>
            <article className="actions-container">
                <table className="items-table">
                    <thead>
                        <tr className="header-row">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Em estoque</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.length > 0 ?
                            itens.map((item) => (
                                <tr className="item-row" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.inStock}</td>
                                    <td>{item.type}</td>
                                    <td className="button-actions">
                                        <LinkBtn content="Ver" to={`/stock-itens/${item.id}/${item.name}`}
                                            bgColor="#60A5FA"
                                        />
                                        <LinkBtn content="Atualizar" to={`/stock-itens/edit/${item.id}`} />
                                        <LinkBtn content="Excluir" bgColor="#F87171" onClick={() => handledDeleteItem(item.id)} />
                                    </td>
                                </tr>
                            ))
                            : (
                                <>
                                    <tr className="item-row">
                                        <td>
                                            Ainda não há nada aqui...
                                        </td>
                                        <td>Vazio</td>
                                        <td>0</td>
                                        <td>Vazio</td>
                                        <td>Vazio</td>
                                    </tr>
                                </>
                            )}
                    </tbody>
                </table>
            </article>
        </>
    );
}
