import { Quotes } from '../components/Quotes'
import { Auth } from '../components/Auth'

function Signup() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-screen h-screen">
      <div className="flex h-full w-full justify-center items-center">
        <Auth type = "signup" />
      </div>
      <div className="hidden lg:block">
        <Quotes />  
      </div>
    </div>
  )
}

export default Signup
