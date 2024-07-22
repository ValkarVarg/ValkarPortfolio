import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'; 

function Hire() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_y36fhm4', 'template_boggwl4', e.currentTarget, 'bDOJUkdA07BPWOUty')
            .then((result) => {
                console.log(result.text);
                setFormStatus('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: '',
                });
            }, (error) => {
                console.log(error.text);
                setFormStatus('There was an error sending your message. Please try again.');
            });
    };

    return (
        <div className="bg-licorice min-h-screen p-4 text-slate-100">
            <Link to="/" className="inline-block text-slate-100 hover:text-airblue mb-4">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </Link>
            <h2 className="text-3xl font-bold mb-4 text-center">Hire Me</h2>
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-paynegrey text-slate-100 border border-slate-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-paynegrey text-slate-100 border border-slate-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-lg font-medium mb-2">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-paynegrey text-slate-100 border border-slate-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-paynegrey text-slate-100 border border-slate-900"
                            rows={5}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-airblue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                    {formStatus && (
                        <div className="mt-4 text-green-500 text-center">{formStatus}</div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Hire;
