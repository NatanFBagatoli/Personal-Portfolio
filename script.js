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
        titulo: "titulo 1",
        descricao: "desc 1",
        aprendizados: [
            "✦ aprendizado 1",
            "✦ aprendizado 2",
            "✦ aprendizado 3",
            "✦ aprendizado 4"
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
        titulofm: "titulo 1",
        descricaofm: "desc 1",
        aprendizadosfm: [
            "✦ aprendizado 1",
            "✦ aprendizado 2",
            "✦ aprendizado 3",
            "✦ aprendizado 4"
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

    for (let i = 0; i < 350; i++){
        estrelas.push({
            x: Math.random() * canvas.width - canvas.width / 2, 
            y: Math.random() * canvas.height - canvas.height / 2,
            tamanho: Math.random() * 5 + 1,

            velocidade: Math.random() * 0.5 + 0.1,

            pontas: 4
        });
    }

function desenharestrela(x, y, tamanho, pontas) {
    
    ctx.beginPath();
const quantidadepontos = pontas * 2;
    for (let i = 0; i < quantidadepontos; i++) {
const angulo = i * Math.PI / pontas;

const raio = i % 2 === 0
        ? tamanho 
        : tamanho / 2

    const px = x + Math.cos(angulo) * raio;
    const py = y + Math.sin(angulo) * raio;

    if (i === 0){
        ctx.moveTo(px, py);
    } else{
        ctx.lineTo(px, py);
    }
    }
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
}

function moverestrelas(){

    estrelas.forEach(estrela => {
        const distancia = Math.sqrt(
            estrela.x ** 2 +
            estrela.y ** 2

        );
    if (distancia === 0) {
            estrela.x = 1;
            estrela.y = 1;
            return;
    }
        estrela.x +=
        (estrela.x / distancia) *
        estrela.velocidade;

        estrela.y +=
        (estrela.y / distancia) *
        estrela.velocidade;

        estrela.velocidade += 0.002;

        if(
            estrela.x < -canvas.width / 2 ||
            estrela.x > canvas.width / 2 ||
            estrela.y < -canvas.height / 2 ||
            estrela.y > canvas.height / 2
        ) {
            estrela.x = Math.random() * 100 - 50;
            estrela.y = Math.random() * 100 - 50;

            estrela.velocidade = Math.random() * 0.3 + 0.1;
        }
    
    });
}

function desenharestrelas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    estrelas.forEach(estrela => {
        const x = canvas.width / 2 + estrela.x;
        const y = canvas.height / 2 + estrela.y;

        desenharestrela(
            x,
            y,
            estrela.tamanho,
            estrela.pontas
        );

    });
}

function animarestrelas() {
    moverestrelas();
    desenharestrelas();
    requestAnimationFrame(animarestrelas);
}

animarestrelas();

window.addEventListener("resize", () => {

    desenharestrelas();
 });

//(function (){
//    const infocard = document.getElementById('skillInfoCard');
//})