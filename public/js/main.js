let note_form = document.getElementById('note_form');
let note = document.getElementById('note');
let note_storage_data = []; // array
let root = document.getElementById('root');

// 1 tambahkan eventlistener
 note_form.addEventListener('submit', (event)=>{
// 2 berhentikan form load
  event.preventDefault();

let note_value = {
  id : Date.now(),
  note : event.target.note.value
}

// 4. kita push note_value ke note_storage
note_storage_data.push(note_value);

// 3.clear textarea value
note.value = '';

// 8. panggil function render html
 render_to_html();

});

// 5.fanction rander note_storage_data to html
function render_to_html(){
// 6. clear reset elemen root
  root.innerHTML = '';
// 7. perulangan foreach dari array note storage data
// index ururtan data array
  note_storage_data.forEach((elem,index)=>{
  // 8. menampilkan value to html
    root.innerHTML += `
    <div class="card">
    <p>${elem.note}</p>
    <button class="btn_card_delete" onclick = "delete_note(${index})"> X </button>
    </div>
    `
  });
}
// 10. onclick = "delete_note(${index})"
// 9. function delete note
function delete_note(index){
//  11 
  let conf_delete = confirm("mau hapus ?");
  if(!conf_delete){
    return
  }
  note_storage_data.splice(index,1);

  render_to_html();
};
