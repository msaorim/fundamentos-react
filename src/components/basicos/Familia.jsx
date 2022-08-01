import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return(
        <div>
            <FamiliaMembro nome="Marcelo" {...props} />
            <FamiliaMembro nome="Selma" {...props} />
            <FamiliaMembro nome="Melissa" {...props} />
            <FamiliaMembro nome="Sophie" {...props} />
            <FamiliaMembro nome="Sabrina" sobrenome="Rodrigues Dutra" />
        </div>
    )
}