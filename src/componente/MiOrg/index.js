//import React from 'react';
import "./MiOrg.css";

const MiOrg = (props) => {
        // const [mostrar, actualizarMostrar] = useState(true)
        // const manejarClick = () => {
        //         console.log("Mostrar/Ocultar elemento",!mostrar);
        //         actualizarMostrar(!mostrar)
        // }

        return <section className="orgSection">
                <div></div>
                <h3 className="title">Mi Organización</h3>
                <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
}

export default MiOrg