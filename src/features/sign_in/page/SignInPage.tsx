import './SignInPage.css'
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import { SignInState } from '../slice/SignInState'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../Store'
import { ToastContainer, toast } from "react-toastify"
import { RoutesPath } from '../../../config/routes/RoutesPath'
import { SignInModel } from '../../../cores/models/SignInModel'
import GetApp from '../../../cores/utils/components/get_app/GetApp'
import { AuthState } from '../../../cores/providers/auth/AuthState'
import { SignInEvent } from '../../../cores/providers/auth/AuthSlice'
import { StateStatus } from '../../../cores/utils/enums/StateStatus'
import { validEmail } from '../../../cores/utils/helpers/validators/ValidEmail'
import SSOButton from '../../../cores/utils/components/buttons/sso_button/SSOButton'
import AppButton from '../../../cores/utils/components/buttons/app_button/AppButton'
import TextButton from '../../../cores/utils/components/buttons/text_button/TextButton'
import Inputfield from '../../../cores/utils/components/inputfields/app_inputfield/Inputfield'
import DefaultFooter from '../../../cores/utils/components/footer/default_footer/DefaultFooter'
import { passwordHasValidPattern, validPassword } from '../../../cores/utils/helpers/validators/ValidPassword'
import PasswordInputfield from '../../../cores/utils/components/inputfields/password_inputfield/PasswordInputfield'

const SignInPage: React.FC = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const state: SignInState = useSelector((state: AppState) => state.signIn)
    const authState: AuthState = useSelector((state: AppState) => state.auth)
    const isLoading: boolean = state.status == StateStatus.submitInProgress

    // Handle Input Value
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    // Handle Error Value
    const [emailError, setEmailError] = useState<string | null>(null)
    const [passwordError, setPasswordError] = useState<string | null>(null)

    useEffect(() => {
        if (authState.isLoggedIn) {
            navigator(RoutesPath.HOME)
        }
    }, [authState])

    // Submit User Data
    const submitData: React.ReactEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()
        const hasEmailError: string | null = validEmail(email ?? '')
        const hasPasswordError: string | null = validPassword(password ?? '')

        if (hasEmailError !== null || hasPasswordError !== null) {
            setEmailError(hasEmailError)
            setPasswordError(hasPasswordError)
            return;
        }

        setEmailError(null)
        setPasswordError(null)

        const hasSnackBarError: string | null = passwordHasValidPattern(password ?? '')
        if (hasSnackBarError !== null) {
            toast.error(hasSnackBarError, { autoClose: 4000, position: 'bottom-right' })
            return;
        }
        const signInData: SignInModel = {
            email: email ?? '',
            password: password ?? '',
        }
        // signInEvent(signInData)
        await dispatch(SignInEvent(signInData))
    }

    // Handle email change.
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    // Handle password change.
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <div className='signInScreen' >
            <div className="signInContent">
                <div style={{ height: '160px' }}></div>
                <form className='signInForm'>
                    <h1 className='signInTitle'>Find3H</h1>
                    <p className='signInSubTitle'>Find Your <span>Happiness</span></p>
                    <div style={{ height: '24px' }}></div>
                    <Inputfield
                        type='email'
                        placeholder='Email'
                        errorMessage={emailError}
                        value={email} onChanged={onChangeEmail}
                    />
                    <div style={{ height: '16px' }}></div>
                    <PasswordInputfield
                        value={password}
                        errorMessage={passwordError}
                        onChanged={onChangePassword}
                    />
                    <div className="forgetPasswordButton">
                        <TextButton
                            onTap={(e) => { e.preventDefault() }}
                            label='Forget Password'
                        />
                    </div>
                    <div style={{ height: '8px' }}></div>
                    <AppButton onClick={submitData} isLoading={isLoading} label='Sign-In' />
                </form>
                <div className="signInOrSection">
                    <div className="signInOrLeft signInOrLine"></div>
                    <p className="signInOrText signInOrTextBig">or</p>
                    <p className="signInOrText signInOrTextSmall">or sign in with</p>
                    <div className="signInOrLeft signInOrLine"></div>
                </div>
                <div className="signInSSOButtons">
                    <SSOButton
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                        icon={<FcGoogle style={{ height: "32px", width: "32px" }} />}
                        label='Sign in with Google'
                    />
                    <br />
                    <SSOButton
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                        icon={<AiFillApple style={{ height: "32px", width: "32px" }} />}
                        label='Sign in with Apple'
                    />
                </div>
            </div>
            <div style={{ height: '70px' }}></div>
            <p className='signInLink'>Don't have an account? <span onClick={(e) => {
                e.preventDefault()
                navigator(RoutesPath.SIGN_UP)
            }}>Sign up</span> </p>
            <div style={{ height: '14px' }}></div>
            <GetApp />
            <div style={{ height: '32px' }}></div>
            <DefaultFooter />
            <ToastContainer />
        </div>
    )
}

export default SignInPage