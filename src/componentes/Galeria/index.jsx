import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex; 
`

const SecaoFluida = styled.section`
  flex-grow: 1;  
`

const FotosContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <FotosContainer>
            {
            fotos.map( foto =>
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
                favorito={foto.favorito}
                tag={foto.tag}
              />
            )
            }
          </FotosContainer>
        </SecaoFluida>
        <Populares />

      </GaleriaContainer>
    </>
  )
}

export default Galeria;