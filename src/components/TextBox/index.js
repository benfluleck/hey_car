import styled from "styled-components"


const TextBoxWrapper = styled.div`
  display: flex;

`


const TextBoxLabel = styled.label`

`;

const TextBoxInput = styled.input``


const TextBox = ({ text, id , }) => (
  <TextBoxWrapper>
    <TextBoxLabel htmlFor={id}>{text}</TextBoxLabel>
    <TextBoxInput type="text" id={id} name={id}/>
  </TextBoxWrapper>
)


export default TextBox;
