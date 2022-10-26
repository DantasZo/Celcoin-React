export default function Meme(props) {
    const {Titulo, Img, DescriImg} = props
    return (
      <div class="posts">
        <div class="post">
          <h1 class="titulo">{Titulo}</h1>
          <img src={Img} alt={DescriImg} />
        </div>
      </div>
    );
  }