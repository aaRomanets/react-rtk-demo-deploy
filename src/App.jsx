import './App.css'
//вытаскиваем компонент по кексам
import { CakeView } from './features/cake/CakeView'
//вытаскиваем компонент по пачкам мороженного
import { IcecreamView } from './features/icecream/IcecreamView'
//вытаскиваем компонент по пользователям
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className='App'>
      {/*представляем компонент по кексам */}
      <CakeView/>
      {/*представляем компонент по пачкам мороженного */}
      <IcecreamView/>
      {/*представляем компонент по пользователям */}
      <UserView/>
    </div>
  )
}

export default App
