const options = [
  [],
  [
    {
      key: 'teacher',
      label: 'sidebar.management',
      leftIcon: 'ion-ios-people',
      items: [
        {
          key: 'users',
          label: 'sidebar.user',
        },
        {
          key: 'assignments',
          label: 'sidebar.assignment',
        },
      ],
    },
    {
      key: 'settings',
      label: 'sidebar.settings',
      leftIcon: 'ion-ios-cog',
    },
  ],
  [
    {
      key: 'dashboard',
      label: 'sidebar.dashboard',
      leftIcon: 'ion-ios-home',
    },
    {
      key: 'student assignments',
      label: 'sidebar.assignment',
      leftIcon: 'ion-android-checkbox',
      items: [
        {
          key: 'assignments',
          label: 'sidebar.assignments',
        },
        {
          key: 'history',
          label: 'sidebar.history',
        },
      ],
    },
  ],
];

export default options;
