function contar() {
    let init = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pulo')
    let txt = document.getElementById('aqui')

    if (init.value === '' || fim.value === '' || passo.value === ''){
        txt.innerHTML = 'Impossivel contar!'
    } else {
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considere PASSO 1')
            p = 1
        }

        txt.innerHTML = 'Contando: <br>'
        if (i < f) {
            for (let j = i; j <= f; j += p) {
                txt.innerHTML += `${j} &#128073;`
            }
        } else {
            for (let j = i; j >= f; j -= p) {
                txt.innerHTML += `${j} &#128073;`
            }
        }
        txt.innerHTML += '&#x1F333;'
    }
}