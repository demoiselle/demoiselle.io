'use strict';

app.config(['$routeProvider', 'USER_ROLES',
    function ($routeProvider, USER_ROLES) {

        $routeProvider

                .otherwise({
                    redirectTo: '/',
                    data: {
                        authorizedRoles: [USER_ROLES.NOT_LOGGED]
                    }
                });

    }]);