let ab_blog = document.getElementById("ab_blog");
let lk_blog = document.getElementById("lk_blog");
let ab_mnos = document.getElementById("ab_mnos");
let lk_mnos = document.getElementById("lk_mnos");

let page ={
    blog:[
        {
            about: "",
            link: "https://huiyou5009.github.io/BLOG/"
        }
    ],
	mnos:[
		{	
            about: "",
            link: "https://huiyou5009.github.io/map_tw.gov.os/"
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

lk_mnos.addEventListener("click", function() {
    OpenLink(page.mnos[0].link);
});


