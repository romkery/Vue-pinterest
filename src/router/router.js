import VueRouter from 'vue-router';
import Account from '../components/Home/Account/Account';
import Home from '@/components/Home/Home';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/?',
        component: Home
    },
    {
        path: '/account/:id',
        component: Account
    },
];

const router = new VueRouter({
    routes
});

export default router;
