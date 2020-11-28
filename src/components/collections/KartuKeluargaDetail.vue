<template>
    <div>
        <div class=''>
            <ul class='kartu-keluarga'>
                <li>Jumlah anggota keluarga : <strong>{{ datakartu.jumlah_anggota }}</strong></li>
                <li>Alamat: RT {{ datakartu.rt }}/{{ datakartu.rw }} No. {{ datakartu.no_rumah }} </li>
            </ul>
        </div>
        <div class=''>
            <div><b-button variant="success" pill title="Tambah Kartu Keluarga">+</b-button> Anggota Keluarga</div><br/>
            <b-table striped hover :items="anggotaKeluarga"></b-table>
        </div>
    </div>
</template>

<script>
// TODO: replace the datasourcce
import dataanggotakeluarga from '@/model/sample/anggotakeluarga';
import { BTable, BButton } from 'bootstrap-vue';

export default {
    name: 'KartuKeluargaDetail',
    props: [ 'idkartukeluarga', 'datakartu' ],
    components: {
        BTable,
        BButton,
    },
    data() {
        return {
            // merupakan data dari warga
            anggotaKeluarga: dataanggotakeluarga.data,
        }
    }
}
</script>

<style scoped>
.kartu-keluarga {
    list-style: none;
    text-align: left;
    padding-inline-start: 0px;
    padding-bottom: 5px;
}
</style>
