import React, { useEffect, useState } from "react"
const SingleColor=({rgb,weight,index,hexColor})=>{
    const bcg=rgb.join(',');
    const hexValue=`#${hexColor}`
    console.log(bcg)
    const [alert,setalert]=useState(false);
    useEffect(()=>{
        const timeout=setTimeout(()=>{
setalert(false);
        },3000)
        return ()=> clearTimeout(timeout)
    },[alert])
    return(
        <article
        className={`color ${index>10 && `color-light`}`}
        style={{backgroundColor:`rgb(${bcg})`}}
        onClick={()=>{setalert(true)
        navigator.clipboard.writeText(hexValue);
        }}
        >
            <p className="present-value">{weight}</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className="alert"> copied to clipboard</p>}
        </article>
    )
}
export default SingleColor;