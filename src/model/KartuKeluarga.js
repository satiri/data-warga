import db from '@/config/init'
import referrence from './referrence'

// collection name
const cName = 'kartu-keluarga';

/**
 * empty warga
 */
function getEmptyRow() {
    return {
        jumlah_anggota: '',
        nama: '',
        no_rumah: '',
        nomor_kk: '',
        tgl_ditambahkan: new Date(),
        tgl_diupdate: new Date(),
        rt: '',
        rw: '',
    }
}

/**
 * mencari warga dengan nama
 */
function findKartuKeluarga(nama) {
    return db.collection(cName).find({ nama })
        .then((content) => {
            return content
        });
}

/**
 * idKartu adalah id dari tabel
 * @param {*} idKartu
 */
function getKartuKeluargaById(idKartu) {
    return db.collection(cName).doc(idKartu).get()
        .then((doc) => {
            if (typeof doc.data() !== 'undefined') {
                return firebaseDocToArray(doc);
            }

            return getEmptyRow();
        });
}

/**
 * TODO: implement pagination
 * https://firebase.google.com/docs/firestore/query-data/query-cursors
 */
function getListKartuKeluarga(startAt) {
    return db.collection(cName)
        .orderBy('tgl_ditambahkan')
        .startAt(startAt)
        .limit(referrence.rowPerPage)
        .get()
        .then((res) => {
            if (res.empty) {
                return [];
            }

            return firebaseToArray(res);
        });
}

function firebaseToArray(res) {
    let content = [];

    res.forEach((doc) => {
        content.push(firebaseDocToArray(doc));
    })

    return content;
}

function firebaseDocToArray(doc) {
    const id = doc.id;
    const raw = doc.data();
    const formatted = {
        ...raw,
        id,
        tgl_ditambahkan: timestampToDate(raw.tgl_ditambahkan),
        tgl_diupdate: timestampToDate(raw.tgl_diupdate),
    };

    return formatted;
}

function timestampToDate(time) {
    return new Date(time.seconds * 1000)
}

function insert(row) {
    try {
        return db.collection(cName).add(row).then((res) => {
            return res.id;
        });
    } catch (e) {
        console.log(JSON.stringify(e));
    }

    return null;
}

/**
 * update 
 * @param {*} id
 * @param {*} row
 */
function update(id, row) {
    try {
        return db.collection(cName).doc(id).update(row)
            .then(() => {
                return true;
            }).catch((e) => {
                //  failed
                console.error(e);
                return false;
            });
    } catch(e) {
        console.error(e);
    }

    return false;
}

/**
 * Menambahkan anggota keluarga kedalam kk
 *
 * @param {*} id
 * @param {*} warga
 */
function addAnggota(id, warga) {
    const urlWarga = db.doc(`warga/${warga.id}`);

    const anggota = [];
    anggota.push(urlWarga);

    const kk = getKartuKeluargaById(id);
    const updatedKk = {
        ...kk,
        anggota,
    }

    console.log('updating kk ' + id);
    update(id, updatedKk);
}

export default {
    update,
    insert,
    findKartuKeluarga,
    getListKartuKeluarga,
    getKartuKeluargaById,
    getEmptyRow,
    addAnggota,
}
