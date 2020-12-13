<template>
    <div class="row row-kartu-keluarga">
        <div class="col-1" style='margin-top:10px;'>
            <b-icon-people-fill font-scale="4" class="rounded-circle bg-secondary p-2"></b-icon-people-fill>
        </div>
        <div class="col-6 xs-5">
        <ul class='kartu-keluarga'>
            <li>Nomor KK: {{ rowkeluarga.nomor_kk }}</li>
            <li>Nama: {{ rowkeluarga.nama }}</li>
            <li>Jumlah anggota keluarga : <strong>{{ rowkeluarga.jumlah_anggota }}</strong></li>
            <li>Alamat: RT {{ rowkeluarga.rt }}/{{ rowkeluarga.rw }} No. {{ rowkeluarga.no_rumah }} </li>
        </ul>
        </div>
        <div class='col-2 btn-kartu-keluarga xs-3'>
            <div>
                <b-button variant="dark" @click="editKartuKeluarga">Edit</b-button>
                <b-button variant='info' @click="showKartuKeluarga">Tampil</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    BButton,
    BIconPeopleFill,
    } from 'bootstrap-vue';
import router from '@/router';

export default {
    name: 'KartuKeluargaItem',
    props: [ 'rowkeluarga' ],
    components: {
        BButton,
        BIconPeopleFill,
    },
    data () {
        return {

        }
    },
    methods: {
        editKartuKeluarga: function () {
            const id = this.rowkeluarga.id;
            router.push({ name: 'EditKartuKeluarga', params: { id_keluarga: id } })
        },
        showKartuKeluarga: function () {
            const id = this.rowkeluarga.id;
            router.push({ name: 'KartuKeluargaDetail', params: { id_keluarga: id } })
        },
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
.row-kartu-keluarga {
    border-bottom: dotted 1px #CCC;
}

.btn-kartu-keluarga {
    vertical-align:middle;
    margin-top: 20px;
    text-align: right;
    margin-left:auto; margin-right:0;
}
</style>
