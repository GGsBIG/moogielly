import { sihua, brightness, terms } from '../data/ziwei'
import '../styles/Cards.css'
import '../styles/TermsPage.css'

export default function TermsPage() {
  return (
    <main className="container">
      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">四化</p>
            <h2>祿・權・科・忌</h2>
          </div>
          <p>看能量往哪裡放大</p>
        </div>
        <p className="lead">
          出生年份會讓四顆星產生「四化」，等於幫某些星加上標記，
          放大它的力量與影響。四化不是單純的好壞，而是指出資源、責任、名聲與課題各在哪裡。
        </p>
        <div className="huaGrid">
          {sihua.map((h) => (
            <div className="huaCard" key={h.name}>
              <span className={'huaSym ' + h.cls}>{h.sym}</span>
              <strong>{h.name}</strong>
              <span className="huaKw">{h.keyword}</span>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">星曜亮度</p>
            <h2>廟旺利得平陷</h2>
          </div>
          <p>同一顆星，力量有強弱</p>
        </div>
        <p className="lead">
          同一顆星坐在不同宮位，力量會不一樣，用「亮度」表示。
          亮度高（廟、旺）優點盡出；亮度低（陷）力量弱、缺點較明顯。
        </p>
        <div className="brightTable">
          {brightness.map((b) => (
            <div className="brightRow" key={b.level}>
              <strong>{b.level}</strong>
              <span>{b.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">常見術語</p>
            <h2>其他你會遇到的名詞</h2>
          </div>
          <p>讀盤前先認識</p>
        </div>
        <div className="cardGrid two">
          {terms.map((t) => (
            <article className="infoCard" key={t.term}>
              <div className="cardHead">
                <h3>{t.term}</h3>
              </div>
              <p className="cardDesc">{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="disclaimer">
        本站為紫微斗數名詞入門介紹，屬傳統命理文化，僅供學習與參考，
        不應作為醫療、財務或重大人生決策的唯一依據。
      </p>
    </main>
  )
}
