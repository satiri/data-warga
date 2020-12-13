<template>
    <div>
        <div class=''>
            <ul class='kartu-keluarga'>
                <li>Nomor KK : <strong>{{ datakartu.nomor_kk }}</strong></li>
                <li>Jumlah Anggota Keluarga : <strong>{{ datakartu.jumlah_anggota }}</strong></li>
                <li>Alamat: RT {{ datakartu.rt }}/{{ datakartu.rw }} No. {{ datakartu.no_rumah }} </li>
            </ul>
        </div>
        <div class=''>
            <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group label-cols-sm="2" id="input-group-1" label="Anggota Keluarga" label-for="input-1">
                <b-form-input
                id="input-1"
                required
                placeholder="Tambah anggota Keluarga"
                v-on:keyup="findWarga = $event.target.value"
                ></b-form-input><br/>
                <b-button type="button" variant="dark" @click="findWargaByName">Cari</b-button>&nbsp;
                <b-button type="button" variant="dark">Simpan</b-button>
            </b-form-group>

            </b-form>
            </div>
            <div class="content">
            <b-table striped hover :items="anggotaKeluarga">
                <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
                </template>

                <template #cell(actions)="row">
                    <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    Info modal
                    </b-button>
                    <b-button size="sm" @click="row.toggleDetails">
                    {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                    </b-button>
                </template>
            </b-table>
            </div>
        </div>
    </div>
</template>

<script>
// TODO: replace the datasourcce
import dataanggotakeluarga from '@/model/sample/anggotakeluarga';
import Warga from '@/model/Warga'
import KartuKeluarga from '@/model/KartuKeluarga'

import {
    BTable,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
} from 'bootstrap-vue';

export default {
    name: 'KartuKeluargaDetail',
    props: [ 'idkartukeluarga', 'datakartu' ],
    components: {
        BTable,
        BButton,
        BForm,
        BFormGroup,
        BFormInput,
    },
    data() {
        return {
            // merupakan data dari warga
            anggotaKeluarga: dataanggotakeluarga.data,
            show: true,
            findWarga: null,
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
        },
        onReset(evt) {
            evt.preventDefault()
        },
        async findWargaByName() {
            const namaUntukDicari = this.$data.findWarga;

            if (namaUntukDicari !== null && namaUntukDicari.length > 4) {
                const warga = await Warga.findWarga(namaUntukDicari);

                if (typeof warga === 'object' && warga.id !== undefined) {
                    const { id } = this.$props.datakartu
                    KartuKeluarga.addAnggota(id, warga);
                } else {
                    console.log(warga);
                    console.log('warga length ' + warga.length);
                }

            } else {
                console.log('minimum 4 huruf');
            }
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
