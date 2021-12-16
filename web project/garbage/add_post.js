function screen_onload(){
    
    upload_img();
    chooseversion();

}

function upload_img(){
    const inputPic = document.querySelector("#inputPic");
    var displayPic = "";
    inputPic.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            displayPic = reader.result;
            document.querySelector(".showUpload").style.backgroundImage = `url(${displayPic})`;
        })
        reader.readAsDataURL(this.files[0]);
    })
}

function chooseversion(){
    var version = "";
    var version1 = document.getElementById("version1");
    var version2 = document.getElementById("version2");
    var version3 = document.getElementById("version3");
    var title = document.getElementById("title");
    var newchild = document.createElement("div");
    var btn= document.getElementById("btn");
    var module = document.getElementById("module");
    var tmp1 = document.querySelector(".version1_show");
    var tmp2 = document.querySelector(".version2_show");
    var confirm_img = document.getElementById("confirm_img");
    var post_content = document.getElementById("post_content");
    var empty = 1;

    version1.addEventListener("click", function(){
        version = 1;
        module.innerHTML = "";
        newchild = tmp1;
        module.appendChild(newchild);
        newchild.style.display = "block";
        confirm_img.style.display = "block";
        confirm_img.onclick = post1;
    })
    version2.addEventListener("click", function(){
        version = 2;
        module.innerHTML = "";
        newchild = tmp2;
        module.appendChild(newchild);
        newchild.style.display = "block";
        confirm_img.style.display = "block";
        confirm_img.onclick = post2;
    })
    version3.addEventListener("click", function(){
        version = 3;
        module.innerHTML = "";
        newchild = tmp2;
        module.appendChild(newchild);
        newchild.style.display = "block";
        confirm_img.style.display = "block";
        confirm_img.onclick = post2;
    })
    
    

    function post1(){
        empty = 0;
        post_content.style.display = "block";
        confirm_img.style.display = "none";
        var content1 = document.getElementById("content1");
        post_content.innerHTML = post_content.innerHTML + `
            <div style="clear: both; margin-bottom:15px;font-size:smaller;">
                <p style = "text-align = left; ">${content1.value}</p>
            </div>
        ` ;
        content1.value = "";
        module.innerHTML = "";
    }
    function post2(){
        empty = 0;
        post_content.style.display = "block";
        confirm_img.style.display = "none";
        showPostPic();
        document.querySelector(".showUpload").style.backgroundImage = "none";
        module.innerHTML = "";
    }
    function showPostPic(){
        const inputPic = document.querySelector("#inputPic");
        const reader = new FileReader();
        var content2 = document.getElementById("content2");
        reader.onload = function fileReadCompleted() {
            const img = new Image();       
            img.src = reader.result;
            img.style.width = 'auto';
            img.style.height = '211px';
            if(version==2){
                post_content.innerHTML = post_content.innerHTML + `
                    <div style = "clear: both; width:100%; word-break:break-all;
                          margin-bottom:15px;font-size:smaller; text-align: left;">
                        <img src="${img.src}" style ="float:left; width:200px;margin-right:10px; margin-bottom:8px">
                        ${content2.value}
                    </div>
                ` ;
            }
            if(version==3){
                post_content.innerHTML = post_content.innerHTML + `
                <div style = "clear: both; width:100%; word-break:break-all;
                    margin-bottom:15px;font-size:smaller;text-align:left;">
                    <img src="${img.src}" style ="float:right; width:200px;margin-right:10px; margin-bottom:8px">
                    ${content2.value}
                </div>
                ` ;
            }
            content2.value = "";
        };
        reader.readAsDataURL(inputPic.files[0]);
        document.querySelector("#inputPic").value ="";
    }

    btn.onclick=post;
    function post(){
        if(empty!= 1){
            alert("按下確認鍵發布此貼文。");
            post_content.innerHTML="";
            title.value = "";
        }else{
            alert("您還未建立貼文內容！");
        }
        
    }

}



window.onload = screen_onload;