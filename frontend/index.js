function createPost(event) {
    event.preventDefault();

    let imgURL = document.getElementById('url').value;
    let desc = document.getElementById('desc').value;

    let postDetails = {
        imgURL,
        desc
    }
    axios.post('https://crudcrud.com/api/ad75a687739446239fbf47d209948bdd/Post', postDetails)
    .then((res) => {
        showPosts(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
    
}

function showPosts(data) {
    let mainDiv = document.getElementById('allPosts');

    let div1 = document.createElement('div');
    div1.className = 'card'

    let img = document.createElement('img');
    img.src = data.imgURL

    let desc = document.createElement('h2')
    desc.innerText = data.desc;

    let btn = document.createElement('button');
    btn.innerText = 'Comment'

    div1.appendChild(img)
    div1.appendChild(desc);
    div1.appendChild(btn)
    mainDiv.append(div1)

    document.getElementById('url').value = '';
    document.getElementById('desc').value = '';
}

function getAllPosts () {
    axios.get('https://crudcrud.com/api/ad75a687739446239fbf47d209948bdd/Post')
    .then((res) => {
        for(let i=0; i<res.data.length;i++) {
            showPosts(res.data[i])
        }
    })
}

getAllPosts()