import React, { useState } from "react";

const Questao01X = () => {
    const correntistas = [
        { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
        { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
        { nome: "Fulano", aplic: { pp: 5000.00, rf: 0.0, cc: 500 } }
    ];

    const [media, setMedia] = useState([]);

    const enviarMedia = (medias) => {
        //recebendo o que o filho disse
        setMedia(medias);
    };

    let maiorMedia = -Infinity;
    let nomeMaiorMedia = "";

    //comparar a média do correntista atual, para encontrar a maior média.
    correntistas.forEach((correntista) => {
        const correntistaMedia = (correntista.aplic.pp + correntista.aplic.rf + correntista.aplic.cc) / 3;

        if (correntistaMedia > maiorMedia) {
            maiorMedia = correntistaMedia;
            nomeMaiorMedia = correntista.nome;
        }
    });

    return (
        <div>
            <h1>Questão 01</h1>
            {/* enviando propriedades para o filho */}
            <Questao01Y correntistas={correntistas} enviarMedia={enviarMedia} />
            <h1>{nomeMaiorMedia}</h1>
        </div>
    );
};

function Questao01Y({ enviarMedia, correntistas }) {
    const calcularMedia = () => {
        //calculando media de cada correntista
        const medias = correntistas.map((correntista) => {
            const media = (correntista.aplic.pp + correntista.aplic.rf + correntista.aplic.cc) / 3;
            return { nome: correntista.nome, media };
        });
        //enviando para o pai, as medias
        enviarMedia(medias);
    }

    return (
        <div>
            <button onClick={calcularMedia}>Calcular médias</button>
        </div>
    );
}

export default Questao01X;
