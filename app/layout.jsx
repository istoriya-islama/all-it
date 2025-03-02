import { Alegreya } from "next/font/google";
import "./globals.css";
import Header from "./Components/js/Header";
import Footer from "./Components/js/footer";
import BackTop from "./Components/js/BackTop";

const font = Alegreya({subsets: ["cyrillic", "latin"]})

export const metadata = {
  title: "Все о Программировании",
  description: "О программирование"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="container">
          <Header/>
          <div className="page">
              {children}
              <BackTop />
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
