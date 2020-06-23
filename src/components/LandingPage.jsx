import React from "react"
import css from '../assets/css/components/landing_page.css'
import face from "../assets/images/svg/face.svg";

export default class LandingPage extends React.Component {

    render() {
        return <div className={css.landing_page}>
            <div className={css.landing_page_intro}>
                <h1 className="text-center">Mael-91</h1>
                <h5 className="text-center">Young beginner in the world of web development</h5>
                <p >
                    It all started during the year 2019, where I focused more on web development, I started with <span>HTML</span>,
                    <span>CSS</span> and <span>JavaScript</span> then I moved to back-end development to learn <span>PHP</span>,
                    since then I work a lot on personal projects to put my skills into practice and use frameworks (such as Symfony).<br/><br/>
                    Since 2020, having a good base in <span>JavaScript</span>, I've oriented myself towards front-end
                    frameworks (<span>React</span>, <span>preact</span> currently).
                </p>
            </div>
            <div className={css.landing_page_face}>
                <svg viewBox={face.viewBox} className="face">
                    <use xlinkHref={'#' + face.id}></use>
                </svg>
            </div>
        </div>
    }
}
