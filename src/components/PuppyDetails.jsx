import { useParams } from "react-router-dom";
const PuppyDetails = ({puppyPlayers}) => {
 const { puppyId } = useParams();

 
 return (
    <div>
        <h1>Player Card</h1>
        <p>Player ID: {puppyId}</p>
      

    </div>
 )
};


export default PuppyDetails;