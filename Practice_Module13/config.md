# Configuraciónes para la practica.🧑‍💻

- Instalación de npm:
```` 
npm init 
````

- Instalación de modulos ESLint:

````
npm i eslint
````

- Configuración de de las *reglas* ESLint en el archivo `.eslintrc.json` :

````javascript
{
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",//reglas de ESLint para el codigo externa  a esta configuiracion
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-unused-vars": "off"
    }
}
````

- Configuración de `Package.json` para la ejecución y testeo de ESLint:

````javascript
    "lint": "eslint .",
    "lint-fix":"eslint --fix .",
    "start": "node index.js"
````

> _**Nota**_: _Esta config debe de ir bien estructurada en la sección de "script" dentro del nuestro file `.json`_

[More information 🚀](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats)

---
    
🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="left" alt="xd" width="35" height="35" src="https://i.gifer.com/origin/08/089af74235a38edcc7b433321f0a5472_w200.webp" />