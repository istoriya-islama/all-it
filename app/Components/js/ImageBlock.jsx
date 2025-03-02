export default function ImageBlock(props){
    const image = props.imagePath;
    const text = props.textImage;
    const altImage = props.imageAlt

    return <div className="image-block">
            <img src={image} alt={altImage} /><br />
            <p>{text}</p>
        </div>
}