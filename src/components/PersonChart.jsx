import { useState } from 'react'
import '../styles/PersonChart.css'

// 通用單人命盤：吃一份 person 資料（palaces / palaceNotes / majorStars / HUA / center）。
function Star({ s, majorStars, HUA }) {
  const [name, hua] = s
  const isMinor = !majorStars.has(name)
  return (
    <span className={'star' + (isMinor ? ' minor' : '')}>
      {name}
      {hua && <span className={'hua ' + HUA[hua]}>{hua}</span>}
    </span>
  )
}

export default function PersonChart({ person }) {
  const { palaces, palaceNotes, majorStars, HUA, center } = person
  const [selected, setSelected] = useState(palaces[0].zhi)
  const active = palaces.find((p) => p.zhi === selected)
  const note = active && palaceNotes[active.name]

  return (
    <>
      <div className="chart">
        {palaces.map((p) => (
          <button
            key={p.zhi}
            className={'palace' + (selected === p.zhi ? ' active' : '')}
            style={{ gridRow: p.pos[0] + 1, gridColumn: p.pos[1] + 1 }}
            onClick={() => setSelected(selected === p.zhi ? null : p.zhi)}
          >
            {p.decade && <span className="decadeTag">大限 {p.decade}</span>}
            <div className="stars">
              {p.stars.map((s, i) => (
                <Star key={i} s={s} majorStars={majorStars} HUA={HUA} />
              ))}
            </div>
            <span className="palaceName">
              {p.name}
              {p.body ? '・身' : ''}
              <span className="zhi">{p.zhi}</span>
            </span>
          </button>
        ))}

        <div className="chartCenter">
          <h3>{center.name}</h3>
          <p>
            {center.lines.map((l, i) => (
              <span key={i}>
                {l}
                {i < center.lines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="centerHint">點任一宮位看白話解釋</p>
        </div>
      </div>

      <p className="chartHint">
        紅字為十四主星，灰字為輔星／煞星；<b>祿權科忌</b>色塊為生年四化。
      </p>

      {note && (
        <div className="chartDetail">
          <h3>
            {active.name}宮（{active.zhi}）
          </h3>
          <p className="detailKw">{note[0]}</p>
          <p>{note[1]}</p>
        </div>
      )}
    </>
  )
}
