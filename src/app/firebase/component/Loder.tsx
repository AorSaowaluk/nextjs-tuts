import {useRecoilState} from 'recoil';
import {loadState} from '../store'
export const Loader = () => {

const [ isload ] = useRecoilState(loadState)
return <>

{isload && <div className='
w-screen h-screen
fixed top-0 left-0 z-10
opacity-75 bg-black flex
items-center justify-center
text-white '>
      Loading...
</div>}
</>

 }
 export default Loader