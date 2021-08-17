<p>
<img src="https://miro.medium.com/max/3200/1*yk5D5cQB3jd7EiPzrDrD5w.png" width="140" height="60">
</p>
<p align="center">
</p>


## Git
```bash
git clone https://github.com/jcarrizalez/test_mx_reactjs.git;
```

## Configuration

Configura las variables de entorno a usar como dirección de la API, entre otras.
```bash
test_mx_reactjs/
├── .env
```
Puerto por defecto: PORT=4000
```bash
test_mx_reactjs/
├── package.json
```
## Installation

```bash
$ npm install; 
```
## Execute

```bash
$ npm run local
```

## Build

```bash
$ npm run build-local
```
## Structure

```bash
test_mx_reactjs/
├── .env
├── README.md
├── package.json
├── public/
│   ├── manifest.json
│   ├── index.html
│   └── ...
└── src
    ├── assets
    │   ├── json
    │   │   └── ...
    │   └── scss/
    │       ├── ...
    │       └── web.scss
    │
    ├── components
    │   ├── ...js
    │   ├── Layout.js
    │   └── Router.js
    │
    ├── index.js
    ├── endpoints.js
    └── services.js

```
