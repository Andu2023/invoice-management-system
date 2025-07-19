import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent {

  sidebarSections = [
    {
      title: 'User Management',
      icon: 'bx bx-cog',
      expanded: true,
      links: [
        { label: 'Register Users', icon: 'bx bx-user-plus', route: '/admin/userReg' },
        { label: 'User List', icon: 'bx bx-user', route: '/admin/userlist' },

      ]
    },
    {
  title: 'Purchases',
  icon: 'bx bx-cart-add',
  expanded: false,
  links: [
    { label: 'Add Purchase', icon: 'bx bx-plus-circle', route: '/purchase/add' },
    { label: 'Purchase List', icon: 'bx bx-list-ul', route: '/purchase/list' }
  ]
},
   {
  title: 'Supplier',
  icon: 'bx bx-package',  
  expanded: true,
  links: [
    { label: 'Register Supplier', icon: 'bx bx-user-plus', route: '/admin/supplier/register' },
    { label: 'Supplier List', icon: 'bx bx-list-ul', route: '/admin/supplier/list' }
  ]
}
,    {
      title: 'Department',
      icon: 'bx bx-building',
      expanded: false,
      links: [
        { label: 'Register Department', icon: 'bx bx-user-plus', route: '/admin/supplier/register' },
       { label: 'Department List', icon: 'bx bx-list-ul', route: '/admin/supplier/list' }
      ]
    },
{
  title: 'Material Management',
  icon: 'bx bx-layer',
  expanded: false,
  links: [
    { label: 'Import Materials', icon: 'bx bx-send', route: '/admin/import' },
    { label: 'Request Materials', icon: 'bx bx-send', route: '/materials/request' },
    { label: 'Transfer Materials', icon: 'bx bx-transfer-alt', route: '/materials/transfer' },
    { label: 'Return Materials', icon: 'bx bx-undo', route: '/materials/return' },
    { label: 'Distribute Materials', icon: 'bx bx-share-alt', route: '/materials/distribute' },
    { label: 'Damaged Materials', icon: 'bx bx-error', route: '/materials/damaged' },
    { label: 'Remove Damaged Materials', icon: 'bx bx-error', route: '/materials/damaged' }

  ]
},
{
  title: 'Stores',
  icon: 'bx bx-buildings',
  expanded: false,
  links: [
    { label: 'Store 1 ', icon: 'bx bx-package', route: '/warehouse/store1/materials' },
    { label: 'Store 2 ', icon: 'bx bx-package', route: '/warehouse/store2/materials' },
    { label: 'Store 3', icon: 'bx bx-package', route: '/warehouse/store3/materials' },
    { label: 'Store 4', icon: 'bx bx-package', route: '/warehouse/store4/materials' },
    { label: 'Stock Overview', icon: 'bx bx-layer', route: '/warehouse/stock-overview' }
  ]
},

    {
      title: 'System',
      icon: 'bx bx-desktop',
      expanded: false,
      links: [
        { label: 'Low Stock Alerts', icon: 'bx bx-error', route: '/system/low-stock-alerts' },
        { label: 'Notifications', icon: 'bx bx-bell', route: '/system/notifications' }
      ]
    }
  ];
}


  

