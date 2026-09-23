"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/cardProdutos";


export default function Produtos() {

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            setListaProdutos(data.products);
        })
    }, []);

    return (
        <main>
            <h1>Produtos</h1>
            
                {listaProdutos.length > 0 &&
                <div className="card-container">
                    {listaProdutos.map(p => {
                        return <CardProduto key={p.id} produto={p} />
                    })}
                </div>
                }
            
        </main>
    )

}