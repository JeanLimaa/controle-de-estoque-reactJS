import { useState } from "react";
import Input from "./Input";
import Proptypes from 'prop-types'
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import useGetItemList from '../../hooks/useGetItemList'
dayjs.extend(localizedFormat)

FormItemBase.propTypes = {
    addItem: Proptypes.func,
    onSubmit: Proptypes.func
}

export default function FormItemBase({ addItem, onSubmit, initialValue }) {
    const [name, setName] = useState(initialValue?.name ?? "")
    const [inStock, setInStock] = useState(initialValue?.inStock ?? 0)
    const [price, setPrice] = useState(initialValue?.price ?? 0)
    const [description, setDescription] = useState(initialValue?.description ?? "")
    const [type, setType] = useState(initialValue?.type ?? "")
    const [feedbackSucess, setFeedbackSucess] = useState("")
    const [nameError, setNameError] = useState(false)

    function handlerSubmit(ev) {
        ev.preventDefault()
        //caso nao escolha uma categoria haver um retorno que evite os demais
        if (type == '') return alert('Você deve escolher uma categoria')

        const lastUpdate = dayjs().format('DD/MM/YYYY LT')
        if(!nameError){
            if (typeof (onSubmit) !== 'function') addItem({ name, inStock, price, type, description })
            else onSubmit({
                name: name,
                inStock: inStock,
                price: price,
                description: description,
                type: type,
                lastUpdate: lastUpdate
            })
    
            setName('')
            setInStock('')
            setPrice('')
            setDescription('')
            setType('')
    
            setFeedbackSucess("Sucesso!")
    
            setTimeout(() => {
                setFeedbackSucess("")
            }, 1000 * 5 //5s
            )
        } else{
            alert('Provavelmente já existe um item com este nome. Verifique o erro.')
        }
    }
    function checkName(){
        const getItem = useGetItemList()
        const checkItemName = getItem.find((item) => item.name === name)
        
        if (checkItemName){
            setNameError(true)
        } else{
            setNameError(false)
        }
    }
    
    return (
        <form id="item-edit-and-create-container" onSubmit={handlerSubmit}>
            <div id="inputs-edit-and-create">
                <Input
                    label="Nome"
                    name="labelName"
                    id="labelName"
                    type="text"
                    value={name}
                    setUseState={setName}
                    nameError={nameError}
                    onBlur={checkName}
                />
                <Input
                    label="Quantidade"
                    name="labelinStock"
                    id="labelinStock"
                    type="number"
                    value={inStock}
                    min={0}
                    setUseState={setInStock}
                />
                <Input
                    label="Preço"
                    name="labelPrice"
                    id="labelPrice"
                    type="number"
                    value={price}
                    setUseState={setPrice}
                    currencySymbol={true}
                    min={0}
                />
                <div>
                    <label htmlFor="labelCategory">Categoria</label>
                    <select name="labelCategory" id="labelCategory" value={type} onChange={ev => setType(ev.target.value)} required>
                        <option>Selecione uma categoria...</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Licença de Software">Licença de Software</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Livros">Livros</option>
                        <option value="Filmes">Filmes</option>
                        <option value="Genérico">Genérico</option>
                    </select>
                </div>
            </div>
            <div id="description-textarea">
                <label htmlFor="labelDescription">Descrição</label>
                <textarea name="labelDescription" id="labelDescription" cols="30" rows="10" onChange={ev => setDescription(ev.target.value)} value={description} required />
            </div>
            <div id="out-form">
                <div id="btn-save-box">
                    <button id="btn-save">Salvar</button>
                </div>
                {feedbackSucess ? (
                    <div id="feedback-box"
                        className={`${feedbackSucess ? "feedback-fade" : "feedback-fade-hidden"
                            }`}
                    >
                        <span>{feedbackSucess}</span>
                    </div>
                ) : null}
            </div>
        </form>
    )
}