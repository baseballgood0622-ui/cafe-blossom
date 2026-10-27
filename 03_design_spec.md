# 🎨 Webデザイン仕様書（03_design_spec.md）

- **案件名**：個人経営カフェ「Cafe Blossom（カフェ ブロッサム）」公式ホームページ制作
- **担当**：高橋 アヤ（AI-company 専属UI/UX・Webデザイナー）
- **制作形態**：1ページ完結型レスポンシブWebサイト（スマートフォン・タブレット・PC対応）
- **ブランドコンセプト**：「日常の中に、小さな花が咲くようなひとときを。」
- **参照ドキュメント**：
  - マーケティング調査レポート：`01_research.md`（担当：佐藤 リサ）
  - コピーライティング原稿：`02_copywriting.md`（担当：鈴木 コトハ）
  - 使用画像アセット：`./assets/` 内の写真素材7点

---

## 0. デザインコンセプトと基本方針

ターゲット層である「カフェ巡りが好きな女性」「友人とのお出かけを楽しむ方」「ひとりでゆっくり過ごしたい方」の皆さまが、画面を開いた瞬間にほっと肩の力を抜けるよう、**温かみのあるクリーム色と上品なピンクベージュをベースにデザインしますね！**

### 🌸 デザインコンセプト
**「光と余白に、小さな花がほころぶ『大人の手仕事カフェ』」**

リサーチ結果（`01_research.md`）で明らかになった「初めての個人カフェに入る前のちょっとした緊張（ひとりでも浮かない？ どんな席があるの？ 甘すぎて若い子向けすぎない？）」を視覚からやさしくほどくため、以下の**3つのデザイン原則**を徹底します。

1. **色や装飾を足しすぎず、「余白・写真・文字のリズム」で魅せる**
   - 派手な原色や過剰な枠線・アイコン装飾は使いません。たっぷりと取った余白（スペース）そのものを「店内のゆとりある空気感」として表現し、配置のバランス（非対称レイアウトや背景色の穏やかな切り替え）で心地よい変化を作ります。
2. **既存写真（`./assets/`）の自然光と完全に溶け合う配色**
   - 今回使用する7枚の写真には、「窓辺のやわらかな自然光」「無垢材の木のテーブル」「生成りの器」「ピンクベージュのリネンナプキン」「淡い春の小花」という美しい共通トーンがあります。この写真の中にある色をそのままWebサイトの背景色・差し色に抽出することで、写真とページがひとつの空間のように調和します。
3. **「かわいらしさ」と「読みやすさ（可読性）」の両立**
   - 丸みのある優しいフォントを選びつつ、文字色は冷たい真っ黒（`#000000`）を避け、深煎りコーヒーのようなダークブラウンを採用します。すべての文字で国際的な読みやすさの基準（WCAG AA基準以上）をクリアし、スマホでも目が疲れない設計にします。

> **💡 はじめに：専門用語のやさしい補足ガイド**
> この仕様書では、エンジニアの実装用としてはもちろん、後からカフェのオーナー様が読んでも仕組みがすぐわかるよう、Webデザインの専門用語にはその都度「（＝〇〇のこと）」と補足説明を添えています。また、CSSコード例には手直ししやすい日本語コメントを入れています。

---

## 1. カラーパレット（配色設計）とコントラスト検証

※**コントラスト比**とは、「背景色と文字色の明るさの差」を表す数値です。国際基準（WCAG 2.1）では、通常の本文で **4.5 : 1 以上**、大きな見出しで **3.0 : 1 以上** あると、明るい屋外でスマホを見たときや視力が弱い方でもくっきり読みやすいとされています。

### 1-1. 配色の黄金バランス
- **ベースカラー（約70%：背景・余白）**：ウォームクリーム ＆ ピュアホワイト（自然光と器の白さを引き立てる色）
- **メインカラー（約25%：セクション切り替え・あしらい）**：ソフトピンクベージュ（写真内のリネンナプキンや花びらと調和する、甘すぎない上品なくすみピンクベージュ）
- **アクセントカラー（約5%：ボタン・強調ポイント）**：ブロッサムローズ（いちごタルトの果実や小さな花を思わせる、見つけやすく上品な暖色）

### 1-2. カラーコード＆CSS変数一覧

| 役割 | カラー名称 | CSS変数名 | HEXコード | RGB値 | 主な使用箇所・コントラスト検証結果 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **基本背景（ベース）** | ウォームクリーム | `--color-bg-base` | `#FDFBF7` | `253, 251, 247` | ページ全体の基本背景。真っ白すぎず、紙や漆喰壁のような温もりがある生成り色。 |
| **カード背景** | ピュアホワイト | `--color-surface` | `#FFFFFF` | `255, 255, 255` | メニューカード、店舗情報カード、入力欄の背景。クリーム背景の上で清潔感と立体感を作る。 |
| **サブ背景①** | ミルクベージュ | `--color-bg-cream` | `#F7F1E8` | `247, 241, 232` | アクセス欄やフォーム外枠など、ほっと落ち着かせたいエリアの淡いクリーム背景。 |
| **サブ背景②（メイン）** | ソフトピンクベージュ | `--color-bg-pink` | `#F5E9E6` | `245, 233, 230` | おすすめメニュー等の背景切り替え、写真の背面あしらい。大人が落ち着ける控えめな彩度。 |
| **フッター・強調背景** | ウォームピンクベージュ | `--color-pink-beige` | `#EFE0DC` | `239, 224, 220` | フッター背景、バッジ背景、プレースホルダーのグラデーション要素。 |
| **メイン文字色** | エスプレッソブラウン | `--color-text-main` | `#3D2E2A` | `61, 46, 42` | 見出し・本文の基本色。真っ黒（`#000`）を避けた深煎り珈琲色。<br>✅ 対 `#FDFBF7`：**12.5 : 1**（AAA合格）<br>✅ 対 `#F5E9E6`：**10.9 : 1**（AAA合格） |
| **サブ文字色** | ローストモカブラウン | `--color-text-sub` | `#634E48` | `99, 78, 72` | 補足説明文、英字サブタイトル、注釈、ナビゲーション。<br>✅ 対 `#FFFFFF`：**7.7 : 1**（AAA合格）<br>✅ 対 `#FDFBF7`：**7.5 : 1**（AAA合格）<br>✅ 対 `#F5E9E6`：**6.5 : 1**（AA合格） |
| **アクセント（CTA）** | ブロッサムローズ | `--color-accent` | `#AE525A` | `174, 82, 90` | CTAボタン（行動喚起ボタン）背景、重要ラベル、必須マーク。<br>✅ 白文字（`#FFFFFF`）乗せ：**5.05 : 1**（AA合格）<br>ページ内で一番見つけやすく、世界観になじむ暖色。 |
| **アクセント（ホバー）** | ディープベリーローズ | `--color-accent-hover` | `#96424A` | `150, 66, 74` | ボタンにマウスを乗せたとき（ホバー時）・押したときの色。<br>✅ 白文字（`#FFFFFF`）乗せ：**6.3 : 1**（AA合格） |
| **繊細な枠線** | ペールローズボーダー | `--color-border` | `#E8DAD5` | `232, 218, 213` | カードの輪郭線、定義リストの区切り線、入力欄の通常枠線。 |
| **フォーカス枠** | ソフトローズリング | `--color-focus-ring` | `rgba(174, 82, 90, 0.22)` | - | フォーム入力欄やボタンをキーボード・タップで選択した際のやさしい光彩枠。 |

