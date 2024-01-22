import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <span className='card_icon'>{props.icon}</span>
        <span className='card_name'>{props.name}</span>
        <span className='card_count'>{props.count}</span>
    </div>
  )
}

export default Card


