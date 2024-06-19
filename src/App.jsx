




import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import ProjectList from './components/ProjectList'
import Presentacion from './components/Presentacion'
import KnowledgeList, { Title } from './components/KnowledgeList'
import Footer from './components/Redes'

function App() {
  

  return (
    <div className='App'>
      <Header />
      <Intro  />
      <Presentacion />
      <ProjectList  />
      <Title />
      <KnowledgeList />
      <Footer />
    </div>
  )
}

export default App
