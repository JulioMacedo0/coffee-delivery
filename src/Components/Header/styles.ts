import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
`
export const HeaderContainer = styled.header`
width: 100%;
max-width: 90rem;
height: 6.5rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;

div  {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
}
`

export const ButtonChart = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
margin-left: 0.75rem;
background-color: ${(props) => props.theme['yellow-light']};
color: ${(props) => props.theme['yellow-dark']};
height:  2.375rem;
width: 2.375rem;
border: none;

`


export const LocaleDiv = styled.div`
border-radius: 8px;
padding: 0.5rem;
color: ${(props) => props.theme['purple-darl']};
background-color: ${(props) => props.theme['purple-light']};;
p {
  font-weight: bold;
}

svg {
  color: ${(props) => props.theme['purple']};
}
`
