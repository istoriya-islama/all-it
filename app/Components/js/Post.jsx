import Link from "next/link";

function isShow(isTrue){
    if (isTrue){
        return(
            <span className="new">
                <span className="hover-new-text">NEW</span>
            </span>
        )
    }
    else{
        return null
    }
}




export default function Post(props){
    return(
        <div className="post">
            {isShow(props.isNew)}
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link href={props.url}>
                <button>{props.textButton}</button>
            </Link>
        </div>
    )
}