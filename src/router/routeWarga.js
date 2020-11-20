import ListWarga from '@/components/collections/ListWarga';
import AddWarga from '@/components/forms/AddWarga';
import DataWargaDetil from '@/components/collections/DataWargaDetil';

const routeWarga = [
    {
        path: '/data-warga/',
        name: 'DataWarga',
        component: ListWarga,
    },
    {
        path: '/data-warga/detil/:id_warga',
        name: 'DataWargaDetil',
        component: DataWargaDetil,
    },
    {
        path: '/data-warga/new',
        name: 'AddWarga',
        component: AddWarga,
    },
    {
        path: '/data-warga/edit/:id_warga',
        name: 'EditWarga',
        component: AddWarga,
    },
];

export default routeWarga;
