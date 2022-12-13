let userName = document.querySelector('#userName')
let form = document.querySelector('form')
let userImg = document.querySelector('#userImg')
let userFind = document.querySelector('#userFind')
let projectName = document.querySelector('#projectName')
let info = document.querySelector('#info')

form.addEventListener('submit', event =>{
    event.preventDefault()
    console.log(userName.value)
    if (userName.value) {
        fetch("https://api.github.com/users/" + userName.value).then(response => response.json()).then(user =>{   
            console.log(user)        
                userImg.src = user.avatar_url
                document.querySelector('h5').innerText = user.login 
                document.querySelector('h3').innerText = user.name
                document.querySelector('a').href = "https://github.com/" + user.login
                userFind.style.display = "flex"
            
        })

        fetch("https://api.github.com/users/" + userName.value + "/repos").then(response => response.json()).then(repos =>{   
            console.log(repos)        
            //repos.forEach(elt => projectName.innerHTML = elt.name)
            for(let i = 0; i < repos.length; i++){
                info.innerHTML = info.innerHTML + "<p>" + repos[i].name + "</p>"   
            }
            
        })      
    }
    userName.value = ""
    userName.focus()
})

