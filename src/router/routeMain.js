import PageAbout from '@/components/layout/About';
import PageHome from '@/components/layout/PageHome';
import PageMutasi from '@/components/layout/PageMutasi';
import PageKas from '@/components/layout/PageKas';

const routeMain = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
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
];

export default routeMain;
