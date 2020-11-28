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
import referrence from '@/model/referrence';
import router from '@/router';

import Warga from '@/model/Warga';

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
        const page = this.$route.params.page;

        // get the data
        let startAt = 1;
        if (parseInt(page) > 1) {
            startAt = (referrence.rowPerPage * (page - 1));

            Warga.getListWarga(startAt).then((res) => {
                this.listWarga = res;
            });
        } else {
            Warga.getListWarga(startAt).then((res) => {
                this.listWarga = res;
            });
        }

        const emptyWarga = Warga.getEmptyRow();

        return {
            dateFormat: referrence.dateFormat,
            title: 'Daftar Warga',
            listWarga: [
                emptyWarga,
                emptyWarga,
                emptyWarga,
                emptyWarga,
            ]
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
