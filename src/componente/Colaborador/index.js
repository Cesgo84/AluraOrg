import React from 'react';
import "./Colaborador.css";
import {AiFillCloseCircle, AiOutlineHeart} from "react-icons/ai"
import {ImHeart} from "react-icons/im"

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorDestaque, eliminarColaborador, like} = props
    const bgcolor = {
        backgroundColor: colorDestaque
    }
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={bgcolor} >
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <ImHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>} 
        </div>
    </div>
}

export default Colaborador