# 紫微斗數入門（moogielly）

Vite + React + React Router 的紫微斗數**名詞入門**網站：用白話介紹十二宮、
十四主星、四化與基本術語，先把概念講清楚，暫不帶入個人命盤。

## 開發

```bash
npm install
npm run dev      # 本地開發
npm run build    # 打包到 dist/
npm run preview  # 預覽打包結果
```

## 架構

```
src/
├── main.jsx              # 進入點（BrowserRouter）
├── App.jsx               # 路由 + Header/Footer
├── index.css
├── data/ziwei.js         # 唯一資料來源（十二宮、十四主星、四化、亮度、術語、步驟）
├── components/           # Header / Footer / PalaceMap（命盤結構示意圖）
├── pages/                # HomePage / PalacesPage / StarsPage / TermsPage
└── styles/               # theme.css 變數 + 各元件/頁面 CSS + Cards.css（共用卡片）
```

## 路由

- `/` 入門：什麼是紫微斗數、命盤結構（互動示意圖）、怎麼看一張命盤
- `/palaces` 十二宮：逐宮解釋
- `/stars` 十四主星：逐星解釋
- `/terms` 四化・術語：祿權科忌、星曜亮度、常見名詞
