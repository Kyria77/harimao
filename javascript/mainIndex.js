/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* MAIN INDEX *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

const noticiasIndex = document.getElementById("noticias");
const opinionesIndex = document.getElementById("opiniones");

function realizarFetch(url){
    return fetch(url)
        .then(response =>{
            if(!response.ok){
                alert("Error en la solicitud: " + response.statusText);
            }else{
                return response.json();
            }
        })
        .catch(error =>{
            alert("Error de red" + error);
        }) 
}

realizarFetch("./assets/data/datos.json")
    .then(data =>{
        data.noticias.map(item =>{
            noticiasIndex.innerHTML +=
            `
                <div class="testimonio">
                    <img class="imgNoticias" src=${item.imagen} alt=${item.descripcion} width=${item.anchura} height=${item.altura}>
                    <h4>${item.titulo}</h4>
                    <p>${item.noticia}</p>
                </div>
            `
        })
    });

realizarFetch("./assets/data/datos.json")
    .then(data =>{
        data.opiniones.map(item =>{
            opinionesIndex.innerHTML +=
            `
                <div class="testimonio">
                    <p>${item.opinion}</p>
                    <img class="img-circular" src="${item.foto}" alt="Foto perfil alumna" width="${item.anchuraFoto}" height="${item.alturaFoto}">
                    <small>${item.nombreAlumno}</small>
                </div>
            `
        })
    });