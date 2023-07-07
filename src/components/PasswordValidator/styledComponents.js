// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 100%;
  background-image: linear-gradient(#24263c, #383a4e);
`
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #475569;
  margin: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
export const PasswordHeading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 30px;
  padding: 10px;
`
export const ParaText = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 10px;
  padding: 5px;
`
export const NameInput = styled.input`
  background-color: #edeeff;
  padding: 10px;
  border-width: 0px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 10px;
  padding: 5px;
`
