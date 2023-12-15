
const PuppyDetails = ({selectedPuppy, setSelectedPuppy}) => {
    console.log("selected puppy from details",selectedPuppy)

 
 return (
    <div>
        <h1>Player Card</h1>
        <p>Player ID: {selectedPuppy.id}</p>
        <img src={selectedPuppy.imageUrl} alt={selectedPuppy.name}></img>
        <p>Name: {selectedPuppy.name}</p>
        <p>Breed: {selectedPuppy.breed}</p>
        <p>Status:{selectedPuppy.status}</p>
        
        {/* <Link to={`/`}>Go Back</Link> */}
        <button onClick={()=> setSelectedPuppy({})}>Back</button>
            
    </div>
            
     )};
                
            
        
       
      



export default PuppyDetails;