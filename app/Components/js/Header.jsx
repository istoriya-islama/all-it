import Link from "next/link";
import { FaSearch } from "react-icons/fa"

export default function Header(){
    return(
        <header>
            <h1>Все о Программировании</h1>
            <nav>
                 <ul>
                    <li><Link href='/'>Главная</Link></li>
                    <li><Link href="/pages/post">Статьи</Link></li>
                    <li className="search"><Link href="/pages/search"><FaSearch size={20} color="white" /></Link></li>
                    <li className="btn"><Link href="https://t.me/it_reviews_other">Зайди к нам</Link></li>
                </ul>
            </nav>
        </header>
    )
}