// Build Version: 1
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
// Build Version: 2
        stage('Environment Check') {
            steps {
                echo 'Checking Node version...'
                bat 'npm -v || ver' 
            }
        }
// Build Version: 3
        stage('Build & Test') {
            steps {
                echo 'Simulating Build and Test...'
                bat 'echo Build Successful'
            }
        }
// Build Version: 4
        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: '**/*', allowEmptyArchive: true
            }
        }
// v5
        stage('Deploy') {
            steps {
                echo 'Deploying to local server...'
                bat 'echo Deploying application to C:\\Users\\Justin Kyle Francisc\\Documents\\deployed-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Handshake with GitHub is now active.'
        }
        failure {
            echo 'Pipeline FAILED — check the syntax or logs.'
        }
    }
}