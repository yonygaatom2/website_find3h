import './CreateAccountPage.css'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { AppDispatch, AppState } from '../../../../Store'
import { RoutesPath } from '../../../../config/routes/RoutesPath'
import { StateStatus } from '../../../../cores/utils/enums/StateStatus'
import { resetSignUpState, SignUpWithEmail } from '../../slice/SignUpSlice'
import { SIGN_UP_SUCCESS } from '../../../../cores/utils/constants/Strings'
import { validEmail } from '../../../../cores/utils/helpers/validators/ValidEmail'
import { validUsername } from '../../../../cores/utils/helpers/validators/ValidString'
import AppButton from '../../../../cores/utils/components/buttons/app_button/AppButton'
import { validPassword } from '../../../../cores/utils/helpers/validators/ValidPassword'
import AppDropdown from '../../../../cores/utils/components/dropdowns/app_dropdown/AppDropdown'
import DateOfBirth from '../../../../cores/utils/components/dropdowns/date_of_birth/DateOfBirth'
import Inputfield from '../../../../cores/utils/components/inputfields/app_inputfield/Inputfield'
import TermsAndPrivacy from '../../../../cores/utils/components/buttons/terms_and_privacy/TermsAndPrivacy'
import PasswordInputfield from '../../../../cores/utils/components/inputfields/password_inputfield/PasswordInputfield'
import { ValidatePhoneNumber as validPhoneNumber } from '../../../../cores/utils/helpers/validators/ValidPhoneNumber'

const CreateAccountPage: React.FC = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const state = useSelector((state: AppState) => state.signUp)

    useEffect(() => {
        if (state.status === StateStatus.signUpSuccess) {
            dispatch(resetSignUpState())
            toast.success(SIGN_UP_SUCCESS, { autoClose: 4000, position: 'bottom-right' })
            navigator(RoutesPath.SIGN_IN);
            return;
        }
    }, [state.status])

    // Form State
    const [username, setUsername] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    // Error State
    const [usernameError, setUsernameError] = useState<string | null>(null)
    const [emailError, setEmailError] = useState<string | null>(null)
    const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null)
    const [passwordError, setPasswordError] = useState<string | null>(null)

    // Manage Form Data changes
    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const submitSignUpData = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const emailErrorMessage: string | null = validEmail(email)
        if (emailErrorMessage !== null) {
            setEmailError(emailErrorMessage)
        }

        const passwordErrorMessage: string | null = validPassword(password)
        if (passwordErrorMessage !== null) {
            setPasswordError(passwordErrorMessage)
        }

        const usernameErrorMessage: string | null = validUsername(username)
        if (usernameErrorMessage !== null) {
            setUsernameError(usernameErrorMessage)
        }

        const phoneNumberErrorMessage: string | null = validPhoneNumber(phoneNumber, null)
        if (phoneNumberErrorMessage !== null) {
            setPhoneNumberError(phoneNumberErrorMessage)
        }

        if (
            emailErrorMessage !== null ||
            passwordErrorMessage !== null ||
            usernameErrorMessage !== null ||
            phoneNumberErrorMessage !== null
        ) {
            return;
        }

        await dispatch(SignUpWithEmail({
            username: username as string,
            password: password as string,
            email: email as string,
            dateOfBirth: '' as string,
            gender: '' as string,
        }))
    }

    return (
        <section className="createAccountPage">
            <div style={{ height: '160px' }}></div>
            <form autoComplete='off' className="createAccountForm">
                <h1 className='signUpTitle'>Find3H</h1>
                <p className='signUpSubTitle'>Find Your <span>Happiness</span></p>
                <div style={{ height: '24px' }}></div>
                <Inputfield
                    autoComplete='off'
                    onChanged={onChangeUsername}
                    value={username}
                    type='text'
                    errorMessage={usernameError}
                    placeholder='Username'
                />
                <div style={{ height: '16px' }}></div>
                <Inputfield
                    autoComplete='off'
                    onChanged={onChangeEmail}
                    value={email} type='email'
                    errorMessage={emailError}
                    placeholder='Email'
                />
                <div style={{ height: '16px' }}></div>
                <DateOfBirth />
                <div style={{ height: '16px' }}></div>
                <AppDropdown options={[]} label='Gender' />
                <div style={{ height: '16px' }}></div>
                <Inputfield
                    autoComplete='off'
                    onChanged={onChangePhoneNumber}
                    value={phoneNumber}
                    errorMessage={phoneNumberError}
                    placeholder='Phone Number (Optional)'
                />
                <div style={{ height: '16px' }}></div>
                <PasswordInputfield
                    autoComplete='off'
                    value={password}
                    onChanged={onChangePassword}
                    errorMessage={passwordError}
                />
                <div style={{ height: '16px' }}></div>
                <TermsAndPrivacy />
                <div style={{ height: '16px' }}></div>
                <AppButton
                    isLoading={false}
                    label='Create Account'
                    onClick={submitSignUpData}
                />
                <ToastContainer />
            </form>
        </section>
    )
}

export default CreateAccountPage