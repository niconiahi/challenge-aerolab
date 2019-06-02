import styled from '@emotion/styled'

const FiltersBar = ({
  categoryOptions,
  setSelectedCategory,
  isDescending,
  setIsDescending,
  setProp,
  setCriteria,
}) => (
  <Container>
    <ButtonsContainer>
      <Label>Sort by: </Label>
      <Select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value=''>All</option>
        {categoryOptions &&
          categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </Select>
      <Select onClick={(e) => setProp(e.target.value)}>
        {['Name', 'Cost'].map((propOption) => (
          <option key={propOption} value={propOption}>
            {propOption}
          </option>
        ))}
      </Select>
      <ButtonClassic onClick={() => setIsDescending(!isDescending)}>
        {isDescending ? 'Ascendending' : 'Descending'}
      </ButtonClassic>
    </ButtonsContainer>
    <InputContainer>
      <FancyInput onChange={(e) => setCriteria(e.target.value)} />
    </InputContainer>
  </Container>
)
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 681px) and (max-width: 1180px) {
    select,
    button,
    label {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    select,
    button,
    input {
      width: 100%;
    }

    label {
      display: none;
    }

    select,
    button {
      margin: 0 0 0.25rem 0;
    }
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Label = styled.label`
  font-size: 1.4rem;
  color: #a3a3a3;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1vh;
  margin-bottom: 1rem;

  h5 {
    color: #ffec5c;
    margin: 0 1vh;
    padding: none;
  }

  label,
  select,
  button {
    margin-right: 1.25rem;
  }

  @media (min-width: 681px) and (max-width: 1180px) {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    * {
      width: 100%;
    }

    select,
    button {
      margin: 0 0 0 1rem;
    }

    input {
      margin: 1rem 0 0 0;
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    select,
    button,
    input {
      width: 100%;
    }

    select,
    button {
      margin: 0 0 0.5rem 0;
    }

    button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`

export const ButtonClassic = styled.button`
  background-color: #ededed;
  margin: 0;
  color: #a3a3a3;
  border: none;
  width: 175px;
  padding: 1rem;
  border-radius: 20.5px;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;

    background-color: #0ad4fa;
    color: white;
  }

  span {
    font-size: 1.4rem;
  }
`

const Select = ButtonClassic.withComponent('select')
const Input = ButtonClassic.withComponent('input')

const FancyInput = styled(Input)`
  width: 350px;
  border-bottom: 1px solid #d3d3d3;
`

export default FiltersBar

// _id, category, cost, name, img.url
