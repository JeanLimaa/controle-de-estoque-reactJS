import { Link, useLoaderData } from 'react-router-dom'
import LinkBtn from '../components/link-btn/LinkBtn';
import useCreateItens from '../hooks/useCreateItens';

export default function IndividualItem({ }) {
    const product = useLoaderData()
    const { itens, setItens } = useCreateItens()

    function handledDeleteItem(itemId) {
        const newItens = itens.filter(itens => itens.id != itemId)
        setItens(newItens)
        localStorage.setItem('item-lib', JSON.stringify(newItens))
    }

    return (
        <main>
            <section id="section-info-product">
                <div id="product-edit">
                    <h3>{product.name}</h3>

                    <LinkBtn content="Excluir" bgColor="#F87171" onClick={() => handledDeleteItem(product.id)} to={'/'}/>
                    <LinkBtn to={`/stock-itens/edit/${product.id}`} content={'Atualizar'} />
                </div>
                <div id="product-info">
                    <span>Categoria: {product.type}</span>
                    <span>Quantidade em estoque: {product.inStock}</span>
                    <span>Preço: R$ {product.price}</span>
                </div>
                <div style={{ marginTop: "1.4rem" }}>
                    Descrição: {product.description}
                </div>
                <div id="product-info-register-att">
                    <span>Cadastrado em: {product.date}</span>
                    <span>Atualizado em: {product.lastUpdate}</span>
                </div>
            </section>
        </main>
    )
}