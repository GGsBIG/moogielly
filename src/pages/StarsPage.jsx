import { stars } from '../data/ziwei'
import '../styles/Cards.css'

export default function StarsPage() {
  return (
    <main className="container">
      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">十四主星</p>
            <h2>命盤裡的十四位主角</h2>
          </div>
          <p>決定各宮的個性與吉凶</p>
        </div>
        <p className="lead">
          十四主星是紫微斗數的核心角色，每一顆都有鮮明的性格。
          它們落在哪個宮位，就把自己的特質帶進那個人生領域——
          例如武曲（財星）落財帛，就影響金錢觀。認識這十四顆星，是讀盤的基本功。
        </p>
        <div className="cardGrid" style={{ marginTop: 28 }}>
          {stars.map((s) => (
            <article className="infoCard" key={s.name}>
              <div className="cardHead">
                <h3>{s.name}</h3>
                <span className="cardTag">{s.group}</span>
              </div>
              <p className="cardKw">{s.keyword}</p>
              <p className="cardDesc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
