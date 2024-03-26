console.log("Hello world");

function getNewsArticle(){
    const nTtl = document.getElementById("newsTitle");
    const nBody = document.getElementById("newsBody");

    fetch('../../pages/newsArticles/articleList.json')
        .then(rslt => rslt.json())
        .then(data => {
            data.forEach(post => {
                if (post.id == pName.textContent.replace(/Article /g, '')){
                    nTtl.textContent = post.title
                    nBody.textContent = post.body
                }
            });
        })
        .then(console.log(pName.textContent));
}

//work in progress for loop
function newsList(){
    const textLine = document.getElementById("NewsList");

    fetch('../pages/newsArticles/articleList.json')
        .then(rslt => rslt.json())
        .then(r => [...r].reverse())
        .then(data => {
            for(let i = data.length; i>0;i--){

                if (data[i]){
                    textLine.insertAdjacentHTML('beforeend', 
                    `<li style="transform: rotate(-180deg)"><a style="text-decoration: none; hover: " href="../pages/newsArticles/article${data[i].id}.html">Issue #${data[i].id}: ${data[i].title}</a>
                        <ul style = "list-style-type: none">
                            <li class = "fs-5">
                                ${data[i].body}
                            </li>
                        </ul>
                    </li>`
                    );   
                }
            }
        });
}