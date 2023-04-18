import "./ContactUs.css";
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import notify from "../../../Services/Notify";
import emailjs from '@emailjs/browser';

interface contactForm {
    name: string,
    phone: string,
    message: string
}

const resolver: Resolver<contactForm> = async (values) => {
    return {
        values: values.name && values.phone && values.message ? values : {},
        errors: !values.name && !values.message && !values.phone
            ? {
                name: {
                    type: 'required',
                    message: 'אנא מלא את שמך.',
                },
                phone: {
                    type: 'required',
                    message: 'אנא מלא מספר טלפון.',
                },
                message: {
                    type: 'required',
                    message: 'אנא מלא את מטרת הפנייה.',
                },
            }
            : !values.name ? {
                name: {
                    type: 'required',
                    message: 'אנא מלא את שמך.',
                }
            } : !values.message ? {
                message: {
                    type: 'required',
                    message: 'אנא מלא את מטרת הפנייה.',
                }
            } : !values.phone ? {
                phone: {
                    type: 'required',
                    message: 'אנא מלא מספר טלפון.',
                }
            } : {},
    };
}

function ContactUs(): JSX.Element {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<contactForm>({ resolver });
    const submit: SubmitHandler<contactForm> = data => {
        try {
            const obj = {...data}
            console.log(obj);
            
            emailjs.send('service_t61zdur', 'template_wqtke8g', obj, 'GdC_mO1pCeDSGqzJS')
                .then((res) => {
                    console.log(res.status, res.text);
                }, (error) => {
                    console.log(error);

                });
            reset();
            notify.success("!הפנייה נשלחה בהצלחה");
        }
        catch (err:any) {
            notify.error(err.message);
        }
    }

    return (
        <div className='ContactUs' dir="rtl">
            <h1>השאירו פרטים ונציגינו יחזרו אליכם בהקדם!</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form id='contact-form' noValidate onSubmit={handleSubmit(submit)}>

                                <div className='row formRow'>
                                    <div className='col-6 form-margin'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control formInput'
                                            placeholder='*שם:'
                                            {...register("name")}
                                        />
                                        <span className="errorSpan">{errors.name?.message}</span>
                                    </div>
                                    <div className='col-6 form-margin'>
                                        <input
                                            type='phone'
                                            name='phone'
                                            className='form-control formInput'
                                            placeholder='*טלפון:'
                                            {...register("phone")}
                                        />
                                        <span className="errorSpan">{errors.phone?.message}</span>
                                    </div>
                                </div>


                                <div className='row formRow'>
                                    <div className='col form-margin'>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            className='form-control formInput'
                                            placeholder='*מטרת הפנייה..'
                                            {...register("message")}
                                        />
                                        <span className="errorSpan">{errors.message?.message}</span>
                                    </div>
                                </div>
                                <button className='submit-btn btn btn-primary ' type='submit'>
                                    שלח
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
