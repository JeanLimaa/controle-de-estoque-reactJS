import { useLoaderData } from "react-router-dom";
import FormItemBase from "../components/list-items/FormItemBase";

export default function EditItem() {

    const product = useLoaderData()

    function handlerSubmit(updateItens){
        // Carregar itens do localStorage
        const storedItems = JSON.parse(localStorage.getItem('item-lib')) || [];

        // Encontrar o índice do item a ser atualizado
        const itemIndex = storedItems.findIndex(p => p.id === product.id);
        
        console.log(updateItens)
        
        if (itemIndex !== -1) {
            // Atualizar o item no array
            storedItems[itemIndex] = {
                ...storedItems[itemIndex],
                ...updateItens
            };

            // Atualizar o localStorage
            localStorage.setItem('item-lib', JSON.stringify(storedItems));
        } else console.log('fail')
    }
    
    return (
        <FormItemBase
            onSubmit={handlerSubmit}
            initialValue={{
                name: product.name,
                description: product.description,
                price: product.price,
                inStock: product.inStock
            }}
        />
    )
}