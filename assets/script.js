const App = {
    generateLink() {
        let valor = document.gerador.amount.value;
        let nome = document.gerador.nome.value;
        if (valor != "" && nome != "") {
            let folderURL = "https://127.0.0.1" // URL DA PASTA
            let url = `${folderURL}index.html?valor=${valor}`;
            document.getElementById("gerar").className = "hidden"
            document.getElementById('end_url').innerHTML = `<a class="botao ativo" href="https://api.whatsapp.com/send?text=${nome}, confirme%20sua%20compra%20acessando%20este%20link%20${url}">Solicitar Confirmação</a>`;
            navigator.clipboard.writeText(url);
        } else {
            alert("Preencha todos os Campos")
            document.getElementById("nome").focus();
        }
    },
    conversao() {
        // Pegar o Valor da Conversão
        let url_string = window.location.href
        let url = new URL(url_string);
        let valor = url.searchParams.get("valor");
        console.log(valor);
        // Carregar JS Google
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id="; // Substituir
        document.getElementsByTagName('head')[0].appendChild(script); // Importa o Script do Google e coloca dentro do HTML
        // Tags Padrão Substituir com seu ID
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', ''); // Substituir
        gtag('event', 'conversion', {
            'send_to': 'AW-10812926551/8rL1COnp4pYDENfUgKQo', // Substituir
            'value': valor, // Coloca o Valor da Conversão
            'currency': 'BRL',
            'transaction_id': ''
        });

    }

}