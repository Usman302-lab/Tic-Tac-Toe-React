import {Icon} from '../Icon/Icon'
import "./card.css"
export const Card = ({iconName,onPlay}) => {
  return (
    <div className='card' onClick={onPlay}>
        <Icon iconName={iconName}/>
    </div>
  )
}
