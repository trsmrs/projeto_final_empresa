# projeto_final_empresa

## Tomei a iniciativa de criar esta aplicação de forma voluntária e sem fins lucrativos para a empresa onde trabalho como Suporte técnico.

### O Front-End da aplicação foi desenvolvida em <img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> e reúne as seguintes páginas:

A página inicial, que contém apenas um Home com o Logo da empresa.
![home](/imagesApp/app01.png)

Uma página onde podemos consultar dados vindos de uma API que desenvolvi com <img align="center" alt="nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="center" alt="expressjs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
. Essa API possui middlewares para criar, editar, inserir e excluir dados de uma tabela de dados MySQL.mysql

A página contém uma sessão de procedimentos que usamos para auxiliar no treinamento de novos funcionários. Esses procedimentos estão documentados com prints e textos explicando como proceder em cada processo a ser executado pelos mesmos. procedimentos

Aqui vai uma explicação detalhada de como a aplicação foi desenvolvida e onde eu vi a necessidade de criá-la.
Trabalhamos na parte de monitoramento de internet e atendemos muitos clientes. Com isso, temos uma ferramenta de alertas que nos traz dados como o nome dos locais e o que está sem conexão, como link primário e secundário. Também temos alertas de switches de rede que são muitos, e precisamos copiar as informações como: Local, Hostname, IP e Switch de borda. A forma que coletamos os dados desses switches de rede até então era em uma planilha do Excel do Office 365. Isso tornava a pesquisa lenta e muitas vezes acabávamos perdendo o acesso ao Office 365 por eventuais problemas técnicos.

Com isso, pensei em uma aplicação onde eu pudesse ter todos os dados localmente e uma forma mais rápida de copiar os dados. Foi então que fiz uma página onde de um lado carregasse uma tabela com todos os dados e ao lado de cada linha da tabela um botão que, ao clicar, adiciona o item selecionado para uma nova tabela à direita. Assim, você vai selecionando aqueles switches de redes que estariam alertando como down. Ao fim disso, ao clicar em um botão, você copia todas as informações de uma só vez para o clipboard do sistema operacional, tornando a o processo de abertura do chamado muito mais rápido.