### 1-3. 影（シャドウ）の特別ルール：黒い影は使わない！
一般的なWebサイトでよく使われる黒い半透明の影（`rgba(0, 0, 0, 0.1)`）をクリーム色やピンクベージュの上に落とすと、そこだけグレーに濁って冷たい印象になってしまいます。
必ず**エスプレッソブラウン（`61, 46, 42`）をベースにした温かい透過色**で影を作ってください。

- **通常カードの影（`--shadow-soft`）**：`0 8px 28px rgba(61, 46, 42, 0.05)`
- **ホバー時の影（`--shadow-hover`）**：`0 14px 36px rgba(61, 46, 42, 0.09)`
- **CTAボタンの立体影（`--shadow-button`）**：`0 6px 18px rgba(174, 82, 90, 0.26)`

---

## 2. タイポグラフィ（文字設計）

「丸みのある可愛らしさ」「手仕事のぬくもり」「スマホでの読みやすさ」をすべて満たすため、Google Fonts（＝無料で使える高品質なWebフォントサービス）から以下の2書体を組み合わせて使用します。

### 2-1. 選定フォントと役割

1. **日本語フォント：`Zen Maru Gothic`（ゼン 丸ゴシック）**
   - **使用ウェイト（太さ）**：`400`（Regular：本文用）、`500`（Medium：リード文・小見出し・ナビ用）、`700`（Bold：大見出し・メニュー名用）
   - **選定理由**：一般的な丸ゴシックよりも懐（ふところ＝文字の内側の空間）が上品で、子どもっぽくならず「大人のナチュラルカフェ」にぴったりな柔らかい丸みを持っています。本文でも可読性が非常に高い書体です。
2. **欧文（英語・数字）フォント：`Quicksand`（クイックサンド）**
   - **使用ウェイト（太さ）**：`500`（Medium）、`600`（SemiBold）、`700`（Bold）
   - **選定理由**：ペン先が丸く仕上げられた幾何学的な欧文フォントで、店名「Cafe Blossom」の仮テキストロゴ、セクションの英語見出し（`Concept`, `Menu` 等）、メニューの価格数字に使うと、`Zen Maru Gothic` と驚くほど自然になじみます。

#### HTML `<head>` 内への読み込みコード（コピペ用）
```html
<!-- Google Fonts の読み込み（表示速度を速める preconnect 付き） -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap" rel="stylesheet">
```

### 2-2. PC / スマホ別 フォントサイズ・行間・字間ルール

※`clamp(最小サイズ, 推奨可変サイズ, 最大サイズ)` というCSS関数を使うことで、スマホの小さな画面からPCの大きな画面まで、文字サイズがなめらかに自動調整されます。（※`1rem = 16px` 基準）

| 要素 | フォント | 太さ | スマホ（〜767px） | PC（1024px〜） | CSS `clamp()` 推奨値 | 行間 (`line-height`) | 字間 (`letter-spacing`) |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: | :---: |
| **メインコピー（H1）** | Zen Maru Gothic | `700` | `24px` (`1.5rem`) | `36px` (`2.25rem`) | `clamp(1.5rem, 1.15rem + 1.5vw, 2.25rem)` | `1.55` | `0.06em` |
| **セクション英語見出し** | Quicksand | `600` | `13px` (`0.8125rem`) | `14px` (`0.875rem`) | `0.875rem` | `1.2` | `0.16em`（大文字推奨） |
| **セクション日本語見出し（H2）** | Zen Maru Gothic | `700` | `22px` (`1.375rem`) | `28px` (`1.75rem`) | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` | `1.5` | `0.06em` |
| **サブ見出し・カード見出し（H3）** | Zen Maru Gothic | `700` | `18px` (`1.125rem`) | `20px` (`1.25rem`) | `clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)` | `1.5` | `0.04em` |
| **導入リード文** | Zen Maru Gothic | `500` | `15px` (`0.9375rem`) | `17px` (`1.0625rem`) | `clamp(0.9375rem, 0.9rem + 0.25vw, 1.0625rem)` | `2.0` | `0.05em` |
| **通常本文** | Zen Maru Gothic | `400` | `15px` (`0.9375rem`) | `16px` (`1rem`) | `clamp(0.9375rem, 0.9rem + 0.15vw, 1rem)` | `1.9` | `0.04em` |
| **メニュー価格（数字）** | Quicksand | `700` | `18px` (`1.125rem`) | `19px` (`1.1875rem`) | `1.1875rem` | `1.2` | `0.03em` |
| **注釈・バッジ・小文字** | Zen Maru Gothic | `500` | `12.5px` (`0.78rem`) | `13.5px` (`0.84rem`) | `0.8125rem` (`13px`) | `1.6` | `0.03em` |
| **フォーム入力文字** | Zen Maru Gothic | `400` | **`16px` (`1rem`) 必須** | `16px` (`1rem`) | `1rem` | `1.6` | `0.02em` |

> **⚠️ スマホ可読性の重要ルール**
> 1. **入力欄は必ず `16px`（`1rem`）以上**：iPhone（Safari）では、フォームの入力文字サイズが `16px` 未満だとタップした瞬間に画面が勝手にズームしてしまい使いづらくなります。必ず `1rem` を指定してください。
> 2. **1行の長さ制限**：PC画面で文章が横に長すぎると視線が迷子になります。リード文や説明文のブロックには `max-width: 40em;`（1行あたり最大36〜40文字程度）を設定し、自然な改行にはできる限り `word-break: keep-all; overflow-wrap: anywhere;` または文節改行（`word-break: auto-phrase;` ※対応ブラウザで自然な日本語改行になる機能）を活用してください。

---

## 3. レイアウト基盤・余白スケール・CSS変数（`:root`）定義

※**CSS変数（カスタムプロパティ）**とは、色や余白の数値をあらかじめ1箇所に登録しておき、サイト全体で使い回せる仕組みのことです。後からオーナー様が「もう少しピンクを濃くしたいな」と思ったときも、ここの1行を書き換えるだけでページ全体に反映されます。

### 3-1. ブレークポイント（画面幅の切り替え基準）
シンプルで保守しやすい2段階のメディアクエリ（＝画面サイズに応じたレイアウト切り替え）を採用します。

- **スマートフォン（SP）**：`〜 767px`（1カラム中心、片手親指で操作しやすい余白設計）
- **タブレット（Tab）**：`768px 〜 1023px`（2カラムへの移行、左右余白 `32px`）
- **PC（Desktop）**：`1024px 〜`（最大コンテナ幅を活かしたゆったり非対称レイアウト、左右余白 `40px`）

### 3-2. ベースCSS変数定義コード（そのまま `style.css` 冒頭に使用可能）

```css
/* ==========================================================================
   基本デザイン設定（色・フォント・余白のまとめ）
   ※ここの数値を変えると、ホームページ全体の色や雰囲気が一括で変わります
   ========================================================================== */
