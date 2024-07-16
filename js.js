let imge = document.getElementById('img');
let body=document.getElementById('body')
function iphone() {
    let imges = document.querySelectorAll('.imge');
    imges.forEach(img => {
        img.addEventListener('click', function() {
            imge.src = img.src;
        });
    });
}
iphone()

