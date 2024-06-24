import styled from "styled-components";

const Titulo = styled.h2`
  color: #7b78e5; 
  line-height: 32px;
  text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'}
`

export default Titulo;