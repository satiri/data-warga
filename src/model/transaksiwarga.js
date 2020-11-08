import db from '@/firebase/init'

/**
 * mencari warga dengan nama
 */
function findWarga(nama) {
}

/**
 * ambil data keluarga berdasarkan, id|nomor-kk
 */
function getKeluarga(params) {
}

/**
 * mengambil list warga dari database
 * @param {*} offset
 * @param {*} limit
 */
async function getListWarga(offset, limit){
    db.collection('warga').get()
        .then(() => {

        })
        .catch((e) => {

        });
}

/**
 * memindahkan warga
 * @param {*} options
 * {
 *  alasan: pindah|bekerja|sekolah
 * }
 */
function moveWarga(options) {
}

/**
 * update status
 * status: menikah|meninggal|janda|duda
 */
function updateStatusWarga() {
}

/**
 * mengecek apakan nama sudah terdaftar
 */
function checkKartuKeluargaByNama() {

}

/**
 * check berdasarkan rt/rw dan nomor rumah
 */
function checkKartuKeluargaByRtRWNomorRumah() {

}

/**
 * check apakah seorang warga telah terdaftar
 * @param {*} nama
 * @param {*} tgl_lahir
 */
function checkWargaExists(nama, tgl_lahir) {

}

/**
 * membuat nomor surat berdasarkan prefix
 * nomor terakhir disimpan di database
*/
function buatNomorSurat(prefix) {

}

module export = {
    checkWargaExists,
    checkKartuKeluargaByRtRWNomorRumah,
    checkKartuKeluargaByNama,
    updateStatusWarga,
    moveWarga,
    getListWarga,
    findWarga,
}
