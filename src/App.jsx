import { FetchDataComponent } from '../component/FetchDataComponent';
import { MouseMoveComponent } from '../component/MouseMoveComponent';
import { UpdateTitleComponent } from '../component/UpdateTitleComponent';

function App() {

  return (
    <>
       <FetchDataComponent />
          {/* Subscribing to Mouse Movement example */}
      <MouseMoveComponent />

{/* Updating Document Title example */}
<UpdateTitleComponent />
    </>
  )
}

export default App
