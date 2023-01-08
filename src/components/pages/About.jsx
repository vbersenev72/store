import "../styles/about.css"
import Button from '@mui/material/Button';

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
                <h1>Данный каталог является пет-проектом, и не несет коммерческих целей.</h1>
                <br/>
                Технологии на проекте: React.js, tailwind.css, Material-UI, react-router-dom
                <br/>
                <br/>
                <br/>
                Виртуальный онлайн-шоп с возможностью добавления товаров в корзину / удаления из корзины
                <br/>
                Так-же реализована система модального окна при клике на "view"
                <br/>
                Сурс проекта - <a href="https://github.com/vbersenev72/store"><Button variant="contained">В моем GitBub</Button></a>
                <br />
                Документация по пользовательскому интерфейсу в файле README.md
            </div>

        </div>
    )
}
export default About