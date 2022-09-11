import VueRouter from 'vue-router';
import Account from '../components/MainContent/Account/Account';
import Layout from '@/components/MainContent/Layout';
import App from '@/App';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import Home from '@/components/Home/Home';
import Saved from '@/components/MainContent/Account/tabs/Saved';
import Marks from '@/components/MainContent/Account/tabs/Marks';

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
        path: '/account/public',
        component: Account
    },
    // {
    //     path: '/account/saved',
    //     component: Saved
    // },
    // {
    //     path: '/account/marks',
    //     component: Marks
    // }
];

const router = new VueRouter({
    routes
});

export default router;