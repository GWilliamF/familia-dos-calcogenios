
const chalcogens = [document.querySelector('.oxigênio'),
document.querySelector('.enxofre'),
document.querySelector('.selênio'),
document.querySelector('.telúrio'),
document.querySelector('.polônio'),
document.querySelector('.livermório')],
chalcogensclass = document.querySelectorAll('.chalcogens'),
atom = document.querySelector('.atom'),
mText = document.querySelector('.m-text');

let pageArray = ['.page1','.page2', '.page3', '.page4', '.page5', '.page6'];
let alreadyClick = 0;
chalcogens.forEach(el => {
    el.onclick = () => {
    let index = chalcogens.indexOf(el);
    let page_revealed = document.querySelector(`${pageArray[index]}`);
   if (alreadyClick == 0) {
        chalcogensclass.forEach(e => {
            e.removeAttribute("clicked");
            e.setAttribute("clicked", "yes");
            })
           const cells = document.querySelectorAll(".cell:not([clicked='yes'])");
           cells.forEach(e => {
            e.style.opacity = '0';
            e.style.visibility = 'hidden'
            document.body.style.height= '100vh'
            atom.style.opacity = '0.5'
            atom.style.filter = 'blur(0)'
            atom.style.scale = '1'
        })
            mText.style.visibility = 'visible';
            mText.style.opacity = '1';
            mText.style.marginLeft = '0';
    } else if (alreadyClick % 2 != 0){
        el.classList.add('active');
        const cellsNotActive = document.querySelectorAll('.cell:not(.active)');
        mText.style.visibility = 'hidden';
            mText.style.opacity = '0';
        cellsNotActive.forEach(ele => ele.classList.add('NotActive'));
        document.body.style.overflow = 'initial'
        document.body.style.overflowX = 'hidden'
        document.body.style.height = '200vh'
        const selectedText = document.querySelector(`.desc[--order="${index + 1}"]`);
        selectedText.style.display = 'flex';
    } else {
        mText.style.visibility = 'visible';
        mText.style.opacity = '1';
        const selectedText = document.querySelector(`.desc[--order="${index + 1}"]`);
        selectedText.style.display = 'none';
        document.body.style.height= '100vh'
        document.body.style.overflow = 'hidden'
        const cellsNotActive = document.querySelectorAll('.cell:not(.active)');
        cellsNotActive.forEach(ele => ele.classList.remove('NotActive'));
        el.style.transition = 'none';
        el.classList.remove('active');
        setTimeout(()=> {
            el.style.transition = 'top .7s ease, left .7s ease';
        }, 700)
    }
    alreadyClick += 1;
    }
   /* if (alreadyClick) {
        chalcogensclass.forEach(e => {
            e.removeAttribute("clicked");
            e.setAttribute("clicked", "no");
            })
        document.body.style.overflowY = 'initial'
    }  */
})