import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './componente/Header/header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from "./componente/MiOrg"
import Equipo from "./componente/Equipo"
import Footer from "./componente/Footer"

const App = () =>{
    const [mostrarFormulario,actualizarMostrar] = useState(false)
    const [colaboradores, actualizarColaboradores] = useState([
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
            fav: true
        }, {
            id: uuidv4(),
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
            fav: true
        }, {
            id: uuidv4(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            fav: false
        }, {
            id: uuidv4(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            fav: true
        }, {
            id: uuidv4(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            fav: true
        }
    ])

    const [equipos, actualizarEquipos] = useState([
        {
            id: uuidv4(),
            titulo: 'Programación',
            colorFondo: "#D9F7E9",
            colorDestaque: "#57C278"
        }, {
            id: uuidv4(),
            titulo: 'Front End',
            colorFondo: "#E8F8FF",
            colorDestaque: "#82CFFA"
        }, {
            id: uuidv4(),
            titulo: 'Data Science',
            colorFondo: "#F0F8E2",
            colorDestaque: "#A6D157"
        }, {
            id: uuidv4(),
            titulo: 'Devops',
            colorFondo: "#FDE7E8",
            colorDestaque: "#E06B69"
        }, {
            id: uuidv4(),
            titulo: 'UX y Diseño',
            colorFondo: "#FAE9F5",
            colorDestaque: "#DB6EBF"
        }, {
            id: uuidv4(),
            titulo: 'Móvil',
            colorFondo: "#FFF5D9",
            colorDestaque: "#FFBA05"
        }, {
            id: uuidv4(),
            titulo: 'Innovación y Gestión',
            colorFondo: "#FFEEDF",
            colorDestaque: "#FF8A29"
        }
    ])

    const registrarColaborador = (colaborador) => {
        console.log([...colaboradores,{...colaborador, id: uuidv4()}])
        //spread operator ...
        actualizarColaboradores([...colaboradores,{...colaborador, id: uuidv4()}])
    }

    //Eliminar colaborador
    const eliminarColaborador = (id) => {
        console.log('Eliminar colaborador', id)
        const nuevosColaboradore = colaboradores.filter((colaborador) =>colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradore)
    }

    //Actualizar color de equipo
    const actualizarColorEquipo = (color,id) => {
        console.log("Actualizar: ", color, id)
        const equiposActualizados = equipos.map((equipo) =>{
            if (equipo.id === id){
                equipo.colorDestaque = color
            }
            return equipo
        })
        actualizarEquipos(equiposActualizados)
    }

    // Crear Equipo
    const crearEquipo = (nuevoEquipo) => { 
        console.log([...equipos, {...nuevoEquipo, id: uuidv4()}])
        actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
    }

    
    const like = (id) => {
        console.log('like', id)
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.fav = !colaborador.fav
            }
            return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados)    
    } 

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
    }
    
    //Ternario --> condicion ? ocurreSiSi : ocurreSiNo
    //condicion && ocurreSiSí (esto para cuando si no no ocurre nada)
    
    return (
        <div>
            <Header />
            {
                mostrarFormulario === true ? <Formulario 
                    equipos={equipos.map((equipo) => equipo.titulo)} 
                    registrarColaborador = {registrarColaborador} 
                    crearEquipo = {crearEquipo}
                /> : <></>
            }

            <MiOrg cambiarMostrar={cambiarMostrar} />
            
            {
                equipos.map((equipo) => <Equipo 
                datos={equipo} 
                key={equipo.titulo} 
                colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
                eliminarColaborador={eliminarColaborador}
                actualizarColorEquipo={actualizarColorEquipo}
                like={like}
                />)
            }
            <Footer />
        </div>
        );
}

export default App;