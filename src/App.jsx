import { FetchDataComponent } from '../component/FetchDataComponent';
import { MouseMoveComponent } from '../component/MouseMoveComponent';
import { UpdateTitleComponent } from '../component/UpdateTitleComponent';
import {ScrollEventComponent} from '../component/Scrolleventcomponent'
import { TimerComponent } from '../component/timercomponent';

function App() {

  return (
    <>
       <FetchDataComponent />
          {/* Subscribing to Mouse Movement example */}
      <MouseMoveComponent />

{/* Updating Document Title example */}
<UpdateTitleComponent />
< ScrollEventComponent />
< TimerComponent />
    </>
  )
}

export default App
