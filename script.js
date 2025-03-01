document.getElementById("calcular").addEventListener("click", function() {
    // Obtém os valores dos campos
    const dataInput = document.getElementById("data").value;
    const diasInput = parseInt(document.getElementById("dias").value, 10);

    // Validação inicial
    if (!dataInput || isNaN(diasInput)) {
        alert("Por favor, preencha ambos os campos corretamente.");
        return;
    }

    // Verifica se a data está no formato correto (dd/mm/yyyy)
    const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const partesData = dataInput.match(regexData);

    if (!partesData) {
        alert("Por favor, insira a data no formato dd/mm/yyyy.");
        return;
    }

    // Extrai os valores do dia, mês e ano
    const dia = parseInt(partesData[1], 10);
    const mes = parseInt(partesData[2], 10) - 1; // Mês começa de 0 no JS
    const ano = parseInt(partesData[3], 10);

    // Cria o objeto Date e verifica se a data é válida
    const dataInicial = new Date(ano, mes, dia);
    if (dataInicial.getDate() !== dia || dataInicial.getMonth() !== mes || dataInicial.getFullYear() !== ano) {
        alert("Data inválida! Verifique os valores inseridos.");
        return;
    }

    // Adiciona os dias à data inicial
    dataInicial.setDate(dataInicial.getDate() + diasInput);

    // Formata a nova data no formato dd/mm/yyyy
    const novaData = dataInicial.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

    // Exibe a data de validade
    document.getElementById("validade").textContent = novaData;
});

// Função para formatar a data automaticamente enquanto o usuário digita
document.getElementById("data").addEventListener("input", function(e) {
    let data = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (data.length > 2 && data.length <= 4) {
        data = data.slice(0, 2) + "/" + data.slice(2);
    } else if (data.length > 4) {
        data = data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(4, 8);
    }

    e.target.value = data;
});
