import Vue from 'vue';
import Router from 'vue-router';

import routeMain from './routeMain';
import routeWarga from './routeWarga';
import routeKartuKeluarga from './routeKartuKeluarga';

Vue.use(Router);

const routes = [
    ...routeMain,
    ...routeWarga,
    ...routeKartuKeluarga,
];

export default new Router({ routes })
