import useGetItemList from '../hooks/useGetItemList'

export default function loadItem( {params} ){
    const products = useGetItemList()
    
    const product = products.find(p => p.id === params.productId)

    if(!product){
        return null
    }
    
    return product
}