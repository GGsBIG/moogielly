import {
  intro,
  highlights,
  scores,
  scoresNote,
  decades,
  dangers,
  conflict,
  gives,
  advice,
  verdict,
  quote,
} from '../data/couple'
import '../styles/CouplePage.css'

export default function CouplePage() {
  return (
    <>
      <section className="cpHero">
        <div className="cpHeroInner">
          <p className="eyebrow">ZI WEI DOU SHU · 合盤</p>
          <div className="cpNames">
            <span>田家菘</span>
            <span className="cpHeart">♥</span>
            <span>林晏</span>
          </div>
          <p className="cpSub">{intro.subtitle}</p>
        </div>
      </section>

      <main className="container">
        <section>
          <p className="lead">{intro.lead}</p>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">合盤重點</p>
              <h2>兩張盤怎麼咬合</h2>
            </div>
            <p>綠色加分 · 橘色留意</p>
          </div>
          <div className="hlList">
            {highlights.map((h) => (
              <article
                className={
                  'hlCard ' +
                  (h.good === false ? 'bad' : h.warn ? 'warn' : 'good')
                }
                key={h.title}
              >
                <span className="hlTag">{h.tag}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">象徵評分</p>
              <h2>各面向合度</h2>
            </div>
            <p>非科學分數，方便快速理解</p>
          </div>
          <div className="scoreList">
            {scores.map((s) => (
              <div className="scoreRow" key={s.label}>
                <span className="scoreLabel">{s.label}</span>
                <span className="scoreBar">
                  <span
                    className="scoreFill"
                    style={{ width: `${(s.value / 10) * 100}%` }}
                  />
                </span>
                <span className="scoreVal">{s.value}</span>
              </div>
            ))}
          </div>
          <p className="scoreNote">{scoresNote}</p>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">現在的大限</p>
              <h2>兩人正走不同課題</h2>
            </div>
            <p>都在 22–31 歲</p>
          </div>
          <div className="decadeGrid">
            {decades.map((d) => (
              <article className="decadeCard" key={d.who}>
                <h3>{d.who}</h3>
                <p className="decadeRange">{d.range}</p>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">相處地雷</p>
              <h2>最容易傷到對方的方式</h2>
            </div>
            <p>先認得，才躲得開</p>
          </div>
          <div className="decadeGrid">
            {dangers.map((d) => (
              <article className="dangerCard" key={d.who}>
                <span className="dangerWho">{d.who}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
          <div className="ruleBox">
            <h3>{conflict.title}</h3>
            <p>{conflict.text}</p>
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">各要給對方</p>
              <h2>三件東西</h2>
            </div>
            <p>做到，信任就長出來</p>
          </div>
          <div className="decadeGrid">
            {gives.map((g) => (
              <article className="giveCard" key={g.who}>
                <h3>{g.who}</h3>
                <ul>
                  {g.items.map(([k, v]) => (
                    <li key={k}>
                      <strong>{k}</strong>
                      {v}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">相處建議</p>
              <h2>怎麼相處會更好</h2>
            </div>
            <p>五個實際功課</p>
          </div>
          <div className="adviceGrid">
            {advice.map((a, i) => (
              <article className="adviceCard" key={a.title}>
                <span className="adviceNo">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cpVerdict">
          <div className="summaryLabel">合盤結論</div>
          <h2>{verdict.title}</h2>
          <p>{verdict.text}</p>
          <blockquote className="cpQuote">「{quote}」</blockquote>
        </section>

        <p className="disclaimer">
          本頁依田家菘（2003.05.26 未時）與林晏（2001.09.21 辰時）兩張命盤合參，
          屬傳統命理文化，僅供關係參考，感情經營仍以雙方真實相處為準，切勿以此作為重大決定的唯一依據。
        </p>
      </main>
    </>
  )
}
