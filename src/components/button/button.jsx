const Button = ({label}) => {
    const mostrarAlerta = () => {
        alert(`A label desse botão é ${label}`)
    }
    return <button onClick={mostrarAlerta}>{label}</button>
}

export default Button