# Robo Filter

[DEMO](https://jyun9504.github.io/robo-filter/)

## 功能：

- 因 ReactJS 元件化的特性將 App 區分為不同元件，網頁主要分為兩個區塊：

  1. 搜尋欄
  2. 卡片列表

   透過搜尋欄輸入的文字，以名字對機器人卡片做篩選。

- 透過 Redux 管理狀態，使用 redux-logger 追蹤狀態變化，redux-thunk 實現 action 非同步 dispatch。

- 使用 Promise 物件 then catch 管理 request。

- 使用 onLoad 事件做圖片 Loading。

- 卡片資料使用 fetch 對 JSONPlaceholder 提供的假會員資料串接。

- 樣式使用 tachyons component library 加上一點 css。

## 資料夾結構：
src/  
&nbsp; &nbsp;L assets/   
&nbsp; &nbsp;L components/  
&nbsp; &nbsp; &nbsp; &nbsp;L Card/  
&nbsp; &nbsp; &nbsp; &nbsp;L CardList/  
&nbsp; &nbsp; &nbsp; &nbsp;L ErrorBoundry/  
&nbsp; &nbsp; &nbsp; &nbsp;L Scroll/  
&nbsp; &nbsp; &nbsp; &nbsp;L SearchBox/  
&nbsp; &nbsp;L containers/  
&nbsp; &nbsp; &nbsp; &nbsp;L App/  
&nbsp; &nbsp;L redux/  
&nbsp; &nbsp; &nbsp; &nbsp;L actions/  
&nbsp; &nbsp; &nbsp; &nbsp;L constants/  
&nbsp; &nbsp; &nbsp; &nbsp;L reducers/  
  
## 使用套件：
- creact-react-app
- redux-logger
- redux-thunk
- react-helmet
- tachyons

## Project setup
```
npm i
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```