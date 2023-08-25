import useCreateItens from './useCreateItens'

export default function useEnougthItens() {
    const { itens } = useCreateItens()
    
    const enougthItens = itens.filter(item => {
        const checkStock = item.inStock < 10;
        return checkStock
    })

    return { enougthItens }
}