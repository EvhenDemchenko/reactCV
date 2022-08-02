import aboutme from './aboutme.module.scss';

const AboutMe = ({data}) => {

    return (
     <div className={aboutme.aboutMe}>
         <div className={aboutme.item}>
             <p>
                 {data.title}
             </p>
            <b> {data.value}  </b>
        </div>
    </div>
    )
}
export default AboutMe;