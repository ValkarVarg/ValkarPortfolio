import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Career() {
    return (
        <div className="bg-licorice min-h-screen p-4 text-slate-100">
            <Link to="/" className="inline-block text-slate-100 hover:text-airblue mb-4">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </Link>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-3 text-center">Why Hire Me?</h2>
                <p className="mb-3">
                    With 11 years of project management and PMO experience, I have a proven track record of making projects better and successfully managing from start to finish. Now, I am expanding my skill set by diving into the world of coding. This unique combination of project management expertise and coding knowledge allows me to wrap my arms around the full project and deliver exactly what is needed.
                </p>
                <p className="mb-3">
                    I am driven to deliver the best every time, and love collaborating and helping others to develop alongisde me. My ability to understand both the big picture and the finer details makes me a valuable asset to any team. I have a proven track record of effectively communicating the story of a project to executives, senior stakeholders and investors.
                </p>
                <p className="mb-3">
                    For more details on my career journey so far, please download my CV. If you'd like to get in contact about a project or role you would like to engage me on, please click Hire Me below.
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    <Link to="/hire" className="bg-airblue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Hire Me
                    </Link>
                    <a href="./public/Mike Williams CV.pdf" download className="bg-airblue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Career;
