var slider = Vue.component ('slider-materia',{
  template:`
  <div id="slide">
    <div id="innerImage">
      <button type="button" class="botao btn btn-dark"
      v-on:click="manualTroca(-1)">
        <--
      </button>
      <button type="button" class="botao btn btn-dark"
      v-on:click="manualTroca(1)" style="float: right;">
        -->
      </button>
    </div>
  </div>
  `,
  data(){
    return{
      img: [0,1,2],
      atual: 0,
      imgUrl: ['url(../IMG/circle.png)','url(../IMG/triangle.svg)',
      'url(../IMG/logo.svg)']

    }
  },
  methods:{
    manualTroca(entrada){
      
      clearInterval(this.delay);
      if (entrada == -1 ){
        this.atual--;
      }
      if (entrada == 1 ){
        this.atual++;
      }
      if (this.atual<0){
        this.atual = this.imgUrl.length-1;
      }
      if(this.atual>=this.imgUrl.length){
        this.atual = 0;
      }
    },
  },
  watch:{
    atual: function (){
      document.getElementById("innerImage").style.backgroundImage =
      this.imgUrl[this.atual];
    }
  },
  created(){
    var obj = this;
    this.delay = setInterval(function(){
      if (obj.atual<obj.imgUrl.length){
        obj.atual++;
      } else {
        obj.atual = 0;
      }
    },3000);
  },

})




var navBottom = Vue.component ('nav-bottom',{
  template:`
      <nav>
        <ul id="ul-menu-bot">
          <li class="li-menu-bot">
            <a href="index.html"> WWW.SITEBOLADAO.COM © </a>
          </li>
          <li class="li-menu-bot" style="float:right">
            <div id="relogio">
            {{ dataCompleta }} <br>
            {{ horaCompleta }}
            </div>
          </li>
        </ul>
      </nav>`,
  data() {
    return {
      date: new Date(),
      horaCompleta: "",
      dataCompleta: "",
    }
  },
  methods:{
    dataAtt(){
      this.date = new Date();
      var dia = this.date.getDate();
      if (dia<=9){
        dia = '0' + dia;
      }
      var mes = this.date.getMonth();
      if (mes<=9){
        mes = '0' + mes;
      }
      var ano = this.date.getFullYear();
      this.dataCompleta = dia + '/' + mes + '/' + ano;
      this.horaCompleta = this.date.toLocaleTimeString();
    }
  },
  created (){
    this.dataAtt();
    window.setInterval(this.dataAtt,1000);
  },
})

var navTop = Vue.component ('nav-top',{
  template:`
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top preto"
      style="justify-content: center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html"> HOME </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="matricula.html"> Matricula </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="loteria.html"> Loteria </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cadastro-de-pessoas.html"> Cadastro de pessoas </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="opcoes.html"> Calculadora </a>
          </li>
        </ul>
      </nav>`,
})
