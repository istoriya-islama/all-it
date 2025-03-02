import { Rubik_Vinyl } from "next/font/google";
import Cover from "../../../Components/js/Cover"

export const metadata = {
    title: "C#",
    description: "Язык програмиорование C#"
  };

export default function CSharp(){
    return(
        <div>
            <Cover title="Все о Программировании" namePage="C#| Си Шарп" image="/allIt.jpg" isShowBtn={false}/>
            <div className="text">
                <q>C# (произносится си шарп) — объектно-ориентированный язык программирования общего назначения. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы Microsoft .NET Framework и .NET Core. Впоследствии был стандартизирован как ECMA-334 и ISO/IEC 23270.<br/><br/>

                C# относится к семье языков с C-подобным синтаксисом, из них его синтаксис наиболее близок к C++ и Java. Язык имеет статическую типизацию, поддерживает полиморфизм, перегрузку операторов (в том числе операторов явного и неявного приведения типа), делегаты, атрибуты, события, переменные, свойства, обобщённые типы и методы, итераторы, анонимные функции с поддержкой замыканий, LINQ, исключения, комментарии в формате XML.<br/><br/>

                Переняв многое от своих предшественников — языков C++, Delphi, Модула, Smalltalk и, в особенности, Java — С#, опираясь на практику их использования, исключает некоторые модели, зарекомендовавшие себя как проблематичные при разработке программных систем, например, C# в отличие от C++ не поддерживает множественное наследование классов (между тем допускается множественная реализация интерфейсов).</q>
                <br/>
                <br/>
                <h2>Особенности языка</h2>
                <p>С# разрабатывался как язык программирования прикладного уровня для CLR и, как таковой, зависит, прежде всего, от возможностей самой CLR. Это касается, прежде всего, системы типов С#, которая отражает BCL. Присутствие или отсутствие тех или иных выразительных особенностей языка диктуется тем, может ли конкретная языковая особенность быть транслирована в соответствующие конструкции CLR. Так, с развитием CLR от версии 1.1 к 2.0 значительно обогатился и сам C#; подобного взаимодействия следует ожидать и в дальнейшем (однако, эта закономерность была нарушена с выходом C# 3.0, представляющего собой расширения языка, не опирающиеся на расширения платформы .NET). CLR предоставляет С#, как и всем другим .NET-ориентированным языкам, многие возможности, которых лишены «классические» языки программирования. Например, сборка мусора не реализована в самом C#, а производится CLR для программ, написанных на C#, точно так же, как это делается для программ на VB.NET, J# и др.</p>
                <br/>
                <br/>
                <h2>Название языка</h2>
                <p>Название «Си шарп» (от англ. sharp — диез) происходит от буквенной музыкальной нотации, где латинской букве C соответствует нота До, а знак диез (англ. sharp) означает повышение соответствующего ноте звука на полутон, что аналогично названию языка C++, где «++» обозначает инкремент переменной. Название также является игрой с цепочкой C → C++ → C++++(C#), так как символ «#» можно представить состоящим из 4 знаков «+».<br/><br/>

                Из-за технических ограничений на отображение (стандартные шрифты, браузеры и т. д.), а также из-за того, что знак диеза ♯ не представлен на стандартной клавиатуре компьютера, при записи имени языка программирования используют знак решётки (#). Это соглашение отражено в Спецификации языка C# ECMA-334. Тем не менее, на практике (например, при размещении рекламы и коробочном дизайне), «Майкрософт» использует знак диеза.<br/><br/>

                Названия языков программирования не принято переводить, поэтому язык называют, используя транскрипцию, — «Си шарп».</p>
                <br/>
                <br/>
                <h2>Стандартизация</h2>
                <p>C# стандартизирован в ECMA (ECMA-334) и ISO (ISO/IEC 23270).<br/><br/>

                Известно как минимум о трёх независимых реализациях C#, базирующихся на этой спецификации и находящихся в настоящее время на различных стадиях разработки:</p>
                <br/>
                <ul>
                    <li>Mono, начата компанией Ximian, продолжена её покупателем и преемником Novell, а затем Xamarin.</li>
                    <li>dotGNU и Portable.NET, разрабатываемые Free Software Foundation.</li>
                </ul>
                <br/>
                <br/>
                <h2>Версии</h2>
                <table>
                    <tr>
                        <th>Версия</th>
                        <th>Дата выхода</th>
                        <th>Совместимые версии .NET</th>
                        <th>Совместимая версия Visual Studio</th>
                    </tr>
                    <tr>
                        <td>C# 1.0</td>
                        <td>Январь 2002</td>
                        <td>.NET Framework 1.0</td>
                        <td>Visual Studio .NET (2002)</td>
                    </tr>
                    <tr>
                        <td>C# 1.1
                            <br/>
                            C# 1.2
                        </td>
                        <td>Апрель 2003</td>
                        <td>.NET Framework 1.1</td>
                        <td>Visual Studio .NET 2003</td>
                    </tr>
                    <tr>
                        <td>C# 2.0</td>
                        <td>Ноябрь 2005</td>
                        <td>.NET Framework 2.0<br/>
                        .NET Framework 3.0</td>
                        <td>Visual Studio 2005</td>
                    </tr>
                    <tr>
                        <td>C# 3.0</td>
                        <td>Ноябрь 2007</td>
                        <td>.NET Framework 2.0 (кроме LINQ)<br/>
                        .NET Framework 3.0 (кроме LINQ)<br/>
                        .NET Framework 3.5</td>
                        <td>Visual Studio 2008</td>
                    </tr>
                    <tr>
                        <td>C# 4.0</td>
                        <td>Апрель 2010</td>
                        <td>.NET Framework 4.0</td>
                        <td>Visual Studio 2010</td>
                    </tr>
                    <tr>
                        <td>C# 5.0</td>
                        <td>Август 2012</td>
                        <td>.NET Framework 4.5</td>
                        <td>Visual Studio 2012</td>
                    </tr>
                    <tr>
                        <td>C# 6.0</td>
                        <td>Июль 2015</td>
                        <td>.NET Framework 4.6<br/>
                        .NET Core 1.0<br/>
                        .NET Core 1.1</td>
                        <td>Visual Studio 2015</td>
                    </tr>
                    <tr>
                        <td>C# 7.0</td>
                        <td>Март 2017</td>
                        <td>.NET Framework 4.6.2<br/>
                        .NET Framework 4.7</td>
                        <td>Visual Studio 2017 15.0</td>
                    </tr>
                    <tr>
                        <td>C# 7.1</td>
                        <td>Август 2017</td>
                        <td>.NET Core 2.0</td>
                        <td>Visual Studio 2017 15.3</td>
                    </tr>
                    <tr>
                        <td>C# 7.2</td>
                        <td>Ноябрь 2017</td>
                        <td>Нету</td>
                        <td>Visual Studio 2017 15.5</td>
                    </tr>
                    <tr>
                        <td>C# 7.3</td>
                        <td>Май 2018</td>
                        <td>.NET Core 2.1<br/>
                        .NET Core 2.2.<br/>
                        .NET Framework 4.8</td>
                        <td>Visual Studio 2017 15.7</td>
                    </tr>
                    <tr>
                        <td>C# 8.0</td>
                        <td>Сентябрь 2019</td>
                        <td>.NET Core 3.0<br/>
                        .NET Core 3.1<br/>
                        .NET Framework 4.8</td>
                        <td>Visual Studio 2019 16.3</td>
                    </tr>
                    <tr>
                        <td>C# 9.0</td>
                        <td>Сентябрь 2020</td>
                        <td>.NET 5.0</td>
                        <td>Visual Studio 2019 16.8</td>
                    </tr>
                    <tr>
                        <td>C# 10.0</td>
                        <td>Июль 2021</td>
                        <td>.NET 6.0</td>
                        <td>Visual Studio 2022 17.0</td>
                    </tr>
                    <tr>
                        <td>C# 11.0</td>
                        <td>Ноябрь 2022</td>
                        <td>.NET 7.0</td>
                        <td>Visual Studio 2022 17.4</td>
                    </tr>
                    <tr>
                        <td>C# 12.0</td>
                        <td>Ноябрь 2023</td>
                        <td>.NET 8.0</td>
                        <td>Visual Studio 2022 17.8</td>
                    </tr>
                </table>
                <br/>
                <h5>Общая информация по версиям</h5>
                <table>
                    <tr>
                        <th>Версия</th>
                        <th>Нововведения</th>
                    </tr>
                    <tr>
                        <td>C# 2.0</td>
                        <td>
                            <ul className="list">
                                <li>Частичные типы</li>
                                <li>Обобщённые типы (generics)</li>
                                <li>Итераторы и ключевое слово <span className="code-mini">yield</span></li>
                                <li>Анонимные методы</li>
                                <li>Оператор null-объединения</li>
                                <li>Nullable-типы</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 3.0</td>
                        <td>
                            <ul className="list">
                                <li>Запросы, интегрированные в язык (LINQ)</li>
                                <li>Инициализаторы объектов и коллекций</li>
                                <li>Лямбда-выражения</li>
                                <li>Деревья выражений</li>
                                <li>Неявная типизация и ключевое слово <span className="code-mini">var</span></li>
                                <li>Анонимные типы</li>
                                <li>Методы расширения</li>
                                <li>Автоматические свойства</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 4.0</td>
                        <td><ul className="list">
                            <li>Динамическое связывание и ключевое слово <span className="code-mini">dynamic</span></li>
                            <li>Именованные и опциональные аргументы</li>
                            <li>Обобщенная ковариантность и контрвариантность</li>
                            <li>Библиотека TPL, концепция задач и классы <span className="code-mni">Task</span>, <span className="code-mni">Parallel</span></li>
                            <li>Класс <span className="code-mini">MemoryCache</span></li>
                            <li>Классы параллельных коллекций</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>C# 5.0</td>
                        <td>
                            <ul className="list">
                                <li>Шаблон TAP</li>
                                <li>Асинхронные методы <span className="code-mini">async</span> и <span className="code-mini">await</span></li>
                                <li>Сведения о вызывающем объекте</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 6.0</td>
                        <td>
                            <ul className="list">
                                <li>Компилятор как сервис</li>
                                <li>Импорт членов статических типов в пространство имён</li>
                                <li>Фильтры исключений</li>
                                <li><span className="code-mini">await</span> в блоках <span className="code-mini">catch</span>/<span className="code-mini">finally</span></li>
                                <li>Инициализаторы автосвойств</li>
                                <li>Автосвойства только для чтения</li>
                                <li>null-условные операции (<span className="code-mini">?.</span> и <span className="code-mini">?[])</span></li>
                                <li>Интерполяция строк</li>
                                <li>Оператор <span className="code-mini">nameof</span></li>
                                <li>Инициализатор словаря</li>
                                <li>Функции сжатые до выражений</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 7.0</td>
                        <td>
                            <ul className="list">
                                <li><span className="code-mini">out</span>-переменные</li>
                                <li>Сопоставление с шаблоном</li>
                                <li>Шаблоны с <span className="code-mini">is</span></li>
                                <li>Шаблоны и выражение <span className="code-mini">switch</span></li>
                                <li>Кортежи</li>
                                <li>Распаковка кортежей (деконструкторы)</li>
                                <li>Локальные функции</li>
                                <li>Улучшения литералов</li>
                                <li>Локальные переменные и возвращаемые значения по ссылке</li>
                                <li>Расширение списка типов, возвращаемых асинхронными методами</li>
                                <li>Больше членов класса в виде выражений</li>
                                <li><span className="code-mini">throw</span> выражения</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 8.0</td>
                        <td>
                            <ul className="list">
                                <li>Члены только для чтения</li>
                                <li>Члены интерфейса по умолчанию</li>
                                <li>Улучшения сопоставления шаблонов</li>
                                <li>Объявления using</li>
                                <li>Статические локальные функции</li>
                                <li>Удаляемые ссылочные структуры</li>
                                <li>Ссылочные типы, допускающие значение NULL</li>
                                <li>Асинхронные потоки</li>
                                <li>Индексы и диапазоны</li>
                                <li>Присваивание объединения со значением NULL</li>
                                <li>Неуправляемые сконструированные типы</li>
                                <li>Выражения stackalloc во вложенных выражениях</li>
                                <li>Больше членов класса в виде выражений</li>
                                <li>Улучшения интерполированных строк</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 9.0</td>
                        <td>
                            <ul className="list">
                                <li>Оператор объединения с null (??)</li>
                                <li>Пустые параметры для лямбда-выражений</li>
                                <li>Native Int: nint, nuint</li>
                                <li>Дизъюнктное объединение</li>
                                <li>Добавлено <span className="code-mini">with</span>-выражения</li>
                                <li>новый модификатор <span className="code-mini">initonly</span></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 10.0</td>
                        <td>
                            <ul className="list">
                                <li>Добавление <span className="code-mini">role="alert"</span> атрибуты сообщений</li>
                                <li>Обновления <span className="code-mini">Counter</span> компонент для добавления <span className="code-mini">role="status"</span></li>
                                <li>Замена ul в <span className="code-mini">NavBar</span> компонент для <span className="code-mini">nav</span></li>
                                <li>Новое название кнопки переключения <span className="code-mini">NavBar</span></li>
                                <li>Переход к использованию более семантической разметки</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>C# 11.0</td>
                        <td>
                            <ul className="list">
                                <li>Необработанные строковые литералы</li>
                                <li>Поддержка универсальной математики</li>
                                <li>Универсальные атрибуты</li>
                                <li>Строковые литералы UTF-8</li>
                                <li>Новые строки в выражениях интерполяции строк</li>
                                <li>Шаблоны списка</li>
                                <li>Локальные типы файлов</li>
                                <li>Обязательные элементы</li>
                                <li>Автоматические структуры по умолчанию</li>
                                <li>Сопоставление <span className="code-mini">Span{"<char>"}</span> шаблонов для константы string</li>
                                <li>Расширенные <span className="code-mini">nameof</span> область</li>
                                <li>Числовой <span className="code-mini">intPtr</span></li>
                                <li><span className="code-mini">ref</span> поля и <span className="code-mini">scoped ref</span></li>
                                <li>Улучшенное преобразование групп методов для делегирования.</li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <br/>
                <h3>Версия 1.0</h3>
                <p>Проект C# был начат в декабре 1998 и получил кодовое название COOL (C-style Object Oriented Language). Версия 1.0 была анонсирована вместе с платформой .NET в июне 2000 года, тогда же появилась и первая общедоступная бета-версия; C# 1.0 окончательно вышел вместе с Microsoft Visual Studio .NET в феврале 2002 года.<br/><br/>

                Первая версия C# напоминала по своим возможностям Java 1.4, несколько их расширяя: так, в C# имелись свойства (выглядящие в коде как поля объекта, но на деле вызывающие при обращении к ним методы класса), индексаторы (подобные свойствам, но принимающие параметр как индекс массива), события, делегаты, циклы <span className="code-mini">foreach</span>, структуры, передаваемые по значению, автоматическое преобразование встроенных типов в объекты при необходимости (boxing), атрибуты, встроенные средства взаимодействия с неуправляемым кодом (DLL, COM) и прочее.<br/><br/>

                Кроме того, в C# решено было перенести некоторые возможности C++, отсутствовавшие в Java: беззнаковые типы, перегрузку операторов (с некоторыми ограничениями, в отличие от C++), передача параметров в метод по ссылке, методы с переменным числом параметров, оператор <span className="code-mini">goto</span> (с ограничениями). Также в C# оставили ограниченную возможность работы с указателями — в местах кода, специально обозначенных словом <span className="code-mini">unsafe</span> и при указании специальной опции компилятору.</p>
                <br/>
                <h3>Версия 2.0</h3>
                <p>Проект спецификации C# 2.0 впервые был опубликован Microsoft в октябре 2003 года; в 2004 году выходили бета-версии (проект с кодовым названием Whidbey), C# 2.0 окончательно вышел 7 ноября 2005 года вместе с Visual Studio 2005 и .NET 2.0.</p>
                <h4>Новые возможности в версии 2.0</h4>
                <ul className="list">
                    <li>Частичные типы (разделение реализации класса более чем на один файл).</li>
                    <li>Обобщённые, или параметризованные типы (generics). В отличие от шаблонов C++, они поддерживают некоторые дополнительные возможности и работают на уровне виртуальной машины. Вместе с тем, параметрами обобщённого типа не могут быть выражения, они не могут быть полностью или частично специализированы, не поддерживают шаблонных параметров по умолчанию, от шаблонного параметра нельзя наследоваться, и т. д.</li>
                    <li>Новая форма итератора, позволяющая создавать сопрограммы с помощью ключевого слова <span className="code-mini">yeild</span>, подобно Python и Ruby.</li>
                    <li>Анонимные методы, обеспечивающие функциональность замыкания.</li>
                    <li>Оператор null-объединения: <span className="code-mini">'??': return obj1 ?? obj2;</span> означает (в нотации C# 1.0) <span className="code-mini">return obj1!=null ? obj1 : obj2;</span>.</li>
                    <li>Обнуляемые (nullable) типы — значения (обозначаемые вопросительным знаком, например, <span className="code-mini">int? i = null;</span>), представляющие собой те же самые типы-значения, способные принимать также значение <span className="code-mini">null</span>. Такие типы позволяют улучшить взаимодействие с базами данных через язык SQL.</li>
                    <li>Поддержка 64-разрядных вычислений, что кроме всего прочего, позволяет увеличить адресное пространство и использовать 64-разрядные примитивные типы данных.</li>
                </ul>
                <br/>
                <h3>Версия 3.0</h3>
                <p>В июне 2004 года Андерс Хейлсберг впервые рассказал на сайте Microsoft о планируемых расширениях языка в C#3.0. В сентябре 2005 года вышли проект спецификации C# 3.0 и бета-версия C# 3.0, устанавливаемая в виде дополнения к существующим Visual Studio 2005 и .NET 2.0. Окончательно эта версия языка вошла в Visual Studio 2008 и .NET 3.5.</p>
                <h4>Новые возможности в версии 3.0</h4>
                <p>В C# 3.0 появились следующие радикальные добавления к языку:</p>
                <ul className="list">
                    <li>ключевые слова <span className="code-mini">select, from, where</span>, позволяющие делать запросы из XML документов, коллекций и т. п. Эти запросы имеют сходство с запросами SQL и реализуются компонентом LINQ. (Сама фраза «language integrated query» переводится «запрос, интегрированный в язык».)</li>
                    <li className="padding-hover">Инициализация объекта вместе с его свойствами:
                        <div className="code">
                            Customer c = new Customer();<br/>
                            c.Name = "James"; c.Age=30;
                        </div>
                        можно записать как
                        <div className="code-big-mini">
                        Customer c = new Customer {"{ Name = \"James\", Age = 30 }"};
                        </div>
                    </li>
                    <li className="padding-hover">Лямбда-выражения:
                        <div className="code-big-mini">listOfFoo.Where(delegate(Foo x) {"{ return x.size > 10; }"});</div>
                        теперь можно записать как
                        <div className="code-big-mini">listOfFoo.Where(x {"=>"} x.size {">"} 10);</div>
                    </li>
                    <li>Деревья выражений:<br/>
                        лямбда-выражения теперь могут представляться в виде структуры данных, доступной для обхода во время выполнения, тем самым позволяя транслировать строго типизированные C#-выражения в другие домены (например, выражения SQL).
                    </li>
                    <li>Неявная типизация: Вывод типов локальной переменной. Для неявной типизации вместо названия типа данных используется ключевое слово var. Затем уже при компиляции компилятор сам выводит тип данных исходя из присвоенного значения: <span className="code-mini">var x = "hello";</span> вместо <span className="code-mini">string x = "hello";</span>
                    </li>
                    <li>Анонимные типы: <span className="code-mini">var x = new {"{ Name = \"Muhammad\" }"};</span></li>
                    <li className="padding-hover">Методы расширения. Появилась возможность добавления новых методов в уже существующие классы. Реализуется с помощью ключевого слова this при первом параметре статической функции статического класса.
                        <div className="code">
                        public static class StringExtensions<br/>
                        {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static int ToInt32(this string val)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Int32.Parse(val);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        {"}"}<br/>
                        // ...<br/>
                        string s = "10";<br/>
                        int x = s.ToInt32();
                        </div>
                    </li>
                    <li className="padding-hover">Автоматические свойства: компилятор сгенерирует закрытое (private) поле и соответствующие аксессор и мутатор для кода вида
                       <div className="code-big-mini">public string Name {"{ get; private set; }"}</div>
                    </li>
                </ul>
                <p>C# 3.0 совместим с C# 2.0 по генерируемому MSIL-коду; улучшения в языке — чисто синтаксические и реализуются на этапе компиляции. Например, многие из интегрированных запросов LINQ можно осуществить, используя безымянные делегаты в сочетании с предикатными методами над контейнерами наподобие <span className="code-mini">List.FindAll</span> и <span className="code-mini">List.RemoveAll</span>.</p>
                <br/>
                <h3>Версия 4.0</h3>
                <p>Превью C# 4.0 было представлено в конце 2008 года, вместе с CTP-версией Visual Studio 2010.<br/><br/>

                Visual Basic 10.0 и C# 4.0 были выпущены в апреле 2010 года, одновременно с выпуском Visual Studio 2010.</p>
                <h4>Новые возможности в версии 4.0</h4>
                <ul className="list">
                    <li>Возможность использования позднего связывания, для использования:
                        <ul className="in-list">
                            <li >с языками с динамической типизацией (<a href="../Python">Python</a>, <a href="../Ruby">Ruby</a>)</li>
                            <li>с COM-объектами</li>
                            <li>отражения (reflection)</li>
                            <li>объектов с изменяемой структурой (DOM). Появляется ключевое слово <span className="code-mini">dynamic</span>.</li>
                        </ul>
                    </li>
                    <li>Именованные и опциональные параметры</li>
                    <li>Новые возможности COM interop</li>
                    <li>Ковариантность и контравариантность обобщенных интерфейсов и делегатов</li>
                    <li>Контракты в коде (Code Contracts)</li>
                    <li>Библиотека параллельных задач TPL (Task Parallel Library), концепция задач и классы <span className="code-mini">Task</span>, <span className="code-mini">TaskFactory</span>, <span className="code-mini">Parallel</span></li>
                    <li>Добавлен класс <span className="code-mini">MemoryCache</span>, который предназначен для кэширования контента. Он похож на класс <span className="code-mini">Cache</span> ASP.NET, но его можно использовать при написании веб- / графических / консольных приложений.</li>
                    <li>Добавлено пространство имен System.Collections.Concurrent и новые классы параллельных коллекций (ConcurrentQueue, ConcurrentStack, ConcurrentBag,…), которые предоставляют не только большую эффективность, но и более полную потокобезопасность.</li>
                </ul>
                <br/>
                <p>Примеры:</p>
                <br/>
                <div className="code">
                    dynamic calc = GetCalculator();<br/>
                    int sum = calc.Add(10, 20); // Динамический вызов
                </div>
                <br/>
                <div className="code">public void SomeMethod(int x, int y = 5, int z = 7); // Опциональные параметры</div>
                <br/>
                <h3>Версия 5.0</h3>
                <h4>Новые возможности в версии 5.0</h4>
                <ul className="list">
                    <li>Шаблон TAP (Task-based Asynchronous Pattern). TAP использует один метод для представления инициализации и завершения асинхронной операции.</li>
                    <li>Асинхронные методы (<span className="code-mini">async</span> и <span className="code-mini">await</span>) — как реализация шаблона TAP.</li>
                    <li>Сведения о вызывающем объекте</li>
                </ul>
                <br/>
                <h3>Версия 6.0</h3>
                <h4>Новые возможности в версии 6.0</h4>
                <ul className="list-code">
                    <li>null-условные операторы. Добавлены новые операторы: ?. и ?[]:<br/>
                        <div className="code-big-mini">
                        int? length = customers?.Length; // null if customers is null<br/>
                        Customer first = customers?[0];  // null if customers is null
                        </div>
                    </li>
                    <li>Функции сжатые до выражений (expression-bodied functions). Теперь определение метода может быть задано с использованием лямбда-синтаксиса:<br/>
                        <div className="code-big-mini">public Point Move(int dx, int dy) {"=>"} new Point(x + dx, y + dy);</div>
                    </li>
                    <li>Инициализаторы автосвойств. Автосвойства теперь можно инициализировать при объявлении:<br/>
                        <div className="code-big-mini">public string First {"{ get; set; }"} = "Jane";</div>
                    </li>
                    <li>Автосвойства только для чтения. Автосвойства теперь могут быть объявлены без сеттеров:<br/>
                        <div className="code-big-mini">public string First {"{ get; }"} = "Jane";</div>
                    </li>
                    <li>Инициализаторы индексов. Теперь можно инициализировать не только объекты и коллекции, но и словари:<br/>
                        <div className="code-big-mini">
                            var numbers = new Dictionary{"<int, string>"} {"{"}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[7] = "seven",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[9] = "nine",<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[13] = "thirteen"<br/>
                            {"}"};
                        </div>
                    </li>
                    <li>Интерполяция строк. Вместо использования конструкций с <span className="code-mini">String.Format()</span>, например:<br/>
                      <div className="code-big-mini">var s = String.Format("{"{0}"} is {"{1}"} year{"{{s}}"} old", p.Name, p.Age);</div><br/>
                      теперь можно размещать код прямо в строке:<br/>
                      <div className="code-big-mini">теперь можно размещать код прямо в строке:</div>
                    </li>
                    <li>Фильтры исключений. Появилась возможность задавать условия для блоков <span className="code-mini">catch</span>:<br/>
                       <div className="code-big-mini">try {"{ … }"} catch (Exception e) when (Log(e)) {"{ … }"}</div>
                    </li>
                    <li>Импорт статических функций типов. Теперь доступ к статическим членам типов возможен без указания полного имени этих членов:<br/>
                       <div className="code-big-mini">
                       using static System.Console;<br/>
                       using static System.Math;<br/>
                       class Program<br/>
                       {"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;static void Main()<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WriteLine(Sqrt(3*3 + 4*4));<br/> 
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                       {"}"}
                       </div>
                    </li>
                    <li>Оператор <span className="code-mini">nameof</span>. Новый оператор, который возвращает компактное строковое представление для переданного в качестве аргумента типа:<br/>
                      <div className="code-big-mini">WriteLine(nameof(person.Address.ZipCode)); // prints "ZipCode"</div>
                    </li>
                    <li>Для асинхронного программирования была добавлена возможность использования операторов <span className="code-mini">await</span> внутри блоков <span className="code-mini">catch</span> и <span className="code-mini">finally</span>:<br/>
                       <div className="code-big-mini">
                       Resource res = null;<br/>
                       try<br/>
                       {"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = await Resource.OpenAsync(…);       // You could do this.<br/>
                       {"}"}<br/> 
                       catch(ResourceException e)<br/>
                       {"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await Resource.LogAsync(res, e);         // Now you can do this …<br/>
                       {"}"}<br/>
                       finally<br/>
                       {"}"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (res != null) await res.CloseAsync(); // … and this.<br/>
                       {"}"}
                       </div>
                    </li>
                </ul>
                <br/>
                <h3>Версия 7.0</h3>
                <h4>Новые возможности в версии 7.0</h4>
                <ul className="list">
                    <li className="padding-hover"><span className="code-mini">out</span>-переменные, которые позволяют объявить переменные сразу в вызове метода (причем областью видимости для таких переменных является внешний блок):<br/>
                       <div className="code-big-mini">p.GetCoordinates(out int x, out int y);</div>
                    </li>
                    <li>Сопоставление с шаблоном. Вводится понятие шаблона (<span className="code-mini">pattern</span>), который представляет собой синтаксическую конструкцию, позволяющую проверить соответствие переменной определённой форме и извлечь из неё информацию.</li>
                    <li>Шаблоны с <span className="code-mini">is</span> (<span className="code-mini">is</span> теперь может использоваться не только с типом, но и с шаблоном — в качестве правого аргумента)</li>
                    <li>Шаблоны и выражение <span className="code-mini">switch</span>. Варианты использования <span className="code-mini">switch</span> были расширены, теперь можно:<br/>
                        <ul className="in-list">
                            <li>использовать любые типы (не только примитивные);</li>
                            <li>использовать шаблоны в выражениях <span className="code-mini">case</span>;</li>
                            <li>добавлять дополнительные условия к выражениям <span className="code-mini">case</span> (используя ключевое слово <span className="code-mini">when</span>).</li>
                        </ul>
                    </li>
                    <li className="padding-hover">Кортежи. Добавлен тип кортеж значений (структура <span className="code-mini">ValueTuple</span>) и синтаксис работы с данными этого типа:<br/>
                        <div className="code-big-mini">
                        (string, string, string) LookupName(long id) // возвращаемый тип - кортеж<br/>
                        {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... // инициализируем данные<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (first, middle, last); // литерал кортежа<br/>
                        {"}"}
                        </div>
                    </li>
                    <li>Распаковка кортежей. Была добавлена новая синтаксическая конструкция деконструктор, позволяющая извлечь кортеж, состоящий из членов класса.</li>
                    <li>окальные функции. Теперь функцию, которая используется только в теле какого-либо метода, можно объявить прямо в теле этого метода.</li>
                    <li>Улучшения литералов. Были добавлены бинарные литералы и символ разделителя (<span className="code-mini">_</span>) в числовых литералах.</li>
                    <li>Локальные переменные и возвращаемые значения по ссылке. Расширена функциональность ключевого слова <span className="code-mini">ref</span>. Теперь можно возвратить данные из метода или сохранить их в локальной переменной по ссылке.</li>
                    <li>Расширение списка типов, возвращаемых асинхронными методами</li>
                    <li>Больше членов класса в виде выражений. Синтаксис функций, сжатых до выражений (expression-bodied functions <span className="code-mini">expression-bidied functions</span>), теперь применим для сеттеров, геттеров, конструкторов и деструкторов.</li>
                    <li className="padding-hover"><span className="code-mini">throw</span>-выражения. Теперь можно использовать <span className="code-mini">throw</span> в функциях, сжатых до выражений (expression-bodied functions):<br/>
                       <div className="code-big-mini">public string GetLastName() {"=>"} throw new NotImplementedException();</div>
                    </li>
                </ul>
                <br/>
                <h3>Версия 8.0</h3>
                <h4>Новые возможности в версии 8.0</h4>
                <ul className="list">
                    <li>Модификатор <span className="code-mini">readonly</span>. Был создан для обозначения члена, который не изменит состояние.</li>
                    <li>Методы интерфейсов по умолчанию. Теперь при создании метода интерфейса можно объявить его реализацию по умолчанию, которую можно переопределить в классе, который реализует этот интерфейс.</li><br/><br/>
                    <li className="padding-hover-big">Сопоставление шаблонов. Возможность позволяет работать с шаблонами в зависимости от формата в связанных, но различных типах данных.<br/>
                        <ul className="in-list">
                            <li>Рекурсивные шаблоны. Является выражением шаблона, которое применяется к результатам другого выражения шаблона.</li>
                            <li className="padding-hover-big-big">Выражения switch позволяют сократить количество case и break, а также фигурных скобок.<br/>
                              <div className="code-big-mini-small">
                              public enum Rainbow<br/>
                              {"{"}<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Red,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orange,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yellow,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indigo,<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Violet<br/>
                              {"}"}<br/><br/>

                              public static RGBColor FromRainbow(Rainbow colorBand) {"=>"}<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colorBand switch<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Red    {"=>"} new RGBColor(0xFF, 0x00, 0x00),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Orange {"=>"} new RGBColor(0xFF, 0x7F, 0x00),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Yellow {"=>"} new RGBColor(0xFF, 0xFF, 0x00),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Green  {"=>"} new RGBColor(0x00, 0xFF, 0x00),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Blue   {"=>"} new RGBColor(0x00, 0x00, 0xFF),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Indigo {"=>"} new RGBColor(0x4B, 0x00, 0x82),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rainbow.Violet {"=>"} new RGBColor(0x94, 0x00, 0xD3),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"=>"} throw new ArgumentException(message: "invalid enum value", paramName: nameof(colorBand)),<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"};
                              </div>
                              <br/>
                              <br/>
                            </li>
                            <li>Шаблоны свойств. Позволяет сопоставлять свойства исследуемого объекта с помощью <span className="code-mini">{"{"} variable : value {"}"} {"=>"} ... .</span></li>
                            <li>Шаблоны кортежей. Используется, если нужно работать с несколькими наборами входных данных. <span className="code-mini">(value1, value2,..) {"=>"} ...</span></li>
                        </ul>
                    </li>
                    <li>Объявление <span className="code-mini">using</span>. Это объявление переменной, которому предшествует ключевое слово <span className="code-mini">using</span>. Оно сообщает компилятору, что объявляемая переменная должна быть удалена в конце области видимости.</li>
                    <li>Статический локальный метод. Теперь можно убедиться в том, что метод не охватывает какие-либо переменные из области видимости с помощью добавления к нему модификатора <span className="code-mini">static</span>.</li>
                    <li>Удаляемые ссылочные структуры. Ссылочные структуры не могут реализовать IDisposable (как и любые другие интерфейсы). Поэтому чтобы удалить <span className="code-mini">ref struct</span>, необходим доступный <span className="code-mini">void Dispose()</span>.</li>
                    <li>Типы значений, допускающие значение null. Теперь, чтобы указать, что переменная типа значений допускает значение <span className="code-mini">null</span>, необходимо поставить к имени типа <span className="code-mini">?</span></li>
                    <li className="padding-hover">Асинхронные потоки. Это во-первых интерфейс <span className="code-mini">IAsyncEnumerable{"<T>"}</span>.  А во-вторых конструкция <span className="code-mini">foreach</span> с <span className="code-mini">await</span>.<br/><br/>
                      <div className="code-big-mini-small">
                      public static async System.Collections.Generic.IAsyncEnumerable{"<int>"} GenerateSequence()<br/>
                      {"{"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i {"<"} 20; i++)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await Task.Delay(100);<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yield return i;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                      {"}"}<br/>
                      // or<br/>
                      await foreach (var number in GenerateSequence())<br/>
                      {"{"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(number);<br/>
                      {"}"}
                      </div>
                    </li>
                    <li>Асинхронные высвобождаемые типы. Начиная с C# 8.0 язык поддерживает асинхронные освобождаемые типы, реализующие интерфейс <span className="code-mini">System.IAsyncDisposable</span>. Операнд выражения <span className="code-mini">using</span> может реализовывать <span className="code-mini">IDisposable</span> или <span className="code-mini">IAsyncDisposable</span>. В случае <span className="code-mini">IAsyncDisposable</span> компилятор создает код для <span className="code-mini">await</span>, возвращенного <span className="code-mini">Task</span> из <span className="code-mini">IAsyncDisposable.DisposeAsync</span>.</li>
                    <li>Индексы и диапазоны. Диапазоны и индексы обеспечивают лаконичный синтаксис для доступа к отдельным элементам или диапазонам в последовательности. Нововведение включает в себя операторы <span className="code-mini">^</span> и <span className="code-mini">..</span> , а также <span className="code-mini">System.Index</span> и <span className="code-mini">System.Range</span></li>
                    <li className="padding-hover-big">Оператор присваивания объединения с <span className="code-mini">null</span>. Оператор <span className="code-mini">??=</span> можно использовать для присваивания значения правого операнда левому операнду только в том случае, если левый операнд имеет значение <span className="code-mini">null</span>.<br/>
                       <div className="code-big-mini">
                       List{"<int>"} numbers = null;<br/>
                       int? i = null;<br/><br/>

                       numbers ??= new List{"<int>"}();<br/>
                       numbers.Add(i ??= 17);<br/>
                       numbers.Add(i ??= 20);<br/><br/>

                       Console.WriteLine(string.Join(" ", numbers));<br/>
                       Console.WriteLine(i);
                       </div>
                       <br/>
                       <div className="prew-terminal">
                        <nav>
                            <ul>
                                <li>Terminal</li>
                                <li className="new"><p>+</p></li>
                            </ul>
                        </nav>
                        <div className="terminal">
                            17 17<br/>
                            17
                        </div>
                       </div>
                    </li>
                    <li>Неуправляемые сконструированные типы. Начиная с C# 8.0, сконструированный тип значения является неуправляемым, если он содержит поля исключительно неуправляемых типов (например универсальный тип {"<T>"}).</li>
                    <li className="padding-hover-big">Выражение stackalloc во вложенных выражениях. Теперь если результат выражения stackalloc имеет тип <span className="code-mini">{"System.Span<T>"}</span> или <span className="code-mini">{"System.ReadOnlySpan<T>"}</span>, то его можно использовать в других выражениях.<br/>
                      <div className="code-big-mini">
                      Span{"<int>"} numbers = stackalloc[] {"{ 1, 2, 3, 4, 5, 6 }"};<br/>
                      var ind = numbers.IndexOfAny(stackalloc[] {"{ 2, 4, 6, 8 }"});<br/>
                      Console.WriteLine(ind);
                      </div>
                      <br/>
                      <div className="prew-terminal">
                        <nav>
                            <ul>
                                <li>Terminal</li>
                                <li className="new"><p>+</p></li>
                            </ul>
                        </nav>
                        <div className="terminal">
                            1
                        </div>
                      </div>
                    </li>
                    <li>Порядок маркеров <span className="code-mini">$</span> и <span className="code-mini">@</span> в интерполированных строках verbatim теперь может быть любым.</li>
                </ul>
                <br/>
                <h3>Версия 9.0</h3>
                <h4>Новые возможности в версии 9.0</h4>
                <ul className="list">
                    <li className="padding-hover-big">Типы записей. Появилась возможность при помощи ключевого слова <span className="code-mini">record</span> для определения ссылочного типа, предоставляющего функционал инкапсуляции данных.
                        <div className="code-big-mini">public record User(string FirstName, string LastName);</div>
                        <br/>
                        По умолчанию типы записей является неизменяемыми. В отличие от других ссылочных типов, переменные типов записей считаются равными, если равны типы и значения их свойств и полей.<br/>
                        <ul className="in-list">
                            <li>Обратимые изменения. Для заданного экземпляра записи при помощи ключевого слова <span className="code-mini">with</span> возможно создание копии с изменёнными значениями указанных свойств и полей.</li>
                            <li>Запись может быть унаследована от записи. Однако запись не может быть унаследована от класса, и наоборот, класс не может быть унаследован от записи.</li>
                        </ul>
                    </li>
                    <li className="padding-hover-big">Инициализаторы. C# 9.0 предоставляет синтаксис — ключевое слово <span className="code-mini">init</span> — для задания значений свойств класса при инициализации.<br/>
                       <div className="code-big-mini">
                       public class User<br/>
                       {"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string FirstName {"{"} get; init; {"}"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string LastName {"{"} get; init; {"}"}<br/>
                       {"}"};
                       </div>
                    </li>
                    <li>Операторы верхнего уровня. Один файл в приложении допускается начать сразу с исполняемых строк кода, минуя ряд таких формальностей, как объявление пространств имён, классов, методов. Такие операторы эквивалентны операторам метода <span className="code-mini">Main</span>.</li>
                    <li>Улучшения сопоставлений шаблонов.<br/>
                        <ul className="in-list">
                            <li>Шаблоны типов — соответствуют объекту заданного типа.</li>
                            <li>Логические шаблоны — входные данные должны соответствовать заданной логической операции (<span className="code-mini">and</span>, <span className="code-mini">or</span>, <span className="code-mini">not</span>).</li>
                            <li>Реляционные шаблоны — входные данные должны соответствовать заданной операции сравнения (больше, меньше, равно, больше или равно, меньше или равно) с константой.</li>
                        </ul>
                    </li>
                    <li>Улучшения производительности. </li>
                    <li className="padding-hover">Допускается опустить тип создаваемого объекта в выражении <span className="code-mini">new</span>, если он известен заранее<br/>
                       <div className="code-big-mini">private List{"<User>"} persons = new();</div>
                    </li>
                    <li>Поддержка статических лямбда-выражений и статических анонимных методов. Как и статические локальные функции, они не могут захватывать нестатические локальные переменные и состояния экземпляра.</li>
                    <li>Поддержка применения атрибутов к локальным функциям.</li>
                </ul>
                <br/>
                <h3>Версия 10.0</h3>
                <h4>Новые возможности в версии 10.0</h4>
                <ul className="list-code">
                    <li>Глобальные импорты. С помощью ключевого слова <span className="code-mini">global</span> появилась возможность определить пространства имён, которые будут импортированы глобально во всех файлах проекта.<br/>
                      <div className="code-big-mini">
                        global using System;<br/>
                        global using System.Collections.Generic;
                      </div>
                    </li>
                    <li>Файловая область видимости пространства имён. Объявление пространства имён может быть применено ко всему файлу, что уменьшает уровень отступов в коде.<br/>
                       <div className="code-big-mini">namespace MyNamespace;</div>
                    </li>
                    <li>Усовершенствованные структуры. Добавлены улучшения в работу со структурами, в том числе возможность инициализации полей непосредственно в теле структуры и поддержка параметров по умолчанию.<br/>
                      <div className="code-big-mini">
                        public struct Point<br/>
                        {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int X {"{"} get; set; {"}"} = 0;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int Y {"{"} get; set; {"}"} = 0;<br/>
                        {"{"}
                      </div>  
                    </li>
                    <li>Запечатанные интерфейсы. Интерфейсы могут быть объявлены как <span className="code-mini">sealed</span>, что предотвращает их реализацию другими интерфейсами.<br/>
                      <div className="code-big-mini">public sealed interface IMyInterface {"{ }"}</div>
                    </li>
                    <li>Усовершенствованные операторы и литералы. Поддержка <span className="code-mini">with</span>-оператора для структурных типов, улучшенные string-интерполяции и другие синтаксические улучшения.</li>
                    <li>Улучшенное сопоставление шаблонов. Добавлены новые возможности для сопоставления шаблонов, включая шаблоны списков и возможность использования шаблонов в операторах <span className="code-mini">switch</span> и <span className="code-mini">if</span>.<br/>
                      <div className="code-big-mini">int[] numbers = {"{ 1, 2, 3, 4, 5 }"};<br/>
                      bool isThreeElementArray = numbers is [_, _, _];</div>
                    </li>
                    <li>Поддержка записи структуры и членов записи. Улучшена производительность при использовании структурных типов с поддержкой записи.<br/>
                     <div className="code-big-mini">public record struct Point(int X, int Y);</div>
                    </li>
                    <li>Усовершенствованные атрибуты. Возможность применения атрибутов к более широкому кругу элементов, таких как локальные функции и выражения.<br/>
                       <div className="code-big-mini">
                       [MyCustom]<br/>
                       void LocalFunction() {"{ }"}
                       </div>
                    </li>
                    <li>Лямбда-выражения. Поддержка более мощных и гибких лямбда-выражений, включая использование типов возврата и деструктуризацию.<br/>
                       <div className="code-big-mini">var increment = (int x) {"=>"} x + 1;</div>
                    </li>
                    <li>Усовершенствованные <span className="code-mini">async/await</span>. Улучшена работа с асинхронными методами, включая более эффективное управление памятью и потоками.</li>
                </ul>
                <br/>
                <h3>Версия 11.0</h3>
                <h4>Новые возможности в версии 11.0</h4>
                <ul className="list-code">
                    <li>Статические виртуальные элементы в интерфейсах. Интерфейсы теперь могут включать статические виртуальные и абстрактные члены, что позволяет перегружать операторы и определять статические свойства и методы. Это упрощает реализацию универсальных математических операций.
                        <br/>
                        <div className="code-big-mini">
                        public interface IMyInterface{"<"}TSelf, TOther, TResult{">"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where TSelf : IMyInterface{"<"}TSelf, TOther, TResult{">"}<br/> 
                        {"{"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;static abstract TResult operator +(TSelf left, TOther right);<br/> 
                        {"}"}
                        </div>
                    </li>
                    <li>Проверяемые и непроверяемые операторы. Разработчики могут определять <span className="code-mini">checked</span> и <span className="code-mini">unchecked</span> арифметические операторы, что позволяет компилятору вызывать правильный вариант на основе контекста.
                       <br/>
                       <div className="code-big-mini">
                       public static checked int operator +(MyType left, MyType right)<br/>
                       {"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left.Value + right.Value;<br/> 
                       {"}"}
                       </div>
                    </li>
                    <li>Оператор unsigned right-shift. Введен новый оператор <span className="code-mini">{">>>"}</span>, который выполняет сдвиг вправо без знака, упрощая работу с целочисленными типами.
                      <br/>
                      <div className="code-big-mini">
                          int result = -8 {">>>"} 2;
                      </div>
                    </li>
                    <li>Ослабленные требования к операторам смены. Второй операнд оператора сдвига больше не обязан быть типа <span className="code-mini">int</span>, что делает использование универсальных математических интерфейсов более гибким.
                      <br/>
                      <div className="code-big-mini">
                        MyType value = new MyType();<br/>
                        value {">>="} 3;
                      </div>
                    </li>
                    <li>Поддержка универсальной математики. Новые интерфейсы, такие как <span className="code-mini">{"System.IAdditionOperators<TSelf, TOther, TResult>"}</span>, позволяют типам реализовывать математические операции более последовательно и удобно.
                       <br/>
                       <div className="code-big-mini">
                       public struct MyNumber : {"IAdditionOperators<MyNumber, MyNumber, MyNumber>"}<br/> 
                       {"{"}<br/> 
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static MyNumber operator +(MyNumber left, MyNumber right)<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new MyNumber(left.Value + right.Value);<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                       {"}"}
                       </div>
                    </li>
                    <li>Расширенные возможности инициализации типов. Теперь можно задавать значения полей прямо в теле структуры и использовать параметры по умолчанию.
                        <br/>
                        <div className="code-big-mini">
                        public struct Point<br/> 
                        {"{"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int X {"{"} get; set; {"}"} = 0;<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int Y {"{"} get; set; {"}"} = 0;<br/> 
                        {"}"}
                        </div>
                    </li>
                </ul>
                <br/>
                <h3>Версия 12.0</h3>
                <h4>Новые возможности в версии 12.0[</h4>
                <ul className="list-code">
                    <li>Статические абстрактные и виртуальные методы в интерфейсах. Интерфейсы теперь могут содержать статические абстрактные и виртуальные методы, что позволяет определять поведение для универсальных математических операций.
                        <br/>
                        <div className="code-big-mini">
                        public interface {"IMyInterface<TSelf, TOther, TResult>"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where TSelf : {"IMyInterface<TSelf, TOther, TResult>"} <br/>
                        {"{"} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;static abstract TResult operator +(TSelf left, TOther right);<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;static virtual TResult Add(TSelf left, TOther right)<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return left + right;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        {"}"}
                        </div>
                    </li>
                    <li>Поддержка коллекций с неизменяемыми элементами. Введена новая коллекция <span className="code-mini">ImmutableArray</span>, которая обеспечивает неизменяемость элементов и повышение производительности.
                       <br/>
                       <div className="code-big-mini">
                          var immutableArray = ImmutableArray.Create(1, 2, 3, 4);
                       </div>
                    </li>
                    <li>Улучшенные структуры данных. В C# 12 введены новые типы данных, такие как <span className="code-mini">readonly struct</span> и <span className="code-mini">ref readonly struct</span>, для оптимизации работы с памятью.<br/>
                       <div className="code-big-mini">
                          public readonly struct Point<br/> 
                          {"{"}<br/> 
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int X {"{"} get; {"}"}<br/> 
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public int Y {"{"} get; {"}"}<br/><br/>

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public Point(int x, int y)<br/> 
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X = x;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y = y;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                          {"}"}
                       </div>
                    </li>
                    <li>Расширенные возможности для типов записи. Теперь записи поддерживают наследование и могут содержать методы с телами.
                        <br/>
                        <div className="code-big-mini">
                        public record Person(string Name)<br/> 
                        {"{"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public virtual string GetName() {"=>"} Name;<br/>
                        {"}"}<br/><br/>

                        public record Employee(string Name, int EmployeeId) : Person(Name)<br/> 
                        {"{"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public override string GetName() {"=>"} $"{"{"}Name{"}"} (ID: {"{"}EmployeeId{"}"})";<br/>
                        {"{"}
                        </div>
                    </li>
                    <li>Поддержка типов с произвольным количеством параметров. Введены новые методы для работы с переменным числом параметров, упрощая использование таких типов в коде.
                        <br/>
                        <div className="code-big-mini">
                        public void PrintValues(params int[] values)<br/> 
                        {"{"}<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach (var value in values)<br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(value);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        {"}"}<br/><br/>

                        PrintValues(1, 2, 3, 4);
                        </div>
                    </li>
                    <li>Расширенные возможности компилятора. В C# 12 компилятор получил новые возможности для оптимизации и проверки кода, включая улучшенную поддержку анализаторов и генераторов исходного кода.</li>
                </ul>
                <br/>
                <br/>
                <h2>Пример «Hello, World!»</h2>
                <p>Ниже представлен код классической программы «Hello world» на C# для консольного приложения:<br/></p>
                <div className="code">Console.WriteLine("Hello World!");</div>
                <br/>
                <p>и код этой же программы для приложения Windows Forms:<br/></p>
                <div className="code">
                    namespace WindowsForms;<br/><br/>

                    public class Program <br/>
                    {"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[STAThread]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static void Main() {"=>"} new DemoForm().ShowDialog();<br/>
                    {"}"}<br/><br/>

                    public class DemoForm : Form<br/>
                    {"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Label label = new Label();<br/><br/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public DemoForm()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label.Text = "Hello World!";<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.Controls.Add(label);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.StartPosition = FormStartPosition.CenterScreen;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.BackColor = Color.White;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.FormBorderStyle = FormBorderStyle.Fixed3D;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                    {"}"}
                </div>
                <br/>
                <br/>
                <h2>Реализации</h2>
                <p>Существует несколько реализаций C#:</p>
                <ul className="list">
                    <li>Компилятор Roslyn c открытым <a href="https://github.com/dotnet/roslyn" className="link-other">исходным кодом</a></li>
                    <li>Реализация C# в виде компилятора csc.exe включена в состав .NET Framework (включая .NET Micro Framework, .NET Compact Framework и его реализации под Silverlight и Windows Phone 7).</li>
                    <li>В составе проекта Rotor (Shared Source Common Language Infrastructure) компании Microsoft.</li>
                    <li>Проект Mono включает в себя реализацию C# с открытым исходным кодом.</li>
                    <li>Проект DotGNU также включает компилятор C# с открытым кодом.</li>
                    <li>DotNetAnywhere — ориентированная на встраиваемые системы реализация CLR, поддерживает практически всю спецификацию C# 2.0.</li>
                </ul>
            </div>
        </div>
    )
}