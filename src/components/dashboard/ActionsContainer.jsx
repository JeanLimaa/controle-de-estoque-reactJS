//import { Link, useLoaderData } from 'react-router-dom'
// import LinkBtn from './LinkBtn'
// const product = useLoaderData()
import Itens from '../item/EnougthItens'

export default function ActionsContainer( { title, midTitle, typeItem} ) {

    return (
        <article className="actions-container">
            <table className="items-table">
                <thead>
                    <tr className="header-row">
                        <th>{title}</th>
                        <th>{midTitle}</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {typeItem}
                </tbody> 
            </table>
        </article>
    )
}