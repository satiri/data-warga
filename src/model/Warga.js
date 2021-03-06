import db from '@/config/init'
import referrence from './referrence'

// import { getById } from './BaseFunctions'

// collection name
const cName = 'warga';

/**
 * empty warga
 */
function getEmptyRow() {
    return {
        no_ktp: '',
        nama: '',
        agama: '',
        pekerjaan: '',
        tgl_lahir: new Date(),
        rt: '',
        rw: '',
        no_rumah: '',
    }
}

/**
 * mencari warga dengan nama
 */
async function findWarga(nama) {
    const doc = await db.collection(cName)
        .where('nama', '==', nama )
        .limit(1)
        .get();

    if (!doc.empty) {
        return firebaseToArray(doc)[0];
    }

    return [];
}

/**
 * idWarga adalah id dari tabel
 * @param {*} idWarga
 */
function getWargaById(idWarga) {
    // return getById(cName, idWarga, getEmptyRow);
    return db.collection(cName).doc(idWarga).get()
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
function getListWarga(startAt) {
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
        tgl_lahir: timestampToDate(raw.tgl_lahir),
        tgl_ditambahkan: timestampToDate(raw.tgl_ditambahkan),
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

export default {
    update,
    insert,
    findWarga,
    getListWarga,
    getWargaById,
    getEmptyRow,
}
