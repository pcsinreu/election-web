import "./ProcesoElectoral.css"

const ProcesoElectoral = () =>{


    return(
        <div className="ProcesoElectoral">
            <h2>Proceso Electoral</h2>
            <img src={require('./proceso-electoral.png')} className="ProcesoElectoralLogo"  />
        </div>
    )

}

export default ProcesoElectoral;
