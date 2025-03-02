import Cover from "../../Components/js/Cover"
import Post from "../../Components/js/Post"

export const metadata = {
    title: "Сатьи",
    description: "Сатьи о Программировании"
  };

export default function Posts(){
    return(
        <div>
            <Cover title="Все о Программировании" namePage="Статьи" image="/allIt.jpg" isShowBtn={false}/>
            <Post title="HTML" text="HTML — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают..." textButton="Читать" url="../pages/posts/HTML"/>
            <Post title="Python" text="Python является мультипарадигменным языком программирования, поддерживающим императивное, процедурное..." textButton="Читать" url="../pages/posts/Python"/>
            <Post title="C#" text="C# (произносится си шарп) — объектно-ориентированный язык программирования общего назначения. Разработан в..." textButton="Читать" url="../pages/posts/CSharp"/>
            <Post title="http:" text="HTTP (англ. Hypertext Transfer Protocol — «протокол передачи гипертекста») — сетевой протокол прикладного уровня, который изначально..." textButton="Читать" url="../pages/posts/http"/>
            <Post title="PHP" text="PHP (англ. PHP: Hypertext Preprocessor — «PHP: препроцессор гипертекста»; первоначально PHP/FI (Personal Home Page / Form Interpreter), а позже..." textButton="Читать" url="../pages/posts/php"/>
            <Post title=".com" text="Доменное имя .com — домен верхнего уровня (TLD) в системе доменных имён интернет-сети. Его название происходит от..." textButton="Читать" url="../pages/posts/com"/>
            <Post title="JavaScript" text="JavaScript (англ. /ˈdʒɑːvəskrɪpt/; аббр. JS) — мультипарадигменный язык программирования. Поддерживает..." textButton="Читать" url="../pages/posts/JavaScript"/>
            <Post title="Ruby" text="Ruby (англ. ruby — рубин, произносится ['ru:bɪ] — ру́би) — динамический, рефлективный, интерпретируемый..." textButton="Читать" url="../pages/posts/Ruby"/>
            <Post title="CSS" text="CSS — формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием..." textButton="Читать" url="../pages/posts/CSS"/>
            <Post title="Есть хорошиe Антивирусы" text="Первый это Malwarebytes очень хороший антивирус, который защитит ваше устройство. Когда я..." textButton="Читать" url="../pages/posts/Antivirus" isNew={true}/>
            <Post title="Tilda vs Wordpress" text="Предлагаю несколько вариантов расширения текста, учитывая разные аспекты сравнения Tilda и WordPress..." textButton="Читать" url="../pages/posts/TildaVsWordpress" isNew={true}/>
        </div>
    )
}