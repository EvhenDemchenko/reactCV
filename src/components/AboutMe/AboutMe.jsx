import aboutMe from './aboutme.module.scss';

const AboutMe = ({data}) => {
    return (
        <div className={aboutMe.aboutMe}>
            <div className={aboutMe.item}>
                <p>
                    {data.title}
                </p>
                <b>{data.value}</b>
            </div>
        </div>
    )
}
export default AboutMe;