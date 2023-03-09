
# Digital@Femsa Challenge


## Indice
-   [Requisitos](#requisitos)
-   [Instalación](#instalación)
-   [Scripts](#scripts)
-   [Estructura de carpetas](#estructura-de-carpetas)
-   [Preview](#preview)

## Requisitos
-   node v16.1.0


## Instalación


- Instalar  dependencias:
```
npm install
```
```
npm run mobile:install
```


## Scripts

- Crear binario para android:
```
npm run mobile:android
```
- Crear binario para ios:
```
npm run mobile:ios
```
- Ejecutar test:
```
npm run test
```


## Estructura de carpetas
```
+-- readme.md // <--- Estas aquí
+-- domain
+-- application
+-- infrastructure
|   +--helper
|   +--mobile  // <--- react-native project
|   +--transaction-service
```

- `domain` : Directorio con interfaces de dominio.
- `application` :  Todas las acciones o casos de uso que puede hacer nuestra aplicación.
- `infrastructure` : En este directorio de infraestructura van todas las conexiones de nuestra aplicación a los frameworks, interfaces de entrada o cualquier servicio de terceros.
- `infrastructure/mobile` : Projecto de react-native :muscle:
- `infrastructure/transaction-service` : Servicio para consumir listado de transacciones

# Preview
![preview](
  https://github.com/JABvzla/DigitalFemsa/blob/master/videopreview.gif?raw=true)


## Notes
- transaction-service posee una capa de cache para que luego de haber consumido la data la mantenga en memoria y no vuelva a consumir el endpoint.
- una vez consumido el listado de transacciones, se resuelve cada imagen antes de almacenarse en cache, esto aumenta el primer tiempo de carga a cambio de mas velocidad al reutilizar la imagen entre el listado y el detalle
