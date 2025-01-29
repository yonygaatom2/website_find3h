import React from 'react'
import './SignUpPage.css'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HiOutlineMail } from "react-icons/hi";
import { RoutesPath } from '../../../../config/routes/RoutesPath'
import GetApp from '../../../../cores/utils/components/get_app/GetApp'
import AppButton from '../../../../cores/utils/components/buttons/app_button/AppButton'
import SSOButton from '../../../../cores/utils/components/buttons/sso_button/SSOButton'
import DefaultFooter from '../../../../cores/utils/components/footer/default_footer/DefaultFooter'
import TermsAndPrivacy from '../../../../cores/utils/components/buttons/terms_and_privacy/TermsAndPrivacy'

const SignUpPage: React.FC = () => {
  const navigator = useNavigate()

  return (
    <section className="signUpScreen">
      <div className="signUpContent">
        <div style={{ height: '160px' }}></div>
        <h1 className='signUpTitle'>Find3H</h1>
        <p className='signUpSubTitle'>Find Your <span>Happiness</span></p>
        <div style={{ height: '48px' }}></div>
        <AppButton
          onClick={() => {
            navigator(RoutesPath.CREATE_ACCOUNT)
          }}
          isLoading={false}
          label='Sign Up With Email'
          leadingIcon={<HiOutlineMail style={{ height: "32px", width: "32px" }} />}
        />
        <div className="signUpOrSection">
          <div className="signUpOrLeft signUpOrLine"></div>
          <p className="signUpOrText">or sign up with</p>
          <div className="signInOrLeft signUpOrLine"></div>
        </div>
        <div className="signUpSSOButtons">
          <SSOButton
            onClick={() => { }}
            label='Sign up with Google'
            icon={<FcGoogle style={{ height: "32px", width: "32px" }} />}
          />
          <br />
          <SSOButton
            onClick={() => { }}
            label='Sign up with Apple'
            icon={<AiFillApple style={{ height: "32px", width: "32px" }} />}
          />
        </div>
      </div>
      <div style={{ height: '70px' }}></div>
      <TermsAndPrivacy />
      <div style={{ height: '80px' }}></div>
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