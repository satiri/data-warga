<template>
    <div>
        <div class='page-title'><b-button variant="success" pill>+</b-button> {{ title }}</div>
        <div v-for="k in datakeluarga" v-bind:key="k.id">
            <div class="row row-kartu-keluarga">
            <div class="col-9">
            <ul class='kartu-keluarga'>
                <li>Nama: {{ k.nama }}</li>
                <li>Jumlah anggota Keluarga : <strong>{{ k.jumlah_anggota }}</strong></li>
                <li>Alamat: RT: {{ k.rt }}/{{ k.rw }} No. {{ k.no_rumah }} </li>
            </ul>
            </div>
            <div class='col-3 btn-kartu-keluarga'>
                <b-row>
                    <b-col lg="4" class="pb-2"><b-button variant="dark" block>Edit</b-button></b-col>
                    <b-col lg="4" class="pb-2"><b-button block>Tampil</b-button></b-col>
                </b-row>
            </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { BButton,BRow,BCol } from 'bootstrap-vue';


export default {
    name: 'KartuKeluarga',
    props: [

    ],
    components: {
        BButton,
        BRow,
        BCol,
    },
    data () {
        return {
            title: 'Daftar Kartu Keluarga',
            datakeluarga: [
                {
                    id: 1,
                    nama: 'Keluarga Bpk. Budi',
                    rt: '01',
                    rw: '02',
                    no_rumah: '44',
                    jumlah_anggota: 4,
                },
                {
                    id: 2,
                    nama: 'Keluarga Bpk. Susanto',
                    rt: '01',
                    rw: '02',
                    no_rumah: '31',
                    jumlah_anggota: 5,
                },
                {
                    id: 3,
                    nama: 'Keluarga Ibu Cynthia',
                    rt: '01',
                    rw: '02',
                    no_rumah: '16',
                    jumlah_anggota: 3,
                }
            ]
        }
    }
}
</script>


<style scoped>
.kartu-keluarga {
    list-style: none;
    text-align: left;
    border: none 1px #FF0000;
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
}

</style>
