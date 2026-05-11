pipeline {
    agent any
    stages {
        // ... (Keep your Checkout, Build, and Deploy stages the same)
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            // DELETE or COMMENT OUT the mail block below:
            /*
            mail to: 'your-email@example.com',
                 subject: "BUILD SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_URL} completed successfully."
            */
        }
        failure {
            echo 'Pipeline FAILED — check the logs.'
        }
    }
}