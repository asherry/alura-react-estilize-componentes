import styled from 'styled-components';
import tags from './tags.json'

const TagContainer = styled.div`
  display: flex; 
  align-items: center;
  margin: 48px 0;
  gap: 16px;
`
const TagTitulo = styled.h3`
  color: #D9D9D9; 
  font-size: 24px;
  margin: 0;
`

const Tag = styled.button`
  font-size: 24px;
  color: white;
  background: rgba(217, 217, 217, 0.3); 
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = ({setTagId}) => {
  return <TagContainer>
    <TagTitulo>Busque por tags:</TagTitulo>
    {tags.map(tag => <Tag onClick={(event) => setTagId(tag.id)} key={tag.id}>{tag.titulo}</Tag>)}
  </TagContainer>
}

export default Tags;