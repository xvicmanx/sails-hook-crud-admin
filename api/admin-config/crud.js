
module.exports = {
  models: {
    cruduser: {
      label: 'CRUD User',
      valueTemplate: '<%= cruduser.username %>',
      icon: 'user',
      fields: {
        username: {
          icon: 'user',
        },
        id: {
          icon: 'hashtag',
        },
        groups: {
          icon: 'users',
          valueTemplate: `
            <ul>
              <% _.forEach(groups, function(group) { %>
                <li> <%= group.name %> </li>
              <% }); %>
            </ul>
          `,
        },
        password: {
          icon: 'key',
          renderer: 'password',
          valueTemplate: '*******',
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
      },
    },
    crudgroup: {
      label: 'CRUD Group',
      valueTemplate: '<%= crudgroup.name %>',
      icon: 'users',
      fields: {
        id: {
          icon: 'hashtag',
        },
        name: {
          icon: 'users',
        },
        rights: {
          icon: 'key',
          valueTemplate: `
            <ul>
              <% _.forEach(rights, function(right) { %>
                <li> <%= right.name %> </li>
              <% }); %>
            </ul>
          `,
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
      },
    },
    crudright: {
      label: 'CRUD Right',
      valueTemplate: '<%= crudright.name %>',
      icon: 'key',
      fields: {
        name: {
          icon: 'key',
        },
        resource: {
          icon: 'globe',
          valueTemplate: '<%= resource.name %>',
        },
        action: {
          icon: 'wrench',
          valueTemplate: '<%= action.name %>',
        },
        id: {
          icon: 'hashtag',
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
      },
    },
    crudaction: {
      label: 'CRUD Action',
      icon: 'wrench',
      fields: {
        id: {
          icon: 'hashtag',
        },
        name: {
          icon: 'wrench',
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
      },
    },
    crudresource: {
      label: 'CRUD Resource',
      icon: 'globe',
      fields: {
        id: {
          icon: 'hashtag',
        },
        name: {
          icon: 'globe',
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
      },
    },
    crudasset: {
      icon: 'image',
      fields: {
        id: {
          icon: 'hashtag',
        },
        createdAt: {
          icon: 'calendar',
        },
        updatedAt: {
          icon: 'calendar',
        },
        name: {
          icon: 'file text',
        },
        url: {
          icon: 'linkify',
        },
        type: {
          icon: 'file',
        },
        model: {
          icon: 'globe',
        },
        hash: {
          icon: 'hashtag',
        },
        fileDirectory: {
          icon: 'folder',
        },
      },
    },
  },
};
