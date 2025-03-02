function isLang(isLanguage, english, russia){
    if (isLanguage){
        return<div className="message">
                <div className="en">{english}</div>
                <br/>
                <div className="ru">{russia}</div>
            </div>
        
    }
    else{
        return <div className="message">
                {russia}
            </div>
        
    }
}

export default function AuthorSpeak(props){
    return <div className="author-speak">
            <div className="author">{props.author}</div>
            {isLang(props.isLang, props.eng, props.rus)}
        </div>
}