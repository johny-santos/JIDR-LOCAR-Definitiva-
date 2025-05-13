-- Criação do banco de dados
CREATE DATABASE testeConexao3;
GO
USE testeConexao3;
GO

-- Criação da tabela de usuários
CREATE TABLE usuarios1 (
    idUser INT PRIMARY KEY IDENTITY(1,1),
    senha VARCHAR(20) NOT NULL,
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(110) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    dataNasc DATE NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    estado VARCHAR(40) NOT NULL,
    endereco VARCHAR(40) NOT NULL
);
GO

-- Visualização dos dados
SELECT * FROM dbo.usuarios1;
GO

-- Ver estrutura da tabela
SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'usuarios1';
GO
