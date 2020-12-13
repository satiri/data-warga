import db from '@/config/init'


/**
 * mencari warga dengan nama
 */
async function findByName(cName, nama) {
    const doc = await db.collection(cName).where('nama', '==', nama + ".").get();
    if (!doc.empty) {
        return firebaseToArray(doc);
    }

    return {}
}

/**
 * idRow adalah id dari tabel
 * @param {*} idRow
 */
function getById(cName, idRow, getEmptyRow) {
    return db.collection(cName).doc(idRow).get()
        .then((doc) => {
            if (typeof doc.data() !== 'undefined') {
                return firebaseDocToArray(doc);
            }

            return getEmptyRow();
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

function insert(cName, row) {
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
function update(cName, id, row) {
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
    insert,
    update,
    findByName,
    getById,
}
