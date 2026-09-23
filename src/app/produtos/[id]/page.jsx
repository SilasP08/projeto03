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
                            <h2>Categoria: {produto.category}</h2>
                            <p>Preço: ${produto.price}</p>
                            <p>Descrição: {produto.description}</p>
                            <p>Marca: {produto.brand}</p>
                            <p><span>Nota: {produto.rating}</span><span>Estoque: {produto.stock}</span></p>
        
                        </div>
                    </div>
                </div>
            </>}
        </main>
    )
}