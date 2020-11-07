import db from '@/firebase/init'

const 

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

