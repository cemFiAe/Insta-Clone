let posts = [
    {
        'author': 'mahatma',
        'profImage': './templates/profilbilder/bundy.jpg',
        'postImage': './templates/posts/gandhi_post.jpg',
        'location': 'India',
        'description': 'always remember that! :)',
        'comments': [
            {
                'commentator': 'cringedude',
                'comment': 'true!',
            },
            {
                'commentator': 'denzel',
                'comment': 'i feel that, so true!',
            }
        ],
        'likes': 34,
        'liked': true,
    },
    {
        'author': 'cringedude',
        'profImage': './templates/profilbilder/cringe.jpg',
        'postImage': './templates/posts/cringe-post.png',
        'location': 'New York',
        'description': 'loool hehehe',
        'comments': [
            {
                'commentator': 'denzel',
                'comment': 'cringe bro :/',
            },
            {
                'commentator': 'the.eyedoc',
                'comment': 'i don`t know what to say..',
            }
        ],
        'likes': 22,
        'liked': true,
    },
    {
        'author': 'denzel',
        'profImage': './templates/profilbilder/denzel.jpg',
        'postImage': './templates/posts/denzel-post.jpg',
        'location': 'Washington',
        'description': 'believe in your dreams!',
        'comments': [
            {
                'commentator': 'cringedude',
                'comment': 'true!',
            },
            {
                'commentator': 'woody',
                'comment': 'yeehaa!',
            }
        ],
        'likes': 112,
        'liked': true,
    },
    {
        'author': 'the.eyedoc',
        'profImage': './templates/profilbilder/eyedoc.jpg',
        'postImage': './templates/posts/eyedoc-post.jpg',
        'location': 'Berlin',
        'description': 'the eye specialist on duty!',
        'comments': [
            {
                'commentator': 'whoopi',
                'comment': 'i need an appointment!',
            },
            {
                'commentator': 'mr.wayne',
                'comment': 'i will buy you.',
            }
        ],
        'likes': 77,
        'liked': true,
    },
]

function render(){
    let myPost = document.getElementById('middle-posts');
    myPost.innerHTML = '';

    for(let i = 0; i < posts.length; i++){
        const post = posts[i]; 

        myPost.innerHTML += /*html*/`
        <div class="myPost-container">
            <div class="myPost">
                <div class="myPost-top">
                    <img class="myPost-profImg" src="${post['profImage']}">
                        <span class="myPost-name">
                            <h3>${post['author']}</h3>
                            <small>${post['location']}</small>
                        </span>
                </div>
                <img class="myPost-postImg" src="${post['postImage']}" alt=""><br><br>
                <div class="myPost-description">
                    <b>${post['author']}</b><span>${post['description']}</span>
                </div>
                <input class="myPost-input" type="text" placeholder="Kommentieren...">
                <hr>
            </div>
        </div>
        `
    }
}