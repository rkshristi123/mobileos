import React from "react"


const Card = () =>{

    var arr=[
        {
            heading:"Mobile Operating System",
            li1:"Android",
            li2:"Blackberry",
            li3:"iPhone",
            li4:"Windows Phone"
         },

         {
            heading:"Mobile manufactureres",
            li1:"Samsung",
            li2:"HTC",
            li3:"Micromax",
            li4:"Apple"
         }
    ]
    return(
      
    <div>
     {arr.map((user)=>(
    <div>
        <h1>{user.heading}</h1>
        <ul>
            <li>{user.li1}</li>
            <li>{user.li2}</li>
            <li>{user.li3}</li>
            <li>{user.li4}</li>
        </ul>
    </div>
     ))}
    </div>
    );
}

export default Card