import "../styles/about.css"
import Button from '@mui/material/Button';

const About = () => {
    return (
        <div className="about">

            <div className="about-me">
            
                <h1 className="about-name">Владислав</h1>
                <h1 className="about-name">Frontend-Developer</h1>

                <div className="about-links">

                    <Button variant="contained" href="https://github.com/vbersenev72">GitHub</Button>
                    <Button variant="contained" href="https://t.me/SuperParavozik2006">Telegram</Button>
                    <Button variant="contained" href="https://vk.com/superskotstvo">VK</Button>
                    <Button variant="contained" href="https://kwork.ru/user/vladbers123458775">Kwork</Button>
                
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