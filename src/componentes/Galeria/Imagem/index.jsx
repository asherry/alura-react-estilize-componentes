import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const FigureEstilizada = styled.figure`
  width: ${(props) => (props.$expandida ? '100%' : '460px')};
  flex-direction: column;
  display: flex;
  max-width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: ${(props) => (props.$expandida ? '661px' : '256px')};
  }

  figcaption {
    background-color: #001634; 
    margin: 0;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      font-family: 'GandhiSansBold'
    }
    h4 {
      font-size: 16px;
      line-height: 19.2px;
      font-weight: 400;
      flex-grow: 1;
    }
    h3, h4 {
      margin: 0;
      padding: 0;
    }
  }
`

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Imagem = ({ foto, expandida, aoZoomSolicitado }) => {
  return (
    <FigureEstilizada $expandida={expandida}>
      <img src={foto.path} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <RodapeEstilizado>
          <h4>Fonte {foto.fonte}</h4>
          <BotaoIcone filename="favorito.png" alt="Icone de favorito" />
          {!expandida && <BotaoIcone
            ariaHidden={expandida}
            onClick={() => aoZoomSolicitado(foto)}
            filename="expandir.png"
            alt="Icone de expandir" />
          }
        </RodapeEstilizado>
      </figcaption>
    </FigureEstilizada>
  )
}

export default Imagem