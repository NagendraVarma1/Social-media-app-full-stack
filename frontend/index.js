function createPost(event) {
    event.preventDefault();

    let imgURL = document.getElementById('url').value;
    let desc = document.getElementById('desc').value;

    let postDetails = {
        imgURL,
        desc
    }
    axios.post('http://localhost:3000/post/add-post', postDetails)
    .then((res) => {
        showPosts(res.data.newPostDetail)
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
    img.className = 'postImage'
    img.src = data.imageUrl;

    let desc = document.createElement('h2')
    desc.className = 'postDesc'
    desc.innerText = data.description;

    let btn = document.createElement('button');
    btn.className = 'commentBtn'
    btn.innerText = 'Comment'

    div1.appendChild(img)
    div1.appendChild(desc);
    div1.appendChild(btn)
    mainDiv.append(div1)

    document.getElementById('url').value = '';
    document.getElementById('desc').value = '';
}

const getAllPosts = () => {
    axios.get('http://localhost:3000/post/get-post')
    .then((res) => {
        for(let i=0; i<res.data.allPostsDetails.length;i++) {
            showPosts(res.data.allPostsDetails[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

getAllPosts()