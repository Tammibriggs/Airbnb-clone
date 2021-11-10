import './card.css'

function Card({src, title, description, price}) {
  return (
    <div className='card'>
      <img 
        src={src}
        alt='card'
      />
      <div className='card__info'>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  )
}

export default Card
