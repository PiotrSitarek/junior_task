import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';

const Contact = () => {

    useEffect(() => {
        const joined = document.querySelector(".contact_joined");
        let i = 35000;
        const interval = setInterval(function () {
            if (i !== 0) {
                i = i - 1750;
                joined.innerHTML = i + "+ ALREADY JOINED";
            } else {
                clearInterval(interval)
            }
        }, 1000);
    }, [])


    const mailFormula = /\S+@\S+\.\S+/;
    const required = value => (mailFormula.test(value) ? undefined : 'Whoops, make sure it`s an email');

    const errorIcon = (meta) => {
        // do dokończenia, brak czasu      
    }

    return (
        <section className="mainPage_contact">
            <p className="contact_joined">35 000+ ALREADY JOINED</p>
            <p className="contact_update">Stay up-to-date with what we`re doing</p>
            <div className="contact_form_container">
                <Form onSubmit={fields => {

                }}
                    render={({ handleSubmit, pristine, invalid }) => (

                        <form onSubmit={handleSubmit} id="mainPage_contact" className="contact_form">
                            <label >
                                <Field name="contact_email" validate={required} >
                                    {({ input, meta }) => (
                                        <fieldset className="fieldset_positioner">
                                            <input {...input} className="contact_input" placeholder="Enter your email adress" />
                                            {meta.error && meta.touched && <span className="contact__error">{meta.error}{errorIcon(meta)}</span>}
                                        </fieldset>
                                    )}
                                </Field>
                            </label>
                            <button type="submit" className="contact_button">Contact Us</button>
                        </form >
                    )}
                />
            </div>
        </section>
    )
}
export default Contact;