# Vanilla-Framework-Blog-Cards

## Description
This is a set of article cards created using Canonical's Vanilla framework.

To run this application, you need the following installed on your machine:
- [Node.js](https://nodejs.org/) (which includes npm)
- [SASS](https://sass-lang.com/) (for compiling SASS/SCSS files)


### Installation
1. Clone the repository
   ```sh
   git clone https://github.com/jnovak79/vanilla-framework-blog-cards.git

2. Navigate to the project directory
    ```sh
    cd vanilla-framework-blog-cards

3. Install npm packages
    ```sh
    npm install

4. Create a new file called '.env' in the root directory of the project

5. Add the following variable names and your corresponding variables inside of the .env file
    ```plaintext
    SERVER_PORT=your_server_port
    API=your_API_url

*Note that if the application initially does not connect to the API, you may need to add https:// to the beginning of it.

### Running the application

1. In the terminal, type in the following command to bundle the files with webpack and build the CSS style sheet
    ```sh
    npm run client

2. Once this is done, run the following command to start up the server
    ```sh
    npm run server

3. Open up your browser and go to the address
    ```plaintext
     http://localhost:YOUR_PORT_NUMBER/

The application should now be running and viewable.
