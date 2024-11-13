function agendar() {
    const calendario = document.getElementById('calendario').value;
    const horario = document.getElementById('horario').value;

    if (!calendario || !horario) {
        alert('Por favor, selecione uma data e um horário.');
        return;
    }

    const [hour, minute] = horario.split(':').map(Number);
    if ((hour < 9 || hour >= 12) && (hour < 15 || hour >= 19)) {
        alert('Agendamentos são permitidos apenas entre 09h-12h e 15h-19h.');
        return;
    }

    // Exibir notificação de sucesso
    const notificacao = document.getElementById('notificacao');
    notificacao.innerHTML = `<p>Agendamento realizado com sucesso para o dia ${calendario} às ${horario}.</p>`;
    notificacao.style.color = 'white';
}
