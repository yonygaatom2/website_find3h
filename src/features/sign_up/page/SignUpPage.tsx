import React from 'react'
import './SignUpPage.css'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import GetApp from '../../../cores/utils/components/get_app/GetApp'
import SSOButton from '../../../cores/utils/components/buttons/sso_button/SSOButton'
import AppButton from '../../../cores/utils/components/buttons/app_button/AppButton'
import DefaultFooter from '../../../cores/utils/components/footer/default_footer/DefaultFooter'

const SignUpPage: React.FC = () => {
  const navigator = useNavigate()

  return (
    <section className="signUpScreen">
      <div className="signUpContent">
        <div style={{ height: '160px' }}></div>
        <h1 className='signUpTitle'>Find3H</h1>
        <p className='signUpSubTitle'>Find Your <span>Happiness</span></p>
        <div style={{ height: '24px' }}></div>
        <AppButton onClick={() => { }} isLoading={false} label='Sign Up With Find3H' />
        <div className="signUpOrSection">
          <div className="signUpOrLeft signUpOrLine"></div>
          <p className="signUpOrText">or sign up with</p>
          <div className="signInOrLeft signUpOrLine"></div>
        </div>
        <div className="signUpSSOButtons">
          <SSOButton
            onClick={() => { }}
            icon={<FcGoogle style={{ height: "32px", width: "32px" }} />}
            label='Sign up with Google'
          />
          <br />
          <SSOButton
            onClick={() => { }}
            icon={<AiFillApple style={{ height: "32px", width: "32px" }} />}
            label='Sign up with Apple'
          />
        </div>
      </div>
      <div style={{ height: '160px' }}></div>
      <p className='signUpLink'>Already have an account? <span onClick={(e) => {
        e.preventDefault()
        navigator(-1)
      }}>Sign In</span> </p>
      <GetApp />
      <div style={{ height: '32px' }}></div>
      <DefaultFooter />
      <ToastContainer />
    </section>
  )
}

export default SignUpPage