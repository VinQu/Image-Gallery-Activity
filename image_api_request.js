fetch("https://api.unsplash.com/search/photos?page=1&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
    .then(data=>{return data.json()})
    .then(res=>{
        console.log(res)
        for (var i = 0; i < 10; i++) {
            var imageThumb = res.results[i].urls.raw;
            var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
            var imgDiv = document.createElement("div");
            var imgBox = document.body.getElementsByClassName("imgBox")[0];
            imgBox.appendChild(imgDiv).setAttribute("class", "imgDiv");
            var img = document.createElement("img");
            imgBox.getElementsByClassName("imgDiv")[i].appendChild(img).setAttribute("src",imageSize);
            var currentDiv = imgBox.getElementsByClassName("imgDiv")[i];
            currentDiv.getElementsByTagName("img")[0].setAttribute("class","image"+i);
        }
    })

var currentPage = 1

function swapImg() {
    if (currentPage == 1) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=1&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        currentPage = 1
        }
    }

function swapImg2() {
    if (currentPage == 2) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=2&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        currentPage = 2
        }
    }

function swapImg3() {
    if (currentPage == 3) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=3&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        currentPage = 3
        }
    }

function swapImg4() {
    if (currentPage == 4) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=4&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        currentPage = 4
        }
    }

function swapImg5() {
    if (currentPage == 5) {
        console.log(currentPage)
    } else {
        fetch("https://api.unsplash.com/search/photos?page=5&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
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
        fetch("https://api.unsplash.com/search/photos?page="+currentPage+"&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        }
    }

function swapNext() {
    if (currentPage == 5) {
        console.log(currentPage)
    } else {
        currentPage = currentPage + 1
        fetch("https://api.unsplash.com/search/photos?page="+currentPage+"&query=soccer&client_id=j3X4mz-VyrokRY0-tznFwHzkZumNw7MkuzImlQc6I3k")
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                for (var i = 0; i < 10; i++) {
                    var imageThumb = res.results[i].urls.raw;
                    var imageSize = imageThumb + "&fit=crop&w=300&min-h=300"
                    var imgBox = document.body.getElementsByClassName("imgBox")[0];
                    var imgDiv = imgBox.getElementsByClassName("imgDiv")[i];
                    imgDiv.getElementsByTagName("img")[0].setAttribute("src",imageSize);
                    }               
            })
        }
    }