# La percistencia de los datos en los navegadores. 🚀

Hay varios otros mecanismos de almacenamiento disponibles en el navegador, pero tienen un uso limitado y pueden causar problemas importantes de rendimiento.

- **SessionStorage** es específico de una pestaña y se ajusta a la vida útil de la pestaña. _Puede ser útil para almacenar pequeñas cantidades de información específica de la sesión_.
> Si debiermoas poner un ejemplo, una clave de IndexedDB. Debe usarse con precaución porque es sincrónico y bloqueará el hilo principal. Está limitado a unos 5 MB y solo puede contener cadenas. Debido a que es específico de una pestaña, los web workers o los service workers no pueden acceder a él.

- **LocalStorage** debe evitarse porque es sincrónico y bloqueará el hilo principal. Está limitado a unos 5 MB y solo puede contener cadenas. LocalStorage no es accesible para web workers o service workers. Esta asociada a toda la informacion del *browser*

- **Las cookies** tienen ciertos usos, pero no deben usarse para almacenamiento. Las cookies se envían con cada solicitud HTTP, por lo que almacenar algo más que una pequeña cantidad de datos aumentará significativamente el tamaño de cada solicitud web. Son sincrónicas y los web workers no pueden acceder a ellas. Al igual que LocalStorage y SessionStorage, las cookies se limitan solo a cadenas.

> Podemos usar o crear cookies con los siguientes funcioines en JS:
> * Visualizar cookies: `console.log(document.cookie)`, dentro de la ocnosla se podra visualzair.
> * Crear cookies: `document.cookie = "nombreCookieMikeCookie"`
> * Darle expiracion a las cookies: `document.cookie = "nombreCookie=CookieMike;expires=" + new Date(2024,0,1).toUTCString()`

- **La API** del sistema de archivos y la API FileWriter proporcionan métodos para leer y escribir archivos en un sistema de archivos de espacio aislado. Si bien es asincrónica, no se recomienda porque solo está disponible en navegadores basados en Chromium.

La API de acceso al sistema de archivos se diseñó para facilitarles a los usuarios la lectura y edición de archivos en su sistema de archivos local. El usuario debe otorgar permiso antes de que una página pueda leer o escribir en cualquier archivo local, y los permisos no se conservan entre sesiones.

- **WebSQL** no debe utilizarse y el uso existente se debe migrar a IndexedDB. Se ha eliminado la compatibilidad con casi todos los principales navegadores. El W3C dejó de mantener la especificación Web SQL en 2010, sin planes de realizar más actualizaciones.

> No se debe utilizar la caché de aplicaciones y el uso existente se debe migrar a los service workers y la API de caché. Ha quedado obsoleta y la compatibilidad se eliminará de los navegadores en el futuro.