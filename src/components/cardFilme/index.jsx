import "./cardFilme.css"

export default function CardFilme({ filme }) {
    return (
        <div className="wrapper-filme">
            <img src={filme.imagem} alt="" />
            <h3>{filme.titulo}</h3>
            <a href={`/filmes/${filme.id}`}>Saiba Mais!</a>
        </div>
    )
}