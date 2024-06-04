import { NOT_FOUND_PIC } from '../data/constant.js'

export const renderPhotoError = (el) => {
    el.src = NOT_FOUND_PIC
    el.style.width = '150px'

}

