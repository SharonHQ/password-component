import './App.css'
import { SignUp } from './components/SignUp'
import { SignUpData } from './components/SignUp/SignUp.types'

function App() {

  const onSubmit = (formData: SignUpData) => 
    alert(`${formData.username} Successful Registration`)
  

  return (
    <>
    <SignUp onSubmit={onSubmit}/>
    </>
  )
}

export default App
