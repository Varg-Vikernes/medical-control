import React, { useState } from "react";
import dataExploracionFisica from '../../Utils/ExploracionFisica.json';

const InputLabel  = ({data}) =>{
   return(
   <div>
        {data.map((item, idx)=> (
            <div key={idx}>
                {/* Mapeo del archivo json exploracion fisica */}
                <label htmlFor=""> {item.name}</label>
                <input type="text" name="" id="" />
                  </div>
        ))}
    </div>
   )
}

const ExploracionF = () => {    
    const [mostrarOcultar , setMostrarOcultar] = useState(false)
    const view = () =>{
        setMostrarOcultar(!mostrarOcultar)
    }
    
    return(
     <>
    <button onClick={view} className="cta">
    <span><b>   {mostrarOcultar ? "Mostrar datos" : "Exploracion Fisica"} </b> </span>
    </button>
    {
        mostrarOcultar && (
            <>
            <div className="seven">
              <h1>  Exploracion Fisica</h1>
            </div>
            {[
                dataExploracionFisica.Fisica
            ].map((data, idx) => (
                <InputLabel data={data} key={idx} />
            ))}
            </>
        )
    }

    <button className="cta" onClick={view}>
        <span><b>{mostrarOcultar ? "ingrese los datos correctamente" : "Craneo Cara"}</b></span>
    </button>
    {
        mostrarOcultar &&(
  <>
            <div className="seven">
    <h1>Craneo cara</h1>
</div>
{[
    dataExploracionFisica.CraneoCara
].map((data, idx) => (
    <InputLabel data={data} key={idx} />
)) }
</>
    )
    }

<button className="cta " onClick={view}>
    <span><b>{mostrarOcultar ? "Introduce Correctamente los datos" : "Cuello"}</b></span>
</button>
{
    mostrarOcultar && (
        <>
        <div className="seven">
    <h1>Cuello</h1>
</div>
{[
    dataExploracionFisica.Cuello
].map((data, idx) => (
    <InputLabel data={data} key={idx} />
))}
        </>
    )
}

<button className="cta" onClick={view}>
    <span><b>{mostrarOcultar ? "Introduce correctamente los datos" : "Torax"}</b></span>
</button>
{
    mostrarOcultar && (
        <>
      <div className="seven">
    <h1>Torax</h1>
</div>
{[
    dataExploracionFisica.Torax
] .map((data,idx) => (
    <InputLabel data={data} key={idx} />
))}
        </>
    )
}


<button className="cta" onClick={view}>
    <span><b>{mostrarOcultar ? "Introduce los datos correctamente" : "Torax"}</b></span>
</button>
{
    mostrarOcultar && (
        <>
        <div className="seven">
    <h1>Abdomen</h1>
</div>
{[
    dataExploracionFisica.abdomen
].map((data, idx) => (
    <InputLabel data={data} key={idx} />
))}
        </>
    )
}
        </> 
    );
}

export default ExploracionF 