import Cover from "../../../Components/js/Cover";
import Link from "next/link"


export const metadata = {
    title: "Есть хорошии Анитивусы",
    description: "Антивирус"
};

export default function Antivirus(){
    return(
        <div>
            <Cover title="Все о Программировании" namePage="Хорош Ативирус¹" image="/allIt.jpg" isShowBtn={false}/>
            <div className="text">
                <q>Заметки: <br/>
                    ¹: Есть хорошие Антивирусы</q>
                <br/>
                <br/>
                <h2>Превый хороший Ативирус: Malwarebytes</h2>
                <br/>
                <p><b>Malwarebytes</b>  — это очень хороший антивирус, который защитит ваше устройство. Когда я впервые проверил своё устройство с помощью этой программы, она обнаружила 48 вирусов, поместила их в карантин, а затем я удалил их.<br/><br/>

                Для работы с Malwarebytes не нужно заходить в аккаунт (потому что эта возможность доступна только в премиум-версии). Когда программа предлагает активировать лицензию, можно пропустить этот шаг, и тогда антивирус будет работать бесплатно. Однако, если активировать лицензию, то будет доступен 14-дневный пробный период, после которого программа попросит оплату.<br/><br/>

                Ссылки внизу!</p>
                <br/>
                <Link href="https://www.malwarebytes.com/mwb-download">
                   <button className="btnWin">Скачать на Windows</button>
                </Link>
                <Link href="https://apps.apple.com/us/app/malwarebytes-mobile-security/id1327105431">
                   <button className="btnIOS">Скачать на IOS</button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=org.malwarebytes.antimalware&hl=ru">
                   <button className="btnAndroid">Скачать на Android</button>
                </Link>
                <Link href="https://www.malwarebytes.com/mac">
                   <button className="btnMac">Скачать на Mac OS</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Второй хороший Антивирус: BitDefender</h2>
                <p><b>BitDefender</b> имеет все необходимые функции, но есть один минус — он позволяет пользоваться ими бесплатно только 14 дней, а затем просит оплату.<br/><br/>

                Ссылки внизу!</p>
                <br/>
                <Link href="https://bitdefenderua.com/ru/">
                   <button className="btnWin">Скачать на Windows</button>
                </Link>
                <Link href="https://apps.apple.com/us/app/bitdefender-mobile-security/id1255893012">
                   <button className="btnIOS">Скачать на IOS</button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.bitdefender.security&hl=ru&pli=1">
                   <button className="btnAndroid">Скачать на Android</button>
                </Link>
                <Link href="https://bitdefenderua.com/ru/">
                   <button className="btnMac">Скачать на Mac OS</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Третий хороший Анитивирус: Comodo</h2>
                <br/>
                <p><b>Comodo</b>— это тоже хороший антивирус, который защитит ваше устройство. Когда я проверил своё устройство с его помощью, он обнаружил 1 вирус, поместил его в карантин, а затем я удалил его.<br/><br/>

                Для работы с Comodo не нужно заходить в аккаунт, так как он бесплатный, но есть и премиум-версия. После установки появляются две программы: одна связана с интернет-защитой, но она платная. <br/><br/>
                
                Ссылки внизу!</p>
                <br/>
                <Link href="https://antivirus.comodo.com">
                   <button className="btnWin">Скачать на Windows</button>
                </Link>
                <Link href="https://apps.apple.com/us/app/comodo-mobile-security/id1448853386">
                   <button className="btnIOS">Скачать на IOS</button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.comodo.cisme.antivirus&hl=ru">
                   <button className="btnAndroid">Скачать на Android</button>
                </Link>
                <Link href=" https://www.macupdate.com/app/mac/42475/comodo-antivirus">
                   <button className="btnMac">Скачать на Mac OS</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Четвортый хороший Антивирус: Dr.Web</h2>
                <br/>
                <p><b>Dr.web(Doktor web)</b>— это тоже хороший антивирус, который защитит ваше устройство. Когда я проверил своё устройство с его помощью, он обнаружил 1 вирус, поместил его в карантин, а затем я удалил его.<br/><br/>

                Для работы с Dr.Web не нужно заходить в аккаунт. Антивирус бесплатный, но есть и премиум-версия с дополнительными функциями. <br/><br/>
                
                Ссылки внизу!</p>
                <br/>
                <br/>
                <Link href="https://download.drweb.com/?lng=ru">
                   <button className="btnWin">Скачать на Windows</button>
                </Link>
                <Link href="https://apps.apple.com/ru/app/dr-web-mobile-control-center/id881780041">
                   <button className="btnIOS">Скачать на IOS</button>
                </Link>
                <Link href=" https://play.google.com/store/apps/details?id=com.drweb&hl=ru&gl=US">
                   <button className="btnAndroid">Скачать на Android</button>
                </Link>
                <Link href="https://download.drweb.com/mac/?lng=ru">
                   <button className="btnMac">Скачать на Mac OS</button>
                </Link>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}
