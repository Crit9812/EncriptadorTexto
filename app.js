function Encriptar(){
    var resultado = document.getElementById('resultado');
    var imagen = document.getElementById('imagen');
    // Obtén el elemento del input
    var elementoIngresado= document.querySelector('.contenedorTexto');

    // Verifica que el input no esté vacío
    var contenedorNoVacio = elementoIngresado.value.trim() !== '';

    if (resultado.style.display === 'none' || resultado.style.display === '' && contenedorNoVacio) {
        resultado.style.display = 'block'; // Mostrar el texto
        imagen.style.display = 'none'; // Ocultar la imagen
        mensajeAdv.style.display = 'none'; // Ocultar la imagen
        mensajeAdv2.style.display = 'none'; // Ocultar la imagen
        copiarTex.style.display = 'block';   
    }


    
    // Obtener el texto ingresado
    var textoOriginal = elementoIngresado.value;

    // Convertir el texto
    var textoConvertido = encriptarTexto(textoOriginal);

    // Establecer el texto convertido en el textarea
    resultado.value = textoConvertido;
    }

function Desencriptar(){
    var resultado = document.getElementById('resultado');
    var imagen = document.getElementById('imagen');
    // Obtén el elemento del input
    var elementoIngresado= document.querySelector('.contenedorTexto');

    // Verifica que el input no esté vacío
    var contenedorNoVacio = elementoIngresado.value.trim() !== '';

    if (resultado.style.display === 'none' || resultado.style.display === '' && contenedorNoVacio) {
        resultado.style.display = 'block'; // Mostrar el texto
        imagen.style.display = 'none'; // Ocultar la imagen
        mensajeAdv.style.display = 'none'; // Ocultar la imagen
        mensajeAdv2.style.display = 'none'; // Ocultar la imagen
        copiarTex.style.display = 'block'; 
    }

    
    // Obtener el texto ingresado
    var textoOriginal = elementoIngresado.value;

    // Convertir el texto
    var textoConvertido = desencriptarTexto(textoOriginal);

    // Establecer el texto convertido en el textarea
    resultado.value = textoConvertido;    
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiar() {
    var resultado = document.getElementById('resultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles!');
    } catch (err) {
        alert('Error al copiar el texto.');
    }
}

