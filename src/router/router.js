import VueRouter from 'vue-router';
import Account from '../components/MainContent/Account/Account';
import Home from '@/components/Home/Home';
import Marks from '@/components/MainContent/Account/tabs/Marks';
import Saved from '@/components/MainContent/Account/tabs/Saved';

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
        path: '/account/public',
        component: Account
    },
    {
        path: '/account/saved',
        component: Saved
    },
    {
        path: '/account/marks',
        component: Marks
    }
];

const router = new VueRouter({
    routes
});

export default router;
