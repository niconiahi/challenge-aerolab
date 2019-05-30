import styled from '@emotion/styled'

const FiltersBar = ({
  filterOptions,
  setSelectedCategory,
  isDescending,
  setIsDescending,
  setProp,
  setCriteria,
}) => (
  <Container>
    <Label>Sort by: </Label>
    <Select onChange={(e) => setSelectedCategory(e.target.value)}>
      <option value=''>All</option>
      {filterOptions.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </Select>
    <Button onClick={() => setIsDescending(!isDescending)}>
      {isDescending ? 'Ascendending' : 'Descending'}
    </Button>
    <Select onClick={(e) => setProp(e.target.value)}>
      {['Name', 'Cost'].map((propOption) => (
        <option value={propOption}>{propOption}</option>
      ))}
    </Select>
    <FancyInput onChange={(e) => setCriteria(e.target.value)} />
  </Container>
)

const Label = styled.label`
  font-size: 1.4rem;
  color: #a3a3a3;
`

const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1vh;
  margin-bottom: 4rem;

  h5 {
    color: #ffec5c;
    margin: 0 1vh;
    padding: none;
  }

  * {
    margin-right: 1.25rem;
  }
`

const Button = styled.button`
  background-color: #ededed;
  outline: none;
  margin: 0;
  color: #a3a3a3;
  border: none;
  width: 175px;
  padding: 1rem;
  border-radius: 20.5px;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;

  :hover {
    cursor: pointer;
  }

  span {
    font-size: 1.4rem;
  }
`

const Select = Button.withComponent('select')
const Input = Button.withComponent('input')

const FancyInput = styled(Input)`
  width: 350px;
  border-bottom: 1px solid #d3d3d3;
`

export default FiltersBar

// _id, category, cost, name, img.url
