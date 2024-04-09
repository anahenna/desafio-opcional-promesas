const obtenerDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.slice(0, 20).forEach(photo => {
            console.log(photo.title);
        })
        await enviarMensaje();
    } catch (error) {
        console.log("Error al obtener los datos")
    }

};
const enviarMensaje = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada")
        }, 3000);
    })
}
const mostrarMensaje = async () => {
    try {
        const mensaje = await enviarMensaje();
        console.log(mensaje);
    } catch (error) {
        console.log("Error al mostrar el mensaje")
    }
}

obtenerDatos();
mostrarMensaje();