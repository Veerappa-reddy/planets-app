import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  console.log(itemDetails)

  const {name, imageUrl, description} = itemDetails
  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1>{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
