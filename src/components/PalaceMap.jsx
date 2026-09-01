import { useState } from 'react'
import { palaces } from '../data/ziwei'
import '../styles/PalaceMap.css'

// 命盤結構示意圖：空盤，只標十二宮名稱。點宮位看該宮代表什麼。
export default function PalaceMap() {
  const [selected, setSelected] = useState('命宮')
  const active = palaces.find((p) => p.name === selected)

  return (
    <>
      <div className="map">
        {palaces.map((p) => (
          <button
            key={p.name}
            className={'mapCell' + (selected === p.name ? ' active' : '')}
            style={{ gridRow: p.pos[0] + 1, gridColumn: p.pos[1] + 1 }}
            onClick={() => setSelected(p.name)}
          >
            <span className="mapName">{p.name}</span>
            <span className="mapKw">{p.keyword}</span>
          </button>
        ))}

        <div className="mapCenter">
          <h3>命盤 = 十二宮 + 星曜</h3>
          <p>
            一張命盤有十二個宮位，各主管人生一個領域；
            <br />
            主星落在哪一宮，就影響那個領域。
          </p>
          <p className="mapHint">點任一宮位看它代表什麼</p>
        </div>
      </div>

      {active && (
        <div className="mapDetail">
          <h3>{active.name}</h3>
          <p className="mapDetailKw">{active.keyword}</p>
          <p>{active.desc}</p>
        </div>
      )}
    </>
  )
}
