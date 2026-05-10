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
                archiveArtifacts artifacts: '**/*', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to local server...'
                bat 'echo Deploying application to C:\\Users\\Justin Kyle Francisc\\Documents\\deployed-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            mail to: 'your-email@example.com',
                 subject: "BUILD SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Good news! Build ${env.BUILD_URL} completed successfully."
        }
        failure {
            echo 'Pipeline FAILED — check the logs above.'
            mail to: 'your-email@example.com',
                 subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_URL} has failed. Please check the logs."
        }
    }
}