:root {
  /* --- カラーパレット（配色） --- */
  --color-bg-base: #FDFBF7;          /* ページ基本背景：温かみのあるウォームクリーム */
  --color-surface: #FFFFFF;          /* カード・入力欄の背景：清潔感のある白 */
  --color-bg-cream: #F7F1E8;         /* サブ背景①：やさしいミルクベージュ */
  --color-bg-pink: #F5E9E6;          /* サブ背景②：上品なソフトピンクベージュ */
  --color-pink-beige: #EFE0DC;       /* フッター・あしらい用：ウォームピンクベージュ */

  --color-text-main: #3D2E2A;        /* 基本の文字色：深煎りエスプレッソブラウン（真っ黒は不使用） */
  --color-text-sub: #634E48;         /* 補足説明の文字色：ローストモカブラウン */
  --color-text-muted: #856E67;       /* 控えめな注釈色（※大きい文字や装飾ラベルのみに使用） */

  --color-accent: #AE525A;           /* ボタン・強調色：ブロッサムローズ */
  --color-accent-hover: #96424A;     /* ボタンにカーソルを乗せたときの色 */
  --color-accent-soft: #F2DCDD;      /* 小さなタグ・バッジの淡いローズ背景 */

  --color-border: #E8DAD5;           /* カードや表のやさしい枠線色 */
  --color-focus-ring: rgba(174, 82, 90, 0.22); /* 入力欄を選んだときの光彩枠 */

  /* --- 温かみのある影（ブラウンベースの透過影） --- */
  --shadow-soft: 0 8px 28px rgba(61, 46, 42, 0.05);
  --shadow-hover: 0 14px 36px rgba(61, 46, 42, 0.09);
  --shadow-button: 0 6px 18px rgba(174, 82, 90, 0.26);
  --shadow-button-hover: 0 10px 24px rgba(150, 66, 74, 0.34);

  /* --- フォント（書体） --- */
  --font-jp: 'Zen Maru Gothic', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif;
  --font-en: 'Quicksand', 'Zen Maru Gothic', sans-serif;

  /* --- 角丸（まるみ）の基準 --- */
  --radius-sm: 8px;                  /* 小さなタグ・ラベル用 */
  --radius-md: 14px;                 /* フォーム入力欄・小さな枠用 */
  --radius-lg: 20px;                 /* メニューカード・写真フレーム・地図枠用 */
  --radius-xl: 28px;                 /* メインビジュアル写真・大きなボックス用 */
  --radius-full: 9999px;             /* カプセル型の丸いボタン用 */

  /* --- レイアウト幅・高さ --- */
  --container-wide: 1200px;          /* メインビジュアル用の広い横幅 */
  --container-main: 1060px;          /* 通常セクションの標準横幅 */
  --container-narrow: 760px;         /* 店舗情報・フォーム等の読みやすいスリム横幅 */
  --header-height: 76px;             /* PCヘッダーの高さ（スマホ時は 64px に変更） */

  /* --- 余白（スペース）スケール --- */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --section-py-pc: 112px;            /* PCでのセクション上下余白（ゆったりと確保） */
  --section-py-sp: 72px;             /* スマホでのセクション上下余白 */

  /* --- アニメーション速度 --- */
  --ease-blossom: cubic-bezier(0.22, 1, 0.36, 1); /* ふんわり咲いて静かに止まる自然な動き */
}

@media (max-width: 767px) {
  :root {
    --header-height: 64px;
  }
}
```

---

## 4. セクション別レイアウト・UI詳細仕様

### 🌊 ページ全体の背景色リズム設計（色数を増やさず場面を切り替える）
装飾線を多用しなくても、スクロールするごとに穏やかに空気が変わるよう、セクション背景を以下のように交互に設計します。

1. **ヘッダー**：半透明ウォームクリーム（すりガラス透過）
2. **メインビジュアル**：`--color-bg-base`（`#FDFBF7`）＋右背面に淡いピンクベージュの柔らかい円形/角丸シェイプあしらい
3. **コンセプト紹介（`#concept`）**：`--color-bg-base`（`#FDFBF7`）※写真背面に `--color-bg-pink` のオフセット座布団あしらい
4. **おすすめメニュー（`#menu`）**：`--color-bg-pink`（`#F5E9E6`）＋白いメニューカード（`#FFFFFF`）で写真を主役に引き立てる
5. **店舗情報（`#shop-info`）**：`--color-bg-base`（`#FDFBF7`）＋白いショップカード枠（`#FFFFFF`）
6. **アクセス（`#access`）**：`--color-bg-cream`（`#F7F1E8`）で落ち着いた案内エリアに
7. **お問い合わせ（`#contact`）**：`--color-bg-base`（`#FDFBF7`）＋レター風の優しい白カード枠
8. **フッター**：`--color-pink-beige`（`#EFE0DC`）で最後まで温かく柔らかな余韻を残す

> **💡 セクション共通見出し（Section Heading）のデザイン仕様**
> 各セクションの冒頭見出しは、過剰な装飾線を引かず、以下の3要素で統一します。
> 1. 小さな5枚花びらの線画SVGアイコン（`18px × 18px`、色：`--color-accent`、不透明度 `0.75`）または小さな丸ドット
> 2. 英語ラベル（例：`CONCEPT` / `Quicksand` `600` / 字間 `0.16em` / 色：`--color-accent`）
> 3. 日本語大見出し（`H2` / `Zen Maru Gothic` `700` / 色：`--color-text-main`）

---

### ① ヘッダー（Header & スマホドロワーメニュー）

#### デザイン＆UI仕様
- **追従仕様**：画面上部に常時固定（`position: sticky; top: 0; z-index: 100;`）。背景は `background-color: rgba(253, 251, 247, 0.88); backdrop-filter: blur(10px);`（すりガラス効果）とし、下に極薄の境界線 `border-bottom: 1px solid rgba(232, 218, 213, 0.7);` を添えます。
- **仮ロゴアイコン＋店名ロゴ（後から本物のロゴ画像へ簡単差し替え対応）**：
  - 左端に仮ロゴアイコン画像（`./assets/logo-mark.png`、桜の花びらとコーヒーカップの丸型エンブレム、高さ PC `38px` / SP `32px`）と、`Quicksand`（太さ `700`、サイズ PC `22px` / SP `19px`、色 `--color-text-main`）の **「Cafe Blossom」** を並べて表示します。
  - **【重要】将来のロゴ画像差し替え設計**：オーナー様が後から本物のロゴ画像（PNG/SVG）に差し替える際、`assets/logo-mark.png` を上書きするか、HTML内のコメント案内に従って横長ロゴ画像1枚（`logo.png`）に切り替えるだけで美しく収まる設計にします。

```html
<!-- 【ロゴ部分】将来ロゴ画像ができた場合は、spanタグを消して下のコメント内の img タグ1行に差し替えるだけで対応できます -->
<a href="#" class="site-logo" aria-label="Cafe Blossom トップへ戻る">
  <!-- <img src="./assets/logo.png" alt="Cafe Blossom" width="160" height="40"> -->
  <span class="site-logo__mark" aria-hidden="true">✿</span>
  <span class="site-logo__text">Cafe Blossom</span>
</a>
```
```css
/* ロゴ共通枠（テキストでも画像でも高さが崩れない設計） */
.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--color-text-main);
  font-family: var(--font-en);
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.04em;
}
/* ロゴ画像に差し替えた場合の自動サイズ調整 */
.site-logo img {
  display: block;
  height: 36px;       /* ヘッダー内に美しく収まる高さに自動固定 */
  width: auto;
  object-fit: contain;
}
```

