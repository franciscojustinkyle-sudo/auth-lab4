pipeline {
    agent any

    environment {
        APP_NAME = 'auth-lab4'
        // For Next.js/Vite, the build output is usually 'out' or '.next' or 'dist'
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
                // Changed 'sh' to 'bat' for Windows compatibility
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Using 'bat' and ensuring it doesn't crash if tests aren't set up yet
                bat 'echo No tests specified, skipping...' 
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                // Adjusted path for web projects; allowEmptyArchive avoids failure if folder is missing
                archiveArtifacts artifacts: '**/.next/**', allowEmptyArchive: true
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