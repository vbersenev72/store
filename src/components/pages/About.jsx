const About = () => {
    return (
        <div className="about">
            <div className="about-me">
                <h1 className="about-name" >Владислав, Frontend-Developer</h1>
                <div className="about-links">
                    <a className="about-link" href="https://github.com/vbersenev72">GitHub</a>
                    <a className="about-link" href="https://t.me/SuperParavozik2006">Telegram</a>
                    <a className="about-link" href="https://vk.com/superskotstvo">VK</a>
                    <a className="about-link" href="https://kwork.ru/user/vladbers123458775">Kwork</a>
                </div>
            </div>
            
            <div className="about-project">
                Данный каталог является пет-проектом, и не несет коммерческих целей.
                <br/>
                Технологии на проекте: React.js, tailwind.css, react-router-dom
            </div>

        </div>
    )
}
export default About