function hilangkan() {
	document.getElementById('sebeng').style.display='none';
	document.getElementById('kalimat').style.display='none';
}

function tampilkan() {
	document.getElementById('sebeng').style.display='block';
	document.getElementById('kalimat').innerHTML='kalimat akan muncul';
}

function gabungkanKalimat(){
	var depan, belakang;
	depan = "ayu";
	belakang = 't';

	window.alert(depan+' '+belakang);
}

function array(){
	var deret = [2, 5, 6, 7];
	document.innerHTML = "deret[2]";
}