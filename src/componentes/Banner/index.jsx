import styled from "styled-components";

const FigureEstilizado = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  min-height: 328px;
  max-width: 100%;
  border-radius: 20px;
  display: flex;
  flex-grow: 1;
  align-content: center;
  flex-wrap: wrap;
  background-size: cover;
  margin: 0;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #fff;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({children, backgroundImage}) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>
        {children}
      </TituloEstilizado>
    </FigureEstilizado>
  )
}

export default Banner;