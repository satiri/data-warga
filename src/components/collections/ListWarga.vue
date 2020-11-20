<template>
    <div class="page">
        <div class='page-title'><b-button variant="success" pill @click="inputWarga">+</b-button> {{ title }}</div>
        <div v-for="row in listWarga" :key="row.id">
            <ListWargaItem :rowWarga="row"/>
        </div>
    </div>
</template>

<script>
import ListWargaItem from './ListWargaItem';
import sampleListWarga from '@/model/sample/listwarga';
import dateFormat from '@/model/referrence';
import router from '@/router';

import {
    BButton,
    } from 'bootstrap-vue';

export default {
    name: 'ListWarga',
    components: {
        BButton,
        ListWargaItem,
    },
    data () {
        return {
            dateFormat,
            title: 'Daftar Warga',
            listWarga: sampleListWarga.data,
        }
    },
    methods: {
        inputWarga: function () {
            router.push({ name: 'AddWarga' })
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
