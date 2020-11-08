<template>
    <div class='page'>
      <div class='page-title'>Kartu Keluarga : {{ title }}</div>
      <KartuKeluargaDetail :idkartukeluarga="idkartukeluarga" :datakartu="datakartu"/>
    </div>
</template>

<script>
import KartuKeluargaDetail from '@/components/collections/KartuKeluargaDetail'
import datakartukeluarga from '@/model/sample/kartukeluarga'

export default {
    name: 'PageKartuKeluargaDetail',
    components: {
        KartuKeluargaDetail,
    },
    data() {
        const idkartu = this.$route.params.id_keluarga;
        const data =  datakartukeluarga.data[idkartu];

        return {
            title: `${data.nama}`,
            idkartukeluarga: this.$route.params.id_keluarga,
            datakartu: data,
        }
    }
}
</script>

<style scoped>

</style>
