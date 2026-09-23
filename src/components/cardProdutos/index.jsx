import './cardProdutos.css';

export default function CardProduto({ produto }) {
    return (
        <div className="wrapper-produto">
            <img src={produto.images} alt="" />
            <h3>{produto.title}</h3>
            <p>R$ {produto.price}</p>
            <a href={`/produtos/${produto.id}`}>Comprar</a>
        </div>
    )
}