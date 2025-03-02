"use client"
import { useState } from "react"
import { articles } from '../data/data.for.search';

export default function CoverSearch(){
    const [query, setQuery] = useState('');

    // Фильтруем статьи по заголовку или содержимому
    const filteredArticles = articles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div className="cover-search">
        <h1>Поиск по сайту</h1>
        <input 
          type="text" 
          placeholder="Поиск..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="search-input"
        />
  
        <ul className="list-search">
          { filteredArticles.map(article => (
            <li key={article.id} style={{ marginBottom: '10px' }}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <button className="btn"><a href={`../posts/${article.url}`}>Читать</a></button>
            </li>
          )) }
        </ul>
        <br/>
      </div>
    );
}