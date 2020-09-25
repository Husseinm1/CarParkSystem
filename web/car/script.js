const counters = document.querySelectorAll('.counter')
const speed = 200 ;


counters.forEach(counter => {

    const updateCount = () => {
        const target = counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = speed/inc //button presses equals plus 1 and sign out button equals -1;

        if(count < target)
        {
            counter.innerText = count + inc;
            setTimeout(updateCount,1);
        }

        else {
            count.innerText = target;
        }

        updateCount();
    }
})