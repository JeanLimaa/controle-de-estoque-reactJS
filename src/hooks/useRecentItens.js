import useCreateItens from './useCreateItens'
import dayjs from 'dayjs'

export default function useRecentItens(){
    const { itens } = useCreateItens()
    
    const today = dayjs();

    const recentItens = itens.filter(item => {
        const itemDate = dayjs(item.dateCreated, 'DD/MM/YYYY');
        const checkDifference = today.diff(itemDate, 'day');
        return checkDifference < 10
    })

    return { recentItens }
}