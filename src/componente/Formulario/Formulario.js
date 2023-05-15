import React , {useState} from 'react';
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
 
 const Formulario = (props) => {
    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [colorDestaque, setColorDestaque] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        crearEquipo({titulo, colorDestaque})
    }

 	return <section className="formulario">
 		<form onSubmit={manejarEnvio}>
 			<h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                setValor={setPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                setValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
 		</form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                setValor={setTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar color en Hex" 
                required 
                valor={colorDestaque} 
                setValor={setColorDestaque}
                type='color'
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
 	</section>
}

export default Formulario