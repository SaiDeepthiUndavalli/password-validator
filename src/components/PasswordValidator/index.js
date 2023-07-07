// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  PasswordHeading,
  ParaText,
  NameInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [Password, setPassword] = useState('')
  const showErrMsg = Password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <PasswordContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <ParaText>Check how strong and secure is your password</ParaText>
        <NameInput
          type="password"
          value={Password}
          onChange={onChangePassword}
        />
        {showErrMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
