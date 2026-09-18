const aboutmebuttons = document.querySelectorAll(".aboutmebtn");
const data = document.querySelector(".xp-date");
const titulo = document.querySelector(".xp-text");
const descricao = document.querySelector(".xp-desc")
const aprendizados = document.querySelector(".xp-learnings")

const aboutmebuttonsfm = document.querySelectorAll(".aboutmebtnfm");
const datafm = document.querySelector(".fm-date");
const titulofm = document.querySelector(".fm-text");
const descricaofm = document.querySelector(".fm-desc")
const aprendizadosfm = document.querySelector(".fm-learnings")

const experiencias = [
    {
        data:"2025 - 2026",
        titulo: "Desenvolvedor Web Freelancer",
        descricao: "curso focado no desenvolvimento de sistemas",
        aprendizados: [
            "html",
            "css",
            "java",
            "arduino"
        ]
    },

    {
        data:"2025",
        titulo: "Curso de ADS 2",
        descricao: "curso focado no desenvolvimento de sistemas 2",
        aprendizados: [
            "html 2",
            "css 2",
            "java 2",
            "arduino 2"
        ]
    },
    {
        data:"2025 - 2026",
        titulo: "Curso de ADS3",
        descricao: "curso foca33333do no desenvolvimento de sistemas",
        aprendizados: [
            "ht3ml",
            "css",
            "ja3va",
            "ardu3ino"
        ]
    },
    {
        data:"2026",
        titulo: "Curso de ADS",
        descricao: "curso focado no desenvolvimento de sistemas",
        aprendizados: [
            "html",
            "cs543444s",
            "ja55va",
            "arduino"
        ]
    },
    {
        data:"2025 - 2026",
        titulo: "Curso de ADS",
        descricao: "c555555777urso focado no desenvolvimento de sistemas",
        aprendizados: [
            "html",
            "css",
            "ja5555555va",
            "arduino"
        ]
    },

];

const formacoes = [
    {
        datafm: "2026",
        titulofm: "cjftgjtfgjao",
        descricaofm: "fre78yfge78yg",
        aprendizadosfm: [
            "jfngtjnftgj",
            "rjfgtjfrjt",
            "rfjnjfnjftgrj",
            "ejfrtgnjhtgfnhjc"
        ]
    },
    {
        datafm: "20254354356",
        titulofm: "rftjrftgjfrtgj",
        descricaofm: "fre78yfge78yg",
        aprendizadosfm: [
            "tgfrjfrgtjrftc",
            "fgtnjfrtgj",
            "ejtrfjnfrgtnjfc",
            "efrtgjfgtnjgtfc"
        ]
    },
    {
        datafm: "2026",
        titulofm: "frgtnjfgtrnj",
        descricaofm: "fre78yfge78yg",
        aprendizadosfm: [
            "trgfhfgtnhjfgtrhnj",
            "tfrghfgrthnfgtj",
            "hbgfhnbfgtnhjgft",
            "egrfdgbfdthbfgthru "
        ]
    },
    {
        datafm: "2026",
        titulofm: "fdszfvsdzegvs",
        descricaofm: "fre78yfge78yg",
        aprendizadosfm: [
            "slc",
            "gsdazfsa",
            "dsxgdgv",
            "dgvdexsgvdesg"
        ]
    },
    {
        datafm: "2026",
        titulofm: "sgvedsg",
        descricaofm: "fre78yfge78yg",
        aprendizadosfm: [
            "sedgegl43534c",
            "ésdegsdegv",
            "esgeddg",
            "gesgdvsdgvc"
        ]
    },

]

function mostrarExperiencias(index){
const experiencia = experiencias[index];

data.textContent = experiencia.data;
titulo.textContent = experiencia.titulo;
descricao.textContent = experiencia.descricao;

aprendizados.innerHTML = "";

experiencia.aprendizados.forEach(texto => {
    const p = document.createElement("p");
    p.textContent = texto;
    aprendizados.appendChild(p);
});

}

aboutmebuttons.forEach(botao => {
    botao.addEventListener("click", () => {
        const index = botao.dataset.xp;
        mostrarExperiencias(index);
    });
});
mostrarExperiencias(0);

function mostrarformacoes(index){
    const formacao = formacoes[index];

    datafm.textContent = formacao.datafm;
    titulofm.textContent = formacao.titulofm;
    descricaofm.textContent = formacao.descricaofm;
    aprendizadosfm.innerHTML = "";

    formacao.aprendizadosfm.forEach(texto =>{
        const p = document.createElement("p");
        p.textContent = texto;
        aprendizadosfm.appendChild(p);
    });
}

aboutmebuttonsfm.forEach(botao => {
    botao.addEventListener("click", () => {
        const index = botao.dataset.fm;
        mostrarformacoes(index);
    });
});
mostrarformacoes(0);

// ============================================
// FUNDO DE ESTRELAS
// ============================================

const canvas = document.querySelector("#starly-background");
const ctx = canvas.getContext("2d")
canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

const estrelas = [];

    for (let i = 0; i < 300; i++){
        estrelas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            tamanho: Math.random() * 5
        });
    }
estrelas.forEach(estrela => {

ctx.beginPath();

ctx.arc(
    estrela.x, 
    estrela.y, 
    estrela.tamanho,   
    0,
    Math.PI * 2
);

ctx.fillStyle = "white";
ctx.fill();
 });