import cardStyle from './Card.module.css'

function Card(props){
    return (
        <div className={cardStyle.card}> 
            {props.children} 
        </div>
    );
}

export default Card;