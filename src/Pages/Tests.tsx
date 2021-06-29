import React, { useEffect } from 'react'

const Tests = () => {

    useEffect(()=>{
        fetch('http://courierdemo.azurewebsites.net/api/packages/getPending?username=jsanchez')
    .then(response => {
        // handle the response
        console.log(response.json());
        
    })
    .catch(error => {
        // handle the error
        console.log(error);
        
    });
    })
    return (
        <div>
            fuckoff
        </div>
    )
}

export default Tests
