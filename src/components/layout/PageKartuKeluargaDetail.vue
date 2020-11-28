<template>
    <div class='page'>
      <div class='page-title'>Kartu Keluarga : {{ title }}</div>
      <KartuKeluargaDetail :idkartukeluarga="idkartukeluarga" :datakartu="datakartu"/>
    </div>
</template>

<script>
import KartuKeluargaDetail from '@/components/collections/KartuKeluargaDetail'
import KartuKeluarga from '@/model/KartuKeluarga'

export default {
    name: 'PageKartuKeluargaDetail',
    components: {
        KartuKeluargaDetail,
    },
    data() {
        const idkartu = this.$route.params.id_keluarga;
        KartuKeluarga.getKartuKeluargaById(idkartu).then((data) => {
            this.datakartu = data;
            this.title = data.nama;
        });

        return {
            title: '',
            idkartukeluarga: idkartu,
            datakartu: KartuKeluarga.getEmptyRow(),
        }
    }
}
</script>

<style scoped>

</style>
