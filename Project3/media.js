let act=`<div class="new_list">
<div class="news">
    <div class="left">
        <div class="top">
            <div class="infotop">
                <img class="imgg" src="img/Img.png">
                <p class="author_name">Authors name</p>
                <p class="delimeter">in</p>
                <p class="topic_name">Topics Name</p>
                <p class="delimeter_2">·</p>
                <p class="july">7 july</p>
            </div>
            <div class="text">
                <p class="desc_1"></p>
                <p class="desc_2"></p>
            </div>
                
        </div>
        <div class="infobottom">
            <div class="info">
                <button class="but">
                    <label class="lab">Java Script</label>
                </button>
                <p class="min_read">12 min read</p>
                <p class="delimeter_3">·</p>
                <p class="selected">Selected for you</p>
            </div>
            <div class="actions">
                <img class="icons" src="img/Icon.png">
                <img class="icons" src="img/Icon.png">
                <img class="icons" src="img/Icon.png">
            </div>
        </div>
    </div>
    <img class="foto">
</div>
</div>`;

const acticles=document.getElementById("acticles");

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=> response.json())
// .then(function(data){
//     data.forEach(element => {
//         let newArticle=act.replace('class="desc_1">',`class="desc_1">${element.title}`);
//         newArticle=newArticle.replace('class="desc_2">',`class="desc_2">${element.body}`);
//         acticles.innerHTML += newArticle;
//     });
    
// })


fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=4lwM6zVxVg1S7SBzysG0CIdMTTXPPGHG')
.then((response)=> response.json())
.then(function(data){
    data.results.forEach(element => {
        let newArticle=act.replace('class="desc_1">',`class="desc_1">${element.title}`);
        newArticle=newArticle.replace('class="desc_2">',`class="desc_2">${element.abstract}`);
        newArticle=newArticle.replace('class="foto"',`class="foto" src='${element.multimedia[0].url}'`);
        acticles.innerHTML += newArticle;
    });
    
})
