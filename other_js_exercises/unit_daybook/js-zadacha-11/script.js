var day = "",       // день недели
    text = "",      // Текст
    i = 1,          // счетчик
    arrNotes = [],  // массив заметок
    form = document.dwsForm;

function btnClick() {
    day = form.days.value;
    text = form.message.value;

    arrNotes.push("<tr><td>" + i + "</td><td>Заметка на: " + day.bold() + "</td></tr>"
        + "<tr><td></td><td>" + text + "<hr></td></tr>");
    i++;
    form.reset();
}

function prClick() {
    document.getElementById('diary').innerHTML="<table>" + arrNotes.join('') + "</table>";
}