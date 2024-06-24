import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
  background-color: #2A2733;
  opacity: 80%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const DialogEstilizado = styled.dialog`
  position: fixed;
  background: transparent;
  border: none;
  width: 80%;
  top: 10%;
  padding: 0;
  margin: 0 auto;
  form {
    box-sizing: border-box;
    justify-content: right;
    position: fixed;
    width: 80%;
    display: flex;
    padding: 24px;
  }
`
const ModalZoomInner = ({foto, aoFechar}) => {
  return (
    <>
      <Overlay />
      <DialogEstilizado open={!!foto}>
        <form method="dialog">
          <BotaoIcone onClick={aoFechar} filename="fechar.png" alt="Fechar"></BotaoIcone>
        </form>
        <Imagem foto={foto} expandida={true} />
      </DialogEstilizado>
    </>
  )
}

const ModalZoom = ({foto, aoFechar}) => {
  return (
    <>
      {foto && <ModalZoomInner foto={foto} aoFechar={aoFechar} />}
    </>
  )
}

export default ModalZoom