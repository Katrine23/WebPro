//control JS
//deklarasi varible untuk setiap fungsi yang akan digunakan
const cari = document.querySelector('#kotak-pencarian');
const fakultas = document.querySelector('#fakultas');
const prodi = document.querySelector('#prodi');
const tableSiswa = document.querySelector('.table');
const id = document.getElementById('id');
const name = document.getElementById('name');
var body = tableSiswa.querySelector('tbody');
const formulir = document.querySelector('.formulir');
const filterfak = document.querySelector('#filterFakultas');
const filterpro = document.querySelector('#filterProdi');

//mengisi gender kedalam array agar bisa di looping ketika diklik dan diambil nilainya
let tipe = [document.querySelector('#male'),
            document.querySelector('#female')]
  var tampilkan = document.querySelector('.show-form');

  //event untuk menambahkan student ketika di klik
  formulir.addEventListener('submit',tambah);

  var options2 = prodi.querySelectorAll('option');

  //filter pada menu form add fakultas, prodi berdasarkan fakultas yang di masukan
  fakultas.addEventListener('change',function() {
    prodi.textContent = '';
    for(var i = 0; i < options2.length; i++) {
      if(options2[i].dataset.option == this.value) {
        prodi.appendChild(options2[i]);
      }
    }
  })

//fungsi untuk menambahkan new student kedalam table
function tambah(events){

    //menghalau form untuk tersubmit
    events.preventDefault();

    //membuat element baru untuk table tbody
    const datas = {
        rows:document.createElement('tr'),
        td1:document.createElement('td'),
        td2:document.createElement('td'),
        td3:document.createElement('td'),
        td4:document.createElement('td'),
        td5:document.createElement('td'),
        tbtn:document.createElement('button')
      }

      //membuat setiap array baru untuk gender yang di klik pada form
      const gender = tipe.map(function(kelamin){
        if (kelamin.checked) {
          return kelamin.value;
        }
      })

      //menambahkan data kedalam row pada tbody di table students
      datas.td1.innerText = id.value;
      datas.td2.innerText = name.value;
      datas.td3.innerText = gender;
      datas.td4.innerText = fakultas.value;
      datas.td5.innerText = prodi.value;
      datas.tbtn.classname = 'btn btn-danger ml-3';
      datas.tbtn.textContent = 'hapus';

      //menambahkan setiap row yang di add ke bagian tbody didalam table
      datas.rows.appendChild(datas.td1);
      datas.rows.appendChild(datas.td2);
      datas.rows.appendChild(datas.td3);
      datas.rows.appendChild(datas.td4);
      datas.rows.appendChild(datas.td5);
      datas.rows.appendChild(datas.tbtn);

      body.appendChild(datas.rows);
      datas.tbtn.addEventListener('click',function(){
        var row = this.parentNode;
        row.parentNode.removeChild(row);
      })
}


  //fungsi untuk melakukan show serta hide pada form
  formulir.style.display = 'none';
  function show(){
    if (formulir.style.display == 'none') {
      formulir.style.display = 'block'
      tampilkan.textContent = "Hide Form Add New Student";
    } else{
      formulir.style.display = "none"
      tampilkan.textContent = "Show Form Add New Student";
    }
  }

  //fungsi untuk melakukan pencarian nama di search box menggunakan event handling onkeyup
  function carinama(){
    var nilainama = cari.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[1];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }

  //fungsi untuk filter select fakultas
  function filterfakultas(){
    var nilainama = filterfak.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[3];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }

  //fungsi untuk filter select prodi
  function filterprodi(){
    var nilainama = filterpro.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[4];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }
