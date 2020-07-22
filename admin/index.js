import Dashboard from './pages/dashboard';

export default {
  pages: () => [
    {
      label: 'A new dashboard',
      path: '',
      component: Dashboard,
    },
    {
      label: 'Blocks',
      children: [
        { listKey: 'Featured_projects_layout' },
      ],
    },
    {
      label: 'Blog',
      children: [
        { listKey: 'Post' },
      ],
    },
  ],
};
