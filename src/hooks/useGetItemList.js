export default function useGetItemList(){
    const listItem = localStorage.getItem('item-lib');
    if(!listItem) return []
    return JSON.parse(listItem)
}