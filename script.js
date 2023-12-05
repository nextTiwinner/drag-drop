const elements = document.querySelectorAll('.element')
let chosedElement;
elements.forEach(element => {
    element.draggable = true
    element.addEventListener('dragstart', (e) => {
        chosedElement = e.target
        chosedElement.classList.add('selected')
        const chosedElementStye = window.getComputedStyle(chosedElement).backgroundColor
        // console.log(chosedElement, chosedElementStye);
        let isDone = ''
        let chosedArea
        const areas = document.querySelectorAll('.area')
        areas.forEach(area => {
            area.addEventListener(`dragover`, (evt) => {
                chosedArea = evt.toElement
                const chosedAreaStyle = window.getComputedStyle(chosedArea).borderColor
                // console.log(chosedArea, chosedAreaStyle, chosedElement, chosedElementStye);
                if (chosedAreaStyle === chosedElementStye) {
                    // console.log('done');
                    isDone = 'done'
                } else {
                    isDone = ''
                }
            })
        })
        chosedElement.addEventListener('dragend', (e2) => {
            e2.preventDefault()
            chosedElement.classList.remove('selected')
            if (isDone) {
                const newDiv = document.createElement('div');
                newDiv.id = chosedElement.id;
                newDiv.className = `element ${chosedElement.id}`;
                newDiv.draggable = false;
                chosedArea.appendChild(newDiv);
                chosedElement.style.display = 'none';
                // console.log('added');
            }
        })
    })
})