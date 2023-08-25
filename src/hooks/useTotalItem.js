import useCreateItens from './useCreateItens'

export default function useTotalItem(){
    const { itens } = useCreateItens()

    const totalStock = itens.reduce((acc, cValue) => {
        return acc + Number(cValue.inStock)
    }, 0)

    return totalStock
}