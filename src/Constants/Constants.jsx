    import react from 'react';
    
    export const Constants = {

       About: {
        /* p = paragraph*/
        p1:  (
            <>
                Oi, eu sou joão gabriel, tenho 23 anos e estou cursando <span className='underline text-blue'>Análise e desenvolvimento de sistemas</span>, na capital de São Paulo. No momento estou trabalhando na área de <span className='text-blue underline'>desenvolvimento de sistemas</span>.
                    Desde pequeno eu sempre curti computadores, os mesmos se tornaram meus parceiros de vida em várias situações.
            </>
        ),
        p2: (
        <>
                falando da minha pessoa, uma coisa que eu valorizo bastante é a <span className='text-blue underline'>comunicação</span>, to sempre tentando manter uma boa relação com todo mundo à minha volta, também sempre procuro ter uma escuta ativa, gosto de ouvir diferentes perspectivas e tirar o melhor delas.
                sempre to procurando evoluir, principalmente com meus erros, eu sou um tanto quanto <span className='text-blue underline'>creativo e lógico</span> e com isso procuro encontrar formas de melhorar constantemente, não só na minha carreira mas também na minha <span className='text-blue underline'>vida</span>.
        </>
        )
    },

      Skill: {
        p1: (
            <>
                Quando se trata de minhas habilidades se falando de computação, eu sempre procuro possuir uma gama de conhecimento abraangente.
                Isso se Então isso vai desde <span className='text-green underline'>programação, Dados, cloud computing, Sistemas operacionais, automação, APIS</span> e entre outras tecnologias.
            </>
        ),
    },

      Projects :{
        p1:(
            <>
            Todos os meus projetos estão no meu <a href="https://github.com/JoaGabri" target="_blank" className="underline text-purple">GitHub</a>, por lá você pode ver o que eu programo.
            </>
        )
    },

        Final:{
            p1:(
                <>
                
          Este projeto foi feito inteiramente por mim, começando do zero e utilizando diversas tecnologias diferentes, se caso você tenha interesse em ter contato comigo, 
          você pode me chamar no <a href ="https://www.linkedin.com/in/joagabri/" className="text-blue underline">Linkedin</a>, ou enviar um <a href="mailto:joagabri2000@hotmail.com" className="text-blue underline">email</a> para mim.
                </>
            )
        }
}

    export default Constants