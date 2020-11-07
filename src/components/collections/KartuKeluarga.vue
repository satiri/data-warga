<template>
    <div>
        <div class='page-title'><b-button variant="success" pill title="Tambah Kartu Keluarga">+</b-button> {{ title }}</div>
        <div v-for="k in datakeluarga" v-bind:key="k.id">
            <div class="row row-kartu-keluarga">
            <div class="col-1" style='margin-top:10px;'>
                <b-icon-people-fill font-scale="4" class="rounded-circle bg-secondary p-2"></b-icon-people-fill>
            </div>
            <div class="col-6 xs-5">
            <ul class='kartu-keluarga'>
                <li>Nama: {{ k.nama }}</li>
                <li>Jumlah anggota Keluarga : <strong>{{ k.jumlah_anggota }}</strong></li>
                <li>Alamat: RT: {{ k.rt }}/{{ k.rw }} No. {{ k.no_rumah }} </li>
            </ul>
            </div>
            <div class='col-2 btn-kartu-keluarga xs-3'>
                <div>
                    <b-button variant="dark">Edit</b-button> <b-button variant='info'>Tampil</b-button>
                </div>
            </div>
            </div>
        </div>
    </div> 
</template>

<script>
import datakartukeluarga from '@/businessrule/sample/kartukeluarga'
import {
    BButton,
    BIconPeopleFill,
    } from 'bootstrap-vue';


export default {
    name: 'KartuKeluarga',
    props: [

    ],
    components: {
        BButton,
        BIconPeopleFill,
    },
    data () {
        return {
            title: 'Daftar Kartu Keluarga',
            datakeluarga: datakartukeluarga.data,
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
