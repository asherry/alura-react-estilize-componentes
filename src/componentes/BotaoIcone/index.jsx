import styled from "styled-components"

const BotaoEstilizado = styled.button`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer; 
`

const BotaoIcone = ({filename, onClick, ariaHidden, alt}) => {
  return (<BotaoEstilizado onClick={onClick} aria-hidden={ariaHidden}><img src={"/icones/" + filename} alt={alt} /></BotaoEstilizado>)
}

export default BotaoIcone