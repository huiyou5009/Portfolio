let ab_blog = document.getElementById("ab_blog");
let lk_blog = document.getElementById("lk_blog");


let page ={
    blog:[
        {
            about: "https://www.google.com",
            link: "https://huiyou5009.github.io/BLOG/"
        }
    ],
	bbb:[
		{	
            about: "https://www.twitter.com",
            link: "https://www.instagram.com"
		}
	]
};


const OpenLink = function(link){
    // window.location.href = 'https://www.google.com'; //該頁開啟
    window.open(link, '_blank');    //分頁開啟
};


lk_blog.addEventListener("click", function() {
    OpenLink(page.blog[0].link);
});


