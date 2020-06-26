
        window.onload = function () {

            var stage = document.getElementById('stage')
            var context = stage.getContext('2d')
            document.addEventListener("keydown", keyPush);
            var cima = document.querySelector('#cima')
            var baixo = document.querySelector('#baixo')
            var direita = document.querySelector('#direita')
            var esquerda = document.querySelector('#esquerda')
            setInterval(game, 60)
            
            const vel = 1;
            var vx = 0;
            var vy = 1;
            var px = 10;
            var py = 15;
            var tp = 20;
            var qp = 20;
            var fruitx = fruity = 15;

            var trail = [];
            tail = 5

            function game () {
                px += vx;
                py += vy;

                if(px <0 ) {
                    px = qp - 1;

                }
                if (px > qp - 1) {
                    px = 0
                }

                if (py < 0) {
                    py = qp - 1;
                }

                if (py > qp -1 ) {
                    py = 0;
                }

                



            context.fillStyle = '#2A2253';
            context.fillRect(0,0 , stage.width, stage.height)

            context.fillStyle = 'red';
            context.fillRect(fruitx*tp, fruity*tp, tp,tp);

            context.fillStyle= 'gray';

            for (var i = 0; i < trail.length; i++) {
                context.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1 )
                if (trail[i].x == px && trail[i].y ==py ) {
                    vx = vy = 0;
                    tail=5
                    
                }
            }

            trail.push({x:px, y:py})      

            while(trail.length> tail) {
                trail.shift()
            }
            
            if (fruitx == px && fruity == py) {
                tail++;
                fruitx = Math.floor(Math.random()*qp)
                fruity = Math.floor(Math.random()*qp)
            }


            }

            cima.addEventListener('click', () => {
                vx = 0;
                vy = -vel;
            })

            baixo.addEventListener('click', () => {
                vx = 0;
                vy = vel;
            })
            
            direita.addEventListener('click', () => {
                vx = vel;
                vy = 0;
            })
            esquerda.addEventListener('click', () => {
                vx = -vel;
                vy = 0;
            })

            function keyPush(event) {
              
                switch (event.keyCode) {
                    case 37:  //esquerda
                        vx = -vel;
                        vy= 0;
                        break;
                    case 38:  //pra cima
                        vx = 0;
                        vy= -vel;
                        break;
                    case 39:  //direita
                        vx = vel;
                        vy= 0;
                        break;
                    case 40:  //pra baixo
                        vx = 0;
                        vy= vel;
                    default:
                        break;
                }

            }

        }