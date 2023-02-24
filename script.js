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
    let figureLogo = document.createElement("figure")
    let imgLogo = document.createElement("img")
    let figureDonuts = document.createElement("figure")
    let imgDonuts = document.createElement("img")

    imgLogo.setAttribute("class", "logo")
    figureDonuts.setAttribute("class", "donuts2")
    imgDonuts.setAttribute("class", "imgDonuts2")
    imgLogo.src = "assets/img/logo.png"
    imgDonuts.src = "assets/img/donuts2.png"

    figureLogo.appendChild(imgLogo)
    main.appendChild(figureLogo)


    let section = document.createElement("section")
    let loja = document.createElement("ul")

    for(let i=0; i<donuts.length; i++){

        let opcao = document.createElement("li")
        let div =document.createElement("div")
        let donutsOpcao = document.createElement("img")
        let tipo = document.createElement("h2")

        donutsOpcao.src=donuts[i].img
        tipo.innerText=donuts[i].tipo

        donutsOpcao.setAttribute("class", "imgDonutsOpcao")

        section.appendChild(loja)
        loja.appendChild(opcao)
        opcao.appendChild(div)
        div.append(donutsOpcao ,tipo)
        
    }
    main.appendChild(section)
    main.appendChild(imgDonuts)
    body.appendChild(main)
}
createDonuts()