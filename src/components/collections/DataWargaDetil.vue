<template>
    <div class='page'>
        <div class='page-title'>Data Warga : {{ dataWarga.nama }}</div>
        <div class=''>
        <ul class='kartu-keluarga'>
            <li>KTP: {{ dataWarga.no_ktp }}</li>
            <li>Nama: {{ dataWarga.nama }}</li>
            <li>Pekerjaan: {{ dataWarga.pekerjaan }}</li>
            <li>Tgl Lahir: {{ dataWarga.tgl_lahir.toLocaleDateString('en-ID', dateFormat) }}</li>
            <li>Alamat: RT: {{ dataWarga.rt }}/{{ dataWarga.rw }} No. {{ dataWarga.no_rumah }} </li>
        </ul>
        </div>
        <div class=''>
            <div>TODO: Anggota Keluarga Terkait</div>
            <div>TODO: Histori Administrasi Warga</div>
        </div>
    </div>
</template>

<script>
import sampleListWarga from '@/model/sample/listwarga';
import dateFormat from '@/model/referrence';
import Warga from '@/model/Warga';

export default {
    name: 'DataWargaDetil',
    components: {
    },
    data () {
        const idWarga = this.$route.params.id_warga;
        Warga.getWargaById(idWarga).then((data) => {
            this.dataWarga = data;
        });

        return {
            dateFormat,
            idWarga,
            dataWarga: Warga.getEmptyRow(),
        }
    },
    methods: {
        getDataWarga: function (idWarga) {
            const dataWarga = sampleListWarga.data.filter((warga) => {
                if (warga.id.toString() === idWarga.toString()) {
                    return warga;
                }

                return false;
            });

            return dataWarga[0];
        }
    },
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
