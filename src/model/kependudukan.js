/**
 * menghitung jumlah nomor kk dan pengecekan lainnya
 * @param {*} nomor
 */
const validasiNomorKartuKeluarga = function (nomor) {

}

/**
 * membuat format agar ada strip dan titik
 * @param {*} nomor
 */
const formatNomorKartuKeluarga = function (nomor) {

}

/**
 * menghitung jumlah nomor ktp dan pengecekan lainnya
 * @param {*} nomorktp
 */
const validasiNomorKtp = function (nomorktp) {
}

/**
 * membuat format agar ada strip dan titik
 * Format KTP di KTP adalah Number 16 Digit
 * Contoh: 3275091305770018
 * @param {*} nomorktp
 */
const formatNomorKtp = function (nomorktp) {
    // add 000
    const KTP_LENGTH = 16; 
    if (nomorktp.len < KTP_LENGTH) {
        const sisa = KTP_LENGTH - nomorktp.length;
        const filler = '0';
        return `${nomorktp}${filler.repeat(sisa)}`;
    }

    if (nomorktp.len > KTP_LENGTH) {
        return nomorktp.substring(0, KTP_LENGTH);
    }

    return nomorktp;
}


export default {
    formatNomorKtp,
    validasiNomorKtp,
    formatNomorKartuKeluarga,
    validasiNomorKartuKeluarga,
}