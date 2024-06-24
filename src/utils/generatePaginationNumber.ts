export const generatePaginationNumbers = (currentPages: number , totalPages: number) =>{
    // si el numero total es de 7 o menos vamos a mostrar todas las paginas sin "..."
    if (totalPages <= 7){
        return Array.from ({length: totalPages}, (_, i) => i + 1)
    }

    // si la pagina actual esta entre las primeras 3 paginas vamos a mostrar las paginas con "..." y las ultimas 2
    if (currentPages <=3){
        return [1,2,3,"...", totalPages -1, totalPages]
    }

    // si la pagina actual esta enetre las ultimas 3 paginas mostraremos las primeras 2 con "..." y luego las ultimas 3
    if (currentPages >= totalPages -2 ){
        return [1,2,"...", totalPages -2, totalPages -1, totalPages]
    }

    // si la pagina actual esta en otro lugar medio, mostrar la primera pagina con "..." pagina actual y vecions
    return[
        1,"...", currentPages -1, currentPages, currentPages +1, "...", totalPages
    ]
}