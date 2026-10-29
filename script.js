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
function filtros(){}

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

// ============================================
// TECNOLOGIAS
// ============================================

const tecnologias = {
    html: {
        nome: "HTML",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Biblioteca de Plêiades, Portfolio",
        competencias: "Semântica, W3C validator, a11y",
        projeto: "Personal Portfólio",
        icone: "/techstackimgs/htmlicon.png"
    },

    css: {
        nome: "CSS",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Biblioteca de Plêiades, Portfolio",
        competencias: "Flexbox, Grid, responsividade",
        projeto: "Portfólio",
        icone: "/techstackimgs/cssicon.png"
    },

    javascript: {
        nome: "JavaScript",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Biblioteca de Plêiades, Portfolio",
        competencias: "DOM, Fetch API, ES6+",
        projeto: "Biblioteca de Plêiades",
        icone: "/techstackimgs/javascripticon.png"
    },

    typescript: {
        nome: "TypeScript",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Desenvolvimento Web",
        competencias: "Tipagem estática, interfaces",
        projeto: "A definir",
        icone: "/techstackimgs/typescripticon.png"
    },

    react: {
        nome: "React",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Interfaces dinâmicas",
        competencias: "Componentes, Hooks, Router",
        projeto: "AuthSystem",
        icone: "/techstackimgs/reacticon.png"
    },

    tailwind: {
        nome: "TailwindCSS",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Estilização de interfaces",
        competencias: "Utility classes, responsividade",
        projeto: "AuthSystem",
        icone: "/techstackimgs/tailwindicon.png"
    },

    vite: {
        nome: "Vite",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Ferramentas de desenvolvimento",
        competencias: "Build, desenvolvimento local",
        projeto: "AuthSystem",
        icone: "/techstackimgs/viteicon.png"
    },

    notion: {
        nome: "Notion",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Organização e documentação",
        competencias: "A definir",
        projeto: "A definir",
        icone: "/techstackimgs/notionicon.png"
    },

    figma: {
        nome: "Figma",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Design de interfaces",
        competencias: "Protótipos, layouts",
        projeto: "A definir",
        icone: "/techstackimgs/figmaicon.png"
    },

    python: {
        nome: "Python",
        tempo: "+2 Anos",
        formacao: "Estudos independentes",
        aplicacoes: "Automação e IA",
        competencias: "APIs, Pandas, OpenCV",
        projeto: "Star Assistant",
        icone: "/techstackimgs/pythonicon.png"
    },

    node: {
        nome: "Node.js",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Desenvolvimento Backend",
        competencias: "APIs REST, npm",
        projeto: "AuthSystem",
        icone: "/techstackimgs/nodeicon.png"
    },

    java: {
        nome: "Java",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Desenvolvimento de software",
        competencias: "POO, coleções",
        projeto: "A definir",
        icone: "/techstackimgs/javaicon.png"
    },

    express: {
        nome: "Express",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "APIs REST",
        competencias: "Rotas, middleware",
        projeto: "AuthSystem",
        icone: "/techstackimgs/expressicon.png"
    },

    springboot: {
        nome: "Spring Boot",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Desenvolvimento Backend",
        competencias: "A definir",
        projeto: "A definir",
        icone: "/techstackimgs/springbooticon.png"
    },

    mysql: {
        nome: "MySQL",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados relacional",
        competencias: "SQL, consultas",
        projeto: "A definir",
        icone: "/techstackimgs/mysqlicon.png"
    },

    postgresql: {
        nome: "PostgreSQL",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados relacional",
        competencias: "SQL, consultas",
        projeto: "A definir",
        icone: "/techstackimgs/postgressqlicon.png"
    },

    mongodb: {
        nome: "MongoDB",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados NoSQL",
        competencias: "CRUD, documentos",
        projeto: "AuthSystem",
        icone: "/techstackimgs/mongodbicon.png"
    },
    git: {
        nome: "Git/GitHub",
        tempo: "+3 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados NoSQL",
        competencias: "CRUD, documentos",
        projeto: "AuthSystem",
        icone: "/techstackimgs/githubicon.png"
    },
    vercel: {
        nome: "Vercel",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados NoSQL",
        competencias: "CRUD, documentos",
        projeto: "AuthSystem",
        icone: "/techstackimgs/vercelicon.png"
    },
    postman: {
        nome: "Postman",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados NoSQL",
        competencias: "CRUD, documentos",
        projeto: "AuthSystem",
        icone: "/techstackimgs/postmanicon.png"
    },
    docker: {
        nome: "Docker",
        tempo: "+2 Anos",
        formacao: "Senai (ADS) & Senac (Entra 21)",
        aplicacoes: "Banco de dados NoSQL",
        competencias: "CRUD, documentos",
        projeto: "AuthSystem",
        icone: "/techstackimgs/dockericon.png"
    },
};

let tecnologiaFixada = null;

const techName = document.getElementById("tech-name");
const techXp = document.getElementById("tech-xp");
const techEducation = document.getElementById("tech-education");
const techApplications = document.getElementById("tech-applications");
const techSkills = document.getElementById("tech-skills");
const techProjects = document.getElementById("tech-projects");
const techIcon = document.getElementById("tech-icon");
const techLabel = document.getElementById("tech-label");

function mostrarTecnologia(id) {
    const tech = tecnologias[id];

    if (!tech) return;

    techName.textContent = tech.nome;
    techXp.textContent = tech.tempo;
    techEducation.textContent = tech.formacao;
    techApplications.textContent = tech.aplicacoes;
    techSkills.textContent = tech.competencias;
    techProjects.textContent = tech.projeto;
    const icone = document.getElementById("tech-icon");
    icone.src = tech.icone;
    icone.alt = tech.nome;
    icone.style.display = "block";

}

const techButtons = document.querySelectorAll(".tech-icon");

techButtons.forEach(botao => {
    const id = botao.dataset.tech;

    if (!tecnologias[id]) return;

    botao.addEventListener("mouseenter", () => {
        if (tecnologiaFixada === null) {
            mostrarTecnologia(id);
        }
    });

    botao.addEventListener("click", () => {
        if (tecnologiaFixada === id) {
            tecnologiaFixada = null;
        } else {
            tecnologiaFixada = id;
        }

        mostrarTecnologia(id);
    });
});