- **PCナビゲーション（`768px` 以上で表示）**：
  - 右側に横並び配置。必須リンク **`Concept`**（`#concept`）、**`Menu`**（`#menu`）、**`Shop Info`**（`#shop-info`）を軸に、補助リンク **`Access`**（`#access`）と、右端に控えめなピル型小ボタンまたはリンクで **`Contact`**（`#contact`）を配置します（※英語表記の下または横に小さく日本語添え字を入れるか、シンプルに `Concept` / `Menu` / `Shop Info` / `Access` / `Contact` でスッキリ並べます。オーナー指示の3項目 `Concept` / `Menu` / `Shop Info` が一目で分かるよう余白 `gap: 32px` を確保）。
  - ホバー時は文字色が `--color-accent` に変わり、下からふんわり短い丸みのある下線（高さ `2px`、角丸 `2px`）が中央から広がる上品なアニメーションをつけます。
- **スマホ用ハンバーガーメニュー＆ドロワー（`767px` 以下で表示）**：
  - **ボタン**：右上配置。指で押しやすいようタップ領域を **`44px × 44px` 以上** 確保。アイコンは角丸の3本線（`width: 22px; height: 2px; background: var(--color-text-main); border-radius: 2px;`）で、タップすると優しく「×」に変形。ボタン下に極小文字で `MENU` / `CLOSE`（`10px`、`Quicksand`）を添えるとスマホに不慣れな方にも親切です。
  - **ドロワー（展開メニュー）**：開いたときは画面全体を覆うか上からふんわり降りるパネル（背景色：`--color-bg-base` と `--color-bg-pink` の優しいグラデーション）。各リンクは英語（`Concept`）＋日本語補足（`お店の想い・空間`）の2段または横並びで、タップしやすい高さ（`padding: 16px 0`）を確保。リンクをタップしたら自動でドロワーを閉じて該当箇所へスムーズスクロールします。

---

### ② メインビジュアル（Hero / First View）

#### 写真 `./assets/hero-cafe.jpg` の特性とレイアウト方針
`hero-cafe.jpg` は、**「左側に白いシアーカーテンの柔らかな自然光、中央に白い小花の一輪挿し、右下にラテアートのカフェラテ・焼き菓子・ピンクベージュのリネン」**が写った非常に美しい横長写真です。
この写真の上に暗い黒フィルターをかけて文字を乗せると、最大の魅力である「自然光の透明感」が失われてしまいます。そこで、**写真を一切暗く潰さず、余白と写真が自然に溶け合う「エアー・スプリット（非対称2カラム）構成」**を採用します！

#### PCレイアウト（`1024px` 以上）
- 画面幅最大 `--container-wide`（`1200px`）、上下パディング `48px 〜 64px`、最小高さ `min-height: calc(88vh - var(--header-height))`（最大 `720px` 程度に抑え、間延びを防ぐ）。
- **左カラム（約44%：テキスト＆CTAエリア）**：
  1. **オープン告知ピルバッジ**：淡いピンクベージュ背景（`--color-bg-pink`）＋繊細な枠線（`--color-border`）の中に、`✿ 来月、地元商店街にオープン`（色：`--color-accent`、太さ `700`、角丸 `--radius-full`、`padding: 6px 16px`）。
  2. **メインキャッチコピー（`H1`）**：「日常の中に、小さな花が咲くようなひとときを。」を2〜3行でリズムよく改行（`Zen Maru Gothic` `700`）。
  3. **サブリード文**：3〜4行で、手作りのお菓子と丁寧なコーヒー、ひとりでも友人とでもほっとひと息つける場所であることを優しく添える（色：`--color-text-sub`）。
  4. **ボタンエリア（横並びまたは主ボタン1つ＋控えめなテキストリンク）**：
     - **プライマリCTAボタン**（例：「おすすめメニューを見る」→ `#menu`）：背景 `--color-accent`（`#AE525A`）、文字 `#FFFFFF`、ピル型（`border-radius: 9999px`）、`padding: 16px 34px`、温かい立体影 `var(--shadow-button)`＋上辺にほのかなハイライト `inset 0 1px 0 rgba(255,255,255,0.25)`。右端に小さな下向き矢印アイコンを添え、思わず押したくなる優しい立体感を演出。
     - **セカンダリ導線**（例：「お店のこだわり」→ `#concept`）：背景 `#FFFFFF`、枠線 `1.5px solid var(--color-border)`、文字 `--color-text-main`、ピル型、`padding: 15px 26px`。
- **右カラム（約56%：メイン写真フレーム）**：
  - `./assets/hero-cafe.jpg` を大きな角丸（`border-radius: var(--radius-xl)` ＝ `28px`、または左上だけ少し大きめの `60px` にした優しいアーチ風アクセント角丸）で配置。
  - `aspect-ratio: 4 / 3`（または `16 / 11`）、`object-fit: cover; object-position: 55% center;` を指定し、**一輪挿しの花・カフェラテ・焼き菓子・白いカーテンの光**がすべてベストバランスで収まるようにします。
  - 写真の右下に `14px` ほどずらした位置に、`--color-bg-pink`（ソフトピンクベージュ）の角丸背景シェイプ（`z-index: -1`）をそっと重ねることで、装飾を増やさずにカフェらしい柔らかさと奥行きを作ります。

#### タブレット・スマホレイアウト（`〜 1023px`）
- **縦積み1カラム構成**：
  - スマホで開いた瞬間に「わぁ、素敵なカフェ！」と視覚で伝わるよう、以下の順序で縦に並べます：
    1. **上部：オープン告知ピルバッジ**（中央または左寄せ）
    2. **中央：メイン写真 `hero-cafe.jpg`**（角丸 `20px`、`aspect-ratio: 16 / 10`、`object-position: 55% center` で花とラテを大きく美しく表示！暗幕ゼロで自然光そのまま！）
    3. **下部：メインキャッチコピー（`H1`）＋サブリード文＋CTAボタン**（余白 `24px` を空けてウォームクリーム背景の上に配置するため、文字の読みやすさが100%保証されます。ボタンはスマホ親指で押しやすいよう横幅いっぱい `width: 100%; max-width: 320px;` で中央配置）。

---

### ③ コンセプト紹介（`#concept`）

#### レイアウトの狙い：「見出しや文章の配置に変化をつける」リズム設計
文章と写真が同じパターンで並ぶと単調になるため、**「①中央リード導入」→「②左写真・右テキスト（段差オフセット）」→「③左テキスト・右写真（左右反転）」**の3段階のリズムで構成します。

#### 1. 導入リードエリア（中央配置・余白たっぷり）
- セクション見出し（`CONCEPT` / お店の想い）を中央揃えで配置。
- その下に、共感を呼ぶ導入メッセージを中央揃え（PC）/ 左揃え（SP、※スマホで4行以上の長文になる場合は左揃えの方が目の移動がスムーズで読みやすいため、短い詩的なリードなら中央揃え、段落文章なら `text-align: left` に切り替え可能）でゆったり配置（上下余白 `margin-bottom: 64px`）。

#### 2. ストーリーブロックA：手仕事と香り（PC：左に写真 52% × 右に文章 48%）
- **使用写真**：`./assets/concept-coffee.jpg`（窓辺で丁寧にハンドドリップする手元と湯気、奥に淡いピンクの花）。
  - トリミング指定：`aspect-ratio: 4 / 3; object-fit: cover; object-position: center;`、角丸 `20px`。
  - **背景あしらい**：写真の**左下**に `-16px` ずらして `--color-bg-pink`（`#F5E9E6`）の角丸座布団（`border-radius: 20px`）を配置。
