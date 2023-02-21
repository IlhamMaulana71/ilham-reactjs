import React from "react"
import { useState } from "react";

function FunctionComponent({Landing}){
    
    const [tambah, setTambah] = useState(0);
    
    return(
        <div>
            <center><h1>SELAMAT DATANG DI KELAS {Landing}</h1>
            <p>You add {tambah} times</p>
             <button onClick={() => setTambah(tambah + 1)}>
                Add
            </button>
            </center>
        </div>
      )
    
}

export default FunctionComponent;

