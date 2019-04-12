var navBottom = Vue.component ('nav-bottom',{
  template:`
      <nav>
        <ul id="ul-menu-bot">
          <li class="li-menu-bot">
            <a href="index.html"> INDEX </a>
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
