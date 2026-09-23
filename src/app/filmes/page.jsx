"use client";

import React, { useEffect, useState } from "react";
import dados from "@/filmes.json";
import CardFilme from "@/components/cardFilme";

export default function Filmes() {
    const [listaFilmes, setListaFilmes] = useState([]);
    useEffect(() => {
        setListaFilmes(dados);
    }, []);
    return (
        <main>
            {listaFilmes.length > 0 &&
                <div className="conteiner-filmes">
                    {listaFilmes.map(f => {
                        return <CardFilme key={f.id} filme={f} />
                    })}
                </div>
            }
        </main>
    )
}