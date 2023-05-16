import { useEffect, useState } from "react"

const Questao02 = () => {

    //criando variaveis de estado para armazenar a imagem de frente ou de costas
    //a variaveld e estado virou dirá true para imagem de frente ou false
    const [img, setImg] = useState("")
    const [virou, setVirou] = useState(false)

    const frontImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`
    const backImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`

    useEffect(
        //funcao que será ativada quando a variavel abaixo for modificada
        () => {
            if (virou === true) setImg(frontImg)
            else setImg(backImg)
        },
        //variavel que será observada
        [virou]
    )

    //funcao que será acionada com o evento onClick do button em JSX
    const virouImg = () => {
        if(virou === true) setVirou(false)
        else setVirou(true)
    }

    return (
        <div>
            <img src={img} style={{ width: "400px" }} />
            <button
                onClick={virouImg}
            >Virar</button>
        </div>
    )
}

export default Questao02

















