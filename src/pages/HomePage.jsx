import { Link } from 'react-router-dom'
import PalaceMap from '../components/PalaceMap'
import { readingSteps } from '../data/ziwei'
import '../styles/HomePage.css'

const nav = [
  { to: '/palaces', n: '十二宮', d: '人生十二個領域，各由一個宮位主管。' },
  { to: '/stars', n: '十四主星', d: '紫微、天府等主角星，決定各宮的個性。' },
  { to: '/terms', n: '四化・術語', d: '祿權科忌、亮度與三方四正等基本規則。' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="heroInner">
          <p className="eyebrow">ZI WEI DOU SHU · 入門</p>
          <div className="titleRow">
            <div>
              <h1>紫微斗數入門</h1>
              <p className="birth">先搞懂每個名詞在講什麼，再看命盤就不會霧煞煞</p>
            </div>
            <div className="heroTag">名詞・概念篇</div>
          </div>
          <p className="heroSummary">
            紫微斗數用一張「命盤」描述一個人：十二個宮位切分人生領域，
            十四顆主星決定性格與吉凶，再用四化與運限看能量與時機。
          </p>
          <div className="keywords">
            <span>十二宮</span>
            <span>十四主星</span>
            <span>四化</span>
            <span>大限流年</span>
          </div>
        </div>
      </section>

      <main className="container">
        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">01</p>
              <h2>什麼是紫微斗數</h2>
            </div>
            <p>一句話：用星盤看人生</p>
          </div>
          <p className="lead">
            紫微斗數是中國傳統命理的一支，以出生的年、月、日、時排出一張「命盤」。
            命盤是一個 3×4、共十二格的方盤，每一格是一個「宮位」，
            分別代表人生的一個面向——像個性、感情、金錢、工作、健康等。
            接著把「星曜」安放進各宮，星星落在哪一宮，就影響那個領域的吉凶與樣貌。
          </p>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">02</p>
              <h2>命盤的結構</h2>
            </div>
            <p>點宮位看它代表什麼</p>
          </div>
          <PalaceMap />
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">03</p>
              <h2>怎麼看一張命盤</h2>
            </div>
            <p>五個基本步驟</p>
          </div>
          <div className="stepList">
            {readingSteps.map((s) => (
              <article className="step" key={s.n}>
                <span className="stepNo">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">04</p>
              <h2>接著往下看</h2>
            </div>
            <p>逐項認識每個名詞</p>
          </div>
          <div className="navGrid">
            {nav.map((x) => (
              <Link className="navCard" to={x.to} key={x.to}>
                <h3>{x.n}</h3>
                <p>{x.d}</p>
                <span className="navArrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
