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
                bat 'npm -v || ver' 
            }
        }

        stage('Build & Test') {
            steps {
                echo 'Simulating Build and Test...'
                bat 'echo Build Successful'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                // This saves your files in Jenkins so you can download them later
                archiveArtifacts artifacts: '**/*', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to local server...'
                // Using 'bat' for Windows compatibility instead of 'sh'
                bat 'echo Deploying application to C:\\Users\\Justin Kyle Francisc\\Documents\\deployed-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline FAILED — check the logs above.'
        }
    }
}