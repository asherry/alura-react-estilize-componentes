import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
  padding: 60px 0;  
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

const Cabecalho = ({filtro, setFiltro}) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="imagen de space" />
      <CampoTexto value={filtro} onChange={(event) => setFiltro(event.target.value)} />
    </HeaderEstilizado>
  )
}

export default Cabecalho