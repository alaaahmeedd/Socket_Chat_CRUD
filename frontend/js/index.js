
const socket = io("http://localhost:3000")

function getInputData(){
    let data = document.getElementById('inputData').value;

     // send data
     socket.emit('sendData', data)
        console.log(data);

}

socket.on("message", (data)=>{

    document.getElementById('showMessage').innerHTML += `
    <div>
            <button class="btn my-3 btn-danger">
                ${data}
            </button>
        </div>`
    
})
