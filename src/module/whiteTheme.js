theme()
function theme () {
    if(localStorage.getItem('theme') === 'white') {
        document.querySelector('body').classList.add('white')
        document.querySelector('#moon').style.display = 'block';
        document.querySelector('#moon').style.color = '#fff';
        document.querySelector('#sun').style.display = 'none';
        document.querySelector('.total').style.color = '#fff';
        document.querySelector('#black-icon').style.display = 'none';
        document.querySelector('#white-icon').style.display = 'flex';

        
    } 
    else {
        document.querySelector('body').classList.remove('white');
        document.querySelector('#moon').style.display = 'none';
        document.querySelector('.preloader').style.background = '#000000';
        document.querySelector('#sun').style.display = 'block';
        document.querySelector('.total').style.color = '#C9D1D9';
        document.querySelector('#black-icon').style.display = 'flex';
        document.querySelector('#white-icon').style.display = 'none';
    }

}


    document.querySelector('.themetoggle').addEventListener('click', (e)=> {
        e.preventDefault();
        if(localStorage.getItem('theme') === 'white')  {
            localStorage.removeItem('theme', 'white');
        } else {
            localStorage.setItem('theme', 'white');
        }
        
        theme()

    })

// я новичок, не ругайтесь, ладно.
