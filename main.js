const url = "http://localhost:8000/users"
const getBtn = document.getElementById('getBtn')
const tableRow = document.getElementById('tableRow')



function getUser(){
    fetch(url)
    .then(response => response.json())
    .then(datas => {
            console.log(datas);//massiv
            // tableRow.innerHTML = '';
            datas.forEach(data => {
                tableRow.innerHTML += `<td>${data.name}</td> <td>${data.username}</td> <td>${data.email}</td> <td>${data.phone}</td> <td>${data.website}</td> <td><button class="deleteBtn" data-id="${data.id}">delete ${data.id}</button></td>`
            })
                const deleteBtn = document.querySelectorAll('.deleteBtn')   
                deleteBtn.forEach(btn => {
                btn.addEventListener('click', deleteUser)
                }) 
            }) 
    }

function deleteUser(event) {
    event.preventDefault();
        const {id} = event.target.dataset
        fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}

getBtn.addEventListener('click', getUser)





































//old

// const url = "http://localhost:8000/users"
// const postBtn = document.getElementById('postBtn')
// const getBtn = document.getElementById('getBtn')

// const table = document.getElementById('table')
// const tableRow = document.getElementById('tableRow')

// const users = {
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org"
// }


// function postUser(){
//     fetch(url,{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(users)
//     })
// }

// postBtn.addEventListener('click', postUser)

// function getUser(event){
// fetch(url)
// .then(response => response.json())
// .then(datas => {
//         console.log(datas);//massiv
//         datas.forEach(data => {
//             tableRow.innerHTML += `<td>${data.name}</td> <td>${data.username}</td> <td>${data.email}</td> <td>${data.phone}</td> <td>${data.website}</td> <td><button class="deleteBtn" data-id="${data.id}">delete</button></td>`
//         })
//             const deleteBtn = document.querySelectorAll('.deleteBtn')   
//             deleteBtn.forEach(btn => {
//             btn.addEventListener('click', deleteUser)
//             }) 
//             }) 
// }

// getBtn.addEventListener('click', getUser)


// function deleteUser(event) {
//     const {id} = event.target.dataset
//     fetch(`${url}/${id}`, {
//     method: 'DELETE'
// })
// }






