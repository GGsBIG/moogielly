import { useState } from 'react'
import {
  palaceInfo,
  starInfo,
  brightInfo,
  huaInfo,
} from '../data/reference'
import '../styles/PersonChart.css'

// 通用單人命盤：吃一份 person 資料（palaces / palaceNotes / majorStars / HUA / center）。
// star tuple = [名稱, 亮度?, 四化?]
function Star({ s, majorStars, HUA }) {
  const [name, , hua] = s
  const isMinor = !majorStars.has(name)
  return (
    <span className={'star' + (isMinor ? ' minor' : '')}>
      {name}
      {hua && <span className={'hua ' + HUA[hua]}>{hua}</span>}
    </span>
  )
}

// 點宮位後的詳細解釋
function PalaceDetail({ palace, note, majorStars, HUA }) {
  const info = palaceInfo[palace.name]
  const hasMajor = palace.stars.some((s) => majorStars.has(s[0]))

  return (
    <div className="chartDetail">
      <div className="pdHead">
        <h3>
          {palace.name}宮（{palace.zhi}）
        </h3>
        {info && <span className="pdGov">{info.gov}</span>}
      </div>

      {info && <p className="pdText">{info.text}</p>}

      {note && (
        <div className="pdNote">
          <span className="pdNoteLabel">本盤解讀</span>
          <strong>{note[0]}</strong>
          <p>{note[1]}</p>
        </div>
      )}

      {!hasMajor && (
        <p className="pdEmpty">
          此宮無十四主星坐守（<b>空宮</b>），論斷時要「借」對宮的主星一起看，並非代表這個宮位空白或沒事。
        </p>
      )}

      <div className="pdStars">
        <p className="pdStarsLabel">宮內星曜逐顆解釋</p>
        {palace.stars.map((s, i) => {
          const [sname, bright, hua] = s
          const si = starInfo[sname]
          return (
            <div className="pdStar" key={i}>
              <div className="pdStarTop">
                <span
                  className={'pdStarName' + (majorStars.has(sname) ? ' major' : '')}
                >
                  {sname}
                </span>
                {bright && <span className="pdBadge bright">{bright}</span>}
                {hua && <span className={'pdBadge hua ' + HUA[hua]}>化{hua}</span>}
                {si && <span className="pdStarType">{si.type}</span>}
              </div>
              {si && <p className="pdLine">{si.text}</p>}
              {bright && brightInfo[bright] && (
                <p className="pdLine sub">
                  <b>亮度：</b>
                  {brightInfo[bright]}
                </p>
              )}
              {hua && huaInfo[hua] && (
                <p className="pdLine sub">
                  <b>{huaInfo[hua].name}：</b>
                  {huaInfo[hua].text}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function PersonChart({ person }) {
  const { palaces, palaceNotes, majorStars, HUA, center } = person
  const [selected, setSelected] = useState(palaces[0].zhi)
  const active = palaces.find((p) => p.zhi === selected)

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
          <p className="centerHint">點任一宮位看詳細解釋</p>
        </div>
      </div>

      <p className="chartHint">
        紅字為十四主星，灰字為輔星／煞星；<b>祿權科忌</b>色塊為生年四化。點宮位看逐顆星的意思。
      </p>

      {active && (
        <PalaceDetail
          palace={active}
          note={palaceNotes[active.name]}
          majorStars={majorStars}
          HUA={HUA}
        />
      )}
    </>
  )
}
