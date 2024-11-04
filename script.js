document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtém os valores dos inputs
    const num1 = parseFloat(document.getElementById('input1').value) || 0;
    const num2 = parseFloat(document.getElementById('input2').value) || 0;
    const num3 = parseFloat(document.getElementById('input3').value) || 0;
    
    // Calcula o total
    const total = num1 + num2 + num3;
    
    // Atualiza o resultado na tela
    document.getElementById('result').innerText = `Total: ${total}`;
});
