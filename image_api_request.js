var query = "Shanghai"
var photographerList = []

fetch("https://api.unsplash.com/search/photos?page=1&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
    .then(data=>{return data.json()})
    .then(res=>{
        console.log(res)
        photographerList = []
        for (var i = 0; i < 10; i++) {
            var imageThumb = res.results[i].urls.raw;
            var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
            var imgDiv = document.createElement("div");
            var imgBox = document.body.getElementsByClassName("imgBox")[0];
            imgBox.appendChild(imgDiv).setAttribute("class", "imgDiv");
            var img = document.createElement("img");
            imgBox.getElementsByClassName("imgDiv")[i].appendChild(img).setAttribute("src",imageSize);
            var currentDiv = imgBox.getElementsByClassName("imgDiv")[i];
            currentDiv.getElementsByTagName("img")[0].setAttribute("class","image"+i)
            currentDiv.getElementsByTagName("img")[0].setAttribute("onclick","loadModal("+i+")")
            var photographer = res.results[i].user.name;
            photographerList.push(photographer);
            console.log(photographerList)
        }
    })

var currentPage = 1

function swapImg() {
    if (currentPage == 1) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=1&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        currentPage = 1
        }
    }

function swapImg2() {
    if (currentPage == 2) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=2&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        currentPage = 2
        }
    }

function swapImg3() {
    if (currentPage == 3) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=3&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        currentPage = 3
        }
    }

function swapImg4() {
    if (currentPage == 4) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=4&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        currentPage = 4
        }
    }

function swapImg5() {
    if (currentPage == 5) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=5&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        currentPage = 5
        }
    }

function swapPrev() {
    if (currentPage == 1) {
        console.log(currentPage)
    } else {
        currentPage = currentPage - 1
        fetch("https://api.unsplash.com/search/photos?page="+currentPage+"&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        }
    }

function swapNext() {
    if (currentPage == 5) {
        console.log(currentPage)
    } else {
        currentPage = currentPage + 1
        fetch("https://api.unsplash.com/search/photos?page="+currentPage+"&query="+query+"&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                photographerList = []
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    var photographer = res.results[i].user.name;
                    photographerList.push(photographer);
                    console.log(photographerList)
                    }               
            })
        }
    }

function loadModal(i) {
    var modalText = "This is image " + (i+1) + "."
    document.body.getElementsByTagName("p")[0].innerText = modalText
    document.body.getElementsByClassName("modal")[0].style.display = "block"
    console.log(document.body.getElementsByClassName("imgBox")[0].getElementsByTagName("img")[i].getAttribute("class"));
    var imgLink = document.body.getElementsByClassName("imgBox")[0].getElementsByTagName("img")[i].getAttribute("src")
    var imgBox = document.getElementById("imgBig");
    imgBox.setAttribute("src",imgLink)
    var photographerName = photographerList[i]
    document.getElementById("photographer").innerText = photographerName
}

function closeModal() {
    console.log("close modal");
    document.body.getElementsByClassName("modal")[0].style.display = "none";
}