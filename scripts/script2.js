"use strict"
let comments = [];
loadComments();
showComments();
document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}


function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments(){
    let commentField = document.getElementById('comment-field');
    let out = '';
for(let i in comments){
        out += `<div class="alert alert-primary" role="alert"><p>${comments[i].name}</p>
        <p>${comments[i].body}</p><p>${timeConverter(comments[i].time)}</p>
        <a href="#" data-art="${[i]}" class="comment-remove"><i class="fas fa-trash-alt"></i></a></div>
        `;
}
    commentField.innerHTML = out;
    $('.comment-remove').on('click', deleteComment);
}
   

function deleteComment(){
    let id = $(this).attr('data-art');
    comments.splice(id,1);
    saveComments()
    showComments()
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }