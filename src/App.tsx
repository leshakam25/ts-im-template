import Header from './components/Header/Header'
import HeaderNav from './components/Header/HeaderNav'
import MainContent from './components/MainContent/MainContent'
import {items} from './store/items'
import { IItem } from './types/types'
import ContentItem from './components/MainContent/ContentItem'

const App = () => {
  return (
    <>
      <Header/>
      <HeaderNav/>
      <MainContent 
      items={items}
      renderItem={(item:IItem)=><ContentItem item={item} key={item.id}/>}
      />
    </>
  )
}

export default App