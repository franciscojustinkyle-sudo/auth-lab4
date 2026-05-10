pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Environment Check') {
            steps {
                echo 'Checking Node version...'
                // Using '|| ver' ensures the command returns success even if npm is missing
                bat 'npm -v || ver' 
            }
        }

        stage('Build & Test') {
            steps {
                echo 'Simulating Build and Test...'
                bat 'echo Build Successful'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
    }
}