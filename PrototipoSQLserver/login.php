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
               <legend><b> Tela de login</b></legend>
               <br><br>

               <div class="inputbox">
                    <input type="text" name="text" id="text" class="inputUser" required>
                    <label for="text" class="labelInput">Digite seu nome</label>
                 </div>
             
                <br>
               <div class="inputbox">
                    <input type="text" name="email" id="email" class="inputUser" required>
                    <label for="text" class="labelInput">E-mail</label>
                 </div>
                <br>
               <div class="inputbox">
                    <input type="password" name="password" id="password" class="inputUser" required>
                    <label for="password" class="labelInput">Digite sua senha</label>
               </div>
                
                <br>
               <input type="submit" name="submit" id="submit">
               
            </fieldset>

        </form>
    </div>

</body>
</html>