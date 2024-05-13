import "./Content.css";
import GradientTittle from '../GradientTittle/GradientTittle.jsx';
import Slider from "../Slider/Slider.jsx";
import photo_1 from "../../assests/images/1_photo.png";
import photo_2 from "../../assests/images/2_photo.png";
import photo_3 from "../../assests/images/3_photo.png";
import photo_4 from "../../assests/images/4_photo.png";
import photo_5 from "../../assests/images/5_photo.png";
import photo_6 from "../../assests/images/6_photo.png";

const sliderData = [
    {
        label: 'CEO AND COFOUNDER, ARKETA',
        tittle: 'Rachel Lea Fishman',
        img: photo_1
    },
    {
        label: 'CEO AND CO-FOUNDER, FORMA',
        tittle: 'Jason Fan',
        img: photo_2
    },
    {
        label: 'CEO, OPENAI',
        tittle: 'Sam Altman',
        img: photo_3
    },
    {
        label: 'SVP OF PRODUCT, JOBBER',
        tittle: 'Jeff Sheclock',
        img: photo_4
    },
    {
        label: 'HEAD OF STRATEGY, SARDINE',
        tittle: 'Simon Taylor',
        img: photo_5
    },
    {
        label: 'HEAD OF GLOBAL SALES, STRIPE',
        tittle: "Eileen O'Mara",
        img: photo_6
    }
]

export default function Content() {
    return(
    <div className="content">
        <GradientTittle>Meet our speakers</GradientTittle>
        <div className="grid-content">
            <p>Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
        </div>
        <Slider data={sliderData} />
    </div>
    )
}