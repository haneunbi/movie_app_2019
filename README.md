# Movie App 2019

https://haneunbi.github.io/movie_app_2019/

```
npx -v (버전 체크)
npm i -g npx (설치 필요시)
npx create-react-app movie_app_2019
```

```
git init
git remote add origin <*.git>
git add .
git commit -m "msg"
git push origin master
```

```
git branch gh-pages
git add .
git commit -m "msg"
git push origin gh-pages
```
푸시 완료 후 GitHub Repository 에서 'Setting' 메뉴로 이동  
Setting > GitHub Pages > Source 를 'gh-pages' 브랜치로 변경  

JSX : JavaScript 안의 HTML

React Application은 한 번에 하나의 Component만 Rendering할 수 있다. <App />
    - Component 안에 더 많은 Component를 import할 수 있다.


map()은 array의 각 item에서 function을 실행하는 array를 가지는
JavaScript function이며 그 function의 result를 갖는 array를 리턴한다.

array를 취하고 각 item에 대한 원하는(연산한) 결과값에 대한 array를 리턴

```js
list.map(item => {
    return item + '추가하고 싶은 무언가';
});
```

```js
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';
```
BrowserRouter가 url이 깔끔하나 github pages에선 HashRouter 설정이 용이
- [React Router](https://reactrouter.com/web/api/Link/to-object)



- [ReactJS로 영화 웹 서비스 만들기 – 노마드 코더 Nomad Coders](https://nomadcoders.co/react-fundamentals)
- [PropTypes와 함께 하는 타입 확인 - React](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
- [Hook의 개요 – React](https://ko.reactjs.org/docs/hooks-intro.html)
