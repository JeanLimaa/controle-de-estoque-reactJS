import { useState } from 'react'
import useId from './useId'
import dayjs from 'dayjs';
import useGetItemList from './useGetItemList'

export default function useCreateItens() {

    const [itens, setItens] = useState(() => {
        const getItem = useGetItemList()
        return getItem
    })
    //add game, essa função vai criar um ID aleatorio, dps atribuir valores para o state, chamar o setState
    function addItem( { name, inStock, price, type, description} ){
        const id = useId()
        const date = dayjs().format('DD/MM/YYYY')
        const lastUpdate = dayjs().format('DD/MM/YYYY LT')
        const itens = {id, name, inStock, price, type, description, date, lastUpdate}
        
        setItens((state) =>{
            const newItem = [...state, itens]
            localStorage.setItem('item-lib', JSON.stringify(newItem))
            return newItem
        } 
        )
    }

  return { itens, addItem, setItens }
}