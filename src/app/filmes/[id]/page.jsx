"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";
import "./filme.css"

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, []);

    return (
        <main>
            {filme != null && <>
                <h1>Descrição do Filme {filme.titulo}</h1>
                <div className="filme-conteiner">
                    <img src={filme.imagem} alt="" />
                    <div className="filme-info">
                        <div className="filme">
                            <h2>Genero: {filme.genero}</h2>
                            <p>Duracao: {filme.duracaoMinutos} mins</p>
                            <p>Sinopse: {filme.sinopse}</p>
                            <p>Ano {filme.ano}</p>
                        </div>
                    </div>
                </div>
            </>}

        </main>
    )
}