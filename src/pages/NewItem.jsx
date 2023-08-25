import FormItemBase from "../components/list-items/FormItemBase"
import useCreateItens from "../hooks/useCreateItens"


export default function NewItem(){
    const { addItem } = useCreateItens()
    
    return(
        <>
            <FormItemBase addItem={addItem}/>
            
        </>
    )
}