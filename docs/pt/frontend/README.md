# Frontend

A ideia do **Devitools** é entregar uma experiência RAD _\(Rapid Application Development\)_ centralizando operações 
rotineiras e deixando para o desenvolvedor apenas as regras de negócio. Atuando apenas na lógica do negócio, o 
desenvolvedor trabalha na configuração dos estados e comportamentos que serão exibidos na tela. 
Em seguida, ele cria um `Controller Component` que irá passar essas configurações para o `Container Component`. 
Este último irá se comunicar com os `Specialist Components` para renderizar as telas.

![Frontend Schematic](/image-25.png)

## Quando é interessante usar essa metodologia?

Pelos nossos estudos e experiências, a metodologia usada na construção do _Skeleton_ tende a ser mais eficiente em aplicações que sejam painéis de controle com muitas e muitas telas com a mesma estrutura. O custo de criar um `Container Component` é relativamente alto e se a aplicação tiver telas muito diferentes em cada ambiente não vale a pena o investimento. Em contrapartida se a aplicação tiver dezenas de forms e tables no padrão que já é suportado a produtividade será absurdamente alta.

## Meu projeto vai ficar mais complexo?

A resposta franca é **SIM**, em contrapartida, existem alguns benefícios como:

* Simplificação da cadeia de produtiva \(não é preciso reescrever toda a lógica de gestão de estados, validação, e etc\);

* Centralização das mudanças, caso o [Quasar](https://quasar.dev/) \(_framework_ que pode ser substituído com algum esforço reduzido\) sofra alguma modificação o seu código não será impactado, apenas os adaptadores que aplicam suas configurações aos componentes dele;

* Possibilidade de criar estruturas bases que se repetem com frequência;

* Controle do projeto em cima de uma linguagem de programação e não em cima de templates ou dependência vital de um _framework_ de UI.

## Utilizar esta metodologia engessa o meu projeto?

Absolutamente **NÃO**. É possível ver nas seções: [Customizando Components](customizacao/customizando-components.md) e [Customizando Views](customizacao/customizando-views.md) que podemos criar componentes e _views_ customizadas sem fazer uso da estrutura dos domínios.

## Como posso conseguir suporte?

Sinta-se livre para entrar em nosso grupo no [Telegram](https://t.me/devitools) e acompanhe as [_issues_ do repositório de _roadmap_](https://github.com/devitools/roadmap/issues) para tirar dúvidas, fazer críticas e/ou sugestões. :blush:

