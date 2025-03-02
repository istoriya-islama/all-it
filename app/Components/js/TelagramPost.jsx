import Link from "next/link"
import Image from "next/image"

export default function TelgramPost(props){
    return(
        <div className="tel-post">
            <h4>{props.title}</h4>
            <p>{props.des}</p>
            <Link href={props.link}>
                <button>{props.textLink}</button>
            </Link>
            <Link href={props.link}>
                <Image src={props.img} width={props.widthImg} height={props.heightImg} alt="tel-img"/>
            </Link>
        </div>
    )
}