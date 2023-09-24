# Projeto_final_empresa

## Tomei a iniciativa de criar esta aplicação de forma <b>voluntária e sem fins lucrativos</b> para uma empresa.

### O Front-End da aplicação foi desenvolvida em <img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> e reúne as seguintes páginas:

- A página inicial, que contém apenas um Home com o Logo da empresa.<br><br>
![home](/imagesApp/app01.png)

- Uma página onde podemos consultar dados vindos de uma API que desenvolvi com <img align="center" alt="nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="center" alt="expressjs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>.
Essa API possui middlewares para criar, editar, inserir e excluir dados de uma tabela de dados ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) <br><br>

![home](/imagesApp/app02.png)

- Também foi criado uma sessão para editar, inserir, e excluir dados da tabela no banco de dados (CRUD), onde para acesso precisa passar por uma validação com senha. <br><br>
  ![home](/imagesApp/app03.png)

- Aqui é a página de gerenciamento dos itens das tabelas. <br><br>
![home](/imagesApp/app04.png)


- A página contém uma sessão de procedimentos que usamos para auxiliar no treinamento de novos funcionários. Esses procedimentos estão documentados com prints e textos explicando como proceder em cada processo a ser executado pelos mesmos. <br><br>
   ![home](/imagesApp/app-02-01.png)

- A página de Treinamentos possui uma droplist que ao clicar ela expande todos os procedimentos que vem de um array importado do arquivo "data.json". <br><br>
  ![home](/imagesApp/app05.png)


## Aqui vai uma explicação detalhada de como a aplicação foi desenvolvida e onde eu vi a necessidade de criá-la.
 - O Trabalho é na parte de monitoramento de internet onde atendem muitos clientes. Com isso, a empresa usa uma ferramenta de alertas que traz dados como o nome dos locais e o que está sem conexão, como links, energia, e switchs de redes.
 Estes Switchs de redes são muitos, e a forma que coletam os dados desses switches até então era em uma planilha do Excel do Office 365. Isso tornava a pesquisa lenta e muitas vezes acabavam perdendo o acesso ao Office 365 por eventuais problemas técnicos.

 - Com isso, pensei em uma aplicação onde eu pudesse ter todos os dados localmente e uma forma mais rápida de serem copiados. 
   Foi então que fiz uma página onde de um lado carregasse uma tabela com todos os dados e ao lado de cada linha da tabela um botão que, ao clicar, adiciona o item selecionado para uma nova tabela à direita. Assim, você vai selecionando aqueles 
   switches de redes que estariam constando como off-line.
   Ao fim disso, ao clicar em um botão, você copia todas as informações de uma só vez para o clipboard do sistema operacional, tornando a o processo de abertura do chamado muito mais rápido.
