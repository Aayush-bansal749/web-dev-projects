const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){
  insert.innerHTML =` 
  <div class = keys>
    <table>
      <tr>
        <th> Key </th>
        <th> KeyCode </th>
        <th> Code </th>
      </tr>
      <tr>
        <th>${e.key}</th>
        <th>${e.keyCode}</th>
        <th>${e.code}</th>
      </tr>
    </table>
  </div>`
    
  
})