let accordians = document.querySelectorAll('.accordian');

for(let i =0; i< accordians.length; i++){
    accordians[i].onclick = function () {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + 'px';
        }

    }
}