- **テキスト配置の変化**：右側のテキストカラムには、上部に英語ナンバーまたは小さな見出しラベル（`01 / Handcrafted`）を添え、PCでは写真の上端より少し下がった位置（`align-items: center` または `padding-top: 24px`）に配置して抜け感を出します。見出し（`H3`）は左揃えで、左端に細い縦ラインまたは小さな花モチーフを添えます。

#### 3. ストーリーブロックB：空間と居心地（PC：左に文章 48% × 右に写真 52%【左右反転】）
- ブロックAから上下余白（PC `88px` / SP `56px`）を空けて配置。
- **使用写真**：`./assets/concept-interior.jpg`（木の2名掛けテーブル席と、右側の大きな窓に面したおひとり様向けカウンター席）。
  - **【超重要トリミング指定】**：この写真は「おひとり様用の窓際カウンター席」と「友人用のテーブル席」の両方が写っており、初来店の不安を解消する決定的な1枚です。左右が切れないよう必ず元比率に近い **`aspect-ratio: 4 / 3; object-fit: cover; object-position: center;`** を維持してください。
  - **背景あしらい**：ブロックAと対になるよう、写真の**右下**に `+16px` ずらして `--color-bg-cream`（`#F7F1E8`）の角丸座布団を配置。
- **テキスト配置**：左カラムに `02 / Cozy Space` ラベル＋見出し（`H3`）＋本文（「おひとりでの読書にも、ご友人とのおしゃべりにも」という安心メッセージを丁寧に記載）。

#### 📱 スマホ（`〜 767px`）での縦積み順序ルール（必須！）
PCで「写真→文字」「文字→写真」と互い違いにしたレイアウトをそのままスマホで縦積みにすると、中央で「文字→文字」が連続してしまいリズムが崩れます。
スマホ表示時はCSSで順序を制御し、**どちらのブロックも必ず「①写真 → ②見出し・文章」の順番で表示される**ようにしてください。

```css
/* コンセプトの互い違い2カラム設計 */
.concept-item {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr; /* 写真側を少し大きくして魅力を引き立てる */
  gap: 56px;
  align-items: center;
}
/* 偶数番目（2つ目）はPCでは左が文字・右が写真に反転 */
.concept-item--reverse {
  grid-template-columns: 0.92fr 1.08fr;
}
.concept-item--reverse .concept-item__media {
  order: 2; /* PCでは写真を右側に配置 */
}
.concept-item--reverse .concept-item__body {
  order: 1; /* PCでは文章を左側に配置 */
}

/* スマホ・小型タブレットでは、すべて「写真 → 文章」の自然な順番に統一 */
@media (max-width: 767px) {
  .concept-item,
  .concept-item--reverse {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .concept-item--reverse .concept-item__media {
    order: 1; /* スマホでは写真を一番上に戻す */
  }
  .concept-item--reverse .concept-item__body {
    order: 2; /* スマホでは文章を写真の下にする */
  }
}
```

> **💡 補足パターン（コピー原稿に「3つのこだわり」や「過ごし方カード」が含まれる場合）**
> `02_copywriting.md` の構成で3つのポイント紹介が入る場合は、上記2ブロックの下に余白 `64px` を空け、白い背景（`#FFFFFF`）・角丸 `16px`・極細枠線（`1px solid var(--color-border)`）の **3カラム・ミニマルカード（SPでは1カラム縦積み）** で軽やかにまとめます。色を増やさず、左上の `Quicksand` の数字（`01`, `02`, `03`、色 `--color-accent`）をアクセントにしてください。

---

### ④ おすすめメニュー（`#menu`）

#### セクション全体設計
- **背景色**：`--color-bg-pink`（`#F5E9E6`：ソフトピンクベージュ）。セクション上下余白をたっぷり取り、白いメニューカードがふんわり浮かび上がるように見せます。
- **対象4品と使用画像**：
  1. **自家製いちごタルト**：`./assets/menu-strawberry-tart.jpg`
  2. **ふんわりカフェラテ**：`./assets/menu-cafe-latte.jpg`
  3. **季節のフルーツパンケーキ**：`./assets/menu-fruit-pancake.jpg`
  4. **本日の焼き菓子プレート**：`./assets/menu-baked-sweets.jpg`

#### 写真を主役にし、価格や説明文が読みやすいカードUI仕様
- **グリッド配置**：
  - **PC・タブレット（`768px` 以上）**：**2カラム×2段グリッド**（最大幅 `--container-main` `1060px`、`gap: 36px`）。4カラムにすると1枚あたりの写真が小さくなってシズル感（＝瑞々しい美味しそうな魅力）が半減してしまうため、**2カラムで写真を大きく主役として見せる**のがベストです！
  - **スマホ（`〜 767px`）**：**1カラム×4段縦積み**（`gap: 28px`）。
- **カード外枠（`.menu-card`）**：
  - 背景色：`--color-surface`（`#FFFFFF`）
  - 角丸：`var(--radius-lg)`（`20px`）、`overflow: hidden`
  - 枠線＆影：`border: 1px solid var(--color-border); box-shadow: var(--shadow-soft);`
  - カード高さを揃えるため `display: flex; flex-direction: column;` を指定。
- **カード上部：写真エリア（`.menu-card__image`）**：
  - `aspect-ratio: 4 / 3;`、`overflow: hidden;`（4枚すべての写真が美しい4:3構図のため、お皿の縁やピンクベージュのリネンナプキンまで切らずに美しく収まります）。
  - `<img>` には `width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--ease-blossom);` を設定。
- **カード下部：テキスト＆価格エリア（`.menu-card__content`）**：
  - 内側余白：PC `24px 28px 28px` / SP `20px 22px 24px`。
  - **1行目（小さなこだわりタグ）**：必要に応じてメニュー名の上に小さく控えめなピルラベル（例：`店内手作り` / `季節のおすすめ`、背景 `--color-accent-soft` `#F2DCDD`、文字 `--color-accent` `#AE525A`、サイズ `11.5px`、角丸 `9999px`、`padding: 2px 10px`）を配置。
  - **2行目（メニュー名 ＋ 価格の横並びヘッダー）**：
    - `display: flex; justify-content: space-between; align-items: baseline; gap: 12px;` で、**左にメニュー名（`H3`、`19px`、太字）**、**右に価格（`Quicksand` 太字 `19px` ＋ 小さく `(税込)` `12px`）**を配置し、その下に繊細な点線 `border-bottom: 1px dashed var(--color-border); padding-bottom: 12px; margin-bottom: 12px;` を引きます。視線が左から右へ迷わず流れ、カフェのメニューブックのような上品さが生まれます！
  - **3行目（味わい・おすすめシーンの説明文）**：`--color-text-sub`（`#634E48`）、サイズ `14.5px〜15px`、行間 `1.85` で2〜3行で読みやすく表示。
- **ホバー時の優しい拡大演出（PCマウス操作時のみ `@media (hover: hover)`）**：
  - カード全体にマウスを乗せると、カードがふんわり少し浮き上がり（`transform: translateY(-4px); box-shadow: var(--shadow-hover);`）、中の写真だけが `transform: scale(1.04);` でゆっくり優しく拡大します。
