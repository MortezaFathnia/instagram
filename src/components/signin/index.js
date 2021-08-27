import React, { Component } from 'react';
import firebase from 'firebase';

import FormFields from '../ui/formFields';
import { validate } from '../ui/misc';

import Icon from '../../Resources/icons/logo.png';

export class SignIn extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    updateForm(element) {
        const newFormData = { ...this.state.formData };
        const newElement = { ...newFormData[element.id] };

        newElement.value = element.event.target.value;

        let validData = validate(newElement);

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;

        this.setState({
            formError: false,
            formData: newFormData
        })
    }


    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if (formIsValid) {
            firebase.auth()
                .signInWithEmailAndPassword(
                    dataToSubmit.email,
                    dataToSubmit.password
                ).then(() => {
                    this.props.history.push('/dashboard');
                }).catch((error) => {
                    this.setState({
                        formError: true
                    })
                })


        } else {
            this.setState({
                formError: false
            })
        }
    }

    render() {
        return (
            <div className="signin_wrapper">
                <div className="container">
                    <div className="logo_wrapper">
                        <img src={Icon} alt="Logo" />
                    </div>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="title_login">
                            <h5 className="header_login">با این شماره قبلا ثبت نام کردی!</h5>
                            <p className="text_login gray_text">برای وارد شدن نام کاربری و رمز عبورت رو بنویس.</p>
                        </div>
                        <FormFields
                            id={'email'}
                            formData={this.state.formData.email}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormFields
                            id={'password'}
                            formData={this.state.formData.password}
                            change={(element) => this.updateForm(element)}
                        />
                        {this.state.formError ?
                            <div className="error_label">متاسفانه مشکلی پیش آمده است، لطفا مجددا تلاش کنید</div>
                            : null
                        }
                        <button onClick={(event) => this.submitForm(event)}>ورود</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;
