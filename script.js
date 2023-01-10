let donuts=[
    {
        tipo: "Homer's Donuts",
        img : "assets/img/homer.jpg"
    },
    {
        tipo: "Marge's Donuts",
        img : "assets/img/marge.jpg"
    },
    {
        tipo: "Bart's Donuts",
        img : "assets/img/bart.jpg"
    },
    {
        tipo: "Lisa's Donuts",
        img : "assets/img/lisa.jpg"
    },
    {
        tipo: "Maggie's Donuts",
        img : "assets/img/maggie.jpg"
    }
]


let body = document.querySelector("body")

function createDonuts (){
    let main = document.createElement('main')
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let figure2 = document.createElement("figure")
    let img2 = document.createElement("img")

    img.setAttribute("class", "logo")
    figure2.setAttribute("class", "donuts2")
    img2.setAttribute("class", "imgDonuts2")
    img.src = "assets/img/logo.png"
    img2.src = "assets/img/donuts2.png"

    figure.appendChild(img)
    main.appendChild(figure)


    let section = document.createElement("section")
    let loja = document.createElement("ul")

    for(let i=0; i<donuts.length; i++){

        let opcao = document.createElement("li")
        let donutsImg = document.createElement("img")
        let tipo = document.createElement("h2")

        donutsImg.src=donuts[i].img
        tipo.innerText=donuts[i].tipo

        donutsImg.setAttribute("class", "imgDonuts")

        section.appendChild(loja)
        loja.appendChild(opcao)
        opcao.appendChild(donutsImg)
        opcao.appendChild(tipo)
        
        
    }
    main.appendChild(section)
    main.appendChild(img2)
    body.appendChild(main)
}
createDonuts()