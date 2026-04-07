'use strict';

const postForm = document.getElementById('postform');
const upload = document.getElementById('upload');
const textbox = document.getElementById('textbox');
const submit = document.getElementById('submit');

const postTemplate = document.getElementById('basePost');

const timeline = document.getElementById('timeline');
const test = document.getElementById('logo');

function createPost(){
    let post = postTemplate.cloneNode(true);
    let valid = false;
    if(textbox.value.trim() !== ''){
        let postCaption = document.createElement('p');
        postCaption.innerText = textbox.value.trim();
        postCaption.className = "caption";
        post.appendChild(postCaption);
        valid = true;
    }
    if(upload.files[0] !== undefined) {
        let image = URL.createObjectURL(upload.files[0]);
        let postImage = document.createElement('img');
        console.log(postImage);
        postImage.setAttribute("src", image);
        post.appendChild(postImage);
        valid = true;
    }
    console.log(post);
    if(valid) {
        timeline.prepend(post);
        postForm.reset();
    } else {
        console.log('Test');
        post.removeChild;
    }
}

test.addEventListener('click', function() {
    createPost();
});

submit.addEventListener('click', function(){
    createPost();
});