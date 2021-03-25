const trashcan = document.querySelector('.delete');



trashcan.addEventListener('click', (e) => {
    const endpoint = `/index/${trashcan.dataset.doc}`;
    
    fetch(endpoint, {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => window.location.href = data.redirect)
    .catch(err => console.log(err));
});




const check = document.querySelector('input.checkbox');
check.addEventListener('change', (e) => {
    document.querySelector(".todos").style.textDecoration = "line-through";
});