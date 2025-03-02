import Image from "next/image"
import Link from "next/link"

function isShow(isTrue){
    if (isTrue){
        return(
            <div>
                <Link href="pages/posts/HTML">
                    <button className="html">HTML</button>
                </Link>
                <Link href="pages/posts/Python">
                    <button className="python">Python</button>
                </Link>
                <Link href="pages/posts/http">
                    <button className="http">http:</button>
                </Link>
                <Link href="pages/posts/CSharp">
                    <button className="csharp">C#</button>
                </Link>
                <Link href="pages/posts/php">
                    <button className="php">PHP</button>
                </Link>
                <Link href="pages/posts/com">
                    <button className="com">.com</button>
                </Link>
                <Link href="pages/posts/JavaScript">
                    <button className="js">JS</button>
                </Link>
                <Link href="pages/posts/CSS">
                    <button className="css">CSS</button>
                </Link>
                <Link href="pages/posts/Ruby">
                    <button className="ruby">Ruby</button>
                </Link>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

export default function Cover(props){
    return(
        <div className="cover">
            <h3>{props.title}</h3>
            <h1>{props.namePage}</h1>
            <Link href="https://t.me/it_reviews_other">
                <Image src={props.image} width={100} height={100} alt="cover"/>
            </Link>
            {isShow(props.isShowBtn)}         
        </div>
    )
}