import { } from './style.css'
import Meme from './Content';


export default function Content() {
  return (
    <div className='posts'>
      <Meme Titulo="Hyperlink awesome" 
            Img="img/hyperlink.webp"
            DescriImg="Hyperlink"
      />
      <Meme Titulo="Sorry bro!" 
            Img="img/sorry_bro.webp"
            DescriImg="Sorry bro"/>
    </div>
  );
}