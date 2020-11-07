// function which used for decorators

/**
 * targeting warga and add property menikah to true
 */
function married(target) {
    target.menikah = true;
}

/**
 * memformat umur warga
 * target adalah record warga
 * 
 * @param {*} target 
 */
function formatUmur(target) {
    // semacam ini
    target.umurFormatted = '21 thn 0 bln';
}
