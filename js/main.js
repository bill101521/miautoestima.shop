new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, //Tempo em segundos do delay
    min: 600, // valor mÃ­nimo de pessoas na live
    max: 1000, // mÃ¡ximo de pessoas na live

    //aqui definimos os comentarios, com imagem,nome e texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Mayra Stefan",
        texto: " My kids here in NY are using and they are helping to pay the internet and energy bill, it's good for something lol",
      },
      {
        img: "./assets/img/2.webp",
        nome: "George Williams",
        texto:
          " Good thing I saw it all. The button appears at the end of the video! Here in Florida there are some people using it. 👏🙏",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Odilia Eyre",
        texto:
          " How does it work? I also want to start someone Help me!!! I want to buy for myself",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Amity Hiett",
        texto:
          " Watch the video until the end. at the end of The video will drop a button and then you will click on it. ",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Odilia Eyre",
        texto: " Thxxx, I'll give it a try! 🙏🙏🙏",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Noreen Heart",
        texto:
          " did someone already tried it? Does it really works???",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Edit Darby",
        texto:
          "Yep I've been using it for a month already and it's fantastic u not gonna regret BELIEVE ME!! It's not a fuss either, just watch the video and click the button that appears at the end  ",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto:
          "Dude, I always get annoyed when I see those long videos that make you watch and then try to sell you something at the end... but I have to admit, I am 100% happy that I gave this video a chance, because after working at McDonald's in my town for 2 years (I'm from New York), I finally managed to buy a brand new car in less than a month just by using the app! I have never been so happy! In the next 2 months, I'm going to buy my own apartment! Thanks, Secret App crew, you guys are amazing!",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "I've been doing this for a few weeks, and it's legit! Just watch the video, hit the button, and you're set. Anyone else tried this? It really seems to work! Thanks for sharing, definitely trying this out 😊👍",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "Really? Just by watching a video and clicking a button? Sounds too good to be true. Has anyone actually seen results with this? I'm curious, might try it out. 🤔",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto:
          "This sounds amazing! Just finished watching the video and clicked the button at the end. Let's see how this goes. Has anyone else had success with this? Excited to start! ",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto:
          "Can someone explain more about how this works? I'm interested in trying it. I need a new way to make some extra cash. If it's as simple as watching a video, count me in!",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "Glad I watched the entire video. The button at the end was the key! I'm in California and I know a few folks who are doing this too. Seems promising! 🙏✨ ",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "im not gonna miss this one out, lost to many opprtunities in my life already",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "My friends in Texas have been using this method and they say it's helping with their bills. Just watch and click, right? I'm giving this a try for sure. 😄",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto:
          "this is exactly what I was looking for to make some extra money from home",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto:
          "there some discount guys, keep watching till the end!! JUST GOT ACCESS FOR ME AND MY WHOLE FAMILY",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto:
          "really work just got $100 in one week",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto:
          " I'm always on the lookout for ways to make money from home, and this seems promising.",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Niceee, just got my access",
      },
    ],

    btnDisplay: "none", //nÃ£o mexe
    contador: 730, //nÃ£o mexe
    comentariosExibidos: [], //nÃ£o mexe
    indiceComentario: 0, //nÃ£o mex
    showContent: true, //nÃ£o mex
  },
  mounted() {
    this.exibirComentario();
    this.delay();
    this.atualizarContador();
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.btnDisplay = "flex";
      }, this.tempoEmSegundos * 1000);
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(15000, 30000));
    },
    exibirComentario() {
      if (this.indiceComentario < this.comentarios.length) {
        this.comentariosExibidos.push(this.comentarios[this.indiceComentario]);
        this.indiceComentario++;
        setTimeout(
          this.exibirComentario,
          this.gerarNumeroAleatorio(10000, 30000)
        );
      }
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});