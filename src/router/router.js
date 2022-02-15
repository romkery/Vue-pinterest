import VueRouter from 'vue-router';
import Account from '../components/MainContent/Account';
import Layout from '@/components/MainContent/Layout';
import App from '@/App';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import Home from '@/components/Home/Home';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/?',
        component: Header
    },
    {
        path: '/home/account',
        component: Account
    }
];

const router = new VueRouter({
    routes
});

export default router;