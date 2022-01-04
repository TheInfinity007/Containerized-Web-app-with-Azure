# Containerized-Web-app-with-Azure

##### Command to build the docker image in registry from the local code

Run the below command in the same directory as of Dockerfile
`
az acr build --file Dockerfile --registry myregistry --image myimage .
`

Reference: [Microsoft Learning](https://docs.microsoft.com/en-us/learn/modules/deploy-run-container-app-service/2-build-store-images)