import { useEffect, useState } from "react";

const PuppyRoster = () => {
    // console.log ('i am working');
    const [puppyPlayers, setPuppyPlayers] = useState([])




    useEffect(() => {
     // console.log('im here')
     const getPuppies = async() => {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
        const data = await response.json();
        setPuppyPlayers(data.data.players)
        // console.log(data.data)
     }
     getPuppies();
    },[]);

    return (
        <>
        
        <h2>Contestants 🐕‍🦺 </h2>
        
        {
                puppyPlayers.slice(0, 20).map((puppy) => {
                return (
                    
                    <div key ={puppy.id}> <img src={puppy.imageUrl} alt={puppy.name}/>
                    <h3>{puppy.name}</h3>
                        
                    </div>
                    
                )
            })
        }
        </>
    )

}


export default PuppyRoster;

