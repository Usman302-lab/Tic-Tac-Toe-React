import {Icon} from '../Icon/Icon'
import "./card.css"
export const Card = ({onPlay,player,index,winner}) => {

  let iconName="";
  if(player==="X" && !winner){
    iconName="cross"
  }else if(player==="0" && !winner){
    iconName="circle"
  }else{
    iconName="pen"
  }
  return (
    <div className='card' onClick={() => onPlay(index)}>
        <Icon iconName={iconName}/>
    </div>
  )
}
