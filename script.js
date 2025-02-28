document.getElementById("calcular").addEventListener("click", function() {
    // Pega os valores dos campos
    const dataInput = document.getElementById("data").value;
    const diasInput = parseInt(document.getElementById("dias").value);
    
    // Valida a entrada de dados
    if (!dataInput || isNaN(diasInput)) {
        alert("Por favor, preencha ambos os campos corretamente.");
        return;
    }

    // Converte a data inicial no formato dd/mm/yyyy
    const partesData = dataInput.split("/");
    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]) - 1; // Mês começa de 0 em JavaScript
    const ano = parseInt(partesData[2]);
    
    const dataInicial = new Date(ano, mes, dia);

    // Adiciona os dias à data inicial
    dataInicial.setDate(dataInicial.getDate() + diasInput);

    // Formata a nova data no formato dd/mm/yyyy
    const novaData = `${dataInicial.getDate().toString().padStart(2, '0')}/${(dataInicial.getMonth() + 1).toString().padStart(2, '0')}/${dataInicial.getFullYear()}`;
    
    // Exibe a data de validade
    document.getElementById("validade").textContent = novaData;
});

// Função para formatar a data enquanto o usuário digita
document.getElementById("data").addEventListener("input", function(e) {
    let data = e.target.value;
    
    // Remove qualquer caracter que não seja número
    data = data.replace(/\D/g, "");
    
    // Limita a entrada de caracteres para 8 números (formato dd/mm/yyyy)
    if (data.length > 8) {
        data = data.slice(0, 8);
    }

    // Adiciona as barras automaticamente
    if (data.length > 2 && data.length <= 4) {
        data = data.slice(0, 2) + "/" + data.slice(2);
    } else if (data.length > 4) {
        data = data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(4, 8);
    }
    
    // Atualiza o valor do campo com a data formatada
    e.target.value = data;
});
