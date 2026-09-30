'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setProduto(data);
            })
    }, []);

    return (
        <main>
            {produto != null && <>
                <h1>Descrição do Produto {produto.title}</h1>
                <div className="produto-conteiner">
                    <img src={produto.thumbnail} alt="" />
                    <div className="produto-info">
                        <div className="produto">
                            <h2>{produto.title} <br/>Categoria: {produto.category}</h2>
                            <p>Preço: ${produto.price}</p>
                            <span className="desconto">
                                Desconto: {produto.discountPercentage}%
                            </span>
                            <p>Descrição: {produto.description}</p>
                            <p>Marca: {produto.brand}</p>
                            <p><span>Nota: {produto.rating}</span> <span>Estoque: {produto.stock}</span></p>
                            <button className="btn-comprar">Comprar</button>
                        </div>
                    </div>
                </div>


                <section className="reviews">

                    <h2>Avaliações dos clientes</h2>

                    <div className="reviews-container">

                        {produto.reviews.map((review, idx) => (

                            <div className="review-card" key={idx}>

                                <div className="review-header">

                                    <h3>{review.reviewerName}</h3>

                                    <span className="estrelas">
                                        {review.rating}
                                    </span>

                                </div>

                                <p>
                                    {review.comment}
                                </p>

                                <small>
                                    {review.date}
                                </small>

                            </div>

                        ))}

                    </div>

                </section>

            </>}
        </main>
    )
}