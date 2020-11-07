<template>
    <div>
        <div class='page-title'><b-button variant="success" pill title="Tambah Kartu Keluarga">+</b-button> {{ title }}</div>
        <div v-for="row in datakeluarga" :key="row.id">
            <KartuKeluargaItem :rowkeluarga="row"/>
        </div>
    </div> 
</template>

<script>
import datakartukeluarga from '@/businessrule/sample/kartukeluarga'
import KartuKeluargaItem from './KartuKeluargaItem'

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
        return {
            title: 'Daftar Kartu Keluarga',
            datakeluarga: datakartukeluarga.data,
        }
    },
    methods: {
        showKartuKeluarga: function (event) {
            console.log(event);
            console.log(this.k);
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
