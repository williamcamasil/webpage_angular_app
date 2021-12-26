# Angular



**Code Base:** https://github.com/cod3rcursos/angular-crud

---

## Backend

##### CRUD Backend server

```json
# configuração
npm install

# arquivos
db.json
package.json

# iniciar
npm start
```



---

## Frontend

#### Plugins / Extenções

- Auto Import



#### Dependência

````
ng add @angular/material

#instalação material
- yes
- yes
````



#### Comandos

- Criação de Projeto com CLI (Command Line Interface)

  - ```
    # Executado somente 1 vez no dispositivo
    npm i -g @angular/cli
    
    # Criando projeto (necessário configuração)
    ng new frontend
    
    # Acesse o projeto e execute
    npm start
    ```

- Criação de **Componente**

  - ```
    # Cria o diretório e o componente e adiciona no componente principal
    ng g c components/template/header
    ```

- Criação de um **Service**

  - ```
    ng g s services/product
    ```

- Criação de **Páginas**

  - ```
    ng g c views/home
    ```

- Criação de **Diretivas Attribut**

  - ```
    ng g d directives/red
    ```

- Criação de **Diretivas Structural** 

  - ```
    ng g d directives/for
    ```

- Criação de Componente usando o [schematics](https://material.angular.io/guide/schematics) (exemplo)

  - ```
    ng generate @angular/material:table components/product/product-read2
    ```





### Anatomia do Módulo

- Declarations
  - Components 
  - Diretivas
  - Pipes
- Imports
  - Module A
  - Module B
  - Module C
- Exports
  - Components
  - Diretivas
  - Pipes
- Providers
  - Service A
  - Service B
  - Service C
- Bootstrap
  - App Component



### Assuntos Importante Angular

- Componentes
  - ![image-20211219110833787](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219110833787.png)
- Diretivas
  - Existem 2 tipos
    - Atributo (**Attribut**)
      - Foca em alterar a aparência e o comportamento de um elemento, componente ou outra diretiva
      - exemplo:
        - ![image-20211219111109175](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219111109175.png)
        - ![image-20211219111129378](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219111129378.png)
    - Estrutural (**Structural**)
      - Foca em alterar o layout adicionando e removendo elementos da DOM.
      - exemplo:
        - ![image-20211219111254831](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219111254831.png)
  - Property **Binding**
    - Dessa forma traz os atributos de produtos para o html
    - ![image-20211219111513903](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219111513903.png)
  - **Event** Binding
    - Dessa forma liga o evento de clique
    - ![image-20211219111649233](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219111649233.png)
  - One Way Data Binding
    - HTML > <input [value]="nome"> | TS > nome: string
  - Two Way Data Binding
    - HTML > <input [(ngModel)]="nome"> | TS > nome: string
- Rotas
  - ![image-20211219112009148](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219112009148.png)
  - ex: https://github.com/cod3rcursos/angular-crud/blob/master/frontend/src/app/app-routing.module.ts
- Pipes
  - Serve para formatar os dados de acordo com o que necessita ser definido a ele. (seria um util do react)
  - ![image-20211219112101703](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219112101703.png)
- Observables
  - Serve para observar quando houver um evento e assim avisar que o estado precisa ser alterado ou uma ação precisa ser tomada, sua definição se tem pelo padrão de design patterns GOF
- Services e Injeção de Independência
  - **Services:** São classes que têm como principal objetivo organizar e **compartilhar** métodos e **dados** ***entre componentes***. 
    - ![image-20211219103646118](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219103646118.png)
  - **Injeção de Independência**, a parir da Injeção de Independência será possível usar os códigos de dentro do Service nos componentes 
    - <u>Significado</u>: É um padrão no qual a classe recebe as dependências de uma fonte externa ao invés de criar por conta própria
    - Exemplo: Motor está sendo passando com Injeção de Independência para dentro do Carro![image-20211219104253723](https://github.com/williamcamasil/webpage_angular_app/tree/feature/application-course/application/printscreen/image-20211219104253723.png)



### Links úteis

- [schematics](https://material.angular.io/guide/schematics)
  - São modelos de componentes, usados para facilitar o desenvolvimento
- 

