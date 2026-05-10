pipeline {
    agent any

    environment {
        APP_NAME = 'auth-lab4'
        BUILD_DIR = '.next' 
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                echo 'Installing dependencies and building...'
                // Use 'call' so Jenkins continues to the next line
                bat 'call npm install'
                bat 'call npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo No tests specified, skipping...' 
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                // Using a simpler path for archiving to avoid depth issues
                archiveArtifacts artifacts: '.next/**', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline FAILED — check the Console Output for details.'
        }
    }
}