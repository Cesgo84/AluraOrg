import React from 'react';
import hexToRgba from 'hex-to-rgba';
import "./Equipo.css";
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    const {titulo, colorFondo, colorDestaque, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColorEquipo, like} = props
    const bgcolor = {
        backgroundColor: hexToRgba(colorDestaque, 0.3)
    }
    const bdrcolor = {
        borderColor: colorDestaque
    }
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={bgcolor}>
                <input 
                    type="color" 
                    className="input-color" 
                    value={props.datos.colorDestaque} 
                    onChange={
                        (evento) => {actualizarColorEquipo(evento.target.value, id)
                    }}/>
                <h3 style={bdrcolor}>{titulo}</h3>
                <div className="colaboradores" >
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            colorDestaque={colorDestaque} 
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
           </section>   
        }
    </>
}

export default Equipo