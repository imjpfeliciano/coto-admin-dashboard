
// For icons, see https://fonts.google.com/icons
const userRoutes = {
  title: 'Usuarios',
  items: [{ icon: 'group', label: 'Listado', path: '/users' }],
};

const amenitiesRoutes = {
  title: 'Amenidades',
  items: [
    {
      icon: 'forest',
      label: 'Listado',
      path: '/amenities',
    },
  ],
};

const financesRoutes = {
  title: 'Finanzas',
  items: [
    {
      icon: 'account_balance',
      label: 'Ingresos',
      subItems: [
        {
          icon: 'build',
          label: 'Mantenimiento',
          path: '/finances/incomes/maintenance',
        },
        {
          icon: 'local_atm',
          label: 'Multas',
          path: '/finances/incomes/fines',
        },
      ],
    },
    {
      icon: 'paid',
      label: 'Egresos',
      subItems: [
        {
          icon: 'cleaning_services',
          label: 'Pago de servicios',
          path: '/finances/outcomes/services',
        },
        {
          icon: 'local_shipping',
          label: 'Pago de proveedores',
          path: '/finances/outcomes/providers',
        },
      ],
    },
  ],
};

// const SidebarRoutes: SidebarOption[] = [
//   userRoutes,
//   amenitiesRoutes,
//   financesRoutes,
// ];

export interface SidebarItemProps {
  icon: string;
  label: string;
  path: string;
}

const SidebarRoutes: SidebarItemProps[] = [
  {
    path: '/',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    path: '/users',
    icon: 'group',
    label: 'Usuarios',
  },
  {
    path: '/amenities',
    icon: 'forest',
    label: 'Amenidades',
  },
  {
    path: '/finances',
    icon: 'account_balance',
    label: 'Finanzas',
  },
  {
    path: '/messages',
    icon: 'message',
    label: 'Mensajes',
  }
];
export default SidebarRoutes;
