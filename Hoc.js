import React, { useState } from 'react'

const UpdateComponent = OrginalComponent=>{
   
    function NewComponent(props){
        const[count,setcount]=useState(0)
        const increment=()=>{
            setcount(count+1)
            console.log('Clicked');
        }
        return(
            <OrginalComponent count={count} increment={increment} {...props}/>
        )
    }
    return NewComponent
}


export default UpdateComponent