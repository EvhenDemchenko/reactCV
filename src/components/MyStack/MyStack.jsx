import myStack from './myStack.module.scss';

const MyStack = ({props}) => {

    return (
        <div className={myStack.wrapper}>
            <div className={myStack.item}>
                {
                    props.learned ?
                    <img className={myStack.img} src="/images/correct.png" alt="done"/> :
                    <img  className={myStack.img}  src="/images/discorrect.png" alt="notdone"/>
                }
                <p> {props.technology} </p>
            </div>
        </div>
    )
}
export default MyStack;