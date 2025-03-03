import "./App.css";
import { Title } from './components/Title'
import { Text } from './components/StyledText'
import { AlertButton } from './components/AlertButton'

function App() {
  return (
    <>
      <Title/>
      <Text/>
      <AlertButton label="Baixar CV"/>
    </>
  )
}

export default App;
