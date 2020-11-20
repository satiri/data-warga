import db from '@/config/init'

// collection name
const cName = 'warga';


/**
 * empty warga
 */
function getEmptyRow() {
    return {
        no_ktp: '',
        nama: '',
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
function findWarga(nama) {
    return db.collection(cName).find({ nama })
        .then((content) => {
            return content
        });
}

/**
 * idWarga adalah id dari tabel
 * @param {*} idWarga
 */
function getWargaById(idWarga) {
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
 */
function getListWarga() {
    return db.collection(cName).get()
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

async function insert(row) {
    const res = await db(cName).add(row);

    return res.id;
}

/**
 * update 
 * @param {*} id
 * @param {*} row
 */
function update(cName, id, row) {
    db.collection(cName).doc(id).update(row);
}

export default {
    update,
    insert,
    findWarga,
    getListWarga,
    getWargaById,
    getEmptyRow,
}
