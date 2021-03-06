import React from "react"
import brand from "../assets/images/icon-72x72.png"
import css from '../assets/css/components/navbar.css'
import menu from '../assets/css/modules/hamburger.min.css'
import {slideInRight, slideInLeft} from '../assets/js/libs/ScrollReveal'
import {RevealElements} from "../assets/js/functions/Animations";

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleIsActive = this.handleIsActive.bind(this)
        this.handleSidebar = this.handleSidebar.bind(this)
        this.state = {
            menuActive: false
        }
    }

    componentDidMount() {
        this.handleAnimation()
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.menuActive !== this.state.menuActive
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuActive !== this.state.menuActive) {
            return this.handleSidebar()
        }
    }

    render() {
        return <nav className={css.navbar}>
            <a href="#" className={css.navbar_brand}><img src={brand} alt="mael-91.me logo" data-anim="navbar_brand"/></a>
            <ul className={css.navbar_nav} data-anim="navbar_nav" ref="nav">
                <li><a href="#" className={css.nav_item}>Intro</a></li>
                <li><a href="#skills" className={css.nav_item}>Compétences</a></li>
                <li><a href="#technologies" className={css.nav_item}>Technologies</a></li>
                <li><a href="#projects" className={css.nav_item}>Projets</a></li>
                <li><a href="#contact" className={css.nav_item}>Contacter</a></li>
            </ul>
            <button data-anim="mobile_nav" className={`${menu.hamburger} ${menu.hamburger_slider} 
            ${this.state.menuActive ? menu.is_active + ' m_nav_active': ''}`} onClick={this.handleIsActive}>
                <span className={menu.hamburger_box}>
                    <span className={menu.hamburger_inner} />
                </span>
            </button>
            <div className={`${css.mobile_nav} text-center ${this.state.menuActive ? css.m_nav_active: ''}`}>
                <ul ref="mobileNav"></ul>
            </div>
        </nav>
    }

    handleAnimation() {
        slideInLeft.distance = '120px'
        RevealElements('[data-anim="navbar_brand"]', slideInLeft)
        RevealElements('[data-anim="navbar_nav"]', slideInRight)
        slideInRight.distance = '120px'
        RevealElements('[data-anim="mobile_nav"]', slideInRight)
    }

    handleIsActive() {
        this.setState({menuActive: !this.state.menuActive})
    }

    handleSidebar() {
        if (!this.state.menuActive) {
            this.refs.mobileNav.innerHTML = ''
        } else {
            this.refs.mobileNav.innerHTML = this.refs.nav.innerHTML
        }
    }
}
