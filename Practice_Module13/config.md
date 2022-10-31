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