- **セクション下部の安心メモ**：
  - グリッドの下に余白 `32px` を空け、「※価格はオープン時の予定価格（すべて税込）です。季節の仕入れ状況によりフルーツや焼き菓子の内容が少しずつ変わります。」といった誠実な一文を控えめに添えます。

---

### ⑤ 店舗情報（`#shop-info`）

#### ショップカード風 `<dl>` テーブル設計
無機質なビジネス表に見えないよう、カフェのレジ横に置いてある「紙のショップカード（案内状）」をイメージした温かいボックスにまとめます。

- **外枠コンテナ**：最大幅 `--container-narrow`（`760px`）で中央配置。
  - 背景色：`#FFFFFF`、角丸 `24px`、パディング PC `48px 56px` / SP `28px 22px`。
  - 枠線：`border: 1px solid var(--color-border)`、影：`var(--shadow-soft)`。さらに内側に `outline: 1px solid rgba(232, 218, 213, 0.45); outline-offset: -10px;` を入れると、活版印刷の案内状のような上品な二重枠のニュアンスが色を増やさずに表現できます。
- **定義リスト（`<dl class="shop-info-list">`）の構造**：
  - 各行（`<div class="shop-info-row">`）を `border-bottom: 1px dashed var(--color-border);` で優しく区切り、最終行のみ下線なしにします。
  - **PC（`768px` 以上）**：`display: grid; grid-template-columns: 180px 1fr; gap: 24px; padding: 20px 0; align-items: baseline;`
    - `<dt>`（項目名：店名、オープン予定、営業時間、定休日、座席・設備、お電話番号 等）：`font-weight: 700; color: var(--color-text-main);`
    - `<dd>`（内容）：`color: var(--color-text-sub); line-height: 1.8;`
  - **スマホ（`〜 767px`）**：1カラム縦積み（`grid-template-columns: 1fr; gap: 6px; padding: 16px 0;`）。`<dt>` の文字サイズを `14px`（色 `--color-accent` または太字ブラウン）にして見出しと内容の区別をくっきりつけます。
- **電話番号の準備中表記 ＋ 将来のリンク追加対応スタイル**：
  - 現在はオープン前のため、`現在準備中です（決まり次第こちらでご案内いたします）` と優しいトーンで記載し、先頭に小さな「準備中」バッジ（背景 `--color-bg-pink`、文字 `--color-text-sub`、角丸 `6px`、`padding: 2px 8px`、サイズ `12px`）を添えます。
  - **将来の差し替え用CSS（`.shop-tel-link`）**：オープン後にオーナー様が `<a href="tel:00-0000-0000" class="shop-tel-link">00-0000-0000</a>` に書き換えた際、スマホではタップしやすい電話ボタン風になり、PCでは誤クリック発信を防ぐスタイルをあらかじめ `style.css` に用意しておきます。

```css
/* 将来お電話番号が開通した際、aタグに class="shop-tel-link" を付けるだけで綺麗に動く設定 */
.shop-tel-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-en);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}
/* PC画面では誤って電話発信しないようクリックを無効化 */
@media (min-width: 768px) {
  .shop-tel-link {
    pointer-events: none;
    color: var(--color-text-main);
    text-decoration: none;
  }
}
```

> **💡 補足UI：よくあるご質問（FAQ）が入る場合のアコーディオン仕様**
> 初来店の不安（「おひとりでも大丈夫？」「予約はできる？」「テイクアウトは？」）を解消するFAQブロックを `#shop-info` 内または直前に設ける場合は、JavaScriptなしでもアクセシブルに動くHTML標準の `<details>` / `<summary>` タグを使用します。
> - 背景 `#FFFFFF`、角丸 `14px`、`border: 1px solid var(--color-border)`、各項目間 `margin-bottom: 12px`。
> - 質問文の先頭に丸い `Q` バッジ（背景 `--color-bg-pink`、文字 `--color-accent`、`Quicksand` `700`）、右端に開閉で回転する `+` / `−` アイコンを配置し、回答表示時は上部に薄い点線を引いて優しく展開します。

---

### ⑥ アクセス（`#access`）

#### セクション設計と Googleマップ仮プレースホルダー仕様
- **背景色**：`--color-bg-cream`（`#F7F1E8`：やさしいミルクベージュ）。コンテナ幅は `--container-main`（`1060px`）またはスリムで見やすい `880px` 中央配置。
- **Googleマップ レスポンシブコンテナ（`.map-container`）**：
  - 「準備中」の状態が工事現場のような冷たいグレー枠に見えないよう、**ピンクベージュ×クリーム色の優しい案内枠**としてデザインします。
  - **【重要】後から `<iframe>` を1行入れるだけで自動フィットするCSS設計**：

```html
<!-- 【Googleマップ枠】オープン後にGoogleマップの共有コード（iframe）を取得したら、
     中の .map-placeholder ブロックを丸ごと消して、iframeタグをそのまま貼り付けるだけで16:9で綺麗に収まります -->
<div class="map-container">
  <div class="map-placeholder">
    <span class="map-placeholder__icon" aria-hidden="true">
      <!-- ここに小さなマップピンまたは花の線画SVG（36px×36px、色 --color-accent） -->
    </span>
    <p class="map-placeholder__en">Map Coming Soon</p>
    <p class="map-placeholder__title">Googleマップは現在準備中です</p>
    <p class="map-placeholder__desc">
      来月、地元商店街内にオープン予定です。<br>
      詳しい番地や地図は、準備が整い次第こちらでご案内いたします。
    </p>
  </div>
  <!-- 将来の差し替え例：
  <iframe src="https://www.google.com/maps/embed?pb=..." allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Cafe Blossom 周辺地図"></iframe>
  -->
</div>
```

```css
/* 地図の外枠（プレースホルダーでも本物のGoogleマップでも美しい比率と角丸を自動維持） */
.map-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;               /* PCでは横長16:9の美しい比率 */
  border-radius: var(--radius-lg);    /* 20pxのやさしい角丸 */
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  background: linear-gradient(135deg, #FDFBF7 0%, #F5E9E6 100%);
}
/* スマホでは地図が縦に小さくなりすぎないよう 4:3 比率に自動変更 */
@media (max-width: 767px) {
  .map-container {
    aspect-ratio: 4 / 3;
  }
}
/* 将来 Googleマップの iframe を入れたときに自動で枠いっぱいにフィットさせる設定 */
.map-container iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
/* 準備中プレースホルダーのデザイン（内側破線フレーム付き） */
.map-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  outline: 1.5px dashed rgba(174, 82, 90, 0.28);
  outline-offset: -16px;
}
```

- **地図下の住所・最寄り駅・案内スペース（`.access-details`）**：
  - 地図のすぐ下（`margin-top: 28px`）に、白い角丸バー（背景 `#FFFFFF`、角丸 `16px`、パディング PC `24px 32px` / SP `20px`、`border: 1px solid var(--color-border)`）を配置。
  - PCでは2カラム（左：所在地・商店街の目印案内 ／ 右：最寄り駅からの徒歩目安・駐輪やベビーカーのご案内）、SPでは縦積みにして、地図を見ながら迷わず歩ける補足テキストスペースにします。

---

### 【補足】お問い合わせ欄（`#contact`）

