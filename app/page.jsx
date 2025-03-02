import Post from "./Components/js/Post"
import Cover from "./Components/js/Cover"
import TelegramPost from "./Components/js/TelagramPost"


export default function Home(){
  return(
    <div>
        <Cover title="Все о Программировании" namePage="Изучаем" image="/allIt.jpg" isShowBtn={true}/>
        <Post title="Есть хорошиe Антивирусы" text="Первый это Malwarebytes очень хорошие он твоё устройство будет то что о может когда он примирял мое устройство то нашел..." textButton="Читать" url="../pages/posts/Antivirus" isNew={true}/>
        <Post title="Tilda vs Wordpress" text="Предлагаю несколько вариантов расширения текста, учитывая разные аспекты сравнения Tilda и WordPress..." textButton="Читать" url="../pages/posts/TildaVsWordpress" isNew={true}/>
        <TelegramPost title="Присоединяйся к нам" des="В наш канал в телеграмме" link="https://t.me/it_reviews_other" img="/allIt.jpg" widthImg="80" heightImg="80" textLink="Давай заходи"/>        
    </div>
  )
}