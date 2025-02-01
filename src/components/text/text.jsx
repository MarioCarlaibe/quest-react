const Text = ({cor = "red", texto = "Esse é o texto da Quest", textoMaiusculo = "uppercase"}) => {
    return <p style={{color: cor, textTransform: textoMaiusculo}}>{texto}</p>
}

export default Text