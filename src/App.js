import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Article from './components/Article';
import BackgroundImage from './components/BackgroundImage';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const headerArticle = 
  {
    title: 'Szeretné megtudni, mitől innovatív és egyedülálló az agrotax módszere?',
    content: <div><p>Társaságunk elkötelezett a termőföldek szakszerű, helyben kialakult piaci értékének meghatározásában, ezért építve a hagyományos eljárásokra, a hatályos jogszabályokra, és a különböző szabványokra, új módszert dolgoztunk ki az értékbecslésre.</p><p>Elsődleges célunk volt, hogy kiküszöböljük azon paramétereket, meelyek csak kevésbé, vagy egyáltalán nincsenek hatással az aktuális értékre. Megoldásunkkal az értékbecslések ideje lerövidül, a költségek jelentősen csökkennek, a szakmai sznvonal pedig magasabb szintre lép.</p></div>,
    isMore: false,
  };
const articles = [
  {
    title: 'Mire használható?',
    content: 'A "termőföld értékelé magában foglalja mind az értékbecslés, mind pedig a haszonbérleti díj meghatározását. Az eljárás a helyben szokásos piaci árak meghatározásán túl az egyedi jellemzők elemzésével, az adott helyrajzi számra határozza meg a konkrét piaci értékekekt. A módszer kifejezetten a termőföld, ezen belül elsősorba...',
    isMore: true,
  },
  {
    title: 'Kinek ajánljuk?',
    content: 'A módszer kifejezetten a termőföld, ezen belül elsősorban szántó, gyep, rét, legelő értékelésére került kifejlesztésre. A "termőföld értékelés" magában foglalja mind az értékbecslés, mind pedig a haszonbérleti díj meghatározását. Az eljárás a helyben szokásos piaci árak meghatározásán túl az egyedi...',
    isMore: true,
  },
  {
    title: 'Mit ígér a módszer?',
    content: 'A módszer kifejezetten a termőföld, ezen belül elsősorban szántó, gyep, rét, legelő értékelésére került kifejlesztésre. A "termőföld értékelés" magában foglalja mind az értékbecslés, mind pedig a haszonbérleti díj meghatározását. Az eljárás a helyben szokásos piaci árak meghatározásán túl az egyedi...',
    isMore: true,
  },
  {
    title: 'Területi hatály',
    content: 'A módszer kifejezetten a termőföld, ezen belül elsősorban szántó, gyep, rét, legelő értékelésére került kifejlesztésre. A "termőföld értékelés" magában foglalja mind az értékbecslés, mind pedig a haszonbérleti díj meghatározását. Az eljárás a helyben szokásos piaci árak meghatározásán túl az egyedi...',
    isMore: true,
  },
  {
    title: 'Szakmai szabályozások',
    content: 'A módszer kifejezetten a termőföld, ezen belül elsősorban szántó, gyep, rét, legelő értékelésére került kifejlesztésre. A "termőföld értékelés" magában foglalja mind az értékbecslés, mind pedig a haszonbérleti díj meghatározását. Az eljárás a helyben szokásos piaci árak meghatározásán túl az egyedi...',
    isMore: true,
  }
]
class App extends Component {
  render() {
    const articlesList = articles.map((art, i) => {
      return <Article title={art.title} key={i} content={art.content} />
    });
    return (
      <div className="App">
        <Navbar />
        <BackgroundImage />
        <main>

          <div className="article-container">
            <article className="padding-bottom">
              <h3>{headerArticle.title}</h3>
              <div>{headerArticle.content}</div>
              <button className="text-uppercase">Ismerje meg szolgáltatásunkat</button>
            </article>
            { articlesList }
          </div>

          <Sidebar />

          <div className="text-center">
            <button className="text-uppercase text-center m-auto">Módszertani leírások letöltése</button>
            <h5 className="text-underline text-uppercase">Ismerje meg szolgáltatásunk</h5>
          </div>

          <div>
          <Calculator />
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
