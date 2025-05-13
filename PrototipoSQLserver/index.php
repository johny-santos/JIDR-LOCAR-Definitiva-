<?php

    if(isset($_POST['submit'])){
     
        include_once('config.php');

        $nome = $_POST['nome'];
        $senha = $_POST['senha'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $sexo = $_POST['genero'];
        $data_nasc = $_POST['data_nascimento'];
        $cidade = $_POST['cidade'];
        $estado = $_POST['estado'];
        $endereco = $_POST['endereco'];

         $sql = "INSERT INTO usuarios1 (nome, senha, email, telefone, sexo, dataNasc, cidade, estado, endereco) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
         
         $params = array($nome, $senha, $email, $telefone, $sexo, $data_nasc, $cidade, $estado, $endereco);

         $stmt = sqlsrv_query($conexao, $sql, $params);

         if($stmt === false){
            die(print_r(sqlsrv_errors(), true));
         }else{
            echo 'Dados inseridos com sucesso';
         }

    }

    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário|Teste</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
            background-image: linear-gradient(to right, rgb(253, 51, 24), rgb(204, 185, 17));
        }
        .box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 15px;
            color: white;
            width: 40%;
        }
        fieldset{
            border: 4px solid orangered;

        }
        legend{
            border: 2px solid orangered;
            padding: 10px;
            text-align: center;
            background-color: orangered;
            border-radius: 8px;
        }
        .inputbox{
            position: relative;
        }
        .inputUser{
            background: none;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            color: white;
            font-size: 15px;
            width: 100%;
            letter-spacing: 2px;
        }
        .labelInput{
            position: absolute;
            top: 0px;
            left: 0px;
            pointer-events: none;
            transition: .5s;
        }
        .inputUser:focus ~ .labelInput, 
        .inputUser:valid ~ .labelInput{
            top: -18px;
            font-size: 12px;
            color: orangered;

        }
        #submit{
            background-image: linear-gradient(to right, rgb(253, 51, 24), rgb(204, 185, 17));
            width: 100%;
            border: none;
            padding: 10px;
            color: white;
            font-size: 15px;
            cursor: pointer;
            border-radius: 10px;
            
        }
        #submit:hover{
            background-image: linear-gradient(to right, rgb(184, 54, 37), rgb(160, 148, 43));
    
        }
    </style>
</head>
<body>
    <div class="box">
        <form action="index.php" method="POST">
            <fieldset>
               <legend><b> Formulário de Clientes </b></legend>
               <br><br>
               
               <div class="inputbox">
                    <input type="text" name="nome" id="nome" class="inputUser" required>
                    <label for="nome" class="labelInput">Nome Completo</label>
               </div>
                <br>
                <div class="inputbox">
                    <input type="password" name="senha" id="senha" class="inputUser" required>
                    <label for="password" class="labelInput">Digite sua senha</label>
               </div>
               <br>
               <div class="inputbox">
                    <input type="text" name="email" id="email" class="inputUser" required>
                    <label for="text" class="labelInput">E-mail</label>
                 </div>
                <br>
               <div class="inputbox">
                    <input type="tel" name="telefone" id="telefone" class="inputUser" required>
                    <label for="telefone" class="labelInput">Telefone</label>
               </div>
                
             <b><p>Sexo:</p> </b>
               
                <input type="radio" id="feminino" name="genero" value="feminino" required>
                <label for="Feminino">Feminino</label>
                <br>
                <input type="radio" id="masculino" name="genero" value="masculino" required>
                <label for="Masculino">Masculino</label>
                <br>
                <input type="radio" id="outro" name="genero" value="outro" required>
                <label for="outro">Outro</label>
                
                
                <div class="inputbox">
                    <br>
                    <label for="data_nascimento"><b> Data de Nascimento: </b> </label>
                    <input type="date" name="data_nascimento" id="data_nascimento" class="inputUser" required>    
               </div>
                <br>
               <div class="inputbox">
                    <input type="text" name="cidade" id="cidade" class="inputUser" required>
                    <label for="cidade" class="labelInput">Cidade</label>
               </div>
               <br>
               <div class="inputbox">
                    <input type="text" name="estado" id="estado" class="inputUser" required>
                    <label for="estado" class="labelInput">Estado</label>
               </div>
               <br>
               <div class="inputbox">
                    <input type="text" name="endereco" id="endereco" class="inputUser" required>
                    <label for="endereco" class="labelInput">Endereço</label>
               </div>
               
                <br>
               <input type="submit" name="submit" id="submit">
               
            </fieldset>

        </form>
    </div>

</body>
</html>