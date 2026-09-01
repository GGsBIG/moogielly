import PalaceMap from '../components/PalaceMap'
import { palaces } from '../data/ziwei'
import '../styles/Cards.css'

export default function PalacesPage() {
  return (
    <main className="container">
      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">十二宮</p>
            <h2>人生的十二個領域</h2>
          </div>
          <p>每個宮位主管一個面向</p>
        </div>
        <PalaceMap />
      </section>

      <section>
        <div className="sectionHeading">
          <div>
            <p className="sectionNumber">逐宮解釋</p>
            <h2>每個宮位代表什麼</h2>
          </div>
          <p>共十二宮</p>
        </div>
        <div className="cardGrid">
          {palaces.map((p) => (
            <article className="infoCard" key={p.name}>
              <div className="cardHead">
                <h3>{p.name}</h3>
              </div>
              <p className="cardKw">{p.keyword}</p>
              <p className="cardDesc">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
