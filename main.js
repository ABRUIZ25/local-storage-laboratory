const Input = document.querySelector('.TextInput')
const Button = document.querySelector('.Button')
const SavedList = document.querySelector('.save')


function SaveItems(event) {
    event.preventDefault()
    const saveItem = localStorage.length
    if (saveItem === 0) {
        SavedList.innerHTML = 'no saveved items'
    }
    else (localStorage.setItem = Input.value)
    console.log(Input.value)


}

Button.addEventListener('click', SaveItems)
