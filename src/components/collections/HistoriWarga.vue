<!-- 
 history warga adalah daftar perubahan status warga 
 apakah perubahan ini merubah status pada kartu keluarga ?? hmm
 - meninggal ( warga berkurang )
 - pindah ( warga berkurang/bertambah )
        alasan: 
            menikah
            sekolah/tugas sekolah
            bekerja/tugas bekerja
 - lahir ( warga bertambah )
-->

<template>
    <div>
        <div class='page-title'><b-button variant="success" pill>+</b-button> {{ title }}</div>
        <div v-for="k in dataMutasi" v-bind:key="k.id">
            <ul class='kartu-keluarga'>
                <li>Nama: {{ k.nama }} ( Jumlah anggota Keluarga : <strong>{{ k.jumlah_anggota }}</strong> )</li>
                <li>Alamat: RT: {{ k.rt }}/{{ k.rw }} No. {{ k.no_rumah }} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryWarga',
    components: {

    },
    data () {
        return {
            title: 'Daftar Mutasi Warga dan Administrasi Lainnya',
            dataMutasi: [
                {
                    id: 1,
                    event: 'Warga Keluar Untuk Bekerja',
                    rt: '01',
                    rw: '02',
                    no_rumah: '44',
                    jumlah_anggota: 4,
                },
                {
                    id: 2,
                    event: 'Warga Keluar Untuk Sekolah',
                    rt: '01',
                    rw: '02',
                    no_rumah: '31',
                    jumlah_anggota: 5,
                },
                {
                    id: 3,
                    event: 'Warga Meminta Keterangan Tidak Mampu',
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
    border-bottom: dotted 1px #CCC;
    padding-inline-start: 0px;
    padding-bottom: 5px;
}
</style>
