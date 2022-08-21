import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm' >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className="col-12 m-3" noValidate >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  {/* About us section */}
                  <br></br>
                  <br></br>
                  <h1>About Us</h1>
                  <br></br>
                  <br></br>
                  <p>We're a close-knit bunch in a small company so we can offer a very personal service.  Combined, we've had more ski days than you can shake a stick at and we all love to get on the slopes to become big kids again.  You will meet our team, Bradley (the managing director), Pete and Shaun (Senior Ski Sales Specialists and Instructors),  Lauren and Sheena (Finance and Administration) there to welcome the enthusiastic skiers at the resort.</p>
                  <img src="/../../../images/team01.jpg" alt=""></img>
                  <br></br>
                  {/* Contact */}
                  <h1>Contact Us</h1>
                  <br></br>
                  <br></br>
                  <p>We also offer ski lessons, delicious take-away meals, heated pool, insurance cover, and transportation at the resort. We also team up with other resort owners and food caterers to secure you the most affordable and best deals for you, your family and friends.</p>

                  <p></p>
                  {/* Enquiry  */}
                  <p>Contact us at 1800 122 122 <BsTelephone style={{ color: 'blue', fontSize: '30px' }} />for more information and our friendly staff would be able to  assist you.</p>

                  <br></br>

                  <p>If you 'd like to make an enquiry or get in touch about a ski package that you have already purchased or like to make a cancellation due to unforeseen circumstances and within fourteen days period, we will refund to you your money.</p>

                  <p>You can get in touch with our team by submitting the form.  For any other queries enter everything we need to know below and we'll make sure the right team gets back to you using the contact details provided.</p>
                  <br></br>npm
                  <br></br>
                  <br></br>
                  <br></br>

                  {/*Form Input Area  */}
                  <div className='col-5'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <br></br>
                  <div className='col-5'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <textarea
                      rows={6}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <br></br>
                <button className='submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
                <br></br>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;