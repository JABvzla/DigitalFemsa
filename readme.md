
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

# Preview
![preview](
  https://github.com/JABvzla/DigitalFemsa/blob/master/videopreview.gif?raw=true)
