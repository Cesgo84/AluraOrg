import React, {useState} from 'react';
import "./Campo.css";

const Campo = (props) => {
        //const [valor,setValor] = useState("")
        const placeholderModificado =`${props.placeholder}...`
        const {type = "text"} = props
        console.log(type)
        
 	
        const manejarCambio = (evento) => {
                props.setValor(evento.target.value)
        }

        return <div className={`campo campo-${type}`}>
                <label>{props.titulo}</label>
                <input 
                        placeholder={placeholderModificado} 
                        required={props.required }
                        value={props.valor}
                        onChange={manejarCambio}
                        type={type}
                />
    </div>
}

export default Campo