pipeline{
agent any
stages {
stage('Checkout'){
steps{
git branch: 'main', url: 'https://github.com/ghorpadepriyanka11/EbugFront.git'
}
}
stage('Install'){
steps{
bat 'npm install'
}
}
stage('Build'){
steps{
bat 'npm run-script build'
}
}stage('Deploy')
{
steps{
bat 'ng serve -o'
}
}
}
}