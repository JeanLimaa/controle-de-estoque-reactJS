export default function Input({ label, name, id, value, type, min, setUseState, onBlur, nameError, placeholder, currencySymbol }) {
    return (
        <div className={currencySymbol ? "price-input-container" : null}>
            {nameError ? <label>{label}: Já existe um item com este nome</label> : <label htmlFor={name}>{label}</label>}
            {currencySymbol ? <span className="currency-symbol">R$</span> : null}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                min={min}
                onChange={(ev) => setUseState(ev.target.value)}
                onBlur={onBlur}
                className={nameError ? 'input-error' : ""}
                placeholder={placeholder}
                required />
        </div>
    )
}