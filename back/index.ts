import Servidor from './server';

const servidor: Servidor = Servidor.getInstance(4300);

/* servidor.addRoutes( new Map([
    ['/auth', routesAuth]
])); */

servidor.initialize( () => console.log('Servidor corriendo'));