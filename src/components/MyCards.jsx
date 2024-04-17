const MyCard =({character})=>{
return(
    <div className="col-md-4">
<div className="card">
  <img src={character.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{character.name}</h5>
    <p className="card-text">{character.species}</p>
    <p className="card-text">{character.status}</p>
  </div>
</div>

    </div>
)
}
export default MyCard