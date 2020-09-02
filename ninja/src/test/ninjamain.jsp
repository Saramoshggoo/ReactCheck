<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<style>
    .container {
        margin-left: 150px;
    }

    .result {
        border: black solid 1px;
        width: 150px;

        height: 20px;
    }

    .main {
        margin-top: 20px;
        width: 200px;
        height: 200px;
        border: black solid 1px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
    }

    .lists {
        height: 200px;
        overflow-y: scroll;
        width: 80%;
        background-color: rgb(166, 174, 182);
        margin: auto;
    }

    ul {
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    ul>li {
        -moz-transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
        text-decoration: none;
    }
</style>

<body>
    <div class='container'>
        <h2>your Gold:${gold}</h2>
        <div class="result"></div>
        <div class="main">
            <h2>farm</h2>
            <h3>earns 10-20 golds</h3>
            <form action= "/main" method= "post">
              
                <input type="hidden" name="building" value="Farm" />
                <input type="submit" value="Find Gold!" />
            </form>

        </div>
        <div class="main">
            <h2>Cave</h2>
            <h3>earns 5-10 golds</h3>
            <form action="/main" method="post">
                
                <input type="hidden" name="building" value="Cave" />
                <input type="submit" value="Find Gold!" />
            </form>

        </div>
        <div class="main">
            <h2>House</h2>
            <h3>earns 2-5 golds</h3>
            <form action="/main" method="post">
               
                <input type="hidden" name="building" value="House" />
                <input type="submit" value="Find Gold!" />
            </form>

        </div>
        <div class="main">
            <h2>Casino</h2>
            <h3>earns/takes 0-50 golds</h3>
            <form action="/main" method="post">
               
                <input type="hidden" name="building" value="Casino" />
                <input type="submit" value="Find Gold!" />
            </form>
        </div>
        <div></div>
        <form action="/reset" method="post">
         
            <button type="submit">Reset</button>
        </form>
        <h2>activity</h2>
    </div>

  


    <div class="lists">
        <ul>
           
        </ul>
    </div>
















</body>
</html>