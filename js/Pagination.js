const paginationState = {
    currentNumber: 1
}

function CreatePagination(paginationLength = 1) {
    const pagination = new Array(paginationLength).fill(null)
    const paginationWrapper = $('#post-pagination ul')
    let child = paginationWrapper.lastElementChild;
    while (child) {
        paginationWrapper.removeChild(child);
        child = paginationWrapper.lastElementChild;
    }
    const liPrev = createElement('li', 'prev')
    const liNext = createElement('li', 'next')
    const allClassText = 'h-10 px-3 transition-colors duration-150 border focus:shadow-outline '
    const nextPrevClass = allClassText + 'text-indigo-600 bg-white hover:bg-indigo-100 border-indigo-600 rounded-'
    const defaultActive = allClassText + 'border-r-0 border-indigo-600 text-'

    const buttonPrev = createElement('button', nextPrevClass + 'l-lg border-r-0')
    const buttonNext = createElement('button', nextPrevClass + 'r-lg')

    buttonPrev.innerText = '<'
    buttonNext.innerText = '>'
    liPrev.appendChild(buttonPrev)
    liNext.appendChild(buttonNext)
    paginationWrapper.appendChild(liPrev)

    pagination.forEach((pag, index) => {
        const activeClass = (index + 1) === paginationState.currentNumber ? 'white bg-indigo-600' : 'indigo-600 bg-white hover:bg-indigo-100'
        const li = createElement('li')
        const button = createElement('button', defaultActive + activeClass)
        button.innerText = index + 1

        button.onclick = function () {
            if(paginationState.currentNumber !== index + 1) {
                paginationState.currentNumber = index + 1
                getData(index + 1)
            }
        }

        li.appendChild(button)
        paginationWrapper.appendChild(li)
    })

    paginationWrapper.appendChild(liNext)
}