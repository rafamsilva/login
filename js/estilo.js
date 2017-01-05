function logar(){
	var usuario = $('#uLogin').val();
	var senha = $('#uPassword').val();

	if ((usuario == '') || (usuario != 'admin')){
		$('.formLogin').addClass('has-error');
	}else{
		$('.formLogin').removeClass('has-error');
		$('.formLogin').addClass('has-success');
	}

	if ((senha == '') || (senha != '123456')){
		$('.formSenha').addClass('has-error');
	}else{
		$('.formSenha').removeClass('has-error');
		$('.formSenha').addClass('has-success');
	}

	if((usuario == 'admin') && (senha == '123456')){
		window.location.href="lista.html"
	}
}

var filtro = document.getElementById('filtro-nome');
var tabela = document.getElementById('lista');
filtro.onkeyup = function() {
    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};

