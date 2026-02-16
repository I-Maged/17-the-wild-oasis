import styled from 'styled-components'
import GlobalStyles from './styles/Globalstyle'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h2'>Check in and out</Heading>
        <Heading as='h3'>Form</Heading>
        <h1>World</h1>
        <Button size='small'>World</Button>
        <Input type='text' placeholder='Who' />
        <input type='text' />
      </div>
    </>
  )
}

export default App
