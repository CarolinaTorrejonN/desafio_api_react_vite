import MyCard from "./MyCards"
const Grilla=({characters})=>{
    return (
        <div className="row">
{characters &&
characters.map((character)=>(
<MyCard character={character}
key={character.id}/>

))
}
        </div>
    )
}
export default Grilla