<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.CSS">
    <title>Tristan Sifré Portfolio</title>
</head>
<body>
    <nav id="nav">
        <div class="main-navlinks">
            <button class="hamburger" type="button" aria-label="Toogle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="navContainer">
                <a href="#Accueil">Accueil</a>
                <a href="#Information">Information</a>
                <a href="#Expérience">Expérience</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    </nav>    
    <div class="loader">
        <span class="lettre">
            CHARGEMENT
        </span>
        <div class="load_circle">
        </div>
        <span class="lettre">
            Veuillez Patienter !
        </span>
    </div>
    <section class="sect1">
        <div class="container_bubblecard">
            <canvas id="canvas"></canvas>
        </div>
        <div class="cursor">
        </div>
    </section>
    <section class="sect2">
        <div class="info_container">
            <div class="top_info">
                <div class="haut1">
                    <span>A Propos de moi :</span>
                </div>
                <div class="haut3">
                    <!-- <div class="haut2">
                        <div class="haut2bis"></div>
                    </div> -->
                </div>
            </div>
            <div class="info-content">
                <div class="content_button">
                    <button type="button" class="button button1" onclick="masquer_div('hidiv2');afficher_div('hidiv1')">Informations Diverse</button>
                    <button type="button" class="button button2" onclick="masquer_div('hidiv1');afficher_div('hidiv2')">Compétences</button>
                    <div id="hidiv1" class="other_information"> Coucou</div>
                    <div id ="hidiv2" class="skills">Salut</div>
                </div>
            </div>
            <div class="bottom_info">
                <div class="bas1">
                    <!-- <div class="bas2">
                        <div class="bas2bis"></div>
                    </div> -->
                </div>
                <div class="bas3">
                    
                </div>
            </div>
        </div>
    </section>
    <section class="sect3">
        <div class="experience">
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card">
                        <div class="front-card">
                            Bienvenue
                        </div>
                        <div class="back-card">
                            Wsh
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sect4">
            <div class="postul">
                <div class="separate"></div>
                <form method="post">
                    <input type="text" class="input_1" name="nom" placeholder="Nom" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="text" name="sujet" placeholder="Sujet" required>
                    <textarea name="message" placeholder="Contenue du message" required></textarea>
                    <input type="submit" class="push" value="Envoyer le message">
                </form>
                <?php
                if (isset($_POST["message"])){
                    $message = "Ce message vous a été envoyé par votre Portfolio
                    Nom : ".$_POST["nom"]."
                    Email : ".$_POST["email"]."
                    Message : ".$_POST["message"].""
                    $retour = mail("tristansifre@gmail.com",$_POST["sujet"],$_POST["message"], "From:trisif18@gmail.com"."\r\n"."Reply-to:".$_POST["email"]);
                    if ($retour === true){
                        echo "<p>L'email a bien été envoyé</p>"
                    }
                }
                ?>
             </div>   
    </section>
    <script src = script.js>
    </script>
    <footer>
    </footer>
</body>
</html>
