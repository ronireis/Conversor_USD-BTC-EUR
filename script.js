const button = document.getElementById(`converter-valor`)
const select = document.getElementById(`currency-select`)




const converterValor = async () => {
    const RealValor = document.getElementById(`input-Real`).value
    const Realvaluetext = document.getElementById(`Real-value-text`)
    const Dolarvaluetext = document.getElementById(`Dolar-value-text`)

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json()) // acessando uma API para pegar os valores dos ativos e trazendo a conversão no tempo real 
    
    const Dolar = data.USDBRL.high
    const Euro = data.EURBRL.high
    const Bitcoin = data.BTCBRL.high

    console.log(data)
    //Realvaluetext.innerHTML = RealValor

    Realvaluetext.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(RealValor);

    //Dolarvaluetext.innerHTML = RealValor / Dolar
    if (select.value === "US$ Dólar americano") {
        Dolarvaluetext.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(RealValor / Dolar);
    }

    if (select.value === "€ Euro") {
        Dolarvaluetext.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(RealValor / Euro);
    }

    if (select.value === "Bitcoin") {
        Dolarvaluetext.innerHTML = new Intl.NumberFormat('UTC', {
            style: 'currency',
            currency: 'BTC',
        }).format(RealValor / Bitcoin);
    }

}

const changeselect = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyimg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyimg.src = "./img/estados-unidos.svg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyimg.src = "./img/Euro 1.svg"
    }

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "BTC"
        currencyimg.src = "./img/Bitcoin.png"
    }

    if (select.value === "Ethereum") {
        currencyName.innerHTML = "ETH"
        currencyimg.src = "./img/Ethereum.png"
    }

    converterValor()

}


button.addEventListener("click", converterValor)
select.addEventListener("change", changeselect)