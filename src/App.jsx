import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import backgroundImage from "./assets/banner.png"
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;  
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tagId, setTagId] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tagId || foto.tagId === tagId;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo;
    })

    setFotosDaGaleria(fotosFiltradas)

  }, [filtro, tagId])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
    console.log(foto);
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          setFiltro={setFiltro}
          filtro={filtro}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={backgroundImage}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Galeria
              setTagId={setTagId}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom aoAlternarFavorito={aoAlternarFavorito} aoFechar={() => setFotoSelecionada(null)} foto={fotoSelecionada} />
    </FundoGradiente>
  )
}

export default App
