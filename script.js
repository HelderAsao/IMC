function verificar() {

    let txtpeso = window.document.getElementById('txt1')
    let txtaltura = window.document.querySelector('input#txt2')
    let res = window.document.getElementById('res')
    let fsex = window.document.getElementsByName('radsex')

    if (txtpeso.value.length == 0 || txtaltura.value.length == 0) {

        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {

        let peso = Number(txtpeso.value)
        let altura = Number(txtaltura.value)
        altura /= 100 //
        
        let IMC = peso / altura ** 2
        IMC = IMC.toFixed(2)
        res.innerHTML = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (altura != altura.toFixed(2)) { 
            //certo
            //se for altura decimal.ex:1,70
            altura *= 100 //converte de cm para metros
            IMC = peso / altura ** 2
            IMC = IMC.toFixed(2)

        } 
      
        let mensagem = `Seu IMC é de <strong>${IMC}</strong>`
        let dica = ''
        if (IMC <= 18.5) {

            mensagem += `você está abaixo do peso normal.`
            dica = `<p>Dica: Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>`
        } else if (IMC < 24.9) {

            mensagem += ` você está no peso normal.`
            dica = `<p>Dica: Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>`
        } else if (IMC < 29.9) {

            mensagem = ` você está com <strong>sobrepeso</strong>.`
            dica = `<p>Dica: Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer..</p>`
        } else if (IMC < 34.9) {

            mensagem += ` você está com <strong>obesidade grau I</strong>.`
            dica = `<p>Dica: Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista..</p>`
        } else if (IMC < 39.9) {

            mensagem = ` você está com <strong>obesidade grau II</strong>.`
            dica = `<p>Dica: Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>`
        } else {

            mensagem += ` você está com <strong>obesidade grau III</strong>.`
            dica = `<p>Dica: Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>`

        }
        res.innerHTML += `${mensagem}, ${dica} <p>Veja a tabela abaixo para consultar:</p>`
        img.setAttribute('src', 'IMC.png')
        res.appendChild(img)
    }


}

function limpar() {
    let txtpeso = window.document.getElementById('txt1')
    let txtaltura = window.document.querySelector('input#txt2')
    txtpeso.value = ''
    txtaltura.value = ''
    txtpeso.focus()

}