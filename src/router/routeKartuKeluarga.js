import PageKartuKeluarga from '@/components/layout/PageKartuKeluarga';
import PageKartuKeluargaDetail from '@/components/layout/PageKartuKeluargaDetail';
import AddKartuKeluarga from '@/components/forms/AddKartuKeluarga';

const routeKartuKeluarga = [
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
        path: '/kartu-keluarga/edit/:id_keluarga',
        name: 'EditKartuKeluarga',
        component: AddKartuKeluarga,
    },
];

export default routeKartuKeluarga;
