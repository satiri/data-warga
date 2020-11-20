import db from '@/config/init'

// collection name
const cName = 'warga';

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
 * TODO: implement pagination
 */
function getListWarga() {
    return db.collection(cName).get()
        .then((res) => {
            let content = [];
            if (res.empty) {
                return content;
            }

            res.forEach((doc) => {
                const raw = doc.data();
                const formatted = {
                    ...raw,
                    tgl_lahir: timestampToDate(raw.tgl_lahir),
                    tgl_ditambahkan: timestampToDate(raw.tgl_ditambahkan),
                };

                content.push(formatted);
            })

            return content;
        });
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
}
