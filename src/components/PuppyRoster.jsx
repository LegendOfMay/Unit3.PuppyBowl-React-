import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PuppyDetails from "./PuppyDetails";



const PuppyRoster = () => {
    // console.log ('i am working');
    const [puppyPlayers, setPuppyPlayers] = useState([])
    const [selectedPuppy, setSelectedPuppy] = useState({})
    // console.log("Puppy Players", puppyPlayers)
    console.log("selected puppy", selectedPuppy)
    const { puppyId } = useParams();

    useEffect(() => {
        // console.log('testing')
        const getPuppies = async () => {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/');
            const data = await response.json();
            setPuppyPlayers(data.data.players)
            
        }
        getPuppies();
    }, []);
    // console.log(puppyPlayers.name)

    if (selectedPuppy.id) {
        
        // const selectedPuppy = puppyPlayers.find(puppy => puppy.id === parseInt(puppyId));
        // console.log("players from inside if", puppyPlayers)
        return (
            <PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy}/>
        );
    }

    return (
        <>
            <h2>Contestants 🐕‍🦺 </h2>
            {
                puppyPlayers.slice(0, 20).map((puppy) => {
                    return (
                        <div key={puppy.id}> <img src={puppy.imageUrl} alt={puppy.name}  onClick={()=>setSelectedPuppy(puppy)}/>
                            <h3>{puppy.name}</h3>
                            {/* <Link to={`/PuppyDetails/${puppy.id}`}>See Details</Link> */}
                        </div>
                    )
                })
            }
        </>
    )
}


export default PuppyRoster;

