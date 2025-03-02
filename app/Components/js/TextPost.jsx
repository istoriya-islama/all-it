export default function TextPost(props){
    return (
        <div className="text-post">
            <div className="padding-box">
                <p>{props.text}</p>
            </div>
        </div>
    )
}