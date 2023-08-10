# Run the Project
To run the projet you must have Docker and docker-compose on your machine.  
Inside project folder run ```$ docker-compose up -d```  
Maybe you need to stop api service in first execution ```$ docker-compose stop api``` after run ```$ docker-compose start api```  
Before any request to the api you need to run the database migrations.  
Inside the project folder ```$ cd backend``` then run ```$ npx prisma migrate deploy```  
After all these steps you can run the aplication navigating to http://localhost:8080  
