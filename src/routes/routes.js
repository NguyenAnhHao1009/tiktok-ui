import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Live from '~/pages/Live';
import Discover from '~/pages/Discover';

//Public Routes
const publicRoutes = [
    {
        path: config.routes.root,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.discover,
        component: Discover,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