#### カフェの静かな世界観に溶け込むレター風フォーム ＆ 入力順序の厳守設計
社内共通基準（`winning_patterns.md`）に基づき、**いきなり最初にお名前やメールアドレスなどの個人情報を求めず、必ず「本題（ご用件・ご質問内容）」を先に入力してもらい、そのあとに「ご連絡先（お名前・メールアドレス）」を入力する2ステップ構成**を視覚的にもわかりやすくデザインします。

- **全体枠**：最大幅 `--container-narrow`（`720px`）、背景 `#FFFFFF`、角丸 `24px`、パディング PC `48px 52px` / SP `28px 20px`、`border: 1px solid var(--color-border)`、影 `var(--shadow-soft)`。
- **視覚的グルーピング（2つのやさしいブロック）**：
  1. **【グループ1：一番上】ご用件・メッセージ（本題）**
     - 小さなステップ見出し：`Step 1`（ピルバッジ、`Quicksand`、背景 `--color-bg-pink`、文字 `--color-accent`）＋ **「まずはご質問・ご相談内容をお聞かせください」**
     - **項目①：ご用件（`<select>`）**
       - 選択肢例：「選択してください」「メニュー・アレルギーについて」「焼き菓子のお取り置きについて」「お席・ご来店について」「取材・その他のお問い合わせ」
       - 右端にカスタム下向き矢印（ブラウン系SVG）を配置し、角丸 `12px`、高さ `50px`、背景 `--color-bg-base`（`#FDFBF7`）。
     - **項目②：メッセージ内容（`<textarea>`）**
       - 高さ目安 `rows="5"`（`min-height: 130px`）、角丸 `12px`、背景 `--color-bg-base`、優しいプレースホルダー（例：「おひとりでのご来店に関するご質問や、アレルギーのご相談など、お気軽にお書きください。」）。
  2. **【グループ間の優しいつなぎ（ディバイダー）】**
     - 上下余白 `28px` に繊細な破線 `border-top: 1px dashed var(--color-border)` を引き、続けて：
  3. **【グループ2：下部】お返事をお届けするご連絡先**
     - 小さなステップ見出し：`Step 2` ＋ **「お返事をお届けするご連絡先をご入力ください」**
     - **項目③：お名前（`<input type="text" autocomplete="name">`）**
     - **項目④：メールアドレス（`<input type="email" autocomplete="email">`）**
       - ※電話番号などの細かい個人情報は不要にし、心理的ハードルを最小限に抑えます（PCではお名前とメールアドレスを2カラム横並びにしても、1カラム縦並びにしてもスッキリ収まりますが、スマホと同じ視線移動で迷わない **1カラム縦積み** を推奨します）。
- **フォーム部品の共通スタイル**：
  - ラベル横の「必須」バッジは、きつい赤色を避け、`--color-accent`（`#AE525A`）背景に白文字（`11px`、角丸 `4px`、`padding: 2px 6px`）で上品に表示。
  - 入力欄の通常枠線：`1.5px solid var(--color-border)`、文字サイズ **`16px`（`1rem`）固定**（スマホ自動ズーム防止）。
  - フォーカス時（入力中）：`border-color: var(--color-accent); background-color: #FFFFFF; box-shadow: 0 0 0 4px var(--color-focus-ring); outline: none;` で、今どこを入力しているかが優しく明確にわかるようにします。
- **送信ボタン**：
  - フォーム下部に中央配置。「お手紙を送る（送信する）」や「この内容で質問する」など優しい文言のピル型アクセントボタン（最小幅 `260px`、高さ `54px`、立体影 `var(--shadow-button)`）。
  - ボタン下に小さく「※通常2〜3営業日以内に店主よりお返事いたします。」の安心の一言を添えます。（※静的サイト実装時は、未入力チェックと送信完了時の優しいサンクスメッセージ表示をJSで実装できるようにしておきます）。

---

### ⑦ フッター（Footer）

#### 柔らかくシンプルに締めくくるデザイン仕様
- **背景色**：`--color-pink-beige`（`#EFE0DC`：ウォームピンクベージュ）。上辺に `1px solid #E4D2CD` の繊細な境界線を引き、パディングは PC `64px 20px 36px` / SP `48px 20px 28px`。
- **レイアウト構成（中央揃えの穏やかな縦積みレイアウト）**：
  1. **店名ロゴ＆タグライン**：
     - テキストロゴ `✿ Cafe Blossom`（`Quicksand` `700`、`22px`、色 `--color-text-main`）
     - その下に小さくコンセプト一文「日常の中に、小さな花が咲くようなひとときを。」（`13.5px`、色 `--color-text-sub`）
  2. **Instagramリンクボタン（準備中状態の優しい見た目）**：
     - オープンまでの試作風景などを伝える窓口として、中央に白いピル型ボタン（背景 `#FFFFFF`、角丸 `9999px`、`padding: 10px 24px`、`border: 1px solid var(--color-border)`、影 `var(--shadow-soft)`）を配置。
     - 左にInstagramの繊細な線画SVGアイコン（`18px`、色 `--color-accent`）＋ テキスト `Instagram`（`Quicksand` `600`）＋ 右隣に小さなピルバッジ `準備中`（背景 `--color-bg-pink`、文字 `--color-text-sub`、`11px`）。
     - **差し替え配慮**：現在は `href="#"`（クリック時に「公式Instagramは現在準備中です。オープンまで楽しみにお待ちください✿」と優しいトーストまたはツールチップ案内、あるいは `aria-disabled="true"` で控えめに表示）とし、後からアカウントURLが決まったら `href` を書き換えて `準備中` バッジを消すだけで本稼働できるHTMLコメントを添えてください。
  3. **ページ内ナビゲーションリンク**：
     - `Concept` / `Menu` / `Shop Info` / `Access` / `Contact` を横並び（スマホでは `flex-wrap: wrap; justify-content: center; gap: 16px 24px;`）でシンプルに配置。文字色 `--color-text-main`、サイズ `14px`。
  4. **コピーライト**：
     - 上に薄い区切り線（`max-width: 240px; border-top: 1px solid rgba(61, 46, 42, 0.1); margin: 28px auto 20px;`）を引き、`© 2026 Cafe Blossom All Rights Reserved.`（`Quicksand` `500`、`12.5px`、色 `--color-text-sub`）を記載。

---

## 5. ビジュアル・写真ディレクション

### 5-1. 既存アセット7枚（`./assets/`）の配置・CSSトリミング指定一覧

※`object-fit: cover` は「枠に合わせて写真を歪ませずに切り抜く設定」、`object-position` は「切り抜く際に写真のどこを中心に残すかの設定」です。実際の写真7枚の被写体位置を確認した最適値を以下に定義します。

