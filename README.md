## Description 

First, run the development server:

## run dev

1. Git clone repository
2. Create a copy of ```.env.template``` and rename to ```.env``` and change the enviroment variable
3. Install dependencies ```npm i```
4. Stand up the data base ```docker compose up -d```
5. Run the migrations of prisma ```npx prisma migrate dev ```
6. Ejecuted seed ```npm run seed```
7. Run of proyect ```npm run dev```


## run production