import { Link } from "react-router-dom";

export default function LinkBtn( {content, to, bgColor, onClick} ){
    return(
        <Link to={to}>
            <button style={{backgroundColor: `${bgColor}`}} onClick={onClick}>{content}</button>
        </Link>
    )
}