| ファイルパス | 配置セクション | 写真の特徴・写っているモチーフ | 推奨 `aspect-ratio` | 推奨 `object-position` | パフォーマンス属性 |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `./assets/hero-cafe.jpg` | ② メインビジュアル | 左に白いレースカーテンの自然光、中央に白い小花、右下にラテ・スコーン・ピンクベージュリネン | PC: `4 / 3`<br>SP: `16 / 10` | `55% center`<br>（花とラテを確実に収める） | `fetchpriority="high"`<br>（※`loading="lazy"` は付けない） |
| `./assets/concept-coffee.jpg` | ③ コンセプト（ブロックA） | 窓辺の木のカウンターでアイボリーのポットからハンドドリップする手元と湯気、奥に淡いピンクの花 | `4 / 3` | `center center` | `loading="lazy"`<br>`decoding="async"` |
| `./assets/concept-interior.jpg` | ③ コンセプト（ブロックB） | 左に木の2名掛けテーブル席2卓、右に大きな窓際のおひとり様カウンター席と丸スツール | `4 / 3` | `center center`<br>（※左右の席を切らない） | `loading="lazy"`<br>`decoding="async"` |
| `./assets/menu-strawberry-tart.jpg` | ④ メニュー（1品目） | 生成りの皿に乗った艶やかないちごタルト、右にピンクベージュリネンと真鍮フォーク | `4 / 3` | `center 55%` | `loading="lazy"`<br>`decoding="async"` |
| `./assets/menu-cafe-latte.jpg` | ④ メニュー（2品目） | 淡いピンクベージュの陶器カップにハートのラテアート、添えられた小菓子サブレ | `4 / 3` | `center center` | `loading="lazy"`<br>`decoding="async"` |
| `./assets/menu-fruit-pancake.jpg` | ④ メニュー（3品目） | 2段パンケーキといちじく・いちご・桃・ブルーベリー、奥に穏やかに語らう客席のボケ味 | `4 / 3` | `center 55%` | `loading="lazy"`<br>`decoding="async"` |
| `./assets/menu-baked-sweets.jpg` | ④ メニュー（4品目） | 白皿にフィナンシェ・桜クリームのパウンドケーキ・紅茶クッキー、奥に淡い春の花 | `4 / 3` | `center 55%` | `loading="lazy"`<br>`decoding="async"` |

### 5-2. 将来オーナー様が実店舗写真を撮影・差し替えする際のトーン＆マナー指針
オープン後に実際の店舗写真へ差し替える場合も、サイトの統一感が崩れないよう以下の3点を意識して撮影するのがおすすめです。
1. **光（ライティング）**：蛍光灯の青白い光や強いフラッシュは避け、**晴れた日〜薄曇りの午前・昼下がりの窓辺の自然光（逆光〜半逆光／斜光）**で撮影すると、お菓子の焼き色やクリームの艶がいちばん優しく写ります。
2. **色温度（ホワイトバランス）**：少し暖かみのある **5200K〜5600K（太陽光〜ややアンバー寄り）** に揃えると、背景のウォームクリームやピンクベージュと綺麗になじみます。
3. **構図の余白**：お皿のドアップだけでなく、周囲に木のテーブルやリネンナプキンが2〜3割見える「少し引いた横位置（4:3比率）」で撮ると、カードに当てはめたときに窮屈にならず上品に仕上がります。
4. **ロゴ素材の扱い**：本制作ではロゴ画像の自動生成は行わず、洗練されたテキストロゴ（`Cafe Blossom`）で実装します。実店舗のロゴデータが完成した際は、ヘッダーおよびフッターの `.site-logo` 内を `<img>` タグ1行に差し替えるだけで完了します。

---

## 6. アニメーション・インタラクション＆アクセシビリティ指針

個人経営カフェの穏やかな時間の流れを表現するため、素早く跳ねるような派手な動きは一切避け、**「小さな花がふんわりと咲くような（Blossom Fade）」控えめで心地よい演出**に統一します。

### 6-1. スクロール・フェードイン演出（`.js-fade-up`）
- **対象要素**：各セクションの見出し、コンセプトの写真・文章ブロック、メニューカード4枚（`0.1s` ずつ順番に遅延させると上品）、店舗情報カード、マップ枠、フォーム枠。
- **動きの数値**：
  - 初期状態：`opacity: 0; transform: translateY(16px);`（※移動距離を `16px` と小さめに抑えるのが、安っぽくならず上品に見せるコツです！）
  - 表示状態（`.is-visible` 付与時）：`opacity: 1; transform: translateY(0); transition: opacity 0.8s var(--ease-blossom), transform 0.8s var(--ease-blossom);`
  - 発火タイミング：JavaScriptの `IntersectionObserver`（画面内に入ったかを検知する標準機能）で `threshold: 0.15`（要素が15%見えたら1度だけ再生）。

### 6-2. スムーズスクロール＆ヘッダー被り防止
- ページ内リンク（`#concept`, `#menu` 等）をクリックした際、該当セクションの見出しが固定ヘッダーの下に隠れてしまわないよう、`html` 要素に必ず `scroll-padding-top` を設定してください。

### 6-3. アクセシビリティ配慮（`prefers-reduced-motion` 対応）
画面のアニメーションで乗り物酔いのような体調不良を起こしやすい方や、OSの設定で「視差効果を減らす」をオンにしている方のために、以下のCSSを必ず含めてください。

```css
/* スムーズスクロールと、固定ヘッダー分の位置ズレ防止 */
html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 16px);
}

/* ふんわり咲くスクロールフェードイン */
.js-fade-up {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.8s var(--ease-blossom), transform 0.8s var(--ease-blossom);
}
.js-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 【アクセシビリティ配慮】動きを減らす設定をONにしている方にはアニメーションを無効化 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after,
  .js-fade-up {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 7. エンジニア（田中 ケンタさん）への実装引き継ぎチェックリスト

田中さんがコーディングを進める際、社内共通基準（`winning_patterns.md`）と本仕様書の品質を100%発揮できるよう、最終確認ポイントをまとめました！

- [ ] **オーナー様向けの日本語コメント**：HTMLの各セクション開始・終了位置（例：`<!-- ===== おすすめメニュー（価格や説明文はここを書き換えます） ===== -->`）、ロゴ差し替え箇所、電話番号・Googleマップ・Instagram URLの差し替え箇所、およびCSSの `:root` 変数には、**初心者の方が見てもすぐ手直しできる親切な日本語コメント**を必ず入れてください。
- [ ] **LINE・SNS共有対策（OGPタグ設定）**：リサーチ結果の通り、友人にLINEでホームページURLを送る使われ方が非常に多いため、`<head>` 内に基本的なOGPタグ（`og:title`, `og:description`, `og:image="./assets/hero-cafe.jpg"`, `og:type="website"`）を設定してください。
- [ ] **画像の `alt` 属性（代替テキスト）**：すべての写真に、単なる「写真1」ではなく「窓辺の木のテーブルに並んだカフェラテと焼き菓子」のように、情景が伝わる優しい日本語の `alt` を設定してください（装飾用のSVGアイコンには `aria-hidden="true"` を付与）。
- [ ] **お問い合わせフォームの順序確認**：必ず一番上が「ご用件・ご質問内容」、その下が「お名前・メールアドレス」の順番になっていること、スマホ入力欄が `font-size: 16px`（`1rem`）以上になっていることを確認してください。
- [ ] **JavaScript無効時・読み込み遅延時の安全性**：万が一JSが動かない環境でも `.js-fade-up` が透明のまま消えてしまわないよう、`<html>` にJSで `.js-enabled` クラスを付与したときだけ初期 `opacity: 0` を適用する（プログレッシブ・エンハンスメント）設計にするとさらに盤石です！

---

*以上、専属UI/UX・Webデザイナー 高橋 アヤによる「Cafe Blossom」デザイン仕様書でした。お店の扉を開ける前から温かい香りと光が伝わるような、素敵なページに仕上げましょうね！*
