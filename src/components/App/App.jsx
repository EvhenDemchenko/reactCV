import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import MyStack from "../MyStack/MyStack";

import {useState} from 'react';

import app from './app.module.scss';
import {v4} from 'uuid';


const myStack = [
    {id: v4(), learned: true, technology: 'JavaScript (Примитивы, Объекты, Массивы, Функции)'},
    {id: v4(), learned: true, technology: 'Навыки манипуляции с DOM деревом'},
    {id: v4(), learned: true, technology: 'Основные паттергны программирования '},
    {id: v4(), learned: true, technology: 'ООП в JavaScript'},
    {id: v4(), learned: true, technology: 'Работа с REST API'},
    {id: v4(), learned: true, technology: 'MVC/MVP/MVVM архитектуры'},
    {id: v4(), learned: false, technology: 'Библиотека ReactJS для SPA'},
    {id: v4(), learned: false, technology: 'Принципы работы роутинга на примере библиотеки react-router'},
    {id: v4(), learned: false, technology: 'Хранение состояния приложения на примере redux и redux-thunk'},
];
const aboutMe = [
    {id: v4(), title: 'Возраст:', value: '25 лет '},
    {id: v4(), title: 'Опыт работы:', value: 'отсутсвует'},
    {id: v4(), title: 'Местоположение:', value: 'Украина, Одесса '},
    {id: v4(), title: 'Дополнительно:', value: 'готов к удаленной работе'}
];

const App = () => {
    const [stack, setStack] = useState(myStack);
    const [val, setVal] = useState('');

    const setInputValue = (event) => {
        setVal(event.target.value)
    };
    const addNewTech = (event) => {
        event.preventDefault();
        setStack([{id: v4(), learned: false, technology: val}, ...stack]);
        setVal('');
    };

    return (
        <div className={app.wrapper}>
            <Header/>
            <div className={app.aboutWrapper}>
                {aboutMe.map((item) => <AboutMe
                    key={item.id}
                    data={item}
                />)}
            </div>
            <div className={app.myStackWrapper}>
                <form
                    onSubmit={addNewTech}
                    className={app.form}
                    action="#">
                    <input onChange={setInputValue} value={val} type="text"/>
                    <button type="submit"> добавить</button>
                </form>
                {stack.map((item) => <MyStack
                    props={item}
                    key={item.id}
                />)}
            </div>
        </div>);
}

export default App;