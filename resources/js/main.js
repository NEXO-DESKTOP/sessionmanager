// Initialize Neutralino
Neutralino.init();


window.onload = function() {
    var bigname = document.getElementById('bigname');
    var bgColor = window.getComputedStyle(bigname, null).backgroundColor;

    var rgb = bgColor.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
    var yiq = ((rgb[0]*299)+(rgb[1]*587)+(rgb[2]*114))/1000;

    bigname.style.color = (yiq >= 128) ? 'black' : 'white';
}

document.getElementById('minimize').addEventListener('click', function() {
    Neutralino.app.exit();
});

document.getElementById('shutdown').addEventListener('click', function() {
    let button = Neutralino.os.showMessageBox('Apagar',
                            '¿Quieres apagar el sistema? Todas las apps se cerrarán y se perderán los datos no guardados.',
                            'YES_NO', 'WARNING');
        if(button == 'YES') {
            Neutralino.app.exit();
        }
}
);

document.getElementById('restart').addEventListener('click', function() {
    let button = Neutralino.os.showMessageBox('Reiniciar',
                            '¿Quieres reiniciar el sistema? Todas las apps se cerrarán y se perderán los datos no guardados.',
                            'YES_NO', 'WARNING');
        if(button == 'YES') {
            Neutralino.app.exit();
        }
}
);


document.getElementById('appshow').addEventListener('click', function() {
     window.location.href = '/apps.html';
}
);
