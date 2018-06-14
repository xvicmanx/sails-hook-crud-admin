
module.exports = {
  models: {
    cruduser: {
      label: 'CRUD User',
      valueTemplate: '<%= cruduser.username %>',
      fields: {
        groups: {
          valueTemplate: `
            <ul>
              <% _.forEach(groups, function(group) { %>
                <li> <%= group.name %> </li>
              <% }); %>
            </ul>
          `
        },
        password: {
          renderer: 'password',
          valueTemplate: '*******',
        }
      }
    },
    crudgroup: {
      label: 'CRUD Group',
      valueTemplate: '<%= crudgroup.name %>',
      fields: {
        rights: {
          valueTemplate: `
            <ul>
              <% _.forEach(rights, function(right) { %>
                <li> <%= right.name %> </li>
              <% }); %>
            </ul>
          `
        },
      }
    },
    crudright: {
      label: 'CRUD Right',
      valueTemplate: '<%= crudright.name %>',
      fields: {
        resource: {
          valueTemplate: `<%= resource.name %>`
        },
        action: {
          valueTemplate: `<%= action.name %>`
        },
      }
    },
    crudaction: {
      label: 'CRUD Action',
    },
    crudresource: {
      label: 'CRUD Resource',
    },
  }
};
