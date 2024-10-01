document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const note1 = parseFloat(document.getElementById('note1').value);
    const note2 = parseFloat(document.getElementById('note2').value);
    const note3 = parseFloat(document.getElementById('note3').value);

    // Calcula a média
    const average = (note1 + note2 + note3) / 3;

    // Armazena os dados no localStorage
    localStorage.setItem('studentName', name);
    localStorage.setItem('average', average);

    // Redireciona para a página de resultado
    window.location.href = 'result.html';
});
