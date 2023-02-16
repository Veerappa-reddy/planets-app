import './index.css'

const Player = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <div className="planets-container">
      <img src={imageUrl} alt={name} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Player
