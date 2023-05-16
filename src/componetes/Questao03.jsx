import React, { useEffect, useState } from "react";

const Questao03 = () => {
    //criando as variaveis de estado para armazenar as capitais com a maior média populacional
    const [maiorMediaPopu, setMaiorMediaPopu] = useState([""])

    useEffect(() => {
        const fetchData = async () => {
            try {
                //realizando a requisição para a api
                const response = await fetch(
                    "https://restcountries.com/v3.1/region/europe?fields=capital,population"
                );
                const data = await response.json();
                const countries = data.map((country) => ({
                    capital: country.capital[0],
                    population: country.population,
                }));

                let soma = 0
                for (let i = 0; i < countries.length; i++) {
                    soma = soma + countries[i].population
                }

                // console.log("Soma das populacoes: " + soma)
                let media = soma / countries.length
                // console.log("Media das somas das populacoes: " + media)

                //descobrindo quem está acima da média populacional
                //cirei um vetor auxiliar para armazenar as capitais com a populacao maior que a media
                const capitaisAcimaDaMedia = [];
                for (let i = 0; i < countries.length; i++) {
                    if (countries[i].population > media) {
                        capitaisAcimaDaMedia.push(countries[i].capital);
                    }
                }

                setMaiorMediaPopu(capitaisAcimaDaMedia);


            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h2>Capital com a população acima da média:</h2>
            <h4>
                {maiorMediaPopu.join(", ")}<br />
            </h4>
        </div>
    );
};

export default Questao03;
