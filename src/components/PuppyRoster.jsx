import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PuppyRoster = () => {
    // console.log ('i am working');
    const [puppyPlayers, setPuppyPlayers] = useState([])

    useEffect(() => {
        // console.log('testing')
        const getPuppies = async () => {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');
            const data = await response.json();
            setPuppyPlayers(data.data.players)
            
        }
        getPuppies();
    }, []);
    // console.log(puppyPlayers.name)
    return (
        <>
            <h2>Contestants 🐕‍🦺 </h2>
            {
                puppyPlayers.slice(0, 20).map((puppy) => {
                    return (
                        <div key={puppy.id}> <img src={puppy.imageUrl} alt={puppy.name} />
                            <h3>{puppy.name}</h3>
                            <Link to={`/PuppyDetails/${puppy.id}`}>See Details</Link>
                        </div>
                    )
                })
            }
        </>
    )
}


export default PuppyRoster;

