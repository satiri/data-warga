<template>
    <div class="row row-kartu-keluarga">
        <div class="col-1" style='margin-top:10px;'>
            <b-icon-person-fill font-scale="4" class="rounded-circle bg-secondary p-2"></b-icon-person-fill>
        </div>
        <div class="col-6 xs-5">
        <ul class='kartu-keluarga'>
            <li>KTP: {{ rowWarga.no_ktp }}</li>
            <li>Nama: {{ rowWarga.nama }}</li>
            <li>Pekerjaan: {{ rowWarga.pekerjaan }}</li> 
            <li>Tgl Lahir: {{ rowWarga.tgl_lahir.toLocaleDateString('en-ID', dateFormat) }}</li>
            <li>Alamat: RT: {{ rowWarga.rt }}/{{ rowWarga.rw }} No. {{ rowWarga.no_rumah }} </li>
        </ul>

        </div>
        <div class='col-2 btn-kartu-keluarga xs-3'>
            <div>
                <b-button variant="dark">Edit</b-button> <b-button variant='info' @click="showWarga">Tampil</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    BButton,
    BIconPersonFill,
    } from 'bootstrap-vue';
import router from '@/router';
import dateFormat from '@/model/referrence';

export default {
    name: 'ListWargaItem',
    props: [ 'rowWarga' ],
    components: {
        BButton,
        BIconPersonFill,
    },
    data () {
        return {
            dateFormat,
        }
    },
    methods: {
        showWarga: function () {
            const id = this.rowWarga.id;
            router.push({ name: 'DataWargaDetail', params: { id_warga: id } })
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
