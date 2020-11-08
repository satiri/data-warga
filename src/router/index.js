import Vue from 'vue';
import Router from 'vue-router';

import PageAbout from '@/components/layout/About';
import PageHome from '@/components/layout/PageHome';
import PageKartuKeluarga from '@/components/layout/PageKartuKeluarga';
import PageKartuKeluargaDetail from '@/components/layout/PageKartuKeluargaDetail';
import AddKartuKeluarga from '@/components/forms/AddKartuKeluarga';
import PageMutasi from '@/components/layout/PageMutasi';
import PageKas from '@/components/layout/PageKas';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: PageHome
        },
        {
            path: '/kartu-keluarga',
            name: 'KartuKeluarga',
            component: PageKartuKeluarga
        },
        {
            path: '/kartu-keluarga/new',
            name: 'AddKartuKeluarga',
            component: AddKartuKeluarga
        },
        {
            path: '/kartu-keluarga/detil/:id_keluarga',
            name: 'KartuKeluargaDetail',
            component: PageKartuKeluargaDetail
        },
        {
            path: '/mutasi-warga',
            name: 'mutasi',
            component: PageMutasi
        },
        {
            path: '/kas',
            name: 'kas',
            component: PageKas
        },
        {
            path: '/tentang-aplikasi-data-warga',
            name: 'About',
            component: PageAbout
        }
    ]
})
