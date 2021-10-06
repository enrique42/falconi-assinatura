var proj = (function(){


function afterLoad(){ 

    console.log(window.devicePixelRatio);

    var url_atual = document.URL.substr(0,document.URL.lastIndexOf('/'));
    console.log(url_atual);

	var logo_anim = url_atual + '/GIF_Falconi_e-mail_V03.gif';
	var logo_maior = url_atual + '/GIF_Falconi_e-mail_V03.gif';

    var vue_login = new Vue({
      el: '#app-vue',
      data: {
          nome: 'Nome da pessoa',
          cargo: 'Posição',
          email: '',
          telefone: '+55 11 99999-9999',
          celular: '+55 11 99999-9999',          
          endereco: 'Endereço padrão',
          cidade: 'São Paulo - Brasil',
          img_flag: false,
          msgimg: false,
          lugar: 'saopaulo',
          logo: 'laranja',
          tipo: 'padrao',
      },
      computed: {
        img_externa: function(){
			return logo_anim;
        },
        img_local: function(){
			return logo_maior;
        },
        img_swap: function(){
          return this.img_flag ? this.img_local : this.img_externa;
        },
		telefoneHTML: function () {
			if (this.telefone && this.celular) {
				return '' + this.telefone + ' <br>' + this.celular;
			} else if (this.telefone) {
				return '' + this.telefone;
			} else if (this.celular) {
				return '' + this.celular;
			}
		},
		telefonePrint: function () {
			if (this.telefone && this.celular) {
				return this.telefone + '<br>' + this.celular;
			} else if (this.telefone) {
				return this.telefone;
			} else if (this.celular) {
				return this.celular;
			}
		},
      },
      methods: {
        geraImagem: function(){
          var vthis = this;
          var atual = document.documentElement.scrollTop;
          vthis.img_flag = true;
          setTimeout(function() { 
            window.scrollTo(0,0);
            html2canvas(document.querySelector("#whereto"),{
              'scrollX' : 0,
              'scrollY' : 0,
              'backgroundColor' : '#ffffff',
              'scale' : 1.1
            }).then(function(canvas){ 
              $('.bloco-canvas').empty();
              
              document.querySelector(".bloco-canvas").appendChild(canvas);
              vthis.img_flag = false;
              vthis.msgimg = true;
              window.scrollTo(0,atual);
            });
          }, 200);
          
        }
      },
      created: function(){
        this.img_swap = this.img_externa;
      }
    });

    
}

return {
    inicializa : afterLoad
}

})();

$(document).ready( proj.inicializa ); 