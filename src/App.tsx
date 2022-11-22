import Header from './components/Header/Header'
import HeaderNav from './components/Header/HeaderNav'
import MainContent from './components/MainContent/MainContent'
import {store} from './store/store'
import { IItem } from './types/types'
import ContentItem from './components/MainContent/ContentItem'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <HeaderNav/>
      <MainContent 
      items={store.items}
      renderItem={(item:IItem)=><ContentItem item={item} key={item.id}/>}
      />
      <Footer/>
    </>
  )
}

export default App