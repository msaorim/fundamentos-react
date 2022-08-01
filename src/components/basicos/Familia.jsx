import React, { cloneElement } from "react";
//import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return(
        <div>
            {/* <FamiliaMembro nome="Marcelo" sobrenome={props.sobrenome }/>
            <FamiliaMembro nome="Selma" {...props} />
            <FamiliaMembro nome="Melissa" {...props} />
            <FamiliaMembro nome="Sophie" {...props} />
            <FamiliaMembro nome="Sabrina" sobrenome="Rodrigues Dutra" /> */}
            
            {/* {React.cloneElement(props.children, {...props})} */}

            {
                React.Children.map((el, i) => {
                    return cloneElement(el, {...props, key: i});
                })
            }
        </div>
    );
};