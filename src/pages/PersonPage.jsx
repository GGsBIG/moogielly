import { Fragment, useState } from 'react'
import PersonChart from '../components/PersonChart'
import '../styles/LinYanPage.css'

// 通用個人命盤頁：吃一份 profile（hero / person / basicInfo / sections / tabs / summary / disclaimer）。
export default function PersonPage({ profile }) {
  const { hero, person, basicInfo, sections, tabs, summary, disclaimer } = profile
  const [activeTab, setActiveTab] = useState(tabs[0][0])
  const current = sections[activeTab]

  return (
    <>
      <section className="lyHero">
        <div className="lyHeroInner">
          <p className="eyebrow">{hero.eyebrow}</p>
          <div className="titleRow">
            <div>
              <h1>{hero.title}</h1>
              <p className="birth">{hero.birth}</p>
            </div>
            <div className="heroTag">{hero.tag}</div>
          </div>
          <p className="lyHeroSummary">{hero.summary}</p>
          <div className="keywords">
            {hero.keywords.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
        </div>
      </section>

      <main className="container">
        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">命盤</p>
              <h2>命盤總覽</h2>
            </div>
            <p>點宮位看白話解釋</p>
          </div>
          <PersonChart person={person} />
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">核心</p>
              <h2>四個最重要的位置</h2>
            </div>
            <p>命宮・命主・身主・身宮</p>
          </div>
          <div className="coreGrid">
            {basicInfo.map((item) => (
              <article className="coreCard" key={item.label}>
                <div className="coreTop">
                  <span className="coreIcon">{item.icon}</span>
                  <span className="coreTag">{item.tag}</span>
                </div>
                <p>{item.label}</p>
                <h3>{item.value}</h3>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="sectionHeading">
            <div>
              <p className="sectionNumber">解析</p>
              <h2>人生領域</h2>
            </div>
            <p>切換查看不同主題</p>
          </div>

          <nav className="tabs">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                className={activeTab === key ? 'active' : ''}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="contentPanel">
            <div className="panelIntro">
              <div>
                <p className="panelLabel">{current.accent}</p>
                <h2>{current.title}</h2>
                <h3>{current.subtitle}</h3>
              </div>
              <p>{current.summary}</p>
            </div>
            <div className="detailGrid">
              {current.items.map((item, index) => (
                <article className="detailCard" key={item.title}>
                  <span className="cardNumber">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="keyword">{item.keyword}</p>
                    <p className="description">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="finalSummary">
          <div className="summaryLabel">命盤總結</div>
          <h2>{summary.title}</h2>
          <p>{summary.text}</p>
          <div className="summaryFlow">
            {summary.flow.map((step, i) => (
              <Fragment key={step}>
                <span>{step}</span>
                {i < summary.flow.length - 1 && <b>→</b>}
              </Fragment>
            ))}
          </div>
        </section>

        <p className="disclaimer">{disclaimer}</p>
      </main>
    </>
  )
}
