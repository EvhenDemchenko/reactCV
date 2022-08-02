import app from './app.module.scss'
import Header from "../header/Header";
import AboutMe from "../aboutMe/AboutMe";
import MyStack from "../MyStack/MyStack";

const myStack = [
    {learned: true, technology: 'JavaScript (Примитивы, Объекты, Массивы, Функции)'},
    {learned: true, technology: 'Навыки манипуляции с DOM деревом'},
    {learned: true, technology: 'Основные паттергны программирования '},
    {learned: true, technology: 'ООП в JavaScript'},
    {learned: true, technology: 'Работа с REST API'},
    {learned: true, technology: 'MVC/MVP/MVVM архитектуры'},
    {learned: false, technology: 'Библиотека ReactJS для SPA'},
    {learned: false, technology: 'Принципы работы роутинга на примере библиотеки react-router'},
    {learned: false, technology: 'Хранение состояния приложения на примере redux и redux-thunk'},
]
const aboutMe = [
    {title: 'Возраст:', value: '25 лет '},
    {title: 'Опыт работы:', value: 'отсутсвует'},
    {title: 'Местоположение:', value: 'Украина, Одесса '},
    {title: 'Дополнительно:', value: 'готов к удаленной работе'}
]

function App() {
    return (
        <div className={app.wrapper}>
            <Header/>
            <div className={app.aboutWrapper}>
                {aboutMe.map((item,index)=> <AboutMe key={Math.random()*index} data={item} />)}
            </div>
            <div className={app.myStackWrapper}>
                {myStack.map((item,index)=><MyStack props={item} key={index} />)}
            </div>
        </div>
    );
}

export default App;