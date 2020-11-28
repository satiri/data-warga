<template>
    <div>
        <div class='page-title'><b-button variant="success" pill title="Tambah Kartu Keluarga" @click="membuatKartuKeluarga">+</b-button> {{ title }}</div>
        <div v-for="row in datakeluarga" :key="row.id">
            <KartuKeluargaItem :rowkeluarga="row"/>
        </div>
    </div> 
</template>

<script>
// import datakartukeluarga from '@/model/sample/kartukeluarga'
import referrence from '@/model/referrence';
import KartuKeluargaItem from './KartuKeluargaItem'
import router from '@/router'
import KartuKeluarga from '@/model/KartuKeluarga'

import {
    BButton,
    } from 'bootstrap-vue';


export default {
    name: 'KartuKeluarga',
    props: [

    ],
    components: {
        BButton,
        KartuKeluargaItem,
    },
    data () {
        const page = this.$route.params.page;

        // get the data
        let startAt = 1;
        if (parseInt(page) > 1) {
            startAt = (referrence.rowPerPage * (page - 1));

            KartuKeluarga.getListKartuKeluarga(startAt).then((res) => {
                this.datakeluarga = res;
            });
        } else {
            KartuKeluarga.getListKartuKeluarga(startAt).then((res) => {
                this.datakeluarga = res;
            });
        }
        const emptyKartuKeluarga = KartuKeluarga.getEmptyRow();

        return {
            title: 'Daftar Kartu Keluarga',
            datakeluarga: [
                emptyKartuKeluarga,
                emptyKartuKeluarga,
                emptyKartuKeluarga,
                emptyKartuKeluarga,
            ],
        }
    },
    methods: {
        membuatKartuKeluarga:  function (){
            router.push({ name: 'AddKartuKeluarga' })
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
