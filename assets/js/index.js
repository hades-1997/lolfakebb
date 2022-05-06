let single_item = document.querySelectorAll('#single_item svg')


var index = 0
setInterval((e) => {
    addRemoveClass()
}, 3000)
function addRemoveClass() {
    const getImgAkali = document.querySelectorAll('.style__ChampionImageWrapper-sc-1euhroi-1.oPGdI>div')
    let indexLength = getImgAkali.length
    if (index > indexLength - 1) {
        index = 0
        return
    }
    getImgAkali.forEach((trungForEach) => {
        trungForEach.classList.remove('show-ne')
        getImgAkali[index].classList.add('show-ne')
    })
    index++
}
