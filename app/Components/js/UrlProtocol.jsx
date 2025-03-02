import { IoArrowRedoOutline } from "react-icons/io5"

export default function UrlProtocol(props){
    return(
        <a target="_blank" href={props.urlSiteDoc + props.url} className="link-pr">
            <span className="p-link-pr">{props.text}<IoArrowRedoOutline/></span>
        </a>
    )
}