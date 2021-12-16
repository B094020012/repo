function screenOnload(){
    focusontextarea();
    var addPic = document.getElementById("addPic");
    var addtext = document.getElementById("addtext");
    var textpic = document.getElementById("textpic");

    addPic.onclick = uploadImg;
    addtext.onclick = uploadtext;
    textpic.onclick = uploadimgtext;
    window.setInterval(( () => {
            if(window.screen.width > 935){
                choosebarposition();
            }else{
                var choosebar = document.getElementById("choosebar");
                choosebar.style.top = `${window.scrollY+screen.height-45}px`;
            }
        }
    ), 10);
    confirm("這是一個po文用的頁面，有些功能已經寫了喔，有些功能有響應式有些沒有！但大致上還沒寫完qq 我沒有套模板喔！我好棒！");
}

function uploadImg(){
    var uploadImgInterface = document.getElementById("uploadImgInterface");
    var uploadImgCheckButton = document.getElementById("uploadImgCheckButton");
    uploadImgInterface.style.display = 'block';
    const uploadImg = document.querySelector("#uploadImg");
    const reader = new FileReader();

    uploadImgCheckButton.onclick = function(){
        alert("尚未上傳圖片");
    }

    var crossmark = document.getElementById("crossmark");
    crossmark.onclick = function(){
        uploadImgInterface.style.display = 'none';
    }


    uploadImg.addEventListener("change", function(){
        reader.onload = function fileReadCompleted(){
            var img = new Image();
            img.src = reader.result;
            var showUpload = document.getElementById("showUpload");
            showUpload.innerHTML = `
                <img src = "${img.src}" style="height:300px; overflow: hidden;">
            `;

            uploadImgCheckButton.onclick = function(){
                showOnThePreview(img.src);
                focusontextarea();
                document.querySelector("#uploadImg").value ="";
                showUpload.innerHTML = "請選擇圖片";
                uploadImgInterface.style.display = 'none';
                scroll(0, document.getElementById("container").scrollHeight);
                var choosebar = document.getElementById("choosebar");
                choosebar.style.top = window.scrollY; 
            }
        }
        reader.readAsDataURL(uploadImg.files[0]);
    })

}

function uploadimgtext(){
    var uploadImgInterface = document.getElementById("uploadImgInterface");
    var uploadImgCheckButton = document.getElementById("uploadImgCheckButton");
    uploadImgInterface.style.display = 'block';
    const uploadImg = document.querySelector("#uploadImg");
    const reader = new FileReader();

    uploadImgCheckButton.onclick = function(){
        alert("尚未上傳圖片");
    }

    var crossmark = document.getElementById("crossmark");
    crossmark.onclick = function(){
        uploadImgInterface.style.display = 'none';
    }


    uploadImg.addEventListener("change", function(){
        reader.onload = function fileReadCompleted(){
            var img = new Image();
            img.src = reader.result;
            var showUpload = document.getElementById("showUpload");
            showUpload.innerHTML = `
                <img src = "${img.src}" style="height:300px; overflow: hidden;">
            `;

            uploadImgCheckButton.onclick = function(){
                showOnThePreview2(img.src);
                focusontextarea();
                document.querySelector("#uploadImg").value ="";
                showUpload.innerHTML = "請選擇圖片";
                uploadImgInterface.style.display = 'none';
                scroll(0, document.getElementById("container").scrollHeight);
                var choosebar = document.getElementById("choosebar");
                choosebar.style.top = window.scrollY; 
            }
        }
        reader.readAsDataURL(uploadImg.files[0]);
    })

}


function uploadtext(){
    var container = document.getElementById("container");
    container.innerHTML = container.innerHTML + `
    <div class="textareadiv" style="display:block;">
        <textarea class="textarea">請輸入文字...</textarea>
    </div>
    <br>
    `;
    scroll(0, document.getElementById("container").scrollHeight);  
    focusontextarea();
}


function showOnThePreview(pic_src){
    var container = document.getElementById("container");
    container.innerHTML = container.innerHTML + `
        <div class="withPic" style="display:block" onclick="deletepic()">
            <div class="pic"><img src = "${pic_src}" class="imgsize"></div>
        </div>
        <br>
    `; 
}
function showOnThePreview2(pic_src){
    var container = document.getElementById("container");
    container.innerHTML = container.innerHTML + `
        <div class="withPic2" style="display:flex; direction:row; justify-content: space-around;align-items:center; overflow:visible" onclick="deletepic()">
            <div class="pic"><img src = "${pic_src}" class="txtimgsize"></div>
            <textarea class="textarea" style="width:330px">請輸入文字...</textarea>
            <label style="position:relative;left:10px; ">
                <input type="checkbox">
                    <div class="box"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>
            </label>
        </div>
        

    `; 
}

function focusontextarea(){
    titletext();
    var focustext = document.querySelectorAll(".textarea");
    for(let i = 0; i < focustext.length; i++){
        focustext[i].addEventListener("input", function() {
            this.style.height = 'auto';
            this.style.height = `${this.scrollHeight}px`;
        });
        var str = focustext[i].value;
        focustext[i].onfocus = function(){
            if(focustext[i].value.includes("請輸入")){
                focustext[i].value = "";
            }
        }
        focustext[i].onblur = function(){
            if(focustext[i].value == "")focustext[i].value = str;
            focustext[i].innerHTML = focustext[i].value;
        }
    }
}
function deletepic(){
    var withPic = document.querySelectorAll(".withPic");
    for(let i = 0; i < withPic.length; i++){
        withPic[i].onclick = function(){
            // 是否刪除圖片
            var yesorno = document.getElementById("yesorno");
            yesorno.style.display = 'block';
            var yes = document.getElementById("yes");
            var no = document.getElementById("no");
            no.onclick = function(){
                yesorno.style.display = 'none';
            }
            yes.onclick = function(){
                var sure = confirm("確定要刪除這個部分？");
                if(sure == true)withPic[i].remove();
                yesorno.style.display = 'none';
            };
        }
    }
    
}

function titletext(){
    var focustexttitle = document.querySelector("#textareatitle");
    
    var str1 = focustexttitle.value;
    focustexttitle.onfocus = function(){
        if(focustexttitle.value.includes("請輸入")){
            focustexttitle.value = "";
        }
    }
    focustexttitle.onblur = function(){
        if(focustexttitle.value == "")focustexttitle.value = str1;
        focustexttitle.innerHTML = focustexttitle.value;
    }
}

function choosebarposition(){
    var choosebar = document.getElementById("choosebar");
    
    choosebar.style.top = `${window.scrollY+screen.height/4+20}px`; 
        // choosebar.style.left = `${window.screen.width*0.81}px`;
}
function versionchoose(){
    var version = document.querySelectorAll(".versionchoosing");
    for(let i = 0; i < version.length; i++){
        version[i].onclick = function(){
            // 跑出選項
        };
    }
}

window.onload = screenOnload;
